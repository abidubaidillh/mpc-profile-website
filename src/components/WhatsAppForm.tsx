// WhatsAppForm.tsx
'use client';
import { useState } from 'react';

const initialState = {
  program: '',
  namaOrtu: '',
  whatsapp: '',
  namaSiswa: '',
  umur: '',
  sekolah: '',
  alamat: '',
  jadwal: '',
  jam: '',
  pertemuan: '',
  harapan: '',
  catatan: '',
};

export default function WhatsAppForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pesan =
      `Assalamualaikum warahmatullahi wabarokaatuh 🩵 Kepada Yth Ayah&Bunda Calon Siswa Miracle Private Class tahun 2026\n\n` +
      `Formulir Pendaftaran \n` +
      `📚Program Pembelajaran : ${form.program}\n` +
      `👤Nama Orang tua : ${form.namaOrtu}\n` +
      `📞No Whatsapp : ${form.whatsapp}\n` +
      `🗣️Nama siswa : ${form.namaSiswa}\n` +
      `✨Umur : ${form.umur}\n` +
      `🎒Sekolah: ${form.sekolah}\n` +
      `🏡Alamat rumah : ${form.alamat}\n` +
      `📖 Jadwal Les : ${form.jadwal}\n` +
      `🕰️ Jam : ${form.jam}\n` +
      `📚 Catatan: ${form.catatan}\n` +
      `💐 Harapan Orang tua : ${form.harapan}\n` +
      `💸 Pembayaran hanya di rekening Admin`;
    const url = `https://wa.me/6282197150696?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
    setForm(initialState);
  };

  return (
    <section id="daftar" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">📝 Formulir Pendaftaran</span>
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">Daftar Miracle Private Class</h2>
          <p className="text-text-secondary text-lg">Isi data lengkap, lalu klik Daftar via WhatsApp.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-transparent rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-text-primary font-medium mb-2">Program Pembelajaran</label>
              <input type="text" name="program" value={form.program} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Contoh: Matematika, Mengaji" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Nama Orang Tua</label>
              <input type="text" name="namaOrtu" value={form.namaOrtu} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Nama lengkap orang tua" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">No WhatsApp</label>
              <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="08xxxxxxxxxx" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Nama Siswa</label>
              <input type="text" name="namaSiswa" value={form.namaSiswa} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Nama lengkap siswa" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Umur</label>
              <input type="number" name="umur" value={form.umur} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Umur siswa" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Sekolah</label>
              <input type="text" name="sekolah" value={form.sekolah} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Nama sekolah" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Alamat Rumah</label>
              <input type="text" name="alamat" value={form.alamat} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Alamat lengkap" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Jadwal Les</label>
              <input type="text" name="jadwal" value={form.jadwal} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Contoh: Senin & Rabu" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Jam</label>
              <input type="text" name="jam" value={form.jam} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Contoh: 16.00-17.30" />
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Pilihan Pertemuan</label>
              <select name="pertemuan" value={form.pertemuan} onChange={handleChange} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary">
                <option value="">Pilih</option>
                <option value="8x">8x</option>
                <option value="12x">12x</option>
              </select>
            </div>
            <div>
              <label className="block text-text-primary font-medium mb-2">Catatan</label>
              <input type="text" name="catatan" value={form.catatan} onChange={handleChange} className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary" placeholder="Catatan tambahan (opsional)" />
            </div>
          </div>
          <div>
            <label className="block text-text-primary font-medium mb-2">Harapan Orang Tua</label>
            <textarea name="harapan" value={form.harapan} onChange={handleChange} rows={3} required className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary resize-none" placeholder="Harapan terhadap Miracle Private Class"></textarea>
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation min-h-[44px] flex items-center justify-center">Daftar via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
