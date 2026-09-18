import { useState, type FormEvent } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Check, ImagePlus, LogOut, Pencil, Plus, Trash2, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { categories } from "@/config/clinic";
import { useCatalog } from "@/lib/catalog-context";
import type { CatalogJewelry, CatalogProcedure } from "@/lib/catalog.types";
import {
  deleteJewelry,
  deleteProcedure,
  getAdminSession,
  loginAdmin,
  logoutAdmin,
  saveJewelry,
  saveProcedure,
  uploadCatalogImage,
} from "@/lib/admin.functions";

const title = "Administração — Studio Luciana Leitte";
const description = "Área reservada para administrar os catálogos do Studio Luciana Leitte.";

export const Route = createFileRoute("/admin")({
  loader: () => getAdminSession(),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const initial = Route.useLoaderData();
  const [authenticated, setAuthenticated] = useState(initial.authenticated);
  if (!authenticated) return <AdminLogin onSuccess={() => setAuthenticated(true)} />;
  return <AdminPanel onLogout={() => setAuthenticated(false)} />;
}

function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
  const login = useServerFn(loginAdmin);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const result = await login({ data: { username, password } });
      if (!result.ok) setError("Usuário ou senha incorretos.");
      else onSuccess();
    } catch {
      setError("Não foi possível entrar. Tente novamente.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="mx-auto flex min-h-[65vh] max-w-md items-center px-4 py-16">
      <form onSubmit={submit} className="card-soft w-full p-6 md:p-8">
        <p className="text-xs tracking-[0.2em] text-primary uppercase">Área reservada</p>
        <h1 className="mt-2 text-3xl">Administração</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Entre para editar procedimentos e bijuterias.
        </p>
        <label className="mt-6 block text-sm font-medium">
          Usuário
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary"
          />
        </label>
        <label className="mt-4 block text-sm font-medium">
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-primary"
          />
        </label>
        {error && (
          <p role="alert" className="mt-4 text-sm text-destructive">
            {error}
          </p>
        )}
        <button
          disabled={busy}
          className="mt-6 w-full rounded-full bg-rose-gradient px-5 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
        >
          {busy ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </section>
  );
}

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const router = useRouter();
  const logout = useServerFn(logoutAdmin);
  const { procedures, jewelry } = useCatalog();
  const [tab, setTab] = useState<"procedures" | "jewelry">("procedures");
  const [procedure, setProcedure] = useState<CatalogProcedure | null>(null);
  const [jewel, setJewel] = useState<CatalogJewelry | null>(null);

  async function refresh() {
    await router.invalidate();
    setProcedure(null);
    setJewel(null);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.2em] text-primary uppercase">Área reservada</p>
          <h1 className="mt-1 text-3xl md:text-4xl">Gerenciar catálogos</h1>
        </div>
        <button
          onClick={async () => {
            await logout();
            onLogout();
          }}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm"
        >
          <LogOut className="size-4" /> Sair
        </button>
      </div>
      <div className="mt-8 flex gap-2 border-b border-border">
        <Tab active={tab === "procedures"} onClick={() => setTab("procedures")}>
          Procedimentos ({procedures.length})
        </Tab>
        <Tab active={tab === "jewelry"} onClick={() => setTab("jewelry")}>
          Bijuterias ({jewelry.length})
        </Tab>
      </div>

      {tab === "procedures" ? (
        <div className="mt-6">
          <button
            onClick={() => setProcedure(emptyProcedure(procedures.length))}
            className="inline-flex items-center gap-2 rounded-full bg-rose-gradient px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            <Plus className="size-4" /> Novo procedimento
          </button>
          <div className="mt-6 grid gap-3">
            {procedures.map((item) => (
              <AdminRow
                key={item.dbId}
                image={item.image}
                title={item.name}
                subtitle={`${item.duration} · ${item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}
                onEdit={() => setProcedure(item)}
              />
            ))}
          </div>
          {procedure && (
            <ProcedureEditor
              value={procedure}
              onClose={() => setProcedure(null)}
              onSaved={refresh}
            />
          )}
        </div>
      ) : (
        <div className="mt-6">
          <button
            onClick={() => setJewel(emptyJewelry(jewelry.length))}
            className="inline-flex items-center gap-2 rounded-full bg-rose-gradient px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            <Plus className="size-4" /> Nova bijuteria
          </button>
          <div className="mt-6 grid gap-3">
            {jewelry.map((item) => (
              <AdminRow
                key={item.id}
                image={item.image}
                title={item.name}
                subtitle={item.description}
                onEdit={() => setJewel(item)}
              />
            ))}
          </div>
          {jewel && (
            <JewelryEditor value={jewel} onClose={() => setJewel(null)} onSaved={refresh} />
          )}
        </div>
      )}
    </section>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`border-b-2 px-3 py-3 text-sm font-medium ${active ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}
    >
      {children}
    </button>
  );
}

function AdminRow({
  image,
  title,
  subtitle,
  onEdit,
}: {
  image: string;
  title: string;
  subtitle: string;
  onEdit: () => void;
}) {
  return (
    <article className="flex items-center gap-4 rounded-xl border border-border bg-card p-3">
      <img src={image} alt="" className="size-16 shrink-0 rounded-lg object-cover" />
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-lg">{title}</h2>
        <p className="line-clamp-2 text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <button
        onClick={onEdit}
        aria-label={`Editar ${title}`}
        className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-primary"
      >
        <Pencil className="size-4" />
      </button>
    </article>
  );
}

function EditorShell({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-foreground/60 p-3 backdrop-blur-sm md:p-8">
      <div className="mx-auto max-w-2xl rounded-2xl bg-card p-5 shadow-card md:p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="grid size-10 place-items-center rounded-full border border-border"
          >
            <X className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ImageField({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const upload = useServerFn(uploadCatalogImage);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function select(file?: File) {
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      const result = await upload({
        data: {
          name: file.name,
          type: file.type as "image/jpeg" | "image/png" | "image/webp",
          base64,
        },
      });
      onChange(result.url);
    } catch {
      setError("Não foi possível enviar esta foto. Use JPG, PNG ou WebP de até 10 MB.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <div>
      <span className="text-sm font-medium">Foto</span>
      <div className="mt-2 flex items-center gap-4">
        {value ? (
          <img src={value} alt="Prévia" className="size-24 rounded-xl object-cover" />
        ) : (
          <div className="grid size-24 place-items-center rounded-xl border border-dashed border-border">
            <ImagePlus className="size-5 text-muted-foreground" />
          </div>
        )}
        <label className="cursor-pointer rounded-full border border-primary/30 px-4 py-2.5 text-sm text-primary">
          {busy ? "Enviando..." : "Escolher foto"}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            disabled={busy}
            onChange={(e) => void select(e.target.files?.[0])}
            className="sr-only"
          />
        </label>
      </div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

const field =
  "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";

function ProcedureEditor({
  value,
  onClose,
  onSaved,
}: {
  value: CatalogProcedure;
  onClose: () => void;
  onSaved: () => Promise<void>;
}) {
  const save = useServerFn(saveProcedure);
  const remove = useServerFn(deleteProcedure);
  const [form, setForm] = useState(value);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const update = <K extends keyof CatalogProcedure>(key: K, val: CatalogProcedure[K]) =>
    setForm((old) => ({ ...old, [key]: val }));
  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      await save({
        data: {
          id: form.dbId || undefined,
          slug: form.id,
          name: form.name,
          category: form.category,
          shortDescription: form.shortDescription,
          description: form.description,
          benefits: form.benefits,
          duration: form.duration,
          price: form.price,
          image: form.image,
          featured: Boolean(form.featured),
          sortOrder: form.sortOrder,
        },
      });
      await onSaved();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Não foi possível salvar.");
    } finally {
      setBusy(false);
    }
  }
  async function destroy() {
    if (!form.dbId || !confirm(`Remover ${form.name}?`)) return;
    setBusy(true);
    try {
      await remove({ data: { id: form.dbId } });
      await onSaved();
    } catch {
      setMessage("Não foi possível remover.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <EditorShell title={form.dbId ? "Editar procedimento" : "Novo procedimento"} onClose={onClose}>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <ImageField value={form.image} onChange={(v) => update("image", v)} />
        <Text label="Nome" value={form.name} onChange={(v) => update("name", v)} />
        <Text
          label="Endereço da página"
          value={form.id}
          onChange={(v) =>
            update(
              "id",
              v
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, ""),
            )
          }
        />
        <label className="block text-sm font-medium">
          Categoria
          <select
            value={form.category}
            onChange={(e) => update("category", e.target.value as CatalogProcedure["category"])}
            className={field}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <Text label="Duração" value={form.duration} onChange={(v) => update("duration", v)} />
          <label className="block text-sm font-medium">
            Preço
            <input
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={(e) => update("price", Number(e.target.value))}
              className={field}
              required
            />
          </label>
        </div>
        <Area
          label="Descrição curta"
          value={form.shortDescription}
          onChange={(v) => update("shortDescription", v)}
        />
        <Area
          label="Detalhes"
          value={form.description}
          onChange={(v) => update("description", v)}
          rows={5}
        />
        <Area
          label="Benefícios (um por linha)"
          value={form.benefits.join("\n")}
          onChange={(v) =>
            update(
              "benefits",
              v
                .split("\n")
                .map((x) => x.trim())
                .filter(Boolean),
            )
          }
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            Ordem
            <input
              type="number"
              min="0"
              value={form.sortOrder}
              onChange={(e) => update("sortOrder", Number(e.target.value))}
              className={field}
            />
          </label>
          <label className="flex items-center gap-3 pt-7 text-sm font-medium">
            <input
              type="checkbox"
              checked={Boolean(form.featured)}
              onChange={(e) => update("featured", e.target.checked)}
              className="size-4 accent-primary"
            />{" "}
            Mostrar nos destaques
          </label>
        </div>
        {message && (
          <p role="alert" className="text-sm text-destructive">
            {message}
          </p>
        )}
        <div className="flex flex-wrap justify-between gap-3 border-t border-border pt-5">
          {form.dbId ? (
            <button
              type="button"
              onClick={() => void destroy()}
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-full border border-destructive/30 px-5 py-3 text-sm text-destructive"
            >
              <Trash2 className="size-4" /> Excluir
            </button>
          ) : (
            <span />
          )}
          <button
            disabled={busy || !form.image}
            className="inline-flex items-center gap-2 rounded-full bg-rose-gradient px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
          >
            <Check className="size-4" /> {busy ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </EditorShell>
  );
}

function JewelryEditor({
  value,
  onClose,
  onSaved,
}: {
  value: CatalogJewelry;
  onClose: () => void;
  onSaved: () => Promise<void>;
}) {
  const save = useServerFn(saveJewelry);
  const remove = useServerFn(deleteJewelry);
  const [form, setForm] = useState(value);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      await save({
        data: {
          id: form.id || undefined,
          name: form.name,
          description: form.description,
          image: form.image,
          sortOrder: form.sortOrder,
        },
      });
      await onSaved();
    } catch {
      setMessage("Não foi possível salvar.");
    } finally {
      setBusy(false);
    }
  }
  async function destroy() {
    if (!form.id || !confirm(`Remover ${form.name}?`)) return;
    setBusy(true);
    try {
      await remove({ data: { id: form.id } });
      await onSaved();
    } catch {
      setMessage("Não foi possível remover.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <EditorShell title={form.id ? "Editar bijuteria" : "Nova bijuteria"} onClose={onClose}>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <ImageField value={form.image} onChange={(image) => setForm({ ...form, image })} />
        <Text label="Nome" value={form.name} onChange={(name) => setForm({ ...form, name })} />
        <Area
          label="Descrição"
          value={form.description}
          onChange={(description) => setForm({ ...form, description })}
          rows={5}
        />
        <label className="block text-sm font-medium">
          Ordem
          <input
            type="number"
            min="0"
            value={form.sortOrder}
            onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
            className={field}
          />
        </label>
        {message && (
          <p role="alert" className="text-sm text-destructive">
            {message}
          </p>
        )}
        <div className="flex flex-wrap justify-between gap-3 border-t border-border pt-5">
          {form.id ? (
            <button
              type="button"
              onClick={() => void destroy()}
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-full border border-destructive/30 px-5 py-3 text-sm text-destructive"
            >
              <Trash2 className="size-4" /> Excluir
            </button>
          ) : (
            <span />
          )}
          <button
            disabled={busy || !form.image}
            className="inline-flex items-center gap-2 rounded-full bg-rose-gradient px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
          >
            <Check className="size-4" /> {busy ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </EditorShell>
  );
}

function Text({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} className={field} required />
    </label>
  );
}
function Area({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={field}
        required
      />
    </label>
  );
}
function emptyProcedure(order: number): CatalogProcedure {
  return {
    dbId: "",
    id: "",
    name: "",
    category: "cilios",
    shortDescription: "",
    description: "",
    benefits: [],
    duration: "",
    price: 0,
    image: "",
    featured: false,
    sortOrder: order * 10,
  };
}
function emptyJewelry(order: number): CatalogJewelry {
  return { id: "", name: "", description: "", image: "", sortOrder: order * 10 };
}
