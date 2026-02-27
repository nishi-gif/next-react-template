import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex gap-6 font-medium">
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
    </header>
  );
}