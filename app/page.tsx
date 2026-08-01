import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-green-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Happy Learning Studio
          </Link>

          <nav className="flex items-center gap-6 text-green-700">
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-green-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-5xl font-bold">
            Printable Learning Resources for Kids
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
            Coloring books, brain games, math worksheets, handwriting practice,
            flash cards, and more printable educational resources for children.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/categories"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
            >
              Browse Categories
            </Link>

            <a
              href="https://m.me/YOUR_PAGE"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-green-700"
            >
              Order via Messenger
            </a>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-green-700">
          Featured Categories
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Coloring Books",
            "Brain Games",
            "Math Worksheets",
            "Printable Games",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-green-700">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-green-700">
            Featured Products
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Animal Coloring Book",
              "Brain Puzzle Pack",
              "Addition Worksheet Pack",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-200 bg-white p-6"
              >
                <div className="aspect-[4/3] rounded-xl bg-green-100" />

                <h3 className="mt-4 text-xl font-semibold text-green-700">
                  {item}
                </h3>

                <p className="mt-2 text-gray-600">
                  Printable educational resource for children.
                </p>

                <Link
                  href="/categories"
                  className="mt-4 inline-block text-green-700 underline"
                >
                  View details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-gray-500">
          © 2026 Happy Learning Studio. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
