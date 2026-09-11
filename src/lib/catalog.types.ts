import type { CategoryId } from "@/config/clinic";

export type CatalogProcedure = {
  id: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  description: string;
  benefits: string[];
  duration: string;
  price: number;
  image: string;
  featured?: boolean;
  sortOrder: number;
};

export type CatalogJewelry = {
  id: string;
  name: string;
  description: string;
  image: string;
  sortOrder: number;
};

export type CatalogData = {
  procedures: CatalogProcedure[];
  jewelry: CatalogJewelry[];
};
