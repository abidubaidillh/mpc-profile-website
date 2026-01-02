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
      `Assalamualaikum warahmatullahi wabarokaatuh Kepada Yth Ayah & Bunda Calon Siswa Miracle Private Class tahun 2026\n\n` +
      `Formulir Pendaftaran \n` +
      `Program Pembelajaran : ${form.program}\n` +
      `Nama Orang tua : ${form.namaOrtu}\n` +
      `No Whatsapp : ${form.whatsapp}\n` +
      `Nama siswa : ${form.namaSiswa}\n` +
      `Umur : ${form.umur}\n` +
      `Sekolah: ${form.sekolah}\n` +
      `Alamat rumah : ${form.alamat}\n` +
      `Jadwal Les : ${form.jadwal}\n` +
      `Jam : ${form.jam}\n` +
      `Pilihan Pertemuan : ${form.pertemuan}\n` +
      `Catatan: ${form.catatan}\n` +
      `Harapan Orang tua : ${form.harapan}\n` +
      `Pembayaran hanya di rekening Admin`;
    const url = `https://wa.me/6282197150696?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
    setForm(initialState);
  };

  return (
    <section id="daftar" className="py-10 scroll-mt-20">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-7xl mx-4 md:mx-8 flex flex-col lg:flex-row bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
          {/* Left: Header & Deskripsi */}
          <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-slate-50 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full mb-4 shadow-sm w-max mx-auto lg:mx-0">
              <span className="font-semibold text-sm tracking-wide">📝 Formulir Pendaftaran</span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-3 text-center lg:text-left">Daftar Miracle Private Class</h2>
            <p className="text-slate-500 text-sm md:text-base text-center lg:text-left leading-relaxed">Isi data lengkap, lalu klik <span className='font-semibold text-blue-700'>Daftar via WhatsApp</span>.<br/>Data Anda aman & hanya untuk keperluan pendaftaran.</p>
          </div>
          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="lg:w-2/3 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {/* Baris 1 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Program Pembelajaran <span className="text-red-500">*</span></label>
                <input type="text" name="program" value={form.program} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: Matematika, Mengaji" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Nama Orang Tua <span className="text-red-500">*</span></label>
                <input type="text" name="namaOrtu" value={form.namaOrtu} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: Budi Santoso" />
              </div>
              {/* Baris 2 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">No WhatsApp <span className="text-red-500">*</span></label>
                <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: 08xxxxxxxxxx" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Nama Siswa <span className="text-red-500">*</span></label>
                <input type="text" name="namaSiswa" value={form.namaSiswa} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: Siti Aminah" />
              </div>
              {/* Baris 3 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Umur <span className="text-red-500">*</span></label>
                <input type="number" name="umur" value={form.umur} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: 10" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Sekolah <span className="text-red-500">*</span></label>
                <input type="text" name="sekolah" value={form.sekolah} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: SDN 1 Jakarta" />
              </div>
              {/* Baris 4: Alamat Rumah full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Alamat Rumah <span className="text-red-500">*</span></label>
                <input type="text" name="alamat" value={form.alamat} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: Jl. Melati No. 10" />
              </div>
              {/* Baris 5 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Jadwal Les <span className="text-red-500">*</span></label>
                <input type="text" name="jadwal" value={form.jadwal} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: Senin & Rabu" />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Jam <span className="text-red-500">*</span></label>
                <input type="text" name="jam" value={form.jam} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Contoh: 16.00-17.30" />
              </div>
              {/* Baris 6: Pilihan Pertemuan full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Pilihan Pertemuan <span className="text-red-500">*</span></label>
                <select name="pertemuan" value={form.pertemuan} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white">
                  <option value="">Pilih jumlah pertemuan</option>
                  <option value="8x">8x Pertemuan</option>
                  <option value="12x">12x Pertemuan</option>
                </select>
              </div>
              {/* Baris 7: Catatan full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Catatan</label>
                <input type="text" name="catatan" value={form.catatan} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Catatan tambahan (opsional)" />
              </div>
              {/* Baris 8: Harapan Orang Tua full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Harapan Orang Tua <span className="text-red-500">*</span></label>
                <textarea name="harapan" value={form.harapan} onChange={handleChange} rows={3} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white resize-none" placeholder="Contoh: Ingin anak lebih percaya diri dan berprestasi"></textarea>
              </div>
              {/* Baris 9: Tombol Submit full row */}
              <div className="md:col-span-2 flex justify-end mt-4">
                <button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg tracking-wide">Daftar via WhatsApp</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
