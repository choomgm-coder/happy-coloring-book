import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const category = categories.find((c) => c.id === id);

  if (!category) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Category not found
      </main>
    );
  }

  const categoryProducts = products.filter(
    (p) =>
      p.category.toLowerCase().replace(/\s+/g, "-") === id
  );

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-green-700">
          {category.name}
        </h1>

        <p className="mt-2 text-gray-600">
          {categoryProducts.length} products found
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="rounded-2xl border border-green-100 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="h-48 rounded-xl bg-green-50" />

              <h2 className="mt-4 text-xl font-semibold text-green-700">
                {product.title}
              </h2>

              <p className="text-sm text-gray-600">
                {product.pages} pages
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/categories" className="text-green-700 underline">
            ← Back to Categories
          </Link>
        </div>
      </div>
    </main>
  );
}
