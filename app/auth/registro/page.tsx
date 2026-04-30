import Image from "next/image";
import Link from "next/link";
import { signUp } from "@/app/auth/actions";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function RegistroPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; success?: string }>;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF4FF] via-white to-[#FFF2EE] flex items-center justify-center p-4">
      <div className="w-full max-w-[440px]">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image src="/brand/logo-color.png" alt="GTM Xchange" width={160} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(27,79,160,0.13)] border border-[#1B4FA0]/10 p-8">
          <h1 className="text-[26px] font-bold text-[#0A1628] mb-1">Crea tu cuenta</h1>
          <p className="text-[15px] text-[#6B7A90] mb-6">
            Empieza a cambiar divisas al mejor tipo de cambio
          </p>

          {/* Mensajes */}
          <RegistroMessages searchParams={searchParams} />

          <form action={signUp} className="flex flex-col gap-4">
            <div>
              <label className="block text-[12px] font-bold text-[#6B7A90] uppercase tracking-widest mb-1.5">
                Nombre completo
              </label>
              <input
                name="nombre"
                type="text"
                required
                placeholder="Juan Pérez"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] transition-colors placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-[#6B7A90] uppercase tracking-widest mb-1.5">
                Correo electrónico
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="juan@ejemplo.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] transition-colors placeholder:text-gray-300"
              />
            </div>

            <div>
              <label className="block text-[12px] font-bold text-[#6B7A90] uppercase tracking-widest mb-1.5">
                Contraseña
              </label>
              <input
                name="password"
                type="password"
                required
                minLength={8}
                placeholder="Mínimo 8 caracteres"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] transition-colors placeholder:text-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#E84518] hover:bg-[#C43A12] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_4px_16px_rgba(232,69,24,0.32)] hover:-translate-y-0.5 mt-2"
            >
              Crear cuenta gratis
            </button>
          </form>

          <p className="text-center text-[13px] text-[#6B7A90] mt-5">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-[#1B4FA0] font-semibold hover:underline">
              Inicia sesión
            </Link>
          </p>

          <p className="text-center text-[11px] text-[#6B7A90]/60 mt-4 leading-relaxed">
            Al registrarte aceptas nuestros{" "}
            <a href="#" className="underline">Términos y Condiciones</a>{" "}
            y{" "}
            <a href="#" className="underline">Política de Privacidad</a>.
          </p>
        </div>

        <p className="text-center text-[13px] text-[#6B7A90] mt-6">
          <Link href="/" className="hover:text-[#1B4FA0] transition-colors">← Volver al inicio</Link>
        </p>
      </div>
    </div>
  );
}

async function RegistroMessages({ searchParams }: { searchParams: Promise<{ error?: string; success?: string }> }) {
  const params = await searchParams;
  if (params.success) {
    return (
      <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
        <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-[14px] font-semibold text-green-800">¡Cuenta creada!</p>
          <p className="text-[13px] text-green-700">Revisa tu correo para confirmar tu cuenta antes de iniciar sesión.</p>
        </div>
      </div>
    );
  }
  if (params.error) {
    return (
      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
        <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
        <p className="text-[13px] text-red-700">{decodeURIComponent(params.error)}</p>
      </div>
    );
  }
  return null;
}
