import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsPage() {
return ( <main className="min-h-screen bg-white px-6 py-12"> <div className="mx-auto max-w-6xl"> <div className="text-center"> <h1 className="text-4xl font-bold text-green-700">Printable Learning Resources</h1> <p className="mt-4 text-lg text-gray-600">
Browse our collection of coloring books, brain games, worksheets,
flash cards, and educational activities. </p> </div>

```
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="aspect-[4/3] rounded-2xl bg-green-100 flex items-center justify-center text-green-700 font-semibold group-hover:bg-green-200 transition">
            Cover Preview
          </div>

          <div className="mt-5">
            <div className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {product.category}
            </div>

            <h2 className="mt-3 text-2xl font-bold text-green-800">
              {product.title}
            </h2>

            <p className="mt-2 text-gray-600 leading-6">
              {product.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{product.pages} pages</span>
              <span>{product.age}</span>
            </div>

            <div className="mt-6 inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white group-hover:bg-green-700">
              View Details →
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</main>
```

);
}
