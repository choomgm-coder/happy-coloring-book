import Link from 'next/link';

export default function Navbar() {
return ( <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur"> <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"> <Link href="/" className="text-2xl font-bold text-green-700">
Happy Learning Studio </Link>

```
    <nav className="hidden md:flex items-center gap-6 text-green-700 font-medium">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>

    <a
      href="https://m.me/YOUR_PAGE"
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
    >
      Messenger
    </a>
  </div>
</header>
```

);
}
