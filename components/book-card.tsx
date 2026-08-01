import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

export function BookCard({ book }: { book: Book }) { return <Link href={`/books/${book.slug}`} className="group overflow-hidden rounded-3xl bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg"><div className="relative aspect-[4/3] overflow-hidden bg-forest-100"><Image src={book.cover} alt={`หน้าปก ${book.title}`} fill className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="mb-2 text-sm font-extrabold text-forest-600">{book.ages} · {book.pages} หน้า</p><h3 className="text-xl font-black text-forest-900">{book.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{book.description}</p><span className="mt-4 inline-block text-sm font-black text-forest-700">ดูรายละเอียด →</span></div></Link>; }
