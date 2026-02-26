import Link from "next/link";
import { newsData } from "@/data/news";

export default function NewsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">News</h2>

      <ul className="space-y-3">
        {newsData.map((item) => (
          <li
            key={item.id}
            className="p-4 border rounded shadow hover:shadow-lg transition"
          >
            <Link
              href={`/news/${item.id}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              {item.title}
            </Link>
            <p className="text-sm text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}