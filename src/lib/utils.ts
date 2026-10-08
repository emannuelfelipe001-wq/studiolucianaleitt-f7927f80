import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { projectAssetUrls } from "./asset-urls";

export function resolveAssetUrl(url: string | undefined | null) {
  if (!url) return "";

  // Legacy catalog rows contain the former published hostname. Assets belong
  // to this project and must follow its current preview or published origin.
  try {
    const parsed = new URL(url, "https://project.invalid");
    const isProjectOrigin =
      parsed.hostname === "project.invalid" || parsed.hostname.endsWith(".lovable.app");
    if (isProjectOrigin && parsed.pathname.startsWith("/__l5e/assets-v1/")) {
      const filename = decodeURIComponent(parsed.pathname.split("/").pop() ?? "");
      return projectAssetUrls[filename] ?? `${parsed.pathname}${parsed.search}`;
    }
  } catch {
    // Relative project assets already resolve against the current origin.
  }

  // Preserve absolute URLs and normal local/public paths.
  return url;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Converte uma string de duração como "1h 20min" ou "45min" em minutos. */
export function parseDuration(value: string): number {
  const hours = /(\d+)\s*h/.exec(value);
  const minutes = /(\d+)\s*min/.exec(value);
  return (hours ? Number(hours[1]) * 60 : 0) + (minutes ? Number(minutes[1]) : 0);
}

/** Formata minutos totais em "1h 20min", "2h" ou "45min". */
export function formatDuration(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const min = totalMinutes % 60;
  if (h > 0 && min > 0) return `${h}h ${min}min`;
  if (h > 0) return `${h}h`;
  return `${min}min`;
}
