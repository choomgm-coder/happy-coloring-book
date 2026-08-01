import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookCard } from "@/components/book-card";
import { books, getCategory } from "@/data/books";
export function generateStaticParams() { return ["animals", "nature", "vehicles", "fantasy"].map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const category = getCategory(slug); return { title: category?.name ?? "ไม่พบหมวดหมู่" }; }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = getCategory(slug); if (!category) notFound(); const categoryBooks = books.filter((book) => book.category === slug); return <section className="container-page py-16"><div className={`rounded-3xl p-8 ${category.color}`}><span className="text-5xl">{category.emoji}</span><h1 className="mt-3 text-4xl font-black text-forest-900">{category.name}</h1><p className="mt-2 text-slate-600">{category.description}</p></div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{categoryBooks.map((book) => <BookCard key={book.slug} book={book} />)}</div></section>; }
