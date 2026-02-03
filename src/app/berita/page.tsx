import Link from "next/link";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

// DATA BERITA DUMMY
const newsData = [
  {
    id: 1,
    title: "Kunjungan Industri Jurusan TJKT ke PT Telkom Indonesia",
    date: "12 Oktober 2025",
    author: "Humas",
    category: "Kunjungan Industri",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    slug: "kunjungan-industri-tjkt",
    excerpt: "Siswa kelas XI TJKT melakukan kunjungan industri untuk melihat langsung infrastruktur jaringan fiber optik skala nasional."
  },
  {
    id: 2,
    title: "Pelaksanaan Job Fair 2025: Ribuan Lulusan Hadir",
    date: "05 Oktober 2025",
    author: "BKK Sekolah",
    category: "BKK & Karir",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    slug: "job-fair-2025",
    excerpt: "SMKN 1 Panyingkiran sukses menggelar Job Fair yang diikuti oleh 25 perusahaan ternama dan dihadiri ribuan pencari kerja."
  },
  {
    id: 3,
    title: "Siswa PPLG Juara 1 Lomba Web Design Tingkat Provinsi",
    date: "28 September 2025",
    author: "Kesiswaan",
    category: "Prestasi",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    slug: "juara-web-design",
    excerpt: "Prestasi membanggakan kembali diraih oleh tim coding PPLG yang berhasil menyabet medali emas di ajang LKS Provinsi."
  },
  {
    id: 4,
    title: "Workshop Implementasi Kurikulum Merdeka bagi Guru",
    date: "15 September 2025",
    author: "Kurikulum",
    category: "Kegiatan Guru",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    slug: "workshop-kurikulum-merdeka",
    excerpt: "Para guru mengikuti pelatihan intensif selama 3 hari untuk mematangkan strategi pembelajaran berbasis proyek (PjBL)."
  },
  {
    id: 5,
    title: "Peringatan Maulid Nabi Muhammad SAW 1447 H",
    date: "10 September 2025",
    author: "OSIS",
    category: "Keagamaan",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop",
    slug: "maulid-nabi",
    excerpt: "Suasana khidmat mewarnai peringatan Maulid Nabi yang diisi dengan tausiyah akbar dan penampilan hadroh siswa."
  },
  {
    id: 6,
    title: "Uji Kompetensi Keahlian (UKK) Berjalan Lancar",
    date: "01 September 2025",
    author: "Humas",
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop",
    slug: "ukk-2025",
    excerpt: "Seluruh siswa kelas XII mengikuti ujian praktik akhir sebagai syarat kelulusan dengan penguji dari dunia industri."
  }
];

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-20 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kabar Nesapa</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Informasi terbaru, artikel, dan dokumentasi kegiatan di SMKN 1 Panyingkiran.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER (Visual Saja) */}
      <div className="container mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari berita..." 
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
             <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium whitespace-nowrap hover:bg-emerald-700 transition">
               Semua
             </button>
             <button className="px-6 py-3 bg-slate-100 text-slate-600 rounded-lg font-medium whitespace-nowrap hover:bg-slate-200 transition">
               Prestasi
             </button>
             <button className="px-6 py-3 bg-slate-100 text-slate-600 rounded-lg font-medium whitespace-nowrap hover:bg-slate-200 transition">
               Akademik
             </button>
          </div>
        </div>
      </div>

      {/* 3. GRID BERITA */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <article key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              
              {/* Gambar Berita */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {item.category}
                </div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Konten Berita */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{item.author}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
                  <Link href={`/berita/${item.slug}`}>
                    {item.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link 
                    href={`/berita/${item.slug}`} 
                    className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors gap-1 group/link"
                  >
                    Baca Selengkapnya 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </main>
  );
}