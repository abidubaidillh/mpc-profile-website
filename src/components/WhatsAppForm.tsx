// WhatsAppForm.tsx
'use client';
import { useState } from 'react';

// Environment variables with fallbacks
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6282197150696';
const HONEYPOT_FIELD = process.env.NEXT_PUBLIC_HONEYPOT_FIELD || 'website__';

// Validation functions
const validateEmail = (email: string): boolean => {
  if (!email) return true; // Empty is allowed (optional)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateWhatsApp = (phone: string): boolean => {
  // Indonesian phone number: starts with 08, 10-13 digits total
  const phoneRegex = /^08\d{8,12}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

// Lightweight sanitization
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};

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
  [HONEYPOT_FIELD]: '', // Honeypot field
};

export default function WhatsAppForm() {
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: sanitizeInput(value) });
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!form.program.trim()) {
      errors.program = 'Program Pembelajaran wajib diisi';
    }
    
    if (!form.namaOrtu.trim()) {
      errors.namaOrtu = 'Nama Orang Tua wajib diisi';
    }
    
    if (!form.whatsapp.trim()) {
      errors.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!validateWhatsApp(form.whatsapp)) {
      errors.whatsapp = 'Format nomor WhatsApp tidak valid (contoh: 081234567890)';
    }
    
    if (!form.namaSiswa.trim()) {
      errors.namaSiswa = 'Nama Siswa wajib diisi';
    }
    
    if (!form.umur.trim()) {
      errors.umur = 'Umur wajib diisi';
    } else if (!/^\d+$/.test(form.umur)) {
      errors.umur = 'Umur harus berupa angka';
    } else if (parseInt(form.umur) < 3 || parseInt(form.umur) > 30) {
      errors.umur = 'Umur harus antara 3 dan 30 tahun';
    }
    
    if (!form.sekolah.trim()) {
      errors.sekolah = 'Sekolah wajib diisi';
    }
    
    if (!form.alamat.trim()) {
      errors.alamat = 'Alamat Rumah wajib diisi';
    }
    
    if (!form.jadwal.trim()) {
      errors.jadwal = 'Jadwal Les wajib diisi';
    }
    
    if (!form.jam.trim()) {
      errors.jam = 'Jam wajib diisi';
    }
    
    if (!form.pertemuan) {
      errors.pertemuan = 'Pilihan Pertemuan wajib dipilih';
    }
    
    if (!form.harapan.trim()) {
      errors.harapan = 'Harapan Orang Tua wajib diisi';
    }
    
    // Honeypot validation: should be empty
    if (form[HONEYPOT_FIELD].trim() !== '') {
      // Silent fail for bots - don't show error message
      errors[HONEYPOT_FIELD] = 'bot';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const pesan =
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
      
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
    
    // Reset form after submission
    setForm(initialState);
    setIsSubmitting(false);
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
            {/* Honeypot field - hidden from users */}
            <div className="hidden">
              <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
              <input
                type="text"
                id={HONEYPOT_FIELD}
                name={HONEYPOT_FIELD}
                value={form[HONEYPOT_FIELD]}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {/* Baris 1 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Program Pembelajaran <span className="text-red-500">*</span></label>
                <input type="text" name="program" value={form.program} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.program ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: Matematika, Mengaji" />
                {validationErrors.program && <p className="text-red-500 text-sm mt-1">{validationErrors.program}</p>}
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Nama Orang Tua <span className="text-red-500">*</span></label>
                <input type="text" name="namaOrtu" value={form.namaOrtu} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.namaOrtu ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: Budi Santoso" />
                {validationErrors.namaOrtu && <p className="text-red-500 text-sm mt-1">{validationErrors.namaOrtu}</p>}
              </div>
              {/* Baris 2 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">No WhatsApp <span className="text-red-500">*</span></label>
                <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.whatsapp ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: 08xxxxxxxxxx" />
                {validationErrors.whatsapp && <p className="text-red-500 text-sm mt-1">{validationErrors.whatsapp}</p>}
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Nama Siswa <span className="text-red-500">*</span></label>
                <input type="text" name="namaSiswa" value={form.namaSiswa} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.namaSiswa ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: Siti Aminah" />
                {validationErrors.namaSiswa && <p className="text-red-500 text-sm mt-1">{validationErrors.namaSiswa}</p>}
              </div>
              {/* Baris 3 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Umur <span className="text-red-500">*</span></label>
                <input type="number" name="umur" value={form.umur} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.umur ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: 10" min="3" max="30" />
                {validationErrors.umur && <p className="text-red-500 text-sm mt-1">{validationErrors.umur}</p>}
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Sekolah <span className="text-red-500">*</span></label>
                <input type="text" name="sekolah" value={form.sekolah} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.sekolah ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: SDN 1 Jakarta" />
                {validationErrors.sekolah && <p className="text-red-500 text-sm mt-1">{validationErrors.sekolah}</p>}
              </div>
              {/* Baris 4: Alamat Rumah full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Alamat Rumah <span className="text-red-500">*</span></label>
                <input type="text" name="alamat" value={form.alamat} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.alamat ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: Jl. Melati No. 10" />
                {validationErrors.alamat && <p className="text-red-500 text-sm mt-1">{validationErrors.alamat}</p>}
              </div>
              {/* Baris 5 */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Jadwal Les <span className="text-red-500">*</span></label>
                <input type="text" name="jadwal" value={form.jadwal} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.jadwal ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: Senin & Rabu" />
                {validationErrors.jadwal && <p className="text-red-500 text-sm mt-1">{validationErrors.jadwal}</p>}
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Jam <span className="text-red-500">*</span></label>
                <input type="text" name="jam" value={form.jam} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.jam ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`} placeholder="Contoh: 16.00-17.30" />
                {validationErrors.jam && <p className="text-red-500 text-sm mt-1">{validationErrors.jam}</p>}
              </div>
              {/* Baris 6: Pilihan Pertemuan full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Pilihan Pertemuan <span className="text-red-500">*</span></label>
                <select name="pertemuan" value={form.pertemuan} onChange={handleChange} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.pertemuan ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white`}>
                  <option value="">Pilih jumlah pertemuan</option>
                  <option value="8x">8x Pertemuan</option>
                  <option value="12x">12x Pertemuan</option>
                </select>
                {validationErrors.pertemuan && <p className="text-red-500 text-sm mt-1">{validationErrors.pertemuan}</p>}
              </div>
              {/* Baris 7: Catatan full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Catatan</label>
                <input type="text" name="catatan" value={form.catatan} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white" placeholder="Catatan tambahan (opsional)" />
              </div>
              {/* Baris 8: Harapan Orang Tua full row */}
              <div className="md:col-span-2">
                <label className="block text-slate-700 font-semibold mb-2 text-sm">Harapan Orang Tua <span className="text-red-500">*</span></label>
                <textarea name="harapan" value={form.harapan} onChange={handleChange} rows={3} disabled={isSubmitting} className={`w-full px-4 py-3 border ${validationErrors.harapan ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm bg-white resize-none`} placeholder="Contoh: Ingin anak lebih percaya diri dan berprestasi"></textarea>
                {validationErrors.harapan && <p className="text-red-500 text-sm mt-1">{validationErrors.harapan}</p>}
              </div>
              {/* Baris 9: Tombol Submit full row */}
              <div className="md:col-span-2 flex justify-end mt-4">
                <button type="submit" disabled={isSubmitting} className={`w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg tracking-wide flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    'Daftar via WhatsApp'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
