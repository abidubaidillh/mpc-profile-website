// BlogSection.tsx
'use client';

const blogPosts = [
  {
    title: 'Tips Memilih Les Privat yang Tepat untuk Anak',
    excerpt: 'Bagaimana memilih bimbingan belajar privat yang sesuai kebutuhan anak? Simak tips dan pertimbangan penting sebelum memilih.',
    date: '2025-12-10',
    author: 'Admin Miracle',
    image: '',
    link: '#'
  },
  {
    title: 'Manfaat Les Privat Online vs Offline',
    excerpt: 'Les privat kini tersedia online dan offline. Apa kelebihan dan kekurangannya? Temukan jawabannya di artikel ini.',
    date: '2025-11-22',
    author: 'Admin Miracle',
    image: '',
    link: '#'
  },
  {
    title: 'Strategi Belajar Efektif untuk UTBK',
    excerpt: 'UTBK butuh persiapan matang. Berikut strategi belajar efektif agar hasil maksimal.',
    date: '2025-10-15',
    author: 'Admin Miracle',
    image: '',
    link: '#'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">📝 Blog</span>
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">Artikel & Tips Terbaru</h2>
          <p className="text-text-secondary text-lg">Informasi, tips belajar, dan inspirasi seputar pendidikan dan Miracle Private Class.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <a key={idx} href={post.link} className="block bg-white rounded-2xl shadow hover:shadow-2xl border border-text-secondary/10 transition-all duration-300 p-6 group" aria-label={`Baca artikel: ${post.title}`}>
              <div className="mb-4 h-36 bg-primary/10 rounded-xl flex items-center justify-center text-4xl text-primary" aria-label="Ilustrasi artikel pendidikan">
                {/* Placeholder for image */}
                <span role="img" aria-label="Buku">📚</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-primary mb-2">{post.title}</h3>
              <p className="text-text-secondary mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-text-secondary">
                <span>{new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span>Oleh {post.author}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
