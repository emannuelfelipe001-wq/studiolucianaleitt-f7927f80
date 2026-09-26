import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function resolveAssetUrl(url: string | undefined | null) {
  if (!url) return "";

  // Lovable asset references are intentionally relative. Keeping the
  // /__l5e/... path on the current origin makes the images work on the
  // Lovable preview, published domain, and any custom domain instead of
  // depending on an old hard-coded lovable.app hostname.
  if (url.startsWith("/__l5e/")) {
    return url;
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
