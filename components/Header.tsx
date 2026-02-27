import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* サイトタイトル */}
        <h1 className="text-xl font-bold">
          <Link href="/">My React Site</Link>
        </h1>

        {/* ナビゲーション */}
        <nav className="flex gap-6 font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/news" className="hover:underline">
            News
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}