import { products } from "@/data/products";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Not found.</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-500 mb-4">¥{product.price}</p>
      <p>（ここに商品説明が入ります）</p>
    </div>
  );
}