export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
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
                Dengan pengalaman lebih dari 5 tahun dalam bidang pendidikan, 
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
                  <p className="text-text-secondary">Tim pengajar kami terdiri dari lulusan universitas terbaik dengan pengalaman mengajar minimal 3 tahun dan track record yang terbukti.</p>
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
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
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
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-text-secondary">Tahun Pengalaman</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-text-secondary">Siswa Lulus</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-text-secondary">Tutor Ahli</div>
                </div>
                
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-text-secondary">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>

            {/* Testimonial Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-text-secondary/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Ahmad Rizki</h4>
                  <p className="text-text-secondary text-sm">Siswa SMA, Lulus PTN Favorit</p>
                </div>
              </div>
              
              <p className="text-text-secondary italic leading-relaxed">
                "Miracle Private Class benar-benar mengubah cara saya belajar. 
                Tutor yang sabar dan metode yang mudah dipahami membuat saya 
                berhasil masuk universitas impian!"
              </p>
              
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}