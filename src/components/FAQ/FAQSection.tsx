// FAQSection.tsx
'use client';
import { useState } from 'react';

const faqData = [
  {
    question: 'Apa itu Miracle Private Class?',
    answer: 'Miracle Private Class adalah layanan bimbingan belajar privat dengan tutor berpengalaman dan metode personalisasi sesuai kebutuhan siswa.'
  },
  {
    question: 'Bagaimana cara mendaftar program les?',
    answer: 'Anda dapat mendaftar melalui form konsultasi gratis di website atau langsung menghubungi admin via WhatsApp.'
  },
  {
    question: 'Apakah jadwal les bisa fleksibel?',
    answer: 'Ya, jadwal les dapat disesuaikan dengan kebutuhan dan ketersediaan siswa serta tutor.'
  },
  {
    question: 'Apakah tersedia les online dan offline?',
    answer: 'Kami menyediakan layanan les privat secara online maupun offline (tatap muka) sesuai permintaan.'
  },
  {
    question: 'Bagaimana sistem pembayaran di Miracle Private Class?',
    answer: 'Pembayaran dilakukan per sesi atau paket, tanpa biaya admin/registrasi. Info detail akan diberikan setelah konsultasi.'
  },
  {
    question: 'Siapa saja yang bisa mengikuti program ini?',
    answer: 'Program kami terbuka untuk siswa TK, SD, SMP, SMA, hingga dewasa yang ingin meningkatkan kemampuan akademik atau keagamaan.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4" aria-label="FAQ section">
            <span className="text-primary font-medium text-sm" role="img" aria-label="Tanda tanya">❓ FAQ</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-text-secondary text-lg">Temukan jawaban atas pertanyaan umum tentang layanan Miracle Private Class.</p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="border border-text-secondary/20 rounded-xl overflow-hidden bg-gray-50" aria-label={`FAQ: ${item.question}`}> 
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary transition-colors group"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="font-semibold text-text-primary text-lg">{item.question}</span>
                <span className={`ml-4 transition-transform duration-200 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-text-secondary'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-5 text-text-secondary text-base transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                aria-hidden={openIndex !== idx}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
