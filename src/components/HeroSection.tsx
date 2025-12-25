export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-white flex items-center relative overflow-hidden scroll-mt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium text-sm">✨ Kelas Privat Terbaik</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                Wujudkan Impian
                <span className="block text-primary">Akademik Anda</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                Bimbingan belajar privat berkualitas tinggi dengan tutor berpengalaman. 
                Metode pembelajaran yang disesuaikan dengan kebutuhan individual setiap siswa.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/6282197150696?text=Halo%20Admin%20Miracle%20Private,%20saya%20tertarik%20ingin%20tanya%20lebih%20lanjut%20mengenai%20program%20lesnya."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl text-center inline-block touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Mulai Belajar Sekarang
              </a>
              <a 
                href="https://wa.me/6282197150696?text=Halo%20Admin%20Miracle%20Private,%20saya%20tertarik%20ingin%20konsultasi%20gratis%20mengenai%20program%20belajar."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-text-secondary text-text-primary hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center inline-block touch-manipulation min-h-[44px] flex items-center justify-center"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-text-secondary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-text-secondary">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-text-secondary">Tutor Ahli</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">90%</div>
                <div className="text-text-secondary">Tingkat Keberhasilan</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Since 2023</h3>
                      <p className="text-text-secondary text-sm">Berpengalaman mencetak generasi berprestasi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Tanpa Biaya Admin & Registrasi</h3>
                      <p className="text-text-secondary text-sm">Hanya bayar biaya les sesuai paket yang dipilih</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Request Jadwal dan Mentor</h3>
                      <p className="text-text-secondary text-sm">Bebas atur waktu belajar dan pilih guru yang cocok</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-dark rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}