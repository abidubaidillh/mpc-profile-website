const programs = [
  {
    id: 1,
    title: "Calistung (Membaca, Menulis & Berhitung)",
    description: "Program dasar untuk anak usia dini (TK/SD) guna membangun fondasi kemampuan literasi dan numerasi yang kuat.",
    features: ["Metode Belajar Sambil Bermain", "Modul Interaktif", "Pengajar yang berpengalaman"],
    price: "Rp 125.000",
    duration: "per sesi (60-90 menit)",
    icon: "✏️"
  },
  {
    id: 2,
    title: "Mengaji (Anak - Dewasa)",
    description: "Bimbingan baca tulis Al-Qur'an dengan tajwid yang benar melalui metode praktis yang mudah diikuti anak-anak.",
    features: ["Fokus Tajwid & Makhraj", "Hafalan Doa Harian", "Evaluasi Tahapan Iqro"],
    price: "Rp 100.000",
    duration: "per sesi (60-90 menit)",
    icon: "📖"
  },
  {
    id: 3,
    title: "Program Tilawah dan Tartil",
    description: "Pendalaman seni membaca Al-Qur'an dengan lagu (irama) dan keindahan suara sesuai kaidah tartil.",
    features: ["Teknik Pernapasan", "Latihan Maqomat (Irama)", "Persiapan Lomba/MTQ"],
    price: "Rp 135.000",
    duration: "per sesi (90 menit)",
    icon: "🕌"
  },
  {
    id: 4,
    title: "Bahasa Arab & Bahasa Inggris",
    description: "Penguasaan bahasa asing secara komprehensif untuk meningkatkan kepercayaan diri dalam berkomunikasi.",
    features: ["Speaking & Conversation", "Grammar & Vocabulary", "Bahasa Arab Dasar/Lanjutan"],
    price: "Rp 160.000",
    duration: "per sesi (90 menit)",
    icon: "🌍"
  },
  {
    id: 5,
    title: "Matematika",
    description: "Pendalaman konsep matematika sekolah mulai tingkat SD hingga SMA agar pengerjaan soal menjadi lebih logis dan cepat.",
    features: ["Konsep Logika Dasar", "Trik Cepat Kerjakan Soal", "Latihan Soal Ujian Berkala"],
    price: "Rp 150.000",
    duration: "per sesi (90 menit)",
    icon: "🔢"
  },
  {
    id: 6,
    title: "Pembelajaran Umum",
    description: "Bimbingan terpadu untuk mata pelajaran sains dan sosial guna mempersiapkan siswa menghadapi ujian sekolah.",
    features: ["Rangkuman Materi Padat", "Eksperimen Sederhana (IPA)", "Pemahaman Konsep Terstruktur"],
    price: "Rp 145.000",
    duration: "per sesi (90 menit)",
    icon: "🔬"
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">📚 Program Unggulan</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Program Belajar <span className="text-primary">Terbaik</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Pilih program belajar yang sesuai dengan kebutuhan dan minat Anda. 
            Setiap program dirancang khusus untuk memberikan hasil maksimal.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-2xl p-8 border border-text-secondary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{program.icon}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200 mb-4">
                {program.title}
              </h3>
              
              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {program.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Tidak menemukan program yang sesuai? Kami juga menyediakan program custom!
          </p>
          <a 
            href="https://wa.me/6282197150696?text=Halo%20Admin%20Miracle%20Private,%20saya%20ingin%20konsultasi%20untuk%20program%20custom%20sesuai%20kebutuhan%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block touch-manipulation min-h-[44px] flex items-center justify-center"
          >
            Konsultasi Program Custom
          </a>
        </div>
      </div>
    </section>
  );
}