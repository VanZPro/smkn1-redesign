import Link from "next/link";
import { ArrowLeft, CheckCircle2, Briefcase, GraduationCap, Trophy } from "lucide-react";

// DATA LENGKAP JURUSAN + PRESTASI (Data Real dari Website Sekolah)
const majorsData: Record<string, any> = {
  tjkt: {
    title: "Teknik Jaringan Komputer & Telekomunikasi",
    short: "TJKT",
    desc: "Mempelajari seluk-beluk dunia jaringan, mulai dari instalasi LAN/WAN, konfigurasi server, teknologi fiber optik, hingga keamanan jaringan (Cyber Security).",
    image: "/tjkt.png", 
    competencies: [
      "Instalasi & Konfigurasi Jaringan (LAN, WAN, Wifi)",
      "Administrasi Server & Cloud Computing",
      "Teknologi Fiber Optik",
      "Keamanan Jaringan & Troubleshooting",
      "IoT (Internet of Things) Dasar"
    ],
    // DATA BARU: PRESTASI
    achievements: [
      "Juara 2 Lomba Kompetensi Siswa (LKS) 2023 - IT Network System Administration (Kab. Majalengka)",
      "Juara 3 Kostum Terbaik Greget Paskibraka Kab. Majalengka",
      "Partisipasi Aktif Program 'Mikrotik Academy'"
    ],
    careers: [
      "Network Engineer",
      "IT Support / Helpdesk",
      "Server Administrator",
      "Teknisi Jaringan & CCTV",
      "Cyber Security Analyst"
    ],
    color: "bg-blue-600"
  },
  pplg: {
    title: "Pengembangan Perangkat Lunak & Gim",
    short: "PPLG",
    desc: "Jurusan bagi para calon programmer masa depan. Fokus mempelajari coding, pembuatan website, aplikasi Android, database, hingga pengembangan game sederhana.",
    image: "/pplg.png",
    competencies: [
      "Pemrograman Web (HTML, CSS, JS, PHP, Framework)",
      "Pemrograman Mobile (Android/Flutter)",
      "Basis Data (SQL & NoSQL)",
      "Pemrograman Berorientasi Objek (Java/C#)",
      "Game Development Dasar"
    ],
    achievements: [
      "Juara 1 Lomba Kompetensi Siswa (LKS) 2023 - IT Software Solutions For Business (Kab. Majalengka)",
      "Juara Kameumeut Wanoja Jajaka Budaya Jawa Barat 2023",
      "Juara 2 O2SN 2023 Badminton Tunggal Putri (Tk. Kabupaten)"
    ],
    careers: [
      "Web Developer",
      "Mobile App Developer",
      "Game Programmer",
      "UI/UX Designer",
      "Software Tester"
    ],
    color: "bg-indigo-600"
  },
  dkv: {
    title: "Desain Komunikasi Visual",
    short: "DKV",
    desc: "Mengasah kreativitas dalam menyampaikan pesan visual. Mempelajari desain grafis, fotografi, videografi, ilustrasi, hingga branding produk.",
    image: "/dkv.png",
    competencies: [
      "Desain Grafis (Corel, Illustrator, Photoshop)",
      "Fotografi & Videografi",
      "Desain Publikasi & Packaging",
      "Videografi & Editing Video",
      "Animasi 2D Dasar"
    ],
    achievements: [
      "Juara 1 Lomba Kompetensi Siswa (LKS) 2023 - Graphic Design Technology (Kab. Majalengka)",
      "Juara 4 Lomba Desain Maskot Universitas Majalengka (Umum)",
      "Juara 2 O2SN 2023 Kata Perorangan Puteri (Karate)"
    ],
    careers: [
      "Graphic Designer",
      "Photographer / Videographer",
      "Video Editor",
      "Social Media Content Creator",
      "Illustrator"
    ],
    color: "bg-orange-500"
  },
  te: {
    title: "Teknik Elektronika",
    short: "TE",
    desc: "Mendalami rekayasa elektronika industri, sistem kendali otomatis, robotika, dan pemrograman mikrokontroler.",
    image: "/te.png",
    competencies: [
      "Gambar Teknik Elektronika",
      "Pemrograman Mikrokontroler & IoT",
      "Pneumatik & Hidrolik",
      "Sistem Robotika",
      "Perbaikan Peralatan Elektronik Audio Video"
    ],
    achievements: [
      "Juara LKS Bidang Electronics Application (Tingkat Kabupaten)",
      "Pengembangan Inovasi Robotika Sekolah",
      "Partisipasi Lomba Robotik Tingkat Provinsi"
    ],
    careers: [
      "Teknisi Elektronika Industri",
      "Programmer Robotika",
      "Teknisi Service Elektronik",
      "Maintenance Engineer",
      "Operator Mesin Otomasi"
    ],
    color: "bg-red-600"
  },
  to: {
    title: "Teknik Otomotif",
    short: "TO",
    desc: "Ahli dalam perawatan dan perbaikan kendaraan bermotor. Mempelajari mesin mobil/motor, sistem kelistrikan bodi, hingga teknologi mobil injeksi terkini.",
    image: "/to.png",
    competencies: [
      "Pemeliharaan Mesin Kendaraan Ringan",
      "Sistem Kelistrikan Otomotif",
      "Chasis & Pemindah Tenaga",
      "Teknologi Mobil Listrik/Hybrid Dasar",
      "Service Berkala Mobil/Motor"
    ],
    achievements: [
      "Juara LKS Bidang Automobile Technology (Tingkat Kabupaten)",
      "Kerjasama Kelas Industri dengan Yamaha/Honda",
      "Unit Produksi Jasa Service Sepeda Motor Terbaik"
    ],
    careers: [
      "Mekanik Mobil/Motor",
      "Service Advisor",
      "Teknisi Showroom",
      "Wirausaha Bengkel Otomotif",
      "Operator Perakitan Otomotif"
    ],
    color: "bg-slate-700"
  },
  tekmin: {
    title: "Teknik Kimia Industri",
    short: "Tekmin",
    desc: "Fokus pada proses industri kimia, pengoperasian peralatan pabrik kimia, analisis laboratorium dasar, dan pengolahan limbah industri.",
    image: "/tekmin.png",
    competencies: [
      "Analisis Kimia Dasar & Instrumen",
      "Operasi Teknik Kimia",
      "Mikrobiologi Industri",
      "Pengolahan Limbah Industri",
      "K3 Lingkungan Kerja"
    ],
    achievements: [
      "Juara LKS Chemistry (Tingkat Kabupaten)",
      "Inovasi Produk Sabun & Deterjen Sekolah",
      "Pengolahan Limbah Ramah Lingkungan"
    ],
    careers: [
      "Operator Pabrik Kimia",
      "Quality Control (QC) Lab",
      "Teknisi Pengolahan Limbah",
      "Analis Laboratorium",
      "Wirausaha Produk Kimia (Sabun, dll)"
    ],
    color: "bg-teal-600"
  },
  bc: {
    title: "Broadcasting & Perfilman",
    short: "Broadcast",
    desc: "Mempelajari dunia penyiaran televisi, radio, dan produksi film. Mulai dari penulisan naskah, penyutradaraan, kamera, hingga editing pasca produksi.",
    image: "/bc.png",
    competencies: [
      "Teknik Pengambilan Gambar (Kamera)",
      "Tata Cahaya & Tata Suara",
      "Penulisan Naskah (Scriptwriting)",
      "Editing Video & Audio",
      "Produksi Program TV & Film Pendek"
    ],
    achievements: [
      "Juara 5 Festival Lomba Seni Siswa Nasional (FLS2N) 2023 - Film Pendek (Tk. Provinsi)",
      "50 Video Terpilih Anugerah Ajang Video 4 Pilar MPR RI",
      "Juara Fotografi Jurnalistik Pelajar"
    ],
    careers: [
      "Cameraman",
      "Video Editor",
      "Scriptwriter",
      "Sutradara / Produser",
      "News Anchor / Reporter"
    ],
    color: "bg-purple-600"
  },
  busana: {
    title: "Tata Busana",
    short: "Busana",
    desc: "Mengembangkan bakat fashion design. Mempelajari cara membuat pola, teknik menjahit, desain busana digital, hingga manajemen bisnis butik.",
    image: "/busana.png",
    competencies: [
      "Desain Busana (Manual & Digital)",
      "Pembuatan Pola (Pattern Making)",
      "Teknik Menjahit & Finishing",
      "Menghias Busana (Embroidery)",
      "Produksi Busana Custom & Industri"
    ],
    achievements: [
      "Juara 1 Lomba Kompetensi Siswa (LKS) 2023 - Fashion Technology (Kab. Majalengka)",
      "Juara 2 Karate Open Tournament Bupati Kuningan Cup 1 (Siswa Busana)",
      "Pagelaran Busana Tahunan (Fashion Show)"
    ],
    careers: [
      "Fashion Designer",
      "Pattern Maker",
      "Tailor / Modiste",
      "Fashion Stylist",
      "Pengusaha Butik / Distro"
    ],
    color: "bg-pink-600"
  },
};

