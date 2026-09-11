import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import type { CatalogData, CatalogJewelry, CatalogProcedure } from "@/lib/catalog.types";
import type { CategoryId } from "@/config/clinic";

function publicClient() {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"];
  if (!url || !key) throw new Error("Catálogo indisponível no momento.");
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

function mapProcedure(row: Database["public"]["Tables"]["procedures"]["Row"]): CatalogProcedure {
  return {
    id: row.slug,
    name: row.name,
    category: row.category as CategoryId,
    shortDescription: row.short_description,
    description: row.description,
    benefits: row.benefits,
    duration: row.duration,
    price: Number(row.price),
    image: row.image,
    featured: row.featured,
    sortOrder: row.sort_order,
  };
}

function mapJewelry(row: Database["public"]["Tables"]["jewelry"]["Row"]): CatalogJewelry {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    image: row.image,
    sortOrder: row.sort_order,
  };
}

export const getCatalogData = createServerFn({ method: "GET" }).handler(async (): Promise<CatalogData> => {
  const client = publicClient();
  const [proceduresResult, jewelryResult] = await Promise.all([
    client.from("procedures").select("*").order("sort_order").order("created_at"),
    client.from("jewelry").select("*").order("sort_order").order("created_at"),
  ]);
  if (proceduresResult.error || jewelryResult.error) {
    console.error("Catalog read failed", proceduresResult.error ?? jewelryResult.error);
    throw new Error("Não foi possível carregar o catálogo.");
  }
  return {
    procedures: (proceduresResult.data ?? []).map(mapProcedure),
    jewelry: (jewelryResult.data ?? []).map(mapJewelry),
  };
});

export const getProcedureBySlug = createServerFn({ method: "GET" })
  .inputValidator((input) => z.object({ slug: z.string().min(1).max(160) }).parse(input))
  .handler(async ({ data }): Promise<CatalogProcedure | null> => {
    const { data: row, error } = await publicClient()
      .from("procedures")
      .select("*")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) {
      console.error("Procedure read failed", error);
      throw new Error("Não foi possível carregar o procedimento.");
    }
    return row ? mapProcedure(row) : null;
  });
