import Link from "next/link";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-800">
            Product not found
          </h1>

          <Link
            href="/categories"
            className="mt-4 inline-block text-green-700 underline"
          >
            Back to categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href={`/categories/${product.category}`}
          className="text-green-700 underline"
        >
          ← Back to category
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {/* Left: Images */}
          <div>
            <div className="aspect-[4/5] rounded-2xl bg-green-100 flex items-center justify-center text-green-700 font-semibold text-xl">
              Cover Image
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {product.preview.map((_, index) => (
                <div
                  key={index}
                  className="aspect-[4/5] rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-sm text-green-700"
                >
                  Preview {index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <h1 className="text-4xl font-bold text-green-800">
              {product.title}
            </h1>

            <p className="mt-4 text-gray-700 leading-7">
              {product.description}
            </p>

            <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
              <div className="flex justify-between py-2">
                <span className="font-medium text-gray-700">Pages</span>
                <span className="text-green-800">{product.pages}</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="font-medium text-gray-700">Age</span>
                <span className="text-green-800">{product.age}</span>
              </div>

              <div className="flex justify-between py-2 border-t border-green-200 mt-2 pt-2">
                <span className="font-medium text-gray-700">Price</span>
                <span className="text-2xl font-bold text-green-800">
                  {product.price}
                </span>
              </div>
            </div>

            <a
              href="https://m.me/YOUR_PAGE"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-green-600 px-6 py-4 text-lg font-semibold text-white hover:bg-green-700"
            >
              Order via Messenger
            </a>

            <p className="mt-3 text-sm text-gray-500">
              We will send the printable PDF file after payment confirmation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
