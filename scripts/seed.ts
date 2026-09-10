import { procedures, jewelry } from "../src/config/clinic";
const q = (s: string) => "'" + String(s).replace(/'/g, "''") + "'";
const arr = (a: string[]) => "ARRAY[" + a.map(q).join(",") + "]::text[]";
let sql = "";
procedures.forEach((p, i) => {
  sql += `INSERT INTO public.procedures (slug,name,category,short_description,description,benefits,duration,price,image,featured,sort_order) VALUES (${q(p.id)},${q(p.name)},${q(p.category)},${q(p.shortDescription)},${q(p.description)},${arr(p.benefits)},${q(p.duration)},${p.price},${q(p.image)},${p.featured ? "true" : "false"},${i * 10});\n`;
});
jewelry.forEach((j: any, i: number) => {
  sql += `INSERT INTO public.jewelry (name,description,image,sort_order) VALUES (${q(j.name)},${q(j.description)},${q(j.image)},${i * 10});\n`;
});
console.log(sql);
