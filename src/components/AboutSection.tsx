export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium text-sm">🏆 Tentang Kami</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                Mengapa Memilih
                <span className="block text-primary">Miracle Private Class?</span>
              </h2>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Dengan pengalaman lebih dari 2 tahun dalam bidang pendidikan, 
                kami telah membantu ribuan siswa mencapai target akademik mereka 
                melalui metode pembelajaran yang inovatif dan personal.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Metode Pembelajaran Terpersonalisasi</h3>
                  <p className="text-text-secondary">Setiap siswa memiliki gaya belajar yang unik. Kami menyesuaikan metode pengajaran dengan karakteristik dan kebutuhan individual.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Tutor Berkualitas Tinggi</h3>
                  <p className="text-text-secondary">Tim pengajar kami terdiri dari lulusan universitas terbaik dengan pengalaman mengajar di bidangnya masing masing</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Teknologi Pembelajaran Modern</h3>
                  <p className="text-text-secondary">Menggunakan platform digital interaktif, simulasi virtual, dan tools pembelajaran terkini untuk pengalaman belajar yang optimal.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <a 
                href="https://wa.me/6282197150696?text=Halo%20Admin%20Miracle%20Private,%20saya%20tertarik%20untuk%20bergabung%20dan%20ingin%20tanya%20lebih%20lanjut."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Bergabung Sekarang
              </a>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Achievement Stats */}
            <div className="bg-gradient-to-br from-primary/5 to-primary-dark/5 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Pencapaian Kami</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">2+</div>
                  <div className="text-text-secondary">Tahun Pengalaman</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-text-secondary">Siswa Terbantu</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-text-secondary">Tutor Ahli</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-text-secondary">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
