import type { Metadata } from "next";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/data/books";
export const metadata: Metadata = { title: "หมวดหมู่หนังสือ" };
export default function CategoriesPage() { return <section className="container-page py-16 sm:py-20"><p className="font-bold text-forest-600">หาเรื่องที่ใช่</p><h1 className="section-title mt-1">ทุกหมวดหมู่</h1><p className="mt-3 max-w-2xl text-slate-600">เลือกโลกแห่งการระบายสีที่เด็ก ๆ ชอบ แล้วเริ่มต้นช่วงเวลาแห่งความสร้างสรรค์</p><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div></section>; }
