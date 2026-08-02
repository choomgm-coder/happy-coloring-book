import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsPage() {
return ( <main className="min-h-screen bg-white px-6 py-12"> <div className="mx-auto max-w-6xl"> <h1 className="text-4xl font-bold text-green-700">Products</h1>

```
    <p className="mt-2 text-gray-600">
      Browse all printable learning resources
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="aspect-[4/3] rounded-xl bg-green-100 flex items-center justify-center text-green-700">
            Cover
          </div>

          <h2 className="mt-4 text-xl font-semibold text-green-700">
            {product.title}
          </h2>

          <p className="mt-2 text-gray-600">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {product.pages} pages
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {product.category}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</main>
```

);
}
