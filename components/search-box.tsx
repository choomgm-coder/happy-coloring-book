"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function SearchBox({ initialValue = "" }: { initialValue?: string }) {
  const [query, setQuery] = useState(initialValue);
  const router = useRouter();
  function submit(event: FormEvent) { event.preventDefault(); router.push(`/search?q=${encodeURIComponent(query)}`); }
  return <form onSubmit={submit} className="flex w-full max-w-2xl rounded-2xl bg-white p-2 shadow-soft"><label className="sr-only" htmlFor="search">ค้นหาหนังสือ</label><input id="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ลองค้นหา เช่น สัตว์, ดอกไม้, ยูนิคอร์น..." className="min-w-0 flex-1 rounded-xl px-4 py-3 outline-none placeholder:text-slate-400" /><button className="button-primary px-5" type="submit">ค้นหา</button></form>;
}
