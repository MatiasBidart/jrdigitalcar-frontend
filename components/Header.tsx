"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/servicios", label: "Servicios" },
    { href:"/flotas", label: "Fleet Maintenance"}
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top bar */}
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/jrdigitalcar-logo.png"
              alt="logo"
              width={80}
              height={80}
              className="m-2 p-2"
            />
            <div className="hidden sm:block text-left">
              <div className="uppercase tracking-wider">
                <b>JR Digital Car S.R.L.</b>
              </div>
              <div className="text-xs text-gray-400">jrdigitalsrl@gmail.com</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 transition-colors min-w-14 text-center ${
                    active
                      ? "text-red-600"
                      : "text-white hover:text-red-600"
                  }`}
                >
                  {item.label}
                {active && (
                  <div className="absolute top-14 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-pink-500 shadow-[0_0_8px_2px_rgba(244,63,94,0.6)] rounded-full" />
                )}
                </Link>
              );
            })}

            <Link
              href="/contacto"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition-colors"
            >
              Contacto
            </Link> 
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >

            {isMenuOpen ? (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            ) : (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 transition-colors ${
                    active
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left py-3 px-4 bg-red-600 hover:bg-red-700 text-white mt-2 rounded-lg transition-colors"
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
