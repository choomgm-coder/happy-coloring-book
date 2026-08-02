import Link from "next/link";
import { books } from "@/data/books";

export default async function CategoryPage({
params,
}: {
params: Promise<{ category: string }>;
}) {
const { category } = await params;

const products = books.filter((book) => book.category === category);

return ( <main className="min-h-screen bg-white px-6 py-10"> <div className="mx-auto max-w-6xl"> <h1 className="text-4xl font-bold text-green-700">
{category} </h1> <p className="mt-2 text-gray-600">
{products.length} products found </p>

```
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.title}
          href={`/categories/${product.category}`}
          className="rounded-3xl border border-green-100 bg-white p-6 hover:border-green-300 hover:shadow-lg transition"
        >
          <div className="aspect-[4/3] rounded-2xl bg-green-50" />

          <div className="mt-5">
            <h2 className="text-xl font-bold text-green-800">
              {product.title}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {product.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{product.pages} pages</span>
              <span>{product.age}</span>
            </div>

            <div className="mt-6 inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
              View Category →
            </div>
          </div>
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
