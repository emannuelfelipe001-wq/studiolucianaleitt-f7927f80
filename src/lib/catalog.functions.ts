import { resolveAssetUrl } from "./utils";
import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import type { CatalogData, CatalogJewelry, CatalogProcedure } from "@/lib/catalog.types";
import {
  categories,
  jewelry as localJewelry,
  procedures as localProcedures,
  type CategoryId,
} from "@/config/clinic";

function publicClient() {
  const env = typeof process !== "undefined" ? process.env : {};
  const url = env["SUPABASE_URL"];
  const key = env["SUPABASE_PUBLISHABLE_KEY"] ?? env["SUPABASE_ANON_KEY"];
  if (!url || !key) throw new Error("Supabase não configurado.");
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
    dbId: row.id,
    id: row.slug,
    name: row.name,
    category: row.category as CategoryId,
    shortDescription: row.short_description,
    description: row.description,
    benefits: row.benefits,
    duration: row.duration,
    price: Number(row.price),
    image: resolveAssetUrl(row.image),
    featured: row.featured,
    sortOrder: row.sort_order,
  };
}

function mapJewelry(row: Database["public"]["Tables"]["jewelry"]["Row"]): CatalogJewelry {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    image: resolveAssetUrl(row.image),
    sortOrder: row.sort_order,
  };
}

function getLocalCatalogData(): CatalogData {
  const validCategories = new Set<string>(categories.map((category) => category.id));

  return {
    procedures: localProcedures.map((procedure, index) => ({
      dbId: `local-${procedure.id}`,
      id: procedure.id,
      name: procedure.name,
      category: validCategories.has(procedure.category) ? procedure.category : "cilios",
      shortDescription: procedure.shortDescription,
      description: procedure.description,
      benefits: procedure.benefits,
      duration: procedure.duration,
      price: procedure.price,
      image: procedure.image,
      featured: Boolean(procedure.featured),
      sortOrder: index,
    })),
    jewelry: localJewelry.map((item, index) => ({
      id: `local-jewelry-${index + 1}`,
      name: item.name,
      description: item.description,
      image: item.image,
      sortOrder: index,
    })),
  };
}

export const getCatalogData = createServerFn({ method: "GET" }).handler(
  async (): Promise<CatalogData> => {
    try {
      const client = publicClient();
      const [proceduresResult, jewelryResult] = await Promise.all([
        client.from("procedures").select("*").order("sort_order").order("created_at"),
        client.from("jewelry").select("*").order("sort_order").order("created_at"),
      ]);

      if (proceduresResult.error || jewelryResult.error) {
        console.error(
          "Catalog read failed; using local catalog fallback.",
          proceduresResult.error ?? jewelryResult.error,
        );
        return getLocalCatalogData();
      }

      return {
        procedures: (proceduresResult.data ?? []).map(mapProcedure),
        jewelry: (jewelryResult.data ?? []).map(mapJewelry),
      };
    } catch (error) {
      console.error("Catalog initialization failed; using local catalog fallback.", error);
      return getLocalCatalogData();
    }
  },
);

export const getProcedureBySlug = createServerFn({ method: "GET" })
  .inputValidator((input) => z.object({ slug: z.string().min(1).max(160) }).parse(input))
  .handler(async ({ data }): Promise<CatalogProcedure | null> => {
    try {
      const { data: row, error } = await publicClient()
        .from("procedures")
        .select("*")
        .eq("slug", data.slug)
        .maybeSingle();

      if (error) {
        console.error("Procedure read failed; using local catalog fallback.", error);
        return (
          getLocalCatalogData().procedures.find((procedure) => procedure.id === data.slug) ?? null
        );
      }

      return row ? mapProcedure(row) : null;
    } catch (error) {
      console.error("Procedure initialization failed; using local catalog fallback.", error);
      return (
        getLocalCatalogData().procedures.find((procedure) => procedure.id === data.slug) ?? null
      );
    }
  });
