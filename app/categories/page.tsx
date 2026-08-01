import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-green-700">
          Categories
        </h1>

        <p className="mt-2 text-gray-600">
          Browse learning resources by category
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${category.color}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </div>

              <p className="mt-4 text-gray-600">
                Explore {category.name.toLowerCase()} resources
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
