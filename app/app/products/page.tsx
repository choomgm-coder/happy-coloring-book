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
          <div className="rounded-2xl border border-green-100 p-6 shadow-sm">
            <div className="h-48 rounded-xl bg-green-50"></div>
            <h2 className="mt-4 text-xl font-semibold text-green-700">
              Animals Coloring Book
            </h2>
            <p className="text-sm text-gray-600">
              Coloring Books
            </p>
            <button className="mt-4 rounded-xl bg-green-600 px-4 py-2 text-white">
              View Details
            </button>
          </div>

          <div className="rounded-2xl border border-green-100 p-6 shadow-sm">
            <div className="h-48 rounded-xl bg-green-50"></div>
            <h2 className="mt-4 text-xl font-semibold text-green-700">
              Brain Puzzle Pack
            </h2>
            <p className="text-sm text-gray-600">
              Brain Games
            </p>
            <button className="mt-4 rounded-xl bg-green-600 px-4 py-2 text-white">
              View Details
            </button>
          </div>

          <div className="rounded-2xl border border-green-100 p-6 shadow-sm">
            <div className="h-48 rounded-xl bg-green-50"></div>
            <h2 className="mt-4 text-xl font-semibold text-green-700">
              Math Worksheet Set 1
            </h2>
            <p className="text-sm text-gray-600">
              Math Worksheets
            </p>
            <button className="mt-4 rounded-xl bg-green-600 px-4 py-2 text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
