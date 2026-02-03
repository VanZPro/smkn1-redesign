import { Quote } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* BAGIAN KIRI: Foto Kepala Sekolah */}
          <div className="w-full lg:w-1/3 relative">
            {/* Dekorasi Background di belakang foto */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-green-200 rounded-2xl z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-50 rounded-2xl z-0"></div>
            
            {/* Container Foto */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[3/4] group">
              <img
                // Nanti ganti link ini dengan foto asli Kepala Sekolah (upload ke folder public)
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="Kepala Sekolah SMKN 1 Panyingkiran"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Nama di Bawah Foto */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="font-bold text-lg">Nama Kepala Sekolah</p>
                <p className="text-sm text-green-300">Kepala SMKN 1 Panyingkiran</p>
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: Teks Sambutan */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-1 bg-green-600 rounded-full"></span>
              <span className="text-green-600 font-bold uppercase tracking-wider text-sm">
                Sambutan Kepala Sekolah
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Selamat Datang di Website Resmi <br />
              <span className="text-green-600">SMKN 1 Panyingkiran</span>
            </h2>

            <div className="relative">
              <Quote className="absolute -top-2 -left-4 text-green-100 w-16 h-16 -z-10 rotate-180" />
              
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-800">Assalamu'alaikum Wr. Wb.</span>
                </p>
                <p>
                  SMK Negeri 1 Panyingkiran merupakan <span className="font-semibold text-green-700">SMK Informatika Pertama di Majalengka</span>. 
                  Saat ini, kami bangga telah menjadi salah satu <span className="font-semibold text-green-700">SMK Pusat Keunggulan</span> di Kabupaten Majalengka.
                </p>
                <p>
                  Kami berkomitmen mencetak lulusan berkualitas melalui 8 program keahlian unggulan kami:
                </p>
                
                {/* List Jurusan dengan Grid agar rapi */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {[
                    "Teknik Jaringan Komputer & Telekomunikasi (TJKT)",
                    "Pengembangan Perangkat Lunak & Gim (PPLG)",
                    "Desain Komunikasi Visual (DKV)",
                    "Teknik Elektronika (TE)",
                    "Teknik Otomotif (TO)",
                    "Teknik Kimia Industri (Tekmin)",
                    "Broadcasting & Perfilman",
                    "Tata Busana"
                  ].map((jurusan, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                      {jurusan}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 italic text-slate-500">
                  "Mandiri, Terampil, Profesional."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}