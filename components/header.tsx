import Link from "next/link";
import { Logo } from "./logo";

const links = [{ href: "/", label: "หน้าแรก" }, { href: "/Products", label: "สินค้า" }, { href: "/categories", label: "หมวดหมู่" }, { href: "/search", label: "ค้นหาหนังสือ" } , { href: "/search", label: "เกี่ยวกับ" }, { href: "/search", label: "ติดต่อ" }];
export function Header() { return <header className="sticky top-0 z-40 border-b border-forest-100/80 bg-white/95 backdrop-blur"><nav className="container-page flex h-20 items-center justify-between gap-4"><Logo /><div className="flex items-center gap-1 sm:gap-5">{links.map((link) => <Link key={link.href} href={link.href} className="rounded-full px-2 py-2 text-sm font-bold text-slate-600 transition hover:bg-forest-50 hover:text-forest-700 sm:px-3">{link.label}</Link>)}</div></nav></header>; }
