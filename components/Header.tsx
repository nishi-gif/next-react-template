import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="px-6 py-4">
        {/* 1段目：サイトタイトル */}
        <h1 className="text-2xl font-bold leading-tight">
          <Link href="/" className="hover:opacity-90">
            My React Site
          </Link>
        </h1>

        {/* 2段目：ナビ（タイトルの下に並ぶ） */}
        <nav className="mt-3 flex gap-8 text-sm">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/news" className="hover:underline underline-offset-4">
            News
          </Link>
          <Link href="/products" className="hover:underline underline-offset-4">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}