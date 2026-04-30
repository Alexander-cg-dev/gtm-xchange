"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    name: "Diana Cueva", role: "Usuaria independiente", init: "DC", bg: "#1B4FA0",
    text: "Súper sencillo hacer mis cambios con GTM Xchange. La plataforma me da mucha seguridad y el tipo de cambio siempre es mejor que el del banco. ¡Totalmente recomendado!",
  },
  {
    name: "Jean Essenwanger", role: "Empresario", init: "JE", bg: "#E84518",
    text: "GTM Xchange tiene una plataforma muy amigable que me ayuda a ganarle tiempo al día. Cambio mis dólares de forma rápida y su equipo de atención al cliente es excelente.",
  },
  {
    name: "Nicole Rodríguez", role: "Freelancer", init: "NR", bg: "#059669",
    text: "Lo probé hace un mes y superó mis expectativas. Mejor tasa que en la calle y mil veces más seguro. No volvería a cambiar en otro lugar.",
  },
  {
    name: "Milagros Luján", role: "Contadora", init: "ML", bg: "#7C3AED",
    text: "Lo que más me gustó fue la atención. Un día tuve un problema con una transferencia y me lo resolvieron en menos de una hora. Esa atención personalizada marca la diferencia.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

function Card({ item }: { item: typeof items[0] }) {
  return (
    <div className="bg-[#F5F7FA] rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0" style={{ background: item.bg }}>
          {item.init}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#0A1628] leading-tight">{item.name}</p>
          <p className="text-[12px] text-[#6B7A90]">{item.role}</p>
        </div>
      </div>
      <Stars />
      <p className="text-[14px] text-[#6B7A90] leading-relaxed">"{item.text}"</p>
    </div>
  );
}

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  return (
    <section className="py-20 bg-white">
      <div className="site-wrap">

        <div className="text-center mb-12">
          <p className="text-[13px] font-bold text-[#E84518] uppercase tracking-widest mb-3">Comunidad GTM</p>
          <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0A1628] leading-tight">
            Lo que dicen <span className="text-[#1B4FA0]">nuestros usuarios</span>
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(item => <Card key={item.name} item={item} />)}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Card item={items[cur]} />
          <div className="flex justify-center items-center gap-3 mt-4">
            <button onClick={() => setCur(c => (c === 0 ? items.length - 1 : c - 1))}
              className="w-10 h-10 rounded-full border-2 border-[#1B4FA0] text-[#1B4FA0] flex items-center justify-center hover:bg-[#1B4FA0] hover:text-white transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {items.map((_, i) => (
                <button key={i} onClick={() => setCur(i)}
                  className={`rounded-full transition-all ${i === cur ? "w-5 h-2 bg-[#1B4FA0]" : "w-2 h-2 bg-gray-300"}`} />
              ))}
            </div>
            <button onClick={() => setCur(c => (c === items.length - 1 ? 0 : c + 1))}
              className="w-10 h-10 rounded-full border-2 border-[#1B4FA0] text-[#1B4FA0] flex items-center justify-center hover:bg-[#1B4FA0] hover:text-white transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[18px] font-semibold text-[#0A1628] mb-5">
            Únete a esta increíble comunidad —{" "}
            <span className="text-[#1B4FA0]">¡Solo faltas tú!</span>
          </p>
          <a href="/auth/registro"
            className="inline-block px-10 py-4 bg-[#1B4FA0] hover:bg-[#143D7A] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_4px_18px_rgba(27,79,160,0.28)] hover:-translate-y-0.5">
            Regístrate ahora
          </a>
        </div>

      </div>
    </section>
  );
}
