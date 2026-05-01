"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Sobre GTM Xchange",
    items: [
      {
        q: "¿Qué es GTM Xchange?",
        a: "GTM Xchange es una plataforma digital de cambio de divisas operada por GTM Trading Technologies S.A.C. Te permite cambiar dólares (USD) y soles (PEN) al mejor tipo de cambio del mercado, de forma rápida, segura y desde la comodidad de tu banco o billetera digital.",
      },
      {
        q: "¿Es seguro operar con GTM Xchange?",
        a: "Sí. GTM Xchange opera bajo un proceso de registro ante la Superintendencia de Banca, Seguros y AFP (SBS) como Empresa de Servicios de Pago. Utilizamos protocolos de seguridad bancaria (HTTPS/TLS), verificación de identidad (KYC) y cumplimiento con la Ley de Prevención del Lavado de Activos.",
      },
      {
        q: "¿En qué se diferencia GTM Xchange de una casa de cambio tradicional?",
        a: "Todo es 100% digital: no necesitas salir de casa, hacer colas ni cargar efectivo. Obtienes un tipo de cambio más competitivo que los bancos y casas de cambio físicas, con transferencias directas entre cuentas bancarias en menos de 15 minutos.",
      },
    ],
  },
  {
    category: "Cómo funciona",
    items: [
      {
        q: "¿Cómo realizo una operación de cambio?",
        a: "Es muy simple: 1) Regístrate y verifica tu identidad. 2) Ingresa el monto que deseas cambiar y la dirección de tu operación (USD→PEN o PEN→USD). 3) Ingresa el número de tu cuenta de destino. 4) Realiza la transferencia a nuestra cuenta. 5) Recibes el monto cambiado en tu cuenta en minutos.",
      },
      {
        q: "¿Cuánto tiempo demora una operación?",
        a: "La mayoría de operaciones se procesan en menos de 15 minutos una vez confirmada tu transferencia. En horario de atención (Lun–Vie 9am–7pm, Sáb 9am–2pm) el proceso suele ser inmediato. Operaciones fuera de horario se procesan al siguiente día hábil.",
      },
      {
        q: "¿Cuáles son los montos mínimos y máximos?",
        a: "El monto mínimo por operación es de S/ 100 o $30 USD. No existe un monto máximo fijo, aunque operaciones superiores a $5,000 o S/ 18,000 requieren documentación adicional para cumplimiento regulatorio y tienen acceso a una tasa preferencial.",
      },
    ],
  },
  {
    category: "Tipo de cambio y tarifas",
    items: [
      {
        q: "¿Cómo se determina el tipo de cambio?",
        a: "Nuestro tipo de cambio se actualiza en tiempo real según el mercado interbancario. Siempre ofrecemos una tasa más competitiva que los bancos tradicionales. El tipo de cambio que ves en pantalla al momento de iniciar tu operación es el que se aplica, garantizado por 5 minutos.",
      },
      {
        q: "¿Hay comisiones o cobros adicionales?",
        a: "No. GTM Xchange no cobra comisiones ni fees adicionales. Nuestro margen está incorporado en el spread del tipo de cambio (diferencia entre compra y venta). Lo que ves es exactamente lo que recibes, sin sorpresas.",
      },
      {
        q: "¿Ofrecen tasas preferenciales?",
        a: "Sí. Para operaciones mayores a $5,000 o S/ 18,000 ofrecemos una tasa preferencial negociada. Puedes contactarnos directamente por WhatsApp o correo para coordinar operaciones de mayor volumen.",
      },
    ],
  },
  {
    category: "Cuentas y bancos",
    items: [
      {
        q: "¿Qué bancos y billeteras aceptan?",
        a: "Aceptamos transferencias desde y hacia BCP, Interbank, BBVA, Scotiabank, y también billeteras digitales como Yape (BCP) y Plin (Interbank/BBVA/Scotiabank). Próximamente ampliaremos a más entidades financieras.",
      },
      {
        q: "¿Necesito abrir una cuenta especial?",
        a: "No. Usas tus cuentas bancarias o billeteras existentes. Solo necesitas registrarte en nuestra plataforma, verificar tu identidad y ya puedes operar.",
      },
      {
        q: "¿Puedo registrar varias cuentas bancarias?",
        a: "Sí. Puedes registrar múltiples cuentas de distintos bancos en tu perfil y elegir cuál usar para cada operación.",
      },
    ],
  },
  {
    category: "Seguridad y verificación",
    items: [
      {
        q: "¿Por qué me piden verificar mi identidad?",
        a: "Por ley, todas las plataformas financieras están obligadas a conocer a sus clientes (proceso KYC - Know Your Customer) y cumplir con la normativa de Prevención de Lavado de Activos (AML). Este proceso es obligatorio y protege tanto a nuestros usuarios como al sistema financiero.",
      },
      {
        q: "¿Qué documentos necesito para verificarme?",
        a: "Solo necesitas tu DNI vigente (para peruanos) o pasaporte/carné de extranjería (para extranjeros). El proceso toma menos de 5 minutos de forma digital.",
      },
      {
        q: "¿Qué pasa si hay un problema con mi operación?",
        a: "Contáctanos de inmediato por correo a contacto@gtm-xchange.com o por WhatsApp. Nuestro equipo revisa y resuelve incidencias dentro de las siguientes horas hábiles. Todas las operaciones quedan registradas y son auditables.",
      },
    ],
  },
];

export default function PreguntasFrecuentes() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem(prev => prev === key ? null : key);

  return (
    <>
      <Header />
      <main style={{ marginTop: 72 }}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#EEF4FF] via-white to-[#FFF2EE] py-16">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <span className="inline-block bg-[#1B4FA0]/10 text-[#1B4FA0] text-[13px] font-semibold px-4 py-1.5 rounded-full mb-4">
              Centro de Ayuda
            </span>
            <h1 className="text-[40px] sm:text-[48px] font-bold text-[#0A1628] leading-tight mb-4">
              Preguntas <span className="text-[#E84518]">Frecuentes</span>
            </h1>
            <p className="text-[17px] text-[#6B7A90] max-w-[560px] mx-auto">
              Encuentra respuestas a las dudas más comunes sobre cómo funciona GTM Xchange.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6 space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-[13px] font-bold text-[#1B4FA0] uppercase tracking-widest mb-5">
                  {section.category}
                </h2>
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const key = `${section.category}-${item.q}`;
                    const isOpen = openItem === key;
                    return (
                      <div
                        key={key}
                        className="border border-[#E2E8F0] rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#F8FAFC] transition-colors"
                        >
                          <span className="font-semibold text-[15px] text-[#0A1628] pr-4">
                            {item.q}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`flex-shrink-0 text-[#1B4FA0] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 text-[15px] text-[#6B7A90] leading-relaxed border-t border-[#F1F5F9]">
                            <p className="pt-4">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#F8FAFC] border-t border-[#E2E8F0]">
          <div className="max-w-[600px] mx-auto px-6 text-center">
            <p className="text-[18px] font-semibold text-[#0A1628] mb-2">
              ¿No encontraste tu respuesta?
            </p>
            <p className="text-[15px] text-[#6B7A90] mb-6">
              Escríbenos y te respondemos en menos de 24 horas.
            </p>
            <a
              href="mailto:contacto@gtm-xchange.com"
              className="inline-block px-8 py-3.5 bg-[#E84518] hover:bg-[#C43A12] text-white font-semibold text-[15px] rounded-xl transition-colors"
            >
              Contactar soporte
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
