import Link from "next/link";
import { books } from "@/data/books";

export default async function ProductPage({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

const product = books.find(
(b) => b.title.toLowerCase().replace(/\s+/g, "-") === id
);

if (!product) {
return ( <main className="min-h-screen bg-white px-6 py-10"> <div className="mx-auto max-w-3xl"> <h1 className="text-3xl font-bold text-green-700">Product not found</h1> <Link href="/products" className="mt-6 inline-block text-green-700 underline">
← Back to Products </Link> </div> </main>
);
}

return ( <main className="min-h-screen bg-white px-6 py-10"> <div className="mx-auto max-w-3xl"> <Link href="/products" className="text-green-700 underline">
← Back to Products </Link>


    <h1 className="mt-6 text-4xl font-bold text-green-800">
      {product.title}
    </h1>

    <p className="mt-4 text-lg text-gray-700">
      {product.description}
    </p>

    <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-6">
      <div className="flex items-center justify-between border-b border-green-100 pb-4">
        <span className="font-medium text-gray-700">Pages</span>
        <span className="text-2xl font-bold text-green-800">
          {product.pages}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-medium text-gray-700">Age range</span>
        <span className="text-lg font-semibold text-green-800">
          {product.ages}
        </span>
      </div>
    </div>
  </div>
</main>

);
}
