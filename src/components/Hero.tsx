import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image Sekolah */}
      <div className="absolute inset-0 z-0">
        <img
          // Ganti link ini dengan foto asli sekolah nanti (misal: gerbang sekolah)
          src="background.jpg"
          alt="Background SMKN 1 Panyingkiran"
          className="w-full h-full object-cover"
        />
        {/* Overlay Hijau Tua Transparan */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-emerald-900/70"></div>
      </div>

      {/* 2. Konten Utama */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-10">
        
        {/* Badge Animasi */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-800/50 border border-green-500/30 text-green-100 text-sm font-medium mb-6 backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          SMK Pusat Keunggulan - Majalengka
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          Mewujudkan Generasi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
            Mandiri & Profesional
          </span>
        </h1>

        <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Selamat datang di website resmi SMKN 1 Panyingkiran. 
          Pusat pendidikan vokasi unggulan dengan fasilitas teknologi terkini.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/jurusan" 
            className="group px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] flex items-center gap-2"
          >
            Lihat Kompetensi Keahlian
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/profil" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all flex items-center gap-2"
          >
            Tentang Kami
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>

      {/* Ornamen Gelombang Bawah (Transisi ke konten) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
}