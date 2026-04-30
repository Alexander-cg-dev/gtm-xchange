"use client";

import { useState, useEffect } from "react";
import { ArrowLeftRight, Info, ShieldCheck, ChevronDown } from "lucide-react";

const COMPRA = 3.486;
const VENTA  = 3.522;
const BANKS  = ["BCP", "Interbank", "BBVA", "Scotiabank", "Yape", "Plin"];

type Cur = "USD" | "PEN";

export default function Hero() {
  const [mode, setMode]       = useState<"personas"|"empresas">("personas");
  const [amount, setAmount]   = useState("1000");
  const [from, setFrom]       = useState<Cur>("USD");
  const [to, setTo]           = useState<Cur>("PEN");
  const [secs, setSecs]       = useState(210);

  /* countdown timer */
  useEffect(() => {
    const t = setInterval(() => setSecs(s => s <= 0 ? 210 : s - 1), 1000);
    return () => clearInterval(t);
  }, []);

  const n        = parseFloat(amount) || 0;
  const received = from === "USD" ? (n * VENTA).toFixed(2) : (n / COMPRA).toFixed(2);
  const saving   = from === "USD" ? ((VENTA - (VENTA - 0.04)) * n).toFixed(2)
                                  : ((n / (COMPRA + 0.04)) - (n / COMPRA)).toFixed(2);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(received);
  };

  const mm = Math.floor(secs / 60);
  const ss = (secs % 60).toString().padStart(2, "0");

  return (
    <section
      style={{ marginTop: 72 }}
      className="bg-gradient-to-br from-[#EEF4FF] via-white to-[#FFF2EE] py-16 lg:py-24"
    >
      <div className="site-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── Left: copy ─── */}
          <div className="flex flex-col gap-6">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 self-start bg-white border border-[#1B4FA0]/20 rounded-full px-4 py-1.5 text-[13px] font-medium text-[#1B4FA0] shadow-sm">
              <ShieldCheck size={14} />
              Registrado en SBS-UIF · 100% seguro
            </span>

            {/* Headline */}
            <h1 className="text-[40px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.08] tracking-tight">
              Cambia{" "}
              <span className="text-[#1B4FA0]">dólares y soles</span>{" "}
              online con{" "}
              <span className="text-[#E84518]">GTM Xchange</span>
            </h1>

            {/* Sub */}
            <p className="text-[17px] text-[#6B7A90] leading-relaxed max-w-[480px]">
              El mejor tipo de cambio del mercado. Sin colas, sin papeleos.
              Desde tu banco en menos de 15 minutos.
            </p>

            {/* Rate strip */}
            <div className="flex items-center gap-5 bg-white rounded-2xl px-6 py-4 border border-[#1B4FA0]/10 shadow-[0_4px_20px_rgba(27,79,160,0.08)] w-fit">
              <div className="text-center">
                <p className="text-[11px] font-bold text-[#6B7A90] uppercase tracking-widest mb-0.5">Compra</p>
                <p className="text-[24px] font-bold text-[#1B4FA0] tabular-nums">{COMPRA.toFixed(3)}</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-[11px] font-bold text-[#6B7A90] uppercase tracking-widest mb-0.5">Venta</p>
                <p className="text-[24px] font-bold text-[#E84518] tabular-nums">{VENTA.toFixed(3)}</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <p className="text-[12px] text-[#6B7A90] leading-snug">
                <strong className="text-[#0A1628] block">Tipo de cambio</strong>
                actualizado hoy
              </p>
            </div>

            {/* Banks */}
            <div>
              <p className="text-[11px] font-bold text-[#6B7A90] uppercase tracking-widest mb-2.5">
                Transferencias inmediatas desde
              </p>
              <div className="flex flex-wrap gap-2">
                {BANKS.map(b => (
                  <span key={b} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[13px] font-semibold text-[#0A1628] shadow-sm">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right: calculator ─── */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(27,79,160,0.16)] border border-[#1B4FA0]/10 overflow-hidden">

              {/* Personas / Empresas */}
              <div className="flex border-b border-gray-100">
                {(["personas","empresas"] as const).map(m => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`flex-1 py-3.5 text-[14px] font-semibold capitalize transition-colors ${
                      mode === m
                        ? "text-[#1B4FA0] border-b-2 border-[#1B4FA0]"
                        : "text-[#6B7A90] hover:text-[#0A1628]"
                    }`}
                  >
                    {m.charAt(0).toUpperCase() + m.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-6 flex flex-col gap-4">

                {/* Send */}
                <div>
                  <label className="block text-[11px] font-bold text-[#6B7A90] uppercase tracking-widest mb-1.5">
                    Tú envías
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      className="flex-1 px-4 py-3 text-[18px] font-bold text-[#0A1628] border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1B4FA0] transition-colors"
                    />
                    <div className="flex items-center gap-1.5 px-4 py-3 border-2 border-gray-200 rounded-xl text-[14px] font-semibold text-[#0A1628] min-w-[90px]">
                      <span>{from === "USD" ? "🇺🇸" : "🇵🇪"}</span>
                      <span>{from}</span>
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* Swap */}
                <div className="flex justify-center">
                  <button
                    onClick={swap}
                    className="w-10 h-10 rounded-full bg-[#1B4FA0] text-white flex items-center justify-center hover:bg-[#143D7A] transition-colors shadow-md"
                  >
                    <ArrowLeftRight size={16} />
                  </button>
                </div>

                {/* Receive */}
                <div>
                  <label className="block text-[11px] font-bold text-[#6B7A90] uppercase tracking-widest mb-1.5">
                    Tú recibes
                  </label>
                  <div className="flex gap-2">
                    <div className="flex-1 px-4 py-3 bg-[#F5F7FA] rounded-xl text-[18px] font-bold text-[#0A1628] tabular-nums">
                      {parseFloat(received).toLocaleString("es-PE", { minimumFractionDigits: 2 })}
                    </div>
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F5F7FA] rounded-xl text-[14px] font-semibold text-[#0A1628] min-w-[90px]">
                      <span>{to === "USD" ? "🇺🇸" : "🇵🇪"}</span>
                      <span>{to}</span>
                    </div>
                  </div>
                </div>

                {/* Saving + Timer */}
                <div className="flex items-center justify-between text-[13px]">
                  <span className="flex items-center gap-1.5 text-[#059669] font-semibold">
                    <Info size={13} />
                    Ahorro estimado: S/ {saving}
                  </span>
                  <span className="text-[#6B7A90] font-medium">⏱ {mm}:{ss} min</span>
                </div>

                {/* CTA */}
                <a
                  href="/auth/registro"
                  className="block w-full text-center py-4 bg-[#E84518] hover:bg-[#C43A12] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_4px_18px_rgba(232,69,24,0.35)] hover:shadow-[0_6px_26px_rgba(232,69,24,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Regístrate Ahora
                </a>

                <p className="text-center text-[12px] text-[#6B7A90] flex items-center justify-center gap-1">
                  <Info size={12} />
                  Tasa preferencial para montos mayores a $5,000 o S/ 18,000
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
