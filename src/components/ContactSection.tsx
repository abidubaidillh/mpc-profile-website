'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nama: '',
    kelas: '',
    program: '',
    whatsapp: '',
    email: '',
    pesan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.nama || !formData.whatsapp || !formData.kelas || !formData.program) {
      alert('Mohon lengkapi data yang wajib diisi (Nama, WhatsApp, Kelas, dan Program)');
      return;
    }

    // Format pesan WhatsApp
    let message = `Halo Admin Miracle, Saya ${formData.nama}, ingin konsultasi untuk anak saya kelas ${formData.kelas} untuk program ${formData.program}.`;
    
    if (formData.pesan) {
      message += `\n\nPesan tambahan: ${formData.pesan}`;
    }
    
    message += `\n\nKontak WhatsApp: ${formData.whatsapp}`;
    if (formData.email) {
      message += `\nEmail: ${formData.email}`;
    }

    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6282197150696?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
    
    // Reset form setelah submit
    setFormData({
      nama: '',
      kelas: '',
      program: '',
      whatsapp: '',
      email: '',
      pesan: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">📞 Hubungi Kami</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Siap Memulai <span className="text-primary">Perjalanan Belajar?</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Konsultasi gratis untuk menentukan program yang tepat sesuai kebutuhan Anda. 
            Tim kami siap membantu 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Konsultasi Gratis</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-primary font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="nama@email.com"
                  />
                </div>
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Kelas Anak <span className="text-red-500">*</span>
                  </label>
                  <select 
                    name="kelas"
                    value={formData.kelas}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Pilih Kelas</option>
                    <option value="TK A">TK A</option>
                    <option value="TK B">TK B</option>
                    <option value="SD Kelas 1">SD Kelas 1</option>
                    <option value="SD Kelas 2">SD Kelas 2</option>
                    <option value="SD Kelas 3">SD Kelas 3</option>
                    <option value="SD Kelas 4">SD Kelas 4</option>
                    <option value="SD Kelas 5">SD Kelas 5</option>
                    <option value="SD Kelas 6">SD Kelas 6</option>
                    <option value="SMP Kelas 7">SMP Kelas 7</option>
                    <option value="SMP Kelas 8">SMP Kelas 8</option>
                    <option value="SMP Kelas 9">SMP Kelas 9</option>
                    <option value="SMA Kelas 10">SMA Kelas 10</option>
                    <option value="SMA Kelas 11">SMA Kelas 11</option>
                    <option value="SMA Kelas 12">SMA Kelas 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">
                  Program yang Diminati <span className="text-red-500">*</span>
                </label>
                <select 
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  required
                >
                  <option value="">Pilih Program</option>
                  <option value="Calistung (Membaca, Menulis & Berhitung)">Calistung (Membaca, Menulis & Berhitung)</option>
                  <option value="Mengaji (Metode Qiro'ah & Iqro)">Mengaji (Metode Qiro'ah & Iqro)</option>
                  <option value="Program Tilawah dan Tartil">Program Tilawah dan Tartil</option>
                  <option value="Bahasa Arab & Bahasa Inggris">Bahasa Arab & Bahasa Inggris</option>
                  <option value="Matematika">Matematika</option>
                  <option value="IPA/IPS">IPA/IPS</option>
                  <option value="Request Pembelajaran">Request Pembelajaran</option>
                </select>
              </div>

              <div>
                <label className="block text-text-primary font-medium mb-2">Pesan Tambahan (Opsional)</label>
                <textarea 
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-text-secondary/30 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Ceritakan kebutuhan belajar anak Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Kirim Konsultasi Gratis
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Telepon & WhatsApp</h4>
                  <p className="text-text-secondary">+62 821-9715-0696</p>
                  <p className="text-text-secondary text-sm">Tersedia 24/7 untuk konsultasi</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                  <p className="text-text-secondary">miracleprivateclass99@gmail.com</p>
                  <p className="text-text-secondary text-sm">Respon dalam 2 jam kerja</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Alamat</h4>
                  <p className="text-text-secondary">Jl. Puro No. 07 Kel. Tondo Kec. Mantikulore</p>
                  <p className="text-text-secondary">Kota Palu, Sulawesi Tengah</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-text-primary mb-6">Aksi Cepat</h4>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/6282197150696?text=Halo%20Admin%20Miracle%20Private,%20saya%20tertarik%20ingin%20tanya%20lebih%20lanjut%20mengenai%20program%20lesnya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
                
                <a 
                  href="https://wa.me/6282197150696?text=Halo%20Admin%20Miracle%20Private,%20saya%20ingin%20jadwalkan%20konsultasi%20untuk%20membahas%20program%20belajar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0v10a2 2 0 002 2h4a2 2 0 002-2V7m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h1" />
                  </svg>
                  <span>Jadwalkan Konsultasi</span>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-primary/5 rounded-2xl p-6">
              <h4 className="font-semibold text-text-primary mb-4">Jam Operasional</h4>
              <div className="space-y-2 text-text-secondary">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>08:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between font-medium text-primary">
                  <span>WhatsApp Support</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}