import Link from "next/link";
import { books } from "@/data/books";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const products = books.filter((book) => book.category === category);

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/categories" className="text-green-700 underline">
          ← Back to Categories
        </Link>

        <h1 className="mt-6 text-4xl font-bold text-green-800">
          {category.replace(/-/g, " ")}
        </h1>

        <p className="mt-2 text-gray-600">
          {products.length} products found
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="rounded-3xl border border-green-100 bg-white p-6 hover:border-green-300 hover:shadow-md transition block"
            >
              <div className="aspect-[4/5] rounded-2xl bg-green-50" />

              <h2 className="mt-4 text-2xl font-semibold text-green-800">
                {product.title}
              </h2>

              <p className="mt-2 text-gray-600">
                {product.pages} pages
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
