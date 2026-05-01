"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-[#1B4FA0]">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-6">

          <div>
            <p className="text-[13px] font-bold text-white/55 uppercase tracking-widest mb-3">
              Mantente al tanto
            </p>
            <h2 className="text-[30px] sm:text-[36px] font-bold text-white leading-tight">
              No pierdas ninguna oportunidad de cambio
            </h2>
            <p className="text-[16px] text-white/65 mt-3">
              Suscríbete y recibe alertas, análisis del tipo de cambio y un cupón especial de bienvenida.
            </p>
          </div>

          {sent ? (
            <div className="flex items-center justify-center gap-3 bg-white/12 rounded-2xl px-6 py-5 border border-white/20">
              <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
              <p className="text-white font-semibold">¡Listo! Te enviamos un cupón especial a tu correo.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-white/12 border border-white/25 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors text-[15px]"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#E84518] hover:bg-[#C43A12] text-white font-bold text-[15px] rounded-xl transition-all shadow-[0_4px_16px_rgba(232,69,24,0.40)] hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Send size={15} />
                Suscribirme
              </button>
            </form>
          )}

          <p className="text-[12px] text-white/35">
            Sin spam. Puedes darte de baja cuando quieras.
          </p>

        </div>
      </div>
    </section>
  );
}
