import Image from "next/image";
import Link from "next/link";
import { signIn } from "@/app/auth/actions";
import { AlertCircle } from "lucide-react";

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
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
          <h1 className="text-[26px] font-bold text-[#0A1628] mb-1">Bienvenido de vuelta</h1>
          <p className="text-[15px] text-[#6B7A90] mb-6">
            Inicia sesión para realizar tu cambio
          </p>

          <LoginError searchParams={searchParams} />

          <form action={signIn} className="flex flex-col gap-4">
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[12px] font-bold text-[#6B7A90] uppercase tracking-widest">
                  Contraseña
                </label>
                <a href="#" className="text-[12px] text-[#1B4FA0] hover:underline font-medium">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                name="password"
                type="password"
                required
                placeholder="Tu contraseña"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-[15px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] transition-colors placeholder:text-gray-300"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#1B4FA0] hover:bg-[#143D7A] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_4px_16px_rgba(27,79,160,0.28)] hover:-translate-y-0.5 mt-2"
            >
              Iniciar sesión
            </button>
          </form>

          <p className="text-center text-[13px] text-[#6B7A90] mt-5">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/registro" className="text-[#E84518] font-semibold hover:underline">
              Regístrate gratis
            </Link>
          </p>
        </div>

        <p className="text-center text-[13px] text-[#6B7A90] mt-6">
          <Link href="/" className="hover:text-[#1B4FA0] transition-colors">← Volver al inicio</Link>
        </p>
      </div>
    </div>
  );
}

async function LoginError({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  if (!params.error) return null;
  return (
    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
      <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
      <p className="text-[13px] text-red-700">{decodeURIComponent(params.error)}</p>
    </div>
  );
}
