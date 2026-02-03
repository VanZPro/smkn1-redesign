import { Target, Eye, History, Award, Users, CheckCircle2, Star } from "lucide-react";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HEADER / HERO SECTION */}
      <section className="relative py-20 bg-green-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Sekolah</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat SMKN 1 Panyingkiran sebagai pusat pendidikan vokasi unggulan di Majalengka.
          </p>
        </div>
      </section>

      {/* 2. VISI, MISI & MOTTO */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Motto "MANTAP" */}
          <div className="text-center mb-12">
             <span className="inline-block py-2 px-6 rounded-full bg-orange-100 text-orange-700 font-bold tracking-widest text-sm mb-4 border border-orange-200">
               MOTTO SEKOLAH
             </span>
             <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
               " MANTAP "
             </h2>
             <p className="mt-3 text-xl text-slate-500 font-medium">
               Mandiri • Terampil • Profesional
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Kartu Visi */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Eye size={100} className="text-emerald-600" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                  <Eye className="w-6 h-6" /> VISI
                </h2>
                <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm">
                  <p className="text-xl text-emerald-900 font-bold leading-relaxed text-center italic">
                    "Menghasilkan Lulusan Siap Kerja, Mandiri, dan Berkarakter"
                  </p>
                </div>
              </div>
            </div>

            {/* Kartu Misi */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target size={100} className="text-blue-600" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6" /> MISI
                </h2>
                <ul className="space-y-4">
                  {[
                    "Melaksanakan Pembelajaran Berkarakter Berbasis Kurikulum Industri.",
                    "Meningkatkan Penguasaan Kompetensi sesuai kebutuhan Iduka Berorientasi Life Skill.",
                    "Meningkatkan Kemampuan Kewirausahaan agar menjadi Insan Mandiri.",
                    "Meningkatkan Sarana dan Prasarana Sekolah sesuai Standar Nasional Pendidikan.",
                    "Menerapkan Manajemen Partisipatif Warga Sekolah dan Pemangku Kepentingan Terkait dengan Sekolah."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={20} className="mt-1 flex-shrink-0 text-blue-600" />
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEJARAH SINGKAT */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Gambar Ilustrasi Sejarah */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
                <img 
                  src="/background.jpg" 
                  alt="Gedung Sekolah Lama"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium flex items-center gap-2">
                    <History size={18} /> Perjalanan Sekolah
                  </p>
                </div>
              </div>
            </div>

            {/* Teks Sejarah */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-1 bg-green-600 rounded-full"></span>
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                  Sejarah Singkat
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Dedikasi Sejak Tahun 2004
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  SMK Negeri 1 Panyingkiran resmi didirikan pada tahun <strong>2004</strong>. 
                  Lahir dari semangat untuk memajukan pendidikan vokasi di Kabupaten Majalengka, sekolah ini terus tumbuh menjadi lembaga pendidikan terpercaya.
                </p>
                <p>
                  Sebagai <strong>SMK Informatika Pertama</strong> di wilayah ini, kami telah bertransformasi menjadi <span className="text-green-600 font-bold">SMK Pusat Keunggulan</span>. 
                  Dengan fasilitas modern dan kurikulum yang selaras dengan industri, kami berkomitmen mencetak generasi yang tidak hanya pintar secara akademis, tapi juga siap kerja dan berwirausaha.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. STATISTIK / DATA PENDUKUNG */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Identitas Sekolah</h2>
            <p className="text-slate-500 mt-2">Data pokok pendidikan SMKN 1 Panyingkiran</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Box 1 */}
            <div className="p-6 border border-slate-100 rounded-xl bg-white shadow-[0_2px_10px_-3px_rgba(6,182,212,0.1)] hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="font-bold text-slate-600 mb-1">Akreditasi</h3>
              <p className="text-3xl font-extrabold text-slate-800">A <span className="text-sm font-normal text-green-600">(Unggul)</span></p>
            </div>

            {/* Box 2 */}
            <div className="p-6 border border-slate-100 rounded-xl bg-white shadow-[0_2px_10px_-3px_rgba(6,182,212,0.1)] hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-slate-600 mb-1">NPSN</h3>
              <p className="text-3xl font-extrabold text-slate-800">20247196</p>
            </div>

             {/* Box 3 */}
             <div className="p-6 border border-slate-100 rounded-xl bg-white shadow-[0_2px_10px_-3px_rgba(6,182,212,0.1)] hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star size={32} />
              </div>
              <h3 className="font-bold text-slate-600 mb-1">Berdiri Sejak</h3>
              <p className="text-3xl font-extrabold text-slate-800">2004</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}