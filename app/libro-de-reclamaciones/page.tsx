"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, AlertCircle, CheckCircle } from "lucide-react";

type TipoSolicitud = "reclamo" | "queja" | "";
type TipoServicio = "compra" | "venta" | "";
type Perfil = "natural" | "juridica" | "";

export default function LibroDeReclamaciones() {
  const [perfil, setPerfil] = useState<Perfil>("");
  const [tipo, setTipo] = useState<TipoSolicitud>("");
  const [servicio, setServicio] = useState<TipoServicio>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "", apellidos: "", dni: "", email: "",
    telefono: "", direccion: "", monto: "", detalle: "", pedido: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main style={{ marginTop: 72 }} className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
          <div className="bg-white border border-[#E2E8F0] rounded-3xl p-10 max-w-[520px] w-full text-center shadow-sm">
            <CheckCircle size={52} className="text-[#059669] mx-auto mb-5" />
            <h2 className="text-[26px] font-bold text-[#0A1628] mb-3">Reclamación registrada</h2>
            <p className="text-[15px] text-[#6B7A90] mb-2">
              Tu {tipo} ha sido registrado exitosamente. Te enviaremos una confirmación a tu correo electrónico.
            </p>
            <p className="text-[14px] text-[#6B7A90] mb-8">
              Según la ley peruana, tenemos un plazo máximo de{" "}
              <strong className="text-[#0A1628]">15 días hábiles</strong> para responder.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-[#E84518] text-white font-semibold rounded-xl hover:bg-[#C43A12] transition-colors"
            >
              Volver al inicio
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ marginTop: 72 }}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#EEF4FF] via-white to-[#FFF2EE] py-14">
          <div className="max-w-[760px] mx-auto px-6 text-center">
            <span className="inline-block bg-[#1B4FA0]/10 text-[#1B4FA0] text-[13px] font-semibold px-4 py-1.5 rounded-full mb-4">
              Atención al Cliente
            </span>
            <h1 className="text-[38px] sm:text-[46px] font-bold text-[#0A1628] leading-tight mb-4">
              Libro de <span className="text-[#E84518]">Reclamaciones</span>
            </h1>
            <p className="text-[16px] text-[#6B7A90] max-w-[560px] mx-auto">
              Conforme al D.S. N° 011-2011-PCM, GTM Xchange pone a tu disposición
              este libro de reclamaciones virtual.
            </p>
          </div>
        </section>

        {/* Aviso legal */}
        <div className="max-w-[760px] mx-auto px-6 py-6">
          <div className="flex gap-3 bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-5">
            <AlertCircle size={20} className="text-[#C2410C] flex-shrink-0 mt-0.5" />
            <p className="text-[14px] text-[#92400E] leading-relaxed">
              <strong>Aviso importante:</strong> El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor
              a <strong>quince (15) días hábiles</strong>, el cual es improrrogable. La presentación de este reclamo no
              impide acudir a otras vías de solución de controversias, ni es requisito previo para interponer una denuncia
              ante el INDECOPI.
            </p>
          </div>
        </div>

        {/* Formulario */}
        <section className="pb-16 bg-white">
          <div className="max-w-[760px] mx-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Datos de la empresa */}
              <div className="border border-[#E2E8F0] rounded-2xl p-7">
                <h2 className="text-[16px] font-bold text-[#0A1628] mb-5 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#1B4FA0]" />
                  Datos de la empresa proveedora
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                  <div><span className="text-[#6B7A90]">Razón social:</span> <span className="font-semibold text-[#0A1628]">GTM Trading Technologies S.A.C.</span></div>
                  <div><span className="text-[#6B7A90]">RUC:</span> <span className="font-semibold text-[#0A1628]">20615832015</span></div>
                  <div><span className="text-[#6B7A90]">Correo:</span> <span className="font-semibold text-[#0A1628]">contacto@gtm-xchange.com</span></div>
                  <div><span className="text-[#6B7A90]">Web:</span> <span className="font-semibold text-[#0A1628]">gtm-xchange.com</span></div>
                </div>
              </div>

              {/* Datos del consumidor */}
              <div className="border border-[#E2E8F0] rounded-2xl p-7">
                <h2 className="text-[16px] font-bold text-[#0A1628] mb-5">1. Datos del consumidor</h2>

                <div className="mb-5">
                  <label className="text-[13px] font-semibold text-[#6B7A90] uppercase tracking-wide block mb-2">Perfil</label>
                  <div className="flex gap-3">
                    {[{v:"natural",l:"Persona natural"},{v:"juridica",l:"Persona jurídica"}].map(opt => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() => setPerfil(opt.v as Perfil)}
                        className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold border transition-all ${perfil===opt.v ? "bg-[#1B4FA0] text-white border-[#1B4FA0]" : "border-[#E2E8F0] text-[#6B7A90] hover:border-[#1B4FA0]"}`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {n:"nombre",l:"Nombre(s)",p:"Tu nombre"},
                    {n:"apellidos",l:"Apellido(s)",p:"Tus apellidos"},
                    {n:"dni",l:"N° de documento",p:"DNI / Pasaporte"},
                    {n:"email",l:"Correo electrónico",p:"tu@email.com"},
                    {n:"telefono",l:"Teléfono",p:"+51 999 999 999"},
                    {n:"direccion",l:"Dirección",p:"Av. / Jr. ..."},
                  ].map(f => (
                    <div key={f.n}>
                      <label className="text-[13px] font-semibold text-[#0A1628] block mb-1.5">{f.l}</label>
                      <input
                        type="text"
                        name={f.n}
                        value={form[f.n as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={f.p}
                        required
                        className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-xl text-[14px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Datos del servicio */}
              <div className="border border-[#E2E8F0] rounded-2xl p-7">
                <h2 className="text-[16px] font-bold text-[#0A1628] mb-5">2. Identificación del servicio</h2>

                <div className="mb-5">
                  <label className="text-[13px] font-semibold text-[#6B7A90] uppercase tracking-wide block mb-2">Tipo de operación</label>
                  <div className="flex gap-3">
                    {[{v:"compra",l:"Compra de USD"},{v:"venta",l:"Venta de USD"}].map(opt => (
                      <button
                        key={opt.v}
                        type="button"
                        onClick={() => setServicio(opt.v as TipoServicio)}
                        className={`px-5 py-2.5 rounded-xl text-[14px] font-semibold border transition-all ${servicio===opt.v ? "bg-[#1B4FA0] text-white border-[#1B4FA0]" : "border-[#E2E8F0] text-[#6B7A90] hover:border-[#1B4FA0]"}`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#0A1628] block mb-1.5">Monto del servicio</label>
                  <input
                    type="text"
                    name="monto"
                    value={form.monto}
                    onChange={handleChange}
                    placeholder="Ej: S/ 500.00 o $200.00"
                    required
                    className="w-full sm:w-1/2 px-4 py-2.5 border border-[#E2E8F0] rounded-xl text-[14px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] transition-colors"
                  />
                </div>
              </div>

              {/* Tipo de solicitud */}
              <div className="border border-[#E2E8F0] rounded-2xl p-7">
                <h2 className="text-[16px] font-bold text-[#0A1628] mb-5">3. Tipo de solicitud</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    {v:"reclamo",l:"Reclamo",desc:"Disconformidad relacionada a los productos o servicios contratados."},
                    {v:"queja",l:"Queja",desc:"Disconformidad no relacionada directamente a los productos o servicios."},
                  ].map(opt => (
                    <button
                      key={opt.v}
                      type="button"
                      onClick={() => setTipo(opt.v as TipoSolicitud)}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${tipo===opt.v ? "border-[#1B4FA0] bg-[#EEF4FF]" : "border-[#E2E8F0] hover:border-[#1B4FA0]/40"}`}
                    >
                      <p className={`font-bold text-[15px] mb-1 ${tipo===opt.v ? "text-[#1B4FA0]" : "text-[#0A1628]"}`}>{opt.l}</p>
                      <p className="text-[13px] text-[#6B7A90]">{opt.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                  <label className="text-[13px] font-semibold text-[#0A1628] block mb-1.5">Detalle del {tipo || "reclamo / queja"}</label>
                  <textarea
                    name="detalle"
                    value={form.detalle}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe con detalle lo ocurrido: fecha de la operación, monto, qué sucedió y cómo te afecta..."
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[14px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] resize-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-[#0A1628] block mb-1.5">Pedido concreto</label>
                  <textarea
                    name="pedido"
                    value={form.pedido}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="¿Qué solución o respuesta esperas de GTM Xchange?"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[14px] text-[#0A1628] focus:outline-none focus:border-[#1B4FA0] resize-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-[13px] text-[#6B7A90] leading-relaxed max-w-[420px]">
                  Al enviar, aceptas que GTM Xchange trate tus datos conforme a nuestra{" "}
                  <a href="/politica-de-privacidad" className="text-[#1B4FA0] underline">Política de Privacidad</a>.
                </p>
                <button
                  type="submit"
                  className="px-10 py-4 bg-[#E84518] hover:bg-[#C43A12] text-white font-bold text-[16px] rounded-xl transition-all shadow-[0_4px_18px_rgba(232,69,24,0.35)] whitespace-nowrap"
                >
                  Enviar {tipo || "solicitud"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
