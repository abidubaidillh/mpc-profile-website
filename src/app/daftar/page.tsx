import WhatsAppForm from "@/components/WhatsAppForm";
import Link from "next/link";

export default function DaftarPage() {
  return (
    <>
      {/* Hero Section for Registration Page */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">📝 Formulir Pendaftaran</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Daftar <span className="text-primary">Miracle Private Class</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Isi formulir pendaftaran di bawah ini untuk mulai perjalanan akademik Anda. 
              Tim kami akan menghubungi Anda dalam waktu 1x24 jam.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <WhatsAppForm />

      {/* Additional Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Proses Mudah</h3>
              <p className="text-text-secondary text-sm">Isi formulir, kirim, dan tim kami akan segera menghubungi Anda.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Data Aman</h3>
              <p className="text-text-secondary text-sm">Data Anda dilindungi dan hanya digunakan untuk keperluan pendaftaran.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Support 24/7</h3>
              <p className="text-text-secondary text-sm">Tim support kami siap membantu Anda kapan saja melalui WhatsApp.</p>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-text-secondary mb-4">
              Masih ada pertanyaan? Hubungi kami di{" "}
              <a 
                href="https://wa.me/6282197150696" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                +62 821-9715-0696
              </a>
            </p>
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
        </div>
      </section>
    </>
  );
}
