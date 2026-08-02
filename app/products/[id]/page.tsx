import Link from 'next/link';
import { products } from '@/data/products';

type Props = {
params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
const { id } = await params;

const product = products.find((p) => p.id === id);

if (!product) {
return ( <main className="min-h-screen flex items-center justify-center"> <div className="text-center"> <h1 className="text-3xl font-bold text-red-600">Product not found</h1> <Link
         href="/categories"
         className="mt-4 inline-block text-green-700 underline"
       >
Back to categories </Link> </div> </main>
);
}

return ( <main className="min-h-screen bg-white px-6 py-10"> <div className="mx-auto max-w-5xl">
<Link
href={`/categories/${product.category}`}
className="text-green-700 underline"
>
← Back to category </Link>

```
    <div className="mt-6 grid gap-10 md:grid-cols-2">
      <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
        <div className="aspect-[4/5] rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-xl font-semibold">
          Cover Preview
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-green-800">
          {product.title}
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          {product.description}
        </p>

        <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700">Pages</span>
            <span className="text-2xl font-bold text-green-800">
              {product.pages}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="https://m.me/yourpage"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-lg font-semibold text-white hover:bg-green-700"
          >
            Order via Messenger
          </a>
        </div>
      </div>
    </div>
  </div>
</main>


);
}
