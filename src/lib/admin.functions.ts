import { createHash, timingSafeEqual } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { z } from "zod";

const sessionConfig = {
  password: process.env["SESSION_SECRET"]!,
  name: "studio-admin",
  maxAge: 60 * 60 * 12,
  cookie: { httpOnly: true, secure: true, sameSite: "lax" as const, path: "/" },
};

type AdminSession = { authenticated?: boolean };

function safeMatch(value: string, expected: string) {
  const left = createHash("sha256").update(value, "utf8").digest();
  const right = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(left, right);
}

async function requireAdmin() {
  const session = await useSession<AdminSession>(sessionConfig);
  if (!session.data.authenticated) throw new Error("Acesso não autorizado.");
}

export const getAdminSession = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig);
  return { authenticated: session.data.authenticated === true };
});

export const loginAdmin = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({ username: z.string().min(1).max(100), password: z.string().min(1).max(200) }).parse(input),
  )
  .handler(async ({ data }) => {
    const username = process.env["ADMIN_USERNAME"];
    const password = process.env["ADMIN_PASSWORD"];
    if (!username || !password) throw new Error("Acesso administrativo não configurado.");
    if (!safeMatch(data.username.trim(), username) || !safeMatch(data.password, password)) {
      return { ok: false as const };
    }
    const session = await useSession<AdminSession>(sessionConfig);
    await session.update({ authenticated: true });
    return { ok: true as const };
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig);
  await session.clear();
  return { ok: true as const };
});

const procedureSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().trim().min(1).max(160).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().trim().min(1).max(160),
  category: z.string().trim().min(1).max(80),
  shortDescription: z.string().trim().min(1).max(500),
  description: z.string().trim().min(1).max(5000),
  benefits: z.array(z.string().trim().min(1).max(300)).max(20),
  duration: z.string().trim().min(1).max(80),
  price: z.number().finite().min(0).max(1000000),
  image: z.string().trim().min(1).max(2048),
  featured: z.boolean(),
  sortOrder: z.number().int().min(0).max(100000),
});

const jewelrySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(3000),
  image: z.string().trim().min(1).max(2048),
  sortOrder: z.number().int().min(0).max(100000),
});

export const saveProcedure = createServerFn({ method: "POST" })
  .inputValidator((input) => procedureSchema.parse(input))
  .handler(async ({ data }) => {
    await requireAdmin();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const payload = {
      slug: data.slug,
      name: data.name,
      category: data.category,
      short_description: data.shortDescription,
      description: data.description,
      benefits: data.benefits,
      duration: data.duration,
      price: data.price,
      image: data.image,
      featured: data.featured,
      sort_order: data.sortOrder,
    };
    const query = data.id
      ? supabaseAdmin.from("procedures").update(payload).eq("id", data.id)
      : supabaseAdmin.from("procedures").insert(payload);
    const { error } = await query;
    if (error) {
      console.error("Save procedure failed", error);
      throw new Error(error.code === "23505" ? "Já existe um procedimento com esse endereço." : "Não foi possível salvar.");
    }
    return { ok: true as const };
  });

export const deleteProcedure = createServerFn({ method: "POST" })
  .inputValidator((input) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    await requireAdmin();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("procedures").delete().eq("id", data.id);
    if (error) throw new Error("Não foi possível remover o procedimento.");
    return { ok: true as const };
  });

export const saveJewelry = createServerFn({ method: "POST" })
  .inputValidator((input) => jewelrySchema.parse(input))
  .handler(async ({ data }) => {
    await requireAdmin();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const payload = { name: data.name, description: data.description, image: data.image, sort_order: data.sortOrder };
    const query = data.id
      ? supabaseAdmin.from("jewelry").update(payload).eq("id", data.id)
      : supabaseAdmin.from("jewelry").insert(payload);
    const { error } = await query;
    if (error) throw new Error("Não foi possível salvar a bijuteria.");
    return { ok: true as const };
  });

export const deleteJewelry = createServerFn({ method: "POST" })
  .inputValidator((input) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    await requireAdmin();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("jewelry").delete().eq("id", data.id);
    if (error) throw new Error("Não foi possível remover a bijuteria.");
    return { ok: true as const };
  });

export const uploadCatalogImage = createServerFn({ method: "POST" })
  .inputValidator((input) =>
    z.object({
      name: z.string().min(1).max(200),
      type: z.enum(["image/jpeg", "image/png", "image/webp"]),
      base64: z.string().min(1).max(14_000_000),
    }).parse(input),
  )
  .handler(async ({ data }) => {
    await requireAdmin();
    const raw = data.base64.includes(",") ? data.base64.split(",").pop() ?? "" : data.base64;
    const bytes = Buffer.from(raw, "base64");
    if (bytes.byteLength > 10 * 1024 * 1024) throw new Error("A foto deve ter no máximo 10 MB.");
    const extension = data.type === "image/png" ? "png" : data.type === "image/webp" ? "webp" : "jpg";
    const path = `catalog/${crypto.randomUUID()}.${extension}`;
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.storage.from("catalog-images").upload(path, bytes, {
      contentType: data.type,
      upsert: false,
    });
    if (error) throw new Error("Não foi possível enviar a foto.");
    return { url: `/api/public/catalog-image/${path}` };
  });
