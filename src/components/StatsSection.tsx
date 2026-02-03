import { Users, GraduationCap, Building2, Medal } from "lucide-react";

const stats = [
  { 
    label: "Peserta Didik", 
    value: "1,515", // Data Real Dapodik
    icon: <GraduationCap size={32} /> 
  },
  { 
    label: "Guru & Tendik", 
    value: "95", // Data Real PTK
    icon: <Users size={32} /> 
  },
  { 
    label: "Kompetensi Keahlian", 
    value: "8", // Jumlah Jurusan
    icon: <Building2 size={32} /> 
  },
  { 
    label: "Akreditasi", 
    value: "A", // Predikat Unggul
    icon: <Medal size={32} /> 
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-green-900 text-white relative overflow-hidden">
      {/* Pattern Background Tipis */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 group">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-800 rounded-2xl group-hover:bg-green-700 group-hover:scale-110 transition-all duration-300 shadow-lg text-green-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">{stat.value}</h3>
              <p className="text-green-200 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}