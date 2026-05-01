import { Bell, TrendingUp, Smartphone } from "lucide-react";

const features = [
  { icon: Bell,       text: "Configura el precio objetivo del dólar" },
  { icon: TrendingUp, text: "Recibe notificaciones al instante" },
  { icon: Smartphone, text: "Cambia directo desde la app en segundos" },
];

const history = [
  { time: "9:02 AM", rate: "S/ 3.52" },
  { time: "9:18 AM", rate: "S/ 3.51" },
  { time: "9:45 AM", rate: "S/ 3.49" },
];

export default function AppAlerts() {
  return (
    <section className="py-20 bg-[#0A1628]" style={{ overflow: "hidden" }}>
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─ Left ─ */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[13px] font-bold text-[#E84518] uppercase tracking-widest mb-3">
                App GTM Xchange
              </p>
              <h2 className="text-[34px] sm:text-[40px] font-bold text-white leading-tight">
                Alertas de tipo de cambio{" "}
                <span className="text-[#E84518]">en tiempo real</span>
              </h2>
            </div>

            <p className="text-[17px] text-white/65 leading-relaxed">
              Programa el valor del dólar que quieres y te avisamos en el
              momento exacto para que hagas tu cambio de forma inteligente.
              Sin perderte ninguna oportunidad.
            </p>

            <ul className="flex flex-col gap-3.5">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E84518]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-[#E84518]" />
                  </div>
                  <span className="text-[15px] text-white/80 font-medium">{text}</span>
                </li>
              ))}
            </ul>

            {/* App badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "App Store",    sub: "Descarga en",   icon: "apple" },
                { label: "Google Play",  sub: "Disponible en", icon: "google" },
              ].map(({ label, sub, icon }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/18 border border-white/20 rounded-xl px-5 py-3 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0">
                    {icon === "apple" ? (
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    ) : (
                      <path d="M3.18 23.76c.3.17.65.19.97.06l12.49-7.2-2.83-2.83-10.63 9.97zM.5 1.57C.19 1.95 0 2.5 0 3.2v17.6c0 .7.19 1.25.51 1.63l.09.08 9.86-9.86v-.23L.59 1.49.5 1.57zM20.16 10.8l-2.82-1.63-3.17 3.17 3.17 3.17 2.84-1.64c.81-.47.81-1.23-.02-1.07zM4.15.26L16.64 7.46 13.81 10.29 3.18.32C3.5.19 3.85.21 4.15.26z" />
                    )}
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/50">{sub}</p>
                    <p className="text-[14px] font-semibold text-white leading-tight">{label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ─ Right: phone mockup ─ */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[260px] bg-white/8 rounded-[40px] border-2 border-white/15 p-4 flex flex-col gap-3 backdrop-blur-sm">
              {/* Rate card */}
              <div className="bg-white/10 rounded-2xl p-4 text-center">
                <p className="text-[11px] text-white/50 mb-1">Tipo de cambio</p>
                <p className="text-[30px] font-bold text-white tabular-nums">S/ 3.522</p>
                <p className="text-[12px] text-[#E84518] font-semibold mt-1">▲ +0.008 hoy</p>
              </div>
              {/* Alert card */}
              <div className="bg-[#E84518]/20 border border-[#E84518]/35 rounded-2xl p-3 text-center">
                <Bell size={18} className="text-[#E84518] mx-auto mb-1" />
                <p className="text-[12px] text-white font-semibold">¡Alerta activada!</p>
                <p className="text-[11px] text-white/50">Te avisamos a S/ 3.55</p>
              </div>
              {/* History */}
              <div className="flex flex-col gap-1.5">
                {history.map(h => (
                  <div key={h.time} className="flex justify-between items-center bg-white/5 rounded-xl px-3 py-2">
                    <span className="text-[12px] text-white/50">{h.time}</span>
                    <span className="text-[13px] font-semibold text-white">{h.rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
