import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Miracle Private Class - Bimbingan Belajar Privat Terbaik",
  description: "Bimbingan belajar privat berkualitas tinggi dengan tutor berpengalaman. Metode pembelajaran yang disesuaikan dengan kebutuhan individual setiap siswa untuk mencapai prestasi akademik terbaik.",
  keywords: "bimbingan belajar, les privat, tutor, matematika, bahasa inggris, UTBK, fisika, kimia, programming",
  authors: [{ name: "Miracle Private Class" }],
  openGraph: {
    title: "Miracle Private Class - Bimbingan Belajar Privat Terbaik",
    description: "Wujudkan impian akademik Anda dengan bimbingan belajar privat terpercaya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
