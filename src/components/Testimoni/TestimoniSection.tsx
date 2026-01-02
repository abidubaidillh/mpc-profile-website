// TestimoniSection.tsx
'use client';

const testimoniData = [
  {
    name: 'Ibu Ratna Sari',
    relation: 'Orang Tua dari Alif (6 Tahun)',
    message: 'Sangat bersyukur bertemu Miracle Private Class. Dulu Alif sulit sekali diajak fokus belajar membaca, tapi dengan tutor yang sangat sabar dan metode yang menyenangkan, sekarang dia sudah lancar membaca dan antusias setiap jadwal les tiba!',
    rating: 5
  },
  {
    name: 'Bapak Andi Pratama',
    relation: 'Orang Tua dari Dinda (SMP)',
    message: 'Nilai matematika Dinda meningkat pesat setelah ikut program privat. Tutor sangat komunikatif dan materi mudah dipahami.',
    rating: 5
  },
  {
    name: 'Siti Nurhaliza',
    relation: 'Siswa SMA',
    message: 'Belajar bahasa Inggris jadi lebih percaya diri. Suka dengan metode speaking yang fun!',
    rating: 4
  }
];

export default function TestimoniSection() {
  return (
    <section id="testimoni" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">⭐ Testimoni</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">Apa Kata Mereka?</h2>
          <p className="text-text-secondary text-lg">Testimoni dari orang tua dan siswa Miracle Private Class.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimoniData.map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-text-secondary/10 rounded-2xl p-8 shadow hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl mr-4">
                  <span>👤</span>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{item.name}</h4>
                  <p className="text-text-secondary text-sm">{item.relation}</p>
                </div>
              </div>
              <p className="text-text-secondary italic mb-4">"{item.message}"</p>
              <div className="flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
