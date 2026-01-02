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
  title: "Daftar Miracle Private Class - Formulir Pendaftaran",
  description: "Daftar sekarang untuk program bimbingan belajar privat terbaik dengan tutor berpengalaman. Isi formulir pendaftaran dan mulai perjalanan akademik Anda.",
  keywords: "pendaftaran, daftar les privat, formulir pendaftaran, bimbingan belajar, les privat, miracle private class",
  authors: [{ name: "Miracle Private Class" }],
  openGraph: {
    title: "Daftar Miracle Private Class - Formulir Pendaftaran",
    description: "Isi formulir pendaftaran untuk mulai perjalanan akademik Anda dengan Miracle Private Class",
    type: "website",
  },
};

export default function DaftarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
