// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1 p-8 max-w-3xl mx-auto w-full">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}