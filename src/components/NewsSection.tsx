import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Kunjungan Industri Jurusan TJKT ke PT Telkom Indonesia",
    date: "12 Oktober 2025",
    category: "Kunjungan Industri",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    slug: "kunjungan-industri-tjkt"
  },
  {
    id: 2,
    title: "Pelaksanaan Job Fair 2025: Ribuan Lulusan Hadir",
    date: "05 Oktober 2025",
    category: "BKK & Karir",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    slug: "job-fair-2025"
  },
  {
    id: 3,
    title: "Siswa PPLG Juara 1 Lomba Web Design Tingkat Provinsi",
    date: "28 September 2025",
    category: "Prestasi",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    slug: "juara-web-design"
  }
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Berita */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-2">
              Kabar Nesapa
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
              Berita & Agenda Terbaru
            </h3>
          </div>
          <Link 
            href="/berita" 
            className="group flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition-colors"
          >
            Lihat Semua Berita 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Gambar Berita */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {item.category}
                </div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Konten Berita */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-green-600 transition-colors">
                  <Link href={`/berita/${item.slug}`}>
                    {item.title}
                  </Link>
                </h4>
                
                <div className="mt-auto pt-4">
                  <Link 
                    href={`/berita/${item.slug}`} 
                    className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors inline-flex items-center gap-1"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}