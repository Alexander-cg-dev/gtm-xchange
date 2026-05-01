import { Calculator, Send, Banknote } from "lucide-react";

const steps = [
  {
    icon: Calculator,
    num: "01",
    title: "Cotiza",
    body: "Usa nuestra calculadora para saber exactamente cuánto recibirás. Sin sorpresas, sin letras pequeñas.",
  },
  {
    icon: Send,
    num: "02",
    title: "Transfiere",
    body: "Deposítanos el dinero desde tu banco online o app bancaria. Guarda el voucher de transferencia.",
  },
  {
    icon: Banknote,
    num: "03",
    title: "Recibe",
    body: "Enviamos tu cambio directamente a tu cuenta en un estimado de 15 minutos. Así de simple.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10">

        {/* ─ What is GTM Xchange ─ */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[13px] font-bold text-[#E84518] uppercase tracking-widest mb-3">
            ¿Qué es GTM Xchange?
          </p>
          <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0A1628] leading-tight mb-4">
            Tu casa de cambio digital,{" "}
            <span className="text-[#1B4FA0]">rápida y confiable</span>
          </h2>
          <p className="text-[17px] text-[#6B7A90] leading-relaxed">
            GTM Xchange es una plataforma de cambio de divisas 100% online en Perú.
            Nuestro enfoque: darte el mejor tipo de cambio con transacciones ágiles y
            atención personalizada que no encontrarás en ningún banco ni casa de cambio
            tradicional.
          </p>
        </div>

        {/* ─ Steps ─ */}
        <p className="text-[13px] font-bold text-[#1B4FA0] uppercase tracking-widest mb-8 text-center">
          ¿Cómo usar GTM Xchange?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, num, title, body }) => (
            <div
              key={num}
              className="bg-[#F5F7FA] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-[0_8px_32px_rgba(27,79,160,0.11)] transition-shadow duration-300"
            >
              {/* Number + icon row */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Icon size={22} className="text-[#1B4FA0]" strokeWidth={1.8} />
                </div>
                <span className="text-[36px] font-black text-[#1B4FA0]/15 leading-none tabular-nums select-none">
                  {num}
                </span>
              </div>
              <h3 className="text-[20px] font-bold text-[#0A1628]">{title}</h3>
              <p className="text-[15px] text-[#6B7A90] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
