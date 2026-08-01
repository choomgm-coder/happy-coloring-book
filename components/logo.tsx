import Link from "next/link";

export function Logo() {
  return <Link href="/" className="flex items-center gap-2 text-forest-900" aria-label="Happy Coloring Book home"><span className="grid h-10 w-10 place-items-center rounded-xl bg-forest-600 text-xl shadow-sm">📖</span><span className="leading-tight"><span className="block text-lg font-black">Happy</span><span className="block text-xs font-extrabold text-forest-600">Coloring Book ✏️</span></span></Link>;
}
