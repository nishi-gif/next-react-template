import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <li
            key={p.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <Link
              href={`/products/${p.id}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              {p.name}
            </Link>
            <p className="text-sm mt-1">¥{p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}