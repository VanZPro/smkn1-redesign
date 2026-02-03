import Link from "next/link";
import { ArrowRight } from "lucide-react";

const majors = [
  {
    id: "tjkt", // Pastikan nama file di folder public adalah tjkt.png
    name: "TJKT",
    fullName: "Teknik Jaringan Komputer & Telekomunikasi",
    desc: "Mempelajari instalasi, konfigurasi jaringan, dan teknologi fiber optik.",
    color: "bg-blue-50 border-blue-100", // Background kotak logo
  },
  {
    id: "pplg", // pplg.png
    name: "PPLG",
    fullName: "Pengembangan Perangkat Lunak & Gim",
    desc: "Fokus pada coding, pembuatan website, aplikasi mobile, dan game development.",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    id: "dkv", // dkv.png
    name: "DKV",
    fullName: "Desain Komunikasi Visual",
    desc: "Mengembangkan skill desain grafis, fotografi, videografi, dan branding.",
    color: "bg-orange-50 border-orange-100",
  },
  {
    id: "te", // te.png
    name: "TE",
    fullName: "Teknik Elektronika",
    desc: "Mendalami rangkaian elektronika, sistem robotika, dan otomasi industri.",
    color: "bg-red-50 border-red-100",
  },
  {
    id: "to", // to.png
    name: "TO",
    fullName: "Teknik Otomotif",
    desc: "Ahli dalam perawatan, perbaikan mesin kendaraan ringan, dan teknologi otomotif.",
    color: "bg-slate-100 border-slate-200",
  },
  {
    id: "tekmin", // tekmin.png
    name: "Tekmin",
    fullName: "Teknik Kimia Industri",
    desc: "Mempelajari proses produksi kimia, analisis laboratorium, dan pengolahan limbah.",
    color: "bg-teal-50 border-teal-100",
  },
  {
    id: "bc", // bc.png
    name: "Broadcast",
    fullName: "Broadcasting & Perfilman",
    desc: "Produksi konten televisi, film, penyutradaraan, dan teknik penyiaran.",
    color: "bg-purple-50 border-purple-100",
  },
  {
    id: "busana", // busana.png
    name: "Busana",
    fullName: "Tata Busana",
    desc: "Merancang pola, menjahit, fashion design, dan bisnis butik.",
    color: "bg-pink-50 border-pink-100",
  },
];

export default function MajorSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-3">
            Kompetensi Keahlian
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Pilih Masa Depanmu di Sini
          </h3>
          <p className="text-slate-600 text-lg">
            SMKN 1 Panyingkiran menyediakan 8 program keahlian unggulan yang relevan dengan kebutuhan industri saat ini.
          </p>
        </div>

        {/* Grid Card Jurusan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {majors.map((major) => (
            <div 
              key={major.id}
              className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* IMAGE WRAPPER - Menggantikan Icon Lama */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${major.color} border p-3 transition-transform group-hover:scale-105`}>
                <img 
                  src={`/${major.id}.png`} // Memanggil gambar dari folder public
                  alt={`Logo ${major.name}`}
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                {major.name}
              </h4>
              <p className="text-sm font-medium text-slate-500 mb-3 min-h-[40px]">
                {major.fullName}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {major.desc}
              </p>

              <Link 
                href={`/jurusan/${major.id}`} 
                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-700 transition-colors mt-auto"
              >
                Selengkapnya <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}