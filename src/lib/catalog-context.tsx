import { createContext, useContext, type ReactNode } from "react";
import type { CatalogData } from "@/lib/catalog.types";

const CatalogContext = createContext<CatalogData | null>(null);

export function CatalogProvider({ data, children }: { data: CatalogData; children: ReactNode }) {
  return <CatalogContext.Provider value={data}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  const value = useContext(CatalogContext);
  if (!value) throw new Error("useCatalog precisa estar dentro de CatalogProvider");
  return value;
}
