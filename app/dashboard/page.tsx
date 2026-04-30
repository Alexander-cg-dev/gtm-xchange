import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { signOut } from "@/app/auth/actions";
import Image from "next/image";
import { ArrowLeftRight, Bell, LogOut, User, TrendingUp } from "lucide-react";

const COMPRA = 3.486;
const VENTA  = 3.522;

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const nombre = user.user_metadata?.nombre || user.email?.split("@")[0] || "Usuario";

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Top nav */}
      <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Image src="/brand/logo-color.png" alt="GTM Xchange" width={140} height={36} className="h-9 w-auto" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[14px] text-[#6B7A90]">
            <div className="w-8 h-8 rounded-full bg-[#1B4FA0] flex items-center justify-center">
              <User size={15} className="text-white" />
            </div>
            <span className="hidden sm:block font-medium text-[#0A1628]">{nombre}</span>
          </div>
          <form action={signOut}>
            <button
              type="submit"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-[#6B7A90] hover:text-[#E84518] transition-colors"
            >
              <LogOut size={15} />
              <span className="hidden sm:block">Salir</span>
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* Bienvenida */}
        <div className="mb-8">
          <p className="text-[13px] font-semibold text-[#6B7A90] mb-1">Panel de control</p>
          <h1 className="text-[28px] font-bold text-[#0A1628]">
            ¡Hola, {nombre}! 👋
          </h1>
          <p className="text-[15px] text-[#6B7A90] mt-1">
            Aquí puedes ver el tipo de cambio y realizar tus operaciones.
          </p>
        </div>

        {/* Rate cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Compra", value: COMPRA.toFixed(3), color: "#1B4FA0", sub: "USD → PEN" },
            { label: "Venta",  value: VENTA.toFixed(3),  color: "#E84518", sub: "PEN → USD" },
            { label: "Variación", value: "+0.008", color: "#059669", sub: "vs ayer" },
            { label: "Actualizado", value: "Hoy",  color: "#6B7A90", sub: new Date().toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" }) },
          ].map(c => (
            <div key={c.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <p className="text-[11px] font-bold text-[#6B7A90] uppercase tracking-widest mb-1">{c.label}</p>
              <p className="text-[24px] font-black tabular-nums leading-none" style={{ color: c.color }}>{c.value}</p>
              <p className="text-[12px] text-[#6B7A90] mt-1">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {[
            {
              icon: ArrowLeftRight,
              color: "#1B4FA0",
              bg: "#EEF4FF",
              title: "Realizar cambio",
              desc: "Cambia tus dólares o soles al mejor tipo de cambio.",
              cta: "Iniciar operación",
            },
            {
              icon: Bell,
              color: "#E84518",
              bg: "#FFF1EE",
              title: "Configurar alerta",
              desc: "Te avisamos cuando el dólar llegue al precio que quieres.",
              cta: "Crear alerta",
            },
            {
              icon: TrendingUp,
              color: "#059669",
              bg: "#ECFDF5",
              title: "Mis operaciones",
              desc: "Revisa el historial de todos tus cambios realizados.",
              cta: "Ver historial",
            },
          ].map(({ icon: Icon, color, bg, title, desc, cta }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                <Icon size={20} style={{ color }} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#0A1628] mb-1">{title}</h3>
                <p className="text-[13px] text-[#6B7A90] leading-relaxed">{desc}</p>
              </div>
              <button
                className="mt-auto text-[13px] font-semibold px-4 py-2.5 rounded-xl border-2 transition-colors"
                style={{ borderColor: color, color }}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>

        {/* Info cuenta */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <p className="text-[13px] font-bold text-[#6B7A90] uppercase tracking-widest mb-4">Mi cuenta</p>
          <div className="grid sm:grid-cols-2 gap-4 text-[14px]">
            <div>
              <p className="text-[#6B7A90] mb-0.5">Correo</p>
              <p className="font-semibold text-[#0A1628]">{user.email}</p>
            </div>
            <div>
              <p className="text-[#6B7A90] mb-0.5">Estado</p>
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 font-semibold text-[13px] px-3 py-1 rounded-full border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Verificado
              </span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
