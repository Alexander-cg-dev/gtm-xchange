import { Bell, Gem, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Bell,
    accent: "#1B4FA0",
    bg: "#EEF4FF",
    title: "Alertas de tipo de cambio",
    body: "Te notificamos cuando el dólar llegue al precio que buscas. Programa tu alerta desde la app GTM Xchange y actúa en el momento preciso.",
  },
  {
    icon: Gem,
    accent: "#E84518",
    bg: "#FFF1EE",
    title: "Tipo de cambio preferencial",
    body: "Para montos mayores a $5,000 o S/ 18,000 obtienes una tasa exclusiva. Escríbenos por WhatsApp y te atendemos de forma personalizada.",
  },
  {
    icon: MessageCircle,
    accent: "#059669",
    bg: "#ECFDF5",
    title: "Atención por WhatsApp",
    body: "¿Tienes alguna duda? Nuestro equipo está disponible por WhatsApp para responderte en minutos, no en horas.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="site-wrap">

        <div className="text-center mb-14">
          <p className="text-[13px] font-bold text-[#E84518] uppercase tracking-widest mb-3">
            Nuestras ventajas
          </p>
          <h2 className="text-[34px] sm:text-[40px] font-bold text-[#0A1628] leading-tight">
            ¿Por qué cambiar con{" "}
            <span className="text-[#1B4FA0]">GTM Xchange</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map(r => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-[0_2px_16px_rgba(27,79,160,0.06)] hover:shadow-[0_8px_36px_rgba(27,79,160,0.13)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: r.bg }}
              >
                <r.icon size={24} style={{ color: r.accent }} strokeWidth={1.8} />
              </div>
              <h3 className="text-[20px] font-bold text-[#0A1628] leading-snug">{r.title}</h3>
              <p className="text-[15px] text-[#6B7A90] leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
