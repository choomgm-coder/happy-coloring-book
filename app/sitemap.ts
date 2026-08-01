import type { MetadataRoute } from "next";
import { books, categories } from "@/data/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return [
    "", "/categories", "/search",
    ...categories.map((category) => `/categories/${category.slug}`),
    ...books.map((book) => `/books/${book.slug}`),
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
