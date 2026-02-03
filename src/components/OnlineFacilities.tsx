import Link from "next/link";
import { 
  Globe, 
  Wifi, 
  Monitor, 
  MessageCircle, 
  Library, 
  BookOpen, 
  Users, 
  UserPlus, 
  LayoutDashboard 
} from "lucide-react";

const facilities = [
  {
    icon: <Globe size={32} />,
    title: "Website Sekolah",
    desc: "Melalui website sekolah, seluruh civitas akademika dapat mengetahui informasi sekolah secara online.",
    linkText: "Official Website SMKN 1 Panyingkiran",
    linkUrl: "/"
  },
  {
    icon: <Wifi size={32} />,
    title: "Jaringan Internet",
    desc: "Tersedia berbagai area layanan jaringan internet yang dapat dinikmati di seluruh wilayah sekolah.",
    linkText: "",
    linkUrl: ""
  },
  {
    icon: <Monitor size={32} />, // Menggantikan ikon Lab/Bengkel
    title: "Laboratorium/Bengkel",
    desc: "Fasilitas pembelajaran serta sarana prasarana yang tersedia dalam laboratorium / bengkel secara lengkap.",
    linkText: "",
    linkUrl: ""
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Chat",
    desc: "Komunikasi chat yang dapat dilakukan di perangkat PC, Tab maupun HP untuk layanan pengaduan.",
    linkText: "",
    linkUrl: ""
  },
  {
    icon: <Library size={32} />,
    title: "Perpustakaan Digital",
    desc: "Berkunjung ke perpustakaan dapat dilakukan secara langsung maupun online melalui Sistem Aplikasi.",
    linkText: "Sistem Aplikasi Perpustakaan",
    linkUrl: "#"
  },
  {
    icon: <BookOpen size={32} />,
    title: "E-Learning",
    desc: "Belajar secara online dimanapun dan kapanpun tanpa dibatasi ruang dan waktu.",
    linkText: "E-Learning SMKN 1 Panyingkiran",
    linkUrl: "#"
  },
  {
    icon: <Users size={32} />,
    title: "Forum",
    desc: "Survey atau masukan kritik dan saran yang membangun untuk kemajuan sekolah.",
    linkText: "",
    linkUrl: ""
  },
  {
    icon: <UserPlus size={32} />,
    title: "PPDB",
    desc: "Pendaftaran siswa dapat dilakukan langsung secara online melalui laman Website PPDB.",
    linkText: "Website PPDB SMKN 1 Panyingkiran",
    linkUrl: "/ppdb"
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Sistem Informasi Sekolah",
    desc: "Informasi kegiatan pembelajaran, ekstrakurikuler, serta perkembangan siswa dapat dilihat melalui website.",
    linkText: "",
    linkUrl: ""
  },
];

export default function OnlineFacilities() {
  return (
    <section className="bg-white pb-20">
      
      {/* HEADER SECTION HIJAU */}
      <div className="relative bg-emerald-500 py-10 mb-16">
        <h2 className="text-center text-3xl font-bold text-white uppercase tracking-wider">
          Fasilitas Online
        </h2>
        
        {/* Segitiga Panah Bawah (CSS Shape) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] w-0 h-0 
          border-l-[20px] border-l-transparent
          border-r-[20px] border-r-transparent
          border-t-[20px] border-t-emerald-500">
        </div>
      </div>

      {/* GRID KONTEN */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {facilities.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              {/* Icon di Kiri */}
              <div className="flex-shrink-0 text-emerald-500 mt-1 transition-transform group-hover:scale-110 duration-300">
                {item.icon}
              </div>
              
              {/* Teks di Kanan */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  {item.desc}
                </p>
                {item.linkText && (
                  <Link 
                    href={item.linkUrl} 
                    className="text-sm text-emerald-500 hover:text-emerald-700 font-medium transition-colors"
                  >
                    {item.linkText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}