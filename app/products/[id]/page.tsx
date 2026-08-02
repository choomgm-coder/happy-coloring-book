import Link from "next/link";
import { books } from "@/data/books";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = books.find((b) => b.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-white px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-green-800">Product not found</h1>
          <p className="mt-3 text-gray-600">The product you requested does not exist.</p>
          <Link href="/categories" className="mt-6 inline-block text-green-700 underline">
            Back to categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href={`/categories/${product.category}`}
          className="text-green-700 underline"
        >
          ← Back to category
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="aspect-[4/5] rounded-3xl border border-green-100 bg-green-50" />

          <div>
            <h1 className="text-4xl font-bold text-green-800">{product.title}</h1>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <div className="mt-6 rounded-2xl border border-green-100 bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Pages</span>
                <span className="font-semibold text-green-800">
                  {product.pages}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium text-gray-700">Age</span>
                <span className="font-semibold text-green-800">
                  {product.age}
                </span>
              </div>
            </div>

            <button className="mt-8 rounded-full bg-green-700 px-6 py-3 text-white hover:bg-green-800">
              Download sample
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
