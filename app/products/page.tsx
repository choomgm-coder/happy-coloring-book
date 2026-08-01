import Link from "next/link";

const products = [
  {
    id: "animals-coloring",
    title: "Animals Coloring Book",
    category: "Coloring Books",
    pages: 40,
  },
  {
    id: "brain-puzzles",
    title: "Brain Puzzle Pack",
    category: "Brain Games",
    pages: 30,
  },
  {
    id: "math-worksheet-1",
    title: "Math Worksheet Set 1",
    category: "Math Worksheets",
    pages: 25,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-green-700">
          Products
        </h1>

        <p className="mt-2 text-gray-600">
          Browse printable learning resources for kids
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-green-100 p-6 shadow-sm"
            >
              <div className="h-48 rounded-xl bg-green-50" />

              <h2 className="mt-4 text-xl font-semibold text-green-700">
                {product.title}
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                {product.category}
              </p>

              <p className="mt-1 text-sm text-gray-600">
                {product.pages} pages
              </p>

              <Link
                href={`/products/${product.id}`}
                className="mt-4 inline-block rounded-xl bg-green-600 px-4 py-2 text-white"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
