import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-slate-50 py-0">
      <div className="flex flex-col md:flex-row h-[500px]">
        
        {/* Bagian Info Teks (Sebelah Kiri/Atas) */}
        <div className="w-full md:w-1/3 bg-emerald-900 text-white p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-800 rounded-lg">
              <MapPin size={32} className="text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold">Lokasi Sekolah</h2>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">SMKN 1 Panyingkiran</h3>
          <p className="text-emerald-100 leading-relaxed mb-8">
            Jl. Kirapandak, Desa Karyamukti, <br />
            Kec. Panyingkiran, Kabupaten Majalengka, <br />
            Jawa Barat 45459
          </p>
          
          <a 
            href="https://maps.app.goo.gl/HKTUa9ZWhtBTMq1H7" // Bisa diganti link maps asli
            target="_blank"
            className="inline-block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Buka di Google Maps
          </a>
        </div>

        {/* Bagian Peta (Sebelah Kanan/Bawah) */}
        <div className="w-full md:w-2/3 h-full bg-slate-200">
          <iframe 
            title="Peta SMKN 1 Panyingkiran"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.794330572046!2d108.18216267367032!3d-6.801142893196249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2911c19d346d%3A0xa0da03d22daa93f5!2sSMK%20Negeri%201%20Panyingkiran!5e1!3m2!1sid!2sus!4v1770085335150!5m2!1sid!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </div>
    </section>
  );
}