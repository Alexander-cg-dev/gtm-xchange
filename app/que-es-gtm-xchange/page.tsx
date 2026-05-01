import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Zap, TrendingUp, Users, Clock, Globe } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Seguridad ante todo",
    desc: "Operamos bajo los más altos estándares de seguridad bancaria. Tus fondos y datos personales están protegidos en todo momento.",
  },
  {
    icon: Zap,
    title: "Rapidez sin igual",
    desc: "Procesamos tus operaciones en menos de 15 minutos. Sabemos que tu tiempo vale y trabajamos para que el cambio sea inmediato.",
  },
  {
    icon: TrendingUp,
    title: "Mejor tasa del mercado",
    desc: "Monitoreamos el mercado en tiempo real para ofrecerte siempre el tipo de cambio más competitivo, mejor que cualquier banco.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    desc: "Un equipo humano detrás de cada operación. Resolvemos tus dudas y gestionamos incidencias con rapidez y empatía.",
  },
  {
    icon: Clock,
    title: "Disponible cuando nos necesitas",
    desc: "Atendemos de lunes a viernes de 9am a 7pm y sábados de 9am a 2pm. Tu dinero no espera y nosotros tampoco.",
  },
  {
    icon: Globe,
    title: "100% digital",
    desc: "Sin colas, sin papeleos, sin efectivo. Cambia desde donde estés, usando los bancos y billeteras que ya tienes.",
  },
];

const stats = [
  { value: "+2M", label: "Operaciones realizadas" },
  { value: "+400K", label: "Usuarios registrados" },
  { value: "15 min", label: "Tiempo promedio" },
  { value: "100%", label: "Digital y seguro" },
];

export default function QueEsGTMXchange() {
  return (
    <>
      <Header />
      <main style={{ marginTop: 72 }}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#EEF4FF] via-white to-[#FFF2EE] py-20">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <span className="inline-block bg-[#1B4FA0]/10 text-[#1B4FA0] text-[13px] font-semibold px-4 py-1.5 rounded-full mb-4">
              Nuestra historia
            </span>
            <h1 className="text-[40px] sm:text-[52px] font-bold text-[#0A1628] leading-tight mb-6">
              ¿Qué es{" "}
              <span className="text-[#E84518]">GTM Xchange</span>?
            </h1>
            <p className="text-[18px] text-[#6B7A90] max-w-[680px] mx-auto leading-relaxed">
              Somos la plataforma digital de cambio de divisas más competitiva del Perú.
              Nacimos para terminar con las complicaciones del cambio de moneda tradicional.
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[13px] font-bold text-[#E84518] uppercase tracking-widest">
                  Nuestra misión
                </span>
                <h2 className="text-[34px] font-bold text-[#0A1628] leading-tight mt-3 mb-5">
                  Democratizar el acceso al mejor tipo de cambio
                </h2>
                <p className="text-[16px] text-[#6B7A90] leading-relaxed mb-5">
                  En GTM Xchange creemos que todos los peruanos merecen acceder al mismo tipo de cambio
                  que obtienen los grandes empresarios. Por eso creamos una plataforma 100% digital que
                  elimina intermediarios y te da el mejor precio directo.
                </p>
                <p className="text-[16px] text-[#6B7A90] leading-relaxed">
                  Somos <strong className="text-[#0A1628]">GTM Trading Technologies S.A.C.</strong>, empresa
                  peruana con RUC 20615832015, con proceso de registro ante la Superintendencia de Banca,
                  Seguros y AFP (SBS) como Empresa de Servicios de Pago — Intercambio de Moneda.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 text-center"
                  >
                    <p className="text-[36px] font-bold text-[#1B4FA0] mb-1">{s.value}</p>
                    <p className="text-[13px] text-[#6B7A90]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[13px] font-bold text-[#E84518] uppercase tracking-widest">
                Lo que nos define
              </span>
              <h2 className="text-[34px] font-bold text-[#0A1628] mt-3">
                Nuestros valores
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#1B4FA0]/10 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-[#1B4FA0]" />
                  </div>
                  <h3 className="font-bold text-[16px] text-[#0A1628] mb-2">{v.title}</h3>
                  <p className="text-[14px] text-[#6B7A90] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulación */}
        <section className="py-16 bg-[#0A1628] text-white">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <ShieldCheck size={40} className="text-[#E84518] mx-auto mb-5" />
            <h2 className="text-[28px] font-bold mb-4">Operamos bajo supervisión regulatoria</h2>
            <p className="text-[16px] text-white/60 leading-relaxed mb-6">
              GTM Xchange se encuentra en proceso de registro como Empresa de Servicios de Pago ante la
              SBS-UIF del Perú. Cumplimos con las normas de Prevención de Lavado de Activos y
              Financiamiento del Terrorismo (PLAFT) y aplicamos procedimientos KYC (Conoce a tu Cliente)
              en todas las operaciones.
            </p>
            <a
              href="/preguntas-frecuentes"
              className="inline-block px-7 py-3.5 border border-white/30 hover:bg-white/10 text-white font-semibold text-[15px] rounded-xl transition-colors"
            >
              Ver preguntas frecuentes
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <h2 className="text-[30px] font-bold text-[#0A1628] mb-4">
              ¿Listo para cambiar mejor?
            </h2>
            <p className="text-[16px] text-[#6B7A90] mb-8">
              Únete a los miles de peruanos que ya cambian dólares y soles con GTM Xchange.
            </p>
            <a
              href="/auth/registro"
              className="inline-block px-10 py-4 bg-[#E84518] hover:bg-[#C43A12] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_4px_18px_rgba(232,69,24,0.35)]"
            >
              Crear cuenta gratis
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
