import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/catalog-image")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const path = new URL(request.url).searchParams.get("path") ?? "";
        if (!/^catalog-[0-9a-f-]+\.(?:jpg|png|webp)$/.test(path)) {
          return new Response("Imagem inválida", { status: 400 });
        }
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin.storage.from("catalog-images").download(path);
        if (error || !data) return new Response("Imagem não encontrada", { status: 404 });
        return new Response(data, {
          headers: {
            "content-type": data.type || "application/octet-stream",
            "cache-control": "public, max-age=31536000, immutable",
            "x-content-type-options": "nosniff",
          },
        });
      },
    },
  },
});
