import Link from "next/link";
import { books } from "@/data/books";

export default async function CategoryPage({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

const products = books.filter((book) => book.category === id);

return ( <main className="min-h-screen bg-white px-6 py-10"> <div className="mx-auto max-w-6xl"> <Link href="/categories" className="text-green-700 underline">
← Back to Categories </Link>


    <h1 className="mt-6 text-4xl font-bold text-green-700 capitalize">
      {id.replace(/-/g, " ")}
    </h1>

    <p className="mt-2 text-gray-600">
      {products.length} products found
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.title}
          className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm"
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
              <span>{product.ages}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</main>


);
}