export default async function DetailJurusan({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const major = majorsData[id];

  if (!major) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Maaf, jurusan yang Anda cari tidak ditemukan.</p>
        <Link href="/" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
          Kembali ke Beranda
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* HERO SECTION */}
      <section className={`relative py-24 ${major.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Kembali ke Beranda
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl p-4 flex items-center justify-center shadow-xl">
              <img 
                src={major.image} 
                alt={major.short} 
                className="w-full h-full object-contain"
              />
              <span className="sr-only">{major.short}</span>
            </div>
            
            <div>
              <span className="inline-block py-1 px-3 rounded-lg bg-white/20 backdrop-blur-sm text-sm font-medium mb-3 border border-white/30">
                Kompetensi Keahlian
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {major.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                {major.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTEN DETAIL */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI (Kompetensi & Prestasi) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Card Kompetensi */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <GraduationCap className="text-green-600" /> Apa yang akan dipelajari?
              </h2>
              <ul className="space-y-4">
                {major.competencies.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Card PRESTASI (BARU) */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Trophy className="text-yellow-500" /> Prestasi Membanggakan
              </h2>
              <div className="space-y-4">
                {major.achievements && major.achievements.length > 0 ? (
                  major.achievements.map((item: string, index: number) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                      <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center flex-shrink-0 text-yellow-700">
                        <Trophy size={18} />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 italic">Belum ada data prestasi spesifik yang ditampilkan.</p>
                )}
              </div>
            </div>

          </div>

          {/* KOLOM KANAN (Prospek Kerja) */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-600" /> Prospek Karir
              </h2>
              <div className="space-y-3">
                {major.careers.map((job: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 text-slate-600 border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    {job}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-2">Tertarik jurusan ini?</h3>
                <Link 
                  href="/ppdb" 
                  className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                >
                  Daftar PPDB Sekarang
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}