"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Jurusan", href: "/jurusan" },
    { name: "Kesiswaan", href: "/kesiswaan" },
    { name: "Berita", href: "/berita" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
{/* LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center gap-3">
            
            {/* INI BAGIAN BARUNYA: Langsung panggil img */}
            <img 
              src="/logo-head-smkn1panyingkiran.png" 
              alt="Logo SMKN 1 Panyingkiran"
              className="w-15 h-10 object-contain" 
            />
            
            <Link href="/" className="font-bold text-xl text-slate-800 tracking-tight">
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/ppdb"
                className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition-all shadow-green-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                PPDB / E-Learning
              </Link>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-green-600 hover:bg-green-50 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-green-600 hover:bg-green-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/ppdb"
              className="w-full mt-4 block text-center bg-green-600 text-white px-3 py-3 rounded-lg text-base font-medium hover:bg-green-700 shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Akses PPDB & E-Learning
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}