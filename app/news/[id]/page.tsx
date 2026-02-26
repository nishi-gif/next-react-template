import { newsData } from "@/data/news";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;

  const news = newsData.find((n) => n.id === Number(id));
  if (!news) return <p>Not found.</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{news.title}</h2>
      <p className="text-gray-500 mb-4">{news.date}</p>
      <p>（ここにニュース本文が入ります）</p>
    </div>
  );
}