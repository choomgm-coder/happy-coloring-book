import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MessengerButton } from "@/components/messenger-button";

export const metadata: Metadata = {
  title: { default: "Happy Coloring Book", template: "%s | Happy Coloring Book" },
  description: "Discover joyful printable coloring books for little artists.",
  keywords: ["coloring book", "printable coloring pages", "children activities"],
  openGraph: { title: "Happy Coloring Book", description: "Color more, smile more.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body className="font-sans"><Header /><main>{children}</main><Footer /><MessengerButton /></body></html>;
}
