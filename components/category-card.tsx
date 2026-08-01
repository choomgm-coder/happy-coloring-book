import Link from "next/link";
import type { Category } from "@/data/books";

export function CategoryCard({ category }: { category: Category }) { return <Link href={`/categories/${category.slug}`} className="group rounded-3xl bg-white p-6 shadow-soft transition hover:-translate-y-1"><div className={`mb-5 grid h-16 w-16 place-items-center rounded-2xl text-3xl ${category.color}`}>{category.emoji}</div><h3 className="text-xl font-black text-forest-900">{category.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p><span className="mt-4 inline-block font-bold text-forest-600">เลือกดู →</span></Link>; }
