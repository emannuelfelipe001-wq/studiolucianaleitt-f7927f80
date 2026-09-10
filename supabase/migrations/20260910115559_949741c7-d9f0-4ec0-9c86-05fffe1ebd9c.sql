CREATE TABLE public.procedures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  category text NOT NULL,
  short_description text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  benefits text[] NOT NULL DEFAULT '{}',
  duration text NOT NULL DEFAULT '',
  price numeric(10,2) NOT NULL DEFAULT 0,
  image text NOT NULL DEFAULT '',
  featured boolean NOT NULL DEFAULT false,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.jewelry (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  image text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.procedures TO anon, authenticated;
GRANT SELECT ON public.jewelry TO anon, authenticated;
GRANT ALL ON public.procedures TO service_role;
GRANT ALL ON public.jewelry TO service_role;
ALTER TABLE public.procedures ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jewelry ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Procedimentos visiveis para todos" ON public.procedures FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Bijuterias visiveis para todos" ON public.jewelry FOR SELECT TO anon, authenticated USING (true);
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;
CREATE TRIGGER procedures_updated_at BEFORE UPDATE ON public.procedures FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER jewelry_updated_at BEFORE UPDATE ON public.jewelry FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();