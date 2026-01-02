import BlogSection from "@/components/Blog/BlogSection";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      {/* Hero Section for Blog Page */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">📚 Blog Pendidikan</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Artikel & <span className="text-primary">Tips Terbaru</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Temukan informasi, tips belajar, dan inspirasi seputar pendidikan, les privat, dan strategi belajar efektif dari Miracle Private Class.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <BlogSection />

      {/* Additional Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Kategori Populer</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Jelajahi berbagai topik pendidikan yang dapat membantu Anda dalam perjalanan belajar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Matematika</h3>
              <p className="text-text-secondary text-sm">Tips dan trik menguasai matematika dengan mudah.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Mengaji</h3>
              <p className="text-text-secondary text-sm">Panduan belajar mengaji untuk anak dan dewasa.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Bahasa Asing</h3>
              <p className="text-text-secondary text-sm">Strategi cepat mahir bahasa Inggris & Arab.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">UTBK & SNBT</h3>
              <p className="text-text-secondary text-sm">Persiapan sukses ujian masuk perguruan tinggi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Dapatkan Tips Belajar Gratis</h2>
          <p className="text-text-secondary mb-8">
            Daftarkan email Anda untuk mendapatkan artikel terbaru, tips belajar, dan informasi promo langsung di inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email Anda" 
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Berlangganan
            </button>
          </form>
          <p className="text-text-secondary text-sm mt-4">Kami tidak akan mengirim spam. Anda bisa berhenti berlangganan kapan saja.</p>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center py-8 border-t border-gray-200">
        <Link 
          href="/"
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>
    </>
  );
}
