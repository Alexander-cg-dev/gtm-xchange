"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { prefix: "+",   value: 2,   suffix: "M+",  label: "Operaciones realizadas" },
  { prefix: "+",   value: 400, suffix: "K+",  label: "Usuarios registrados"   },
  { prefix: "S/ ", value: 20,  suffix: "M+",  label: "Soles ahorrados"        },
  { prefix: "$",   value: 3,   suffix: "B+",  label: "Dólares cambiados"      },
];

function Counter({ target, active }: { target: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);
  return <>{n}</>;
}

export default function Stats() {
  const ref    = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10">

        <div className="text-center mb-12">
          <p className="text-[13px] font-bold text-[#E84518] uppercase tracking-widest mb-3">2025</p>
          <h2 className="text-[34px] sm:text-[40px] font-bold text-white leading-tight">
            Números que <span className="text-[#E84518]">inspiran confianza</span>
          </h2>
          <p className="text-[16px] text-white/45 mt-3">
            Esto es lo que nos respalda al momento de cambiar tus divisas
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-10 px-6 text-center ${i < stats.length - 1 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b lg:border-b-0 border-white/10" : ""}`}
            >
              <p className="text-[44px] sm:text-[52px] font-black text-white leading-none tabular-nums mb-2">
                {s.prefix}<Counter target={s.value} active={on} />{s.suffix}
              </p>
              <p className="text-[14px] text-white/50 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
