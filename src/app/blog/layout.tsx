import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blog Miracle Private Class - Artikel & Tips Pendidikan",
  description: "Temukan artikel, tips belajar, dan informasi terbaru seputar pendidikan, les privat, dan strategi belajar efektif dari Miracle Private Class.",
  keywords: "blog pendidikan, tips belajar, artikel les privat, strategi belajar, miracle private class blog",
  authors: [{ name: "Miracle Private Class" }],
  openGraph: {
    title: "Blog Miracle Private Class - Artikel & Tips Pendidikan",
    description: "Temukan artikel, tips belajar, dan informasi terbaru seputar pendidikan dari Miracle Private Class",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
