import { useEffect, useState } from "react";

/**
 * Mostra "Aberto" ou "Fechado" conforme o horário de Brasília.
 * Horário de funcionamento: segunda a sábado, 9:00 às 18:00 (domingo fechado).
 * Para alterar, edite OPEN_HOUR / CLOSE_HOUR e OPEN_DAYS abaixo.
 */
const OPEN_HOUR = 9;
const CLOSE_HOUR = 18;
const OPEN_DAYS = [1, 2, 3, 4, 5, 6]; // 0 = domingo

function isOpenNow() {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekdayMap: Record<string, number> = {
    dom: 0,
    seg: 1,
    ter: 2,
    qua: 3,
    qui: 4,
    sex: 5,
    sáb: 6,
    sab: 6,
  };
  const day = weekdayMap[get("weekday").toLowerCase().replace(".", "").slice(0, 3)] ?? -1;
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const minutes = hour * 60 + minute;

  return (
    OPEN_DAYS.includes(day) && minutes >= OPEN_HOUR * 60 && minutes < CLOSE_HOUR * 60
  );
}

export function OpenStatus({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenNow());
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[0.8rem] font-semibold tracking-wide ${
        open ? "text-whatsapp" : "text-destructive"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`size-2 rounded-full ${open ? "bg-whatsapp" : "bg-destructive"}`}
      />
      {open ? "Aberto" : "Fechado"}
    </span>
  );
}
