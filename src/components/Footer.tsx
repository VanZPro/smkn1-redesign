import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Identitas Sekolah */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-foot-smkn1panyingkiran.png" alt="Logo" className="w- h-10 object-contain" />

            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              SMK Pusat Keunggulan yang mencetak generasi unggul, mandiri, dan siap kerja di era digital.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Akses Cepat</h3>
            <ul className="space-y-3">
              {['Profil Sekolah', 'Program Keahlian', 'Guru & Staff', 'PPDB Online', 'E-Learning'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-emerald-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Program Keahlian */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Jurusan</h3>
            <ul className="space-y-3 text-sm">
              <li>Teknik Jaringan Komputer</li>
              <li>Rekayasa Perangkat Lunak</li>
              <li>Desain Komunikasi Visual</li>
              <li>Teknik Otomotif</li>
              <li>Teknik Elektronika</li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Jl. Kirapandak, Desa Karyamukti, Kec. Panyingkiran, Majalengka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-500 flex-shrink-0" />
                <span>(0233) 282985</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-500 flex-shrink-0" />
                <span>info@smkn1panyingkiran.sch.id</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SMKN 1 Panyingkiran. Developed by Evan.</p>
        </div>
      </div>
    </footer>
  );
}