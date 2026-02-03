import { Trophy, Music,  Users, Heart, Star, Shield, Camera,  Monitor, PenTool } from "lucide-react";

const ekskuls = [
  { name: "Pramuka", category: "Wajib", icon: <Shield size={32} />, color: "bg-orange-100 text-orange-600", desc: "Membentuk karakter disiplin, mandiri, dan cinta alam." },
  { name: "Paskibra", category: "Kepemimpinan", icon: <Users size={32} />, color: "bg-red-100 text-red-600", desc: "Melatih baris-berbaris dan jiwa nasionalisme." },
  { name: "PMR & UKS", category: "Kesehatan", icon: <Heart size={32} />, color: "bg-pink-100 text-pink-600", desc: "Keterampilan pertolongan pertama dan pola hidup sehat." },
  { name: "Rohis (IRM)", category: "Keagamaan", icon: <Star size={32} />, color: "bg-green-100 text-green-600", desc: "Memperdalam ilmu agama Islam dan kegiatan sosial." },
  { name: "Futsal & Voli", category: "Olahraga", icon: <Trophy size={32} />, color: "bg-blue-100 text-blue-600", desc: "Menyalurkan bakat olahraga dan meraih prestasi." },
  { name: "Seni Musik/Tari", category: "Kesenian", icon: <Music size={32} />, color: "bg-purple-100 text-purple-600", desc: "Wadah kreativitas seni musik tradisional dan modern." },
  { name: "English Club", category: "Bahasa", icon: <PenTool size={32} />, color: "bg-yellow-100 text-yellow-600", desc: "Meningkatkan kemampuan conversation dan storytelling." },
  { name: "IT Club / Coding", category: "Teknologi", icon: <Monitor size={32} />, color: "bg-cyan-100 text-cyan-600", desc: "Komunitas pecinta koding dan teknologi digital." },
  { name: "Cinematography", category: "Media", icon: <Camera size={32} />, color: "bg-indigo-100 text-indigo-600", desc: "Belajar fotografi, videografi, dan jurnalistik sekolah." },
];

export default function KesiswaanPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kesiswaan & Ekstrakurikuler</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Wadah pengembangan bakat, minat, dan karakter siswa SMKN 1 Panyingkiran di luar jam pelajaran.
          </p>
        </div>
      </section>

      {/* 2. OSIS SECTION */}
      <section className="py-16 container mx-auto px-4">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-sm border border-slate-100">
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-white p-2">
               {/* Ganti dengan foto Ketua OSIS nanti */}
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop" 
                alt="Ketua OSIS" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Organisasi Siswa Intra Sekolah</span>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">OSIS SMKN 1 Panyingkiran</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              OSIS merupakan induk organisasi siswa yang berperan aktif dalam menggerakkan kegiatan siswa, melatih kepemimpinan, dan menjadi jembatan aspirasi siswa dengan pihak sekolah.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 font-medium text-slate-700">
                ⭐ Latihan Dasar Kepemimpinan
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 font-medium text-slate-700">
                ⭐ Class Meeting
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 font-medium text-slate-700">
                ⭐ Peringatan Hari Besar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DAFTAR EKSKUL */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">Ekstrakurikuler</h2>
          <p className="text-slate-500 mt-2">Pilih kegiatan yang sesuai dengan minat dan bakatmu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ekskuls.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}