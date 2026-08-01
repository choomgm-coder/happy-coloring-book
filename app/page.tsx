import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-green-600 text-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-5xl font-bold">
            Happy Learning Studio
          </h1>

          <p className="mt-4 text-xl">
            Printable Learning Resources for Kids
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700"
            >
              Browse Products
            </Link>

            <a
              href="https://m.me/YOUR_PAGE_NAME"
              target="_blank"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white"
            >
              Messenger
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-green-700">
          Categories
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            "Coloring Books",
            "Brain Games",
            "Math Worksheets",
            "Handwriting",
            "Printable Games",
          ].map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-green-100 bg-green-50 p-6 text-center shadow-sm"
            >
              <p className="font-semibold text-green-700">{category}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
