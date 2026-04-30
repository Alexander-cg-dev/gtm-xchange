"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";
import type { User } from "@supabase/supabase-js";

const navLinks = [
  {
    label: "Beneficios",
    dropdown: [
      { label: "Promociones",              href: "#promociones" },
      { label: "Alertas de Tipo de Cambio", href: "#alertas" },
      { label: "Puntos GTM",               href: "#puntos" },
    ],
  },
  { label: "Blog",  href: "#blog" },
  { label: "Ayuda", href: "#ayuda" },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [user,         setUser]         = useState<User | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-[0_2px_20px_rgba(27,79,160,0.10)]" : "bg-white/96 backdrop-blur-sm"
      }`}
    >
      <div
        className="container-site"
        style={{ paddingInline: "clamp(2.5rem, 6vw, 6rem)" }}
      >
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/brand/logo-color.png"
              alt="GTM Xchange"
              width={180} height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-[#0A1628] hover:text-[#1B4FA0] transition-colors rounded-lg hover:bg-blue-50"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown size={15} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 py-1 z-50"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.dropdown.map(item => (
                        <a key={item.label} href={item.href}
                          className="block px-4 py-2.5 text-[14px] text-[#0A1628] hover:bg-blue-50 hover:text-[#1B4FA0] transition-colors">
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.label} href={link.href}
                  className="px-4 py-2 text-[15px] font-medium text-[#0A1628] hover:text-[#1B4FA0] transition-colors rounded-lg hover:bg-blue-50">
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <Link
                href="/dashboard"
                className="px-5 py-2 text-[15px] font-semibold text-white bg-[#1B4FA0] rounded-xl hover:bg-[#143D7A] transition-colors shadow-sm"
              >
                Mi cuenta
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="px-5 py-2 text-[15px] font-semibold text-[#1B4FA0] border-2 border-[#1B4FA0] rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/auth/registro"
                  className="px-5 py-2 text-[15px] font-semibold text-white bg-[#E84518] rounded-xl hover:bg-[#C43A12] transition-colors shadow-[0_4px_14px_rgba(232,69,24,0.30)]"
                >
                  Regístrate
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          {navLinks.map(link =>
            link.dropdown ? (
              <div key={link.label}>
                <p className="px-2 py-2 text-[12px] font-bold text-[#6B7A90] uppercase tracking-wide">{link.label}</p>
                {link.dropdown.map(item => (
                  <a key={item.label} href={item.href}
                    className="block px-4 py-2 text-[15px] text-[#0A1628] hover:text-[#1B4FA0]"
                    onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            ) : (
              <a key={link.label} href={link.href}
                className="block px-2 py-2.5 text-[15px] font-medium text-[#0A1628] hover:text-[#1B4FA0]"
                onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            )
          )}
          <div className="pt-3 flex flex-col gap-2">
            {user ? (
              <Link href="/dashboard"
                className="w-full text-center px-5 py-2.5 text-[15px] font-semibold text-white bg-[#1B4FA0] rounded-xl">
                Mi cuenta
              </Link>
            ) : (
              <>
                <Link href="/auth/login"
                  className="w-full text-center px-5 py-2.5 text-[15px] font-semibold text-[#1B4FA0] border-2 border-[#1B4FA0] rounded-xl">
                  Iniciar sesión
                </Link>
                <Link href="/auth/registro"
                  className="w-full text-center px-5 py-2.5 text-[15px] font-semibold text-white bg-[#E84518] rounded-xl">
                  Regístrate gratis
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
