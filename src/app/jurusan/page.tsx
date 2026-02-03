import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

// Data Jurusan (Sama seperti di Homepage tapi kita gunakan lagi di sini)
const majors = [
  {
    id: "tjkt",
    name: "TJKT",
    fullName: "Teknik Jaringan Komputer & Telekomunikasi",
    desc: "Mempelajari instalasi, konfigurasi jaringan, teknologi fiber optik, dan keamanan siber.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    id: "pplg",
    name: "PPLG",
    fullName: "Pengembangan Perangkat Lunak & Gim",
    desc: "Fokus pada coding, pembuatan website, aplikasi mobile Android/iOS, dan game development.",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    id: "dkv",
    name: "DKV",
    fullName: "Desain Komunikasi Visual",
    desc: "Mengembangkan skill desain grafis, fotografi, videografi, percetakan, dan branding.",
    color: "bg-orange-50 border-orange-100",
  },
  {
    id: "te",
    name: "TE",
    fullName: "Teknik Elektronika",
    desc: "Mendalami rangkaian elektronika, sistem robotika, mikrokontroler, dan otomasi industri.",
    color: "bg-red-50 border-red-100",
  },
  {
    id: "to",
    name: "TO",
    fullName: "Teknik Otomotif",
    desc: "Ahli dalam perawatan mesin kendaraan ringan, kelistrikan otomotif, dan teknologi injeksi.",
    color: "bg-slate-100 border-slate-200",
  },
  {
    id: "tekmin",
    name: "Tekmin",
    fullName: "Teknik Kimia Industri",
    desc: "Mempelajari proses produksi kimia, analisis laboratorium, dan pengolahan limbah industri.",
    color: "bg-teal-50 border-teal-100",
  },
  {
    id: "bc",
    name: "Broadcast",
    fullName: "Broadcasting & Perfilman",
    desc: "Produksi konten televisi, radio, film pendek, penulisan naskah, dan editing video.",
    color: "bg-purple-50 border-purple-100",
  },
  {
    id: "busana",
    name: "Busana",
    fullName: "Tata Busana",
    desc: "Merancang pola, menjahit, fashion design, dan manajemen bisnis butik/clothing.",
    color: "bg-pink-50 border-pink-100",
  },
];

export default function JurusanPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <BookOpen size={18} className="text-green-400" />
            <span className="text-sm font-medium">Kurikulum Merdeka & Industri</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Keahlian</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            SMKN 1 Panyingkiran memiliki 8 kompetensi keahlian unggulan yang siap mencetak lulusan profesional dan kompeten di bidangnya.
          </p>
        </div>
      </section>

      {/* 2. GRID JURUSAN */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {majors.map((major) => (
            <div 
              key={major.id}
              className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* IMAGE WRAPPER */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${major.color} border p-3 transition-transform group-hover:scale-105`}>
                <img 
                  src={`/${major.id}.png`}
                  alt={`Logo ${major.name}`}
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>

              <div className="flex-grow">
                <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                  {major.name}
                </h4>
                <p className="text-sm font-medium text-slate-500 mb-3">
                  {major.fullName}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {major.desc}
                </p>
              </div>

              <Link 
                href={`/jurusan/${major.id}`} 
                className="w-full mt-auto inline-flex justify-center items-center py-3 px-4 rounded-lg bg-slate-50 text-slate-700 font-semibold text-sm hover:bg-green-600 hover:text-white transition-all group-hover:shadow-md"
              >
                Lihat Detail <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}