import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Responsable del Tratamiento",
    content: `**GTM Trading Technologies S.A.C.** (en adelante, "GTM Xchange"), con RUC 20615832015, es el responsable del tratamiento de los datos personales que recopila a través de la plataforma gtm-xchange.com, de conformidad con la Ley N° 29733 — Ley de Protección de Datos Personales del Perú — y su Reglamento aprobado por D.S. N° 003-2013-JUS.

Para consultas sobre privacidad, puedes contactarnos en: privacidad@gtm-xchange.com`,
  },
  {
    title: "2. Datos Personales que Recopilamos",
    content: `Recopilamos los siguientes datos personales:

**Datos de identificación:** Nombre completo, número de DNI/pasaporte/carné de extranjería, fecha de nacimiento, nacionalidad, fotografía del documento de identidad.

**Datos de contacto:** Correo electrónico, número de teléfono, dirección de domicilio.

**Datos financieros:** Números de cuentas bancarias registradas, historial de operaciones de cambio realizadas en la plataforma.

**Datos de uso:** Dirección IP, tipo de dispositivo y navegador, páginas visitadas dentro de la plataforma, hora y duración de las sesiones.

**Datos de origen de fondos:** Documentos que acrediten la procedencia lícita de los fondos, cuando sean requeridos por normativa PLAFT.`,
  },
  {
    title: "3. Finalidad del Tratamiento",
    content: `Tratamos tus datos personales para las siguientes finalidades:

**3.1 Prestación del servicio:** Registrar y gestionar tu cuenta, verificar tu identidad (KYC), procesar operaciones de cambio de divisas y emitir comprobantes.

**3.2 Cumplimiento legal:** Cumplir obligaciones derivadas de la Ley N° 27693 (UIF-Perú), normativa PLAFT, y requerimientos de la SBS.

**3.3 Seguridad:** Detectar y prevenir fraudes, accesos no autorizados y actividades ilícitas.

**3.4 Comunicaciones:** Enviarte notificaciones sobre tus operaciones, alertas de seguridad y, con tu consentimiento expreso, comunicaciones comerciales y promocionales.

**3.5 Mejora del servicio:** Analizar el uso de la plataforma para mejorar la experiencia del usuario (datos anonimizados o agregados).`,
  },
  {
    title: "4. Base Legal del Tratamiento",
    content: `El tratamiento de tus datos se realiza sobre las siguientes bases legales:

- **Ejecución del contrato:** Para prestarte el servicio de cambio de divisas que solicitaste.
- **Obligación legal:** Para cumplir con normas de prevención de lavado de activos, KYC y obligaciones ante la SBS-UIF.
- **Consentimiento:** Para comunicaciones comerciales y cookies no esenciales, con posibilidad de retiro en cualquier momento.
- **Interés legítimo:** Para la detección de fraudes y seguridad de la plataforma.`,
  },
  {
    title: "5. Derechos ARCO",
    content: `Conforme a la Ley N° 29733, tienes derecho a:

**Acceso:** Conocer qué datos personales tenemos sobre ti y cómo los usamos.

**Rectificación:** Solicitar la corrección de datos inexactos o incompletos.

**Cancelación:** Solicitar la eliminación de tus datos cuando ya no sean necesarios para las finalidades para las que fueron recabados, salvo que exista obligación legal de conservarlos.

**Oposición:** Oponerte al tratamiento de tus datos para finalidades específicas, como comunicaciones comerciales.

Para ejercer cualquiera de estos derechos, envía un correo a privacidad@gtm-xchange.com indicando tu nombre completo, número de DNI y el derecho que deseas ejercer. Responderemos en un plazo máximo de 20 días hábiles.`,
  },
  {
    title: "6. Transferencia de Datos a Terceros",
    content: `GTM Xchange puede compartir tus datos con:

**6.1 Entidades regulatorias:** UIF-Perú, SBS y otras autoridades competentes, cuando sea requerido por ley.

**6.2 Proveedores de servicios:** Empresas que nos ayudan a operar la plataforma (hosting, verificación de identidad, prevención de fraudes), bajo contratos que garantizan la confidencialidad y protección de tus datos.

**6.3 Entidades financieras:** Para el procesamiento de transferencias bancarias relacionadas con tus operaciones.

No vendemos ni cedemos tus datos a terceros con fines comerciales sin tu consentimiento expreso.`,
  },
  {
    title: "7. Conservación de los Datos",
    content: `Conservamos tus datos personales durante el tiempo que seas usuario activo de GTM Xchange y, posteriormente, por los plazos exigidos por la normativa aplicable:

- Datos de operaciones y KYC: mínimo 5 años desde la última operación (Ley N° 27693).
- Datos contables: 7 años (Ley General de Sociedades).
- Datos de marketing: hasta que retires tu consentimiento.`,
  },
  {
    title: "8. Seguridad de los Datos",
    content: `Implementamos medidas técnicas y organizativas para proteger tus datos personales:

- Cifrado SSL/TLS en todas las comunicaciones con la plataforma.
- Almacenamiento en servidores con acceso restringido y auditable.
- Autenticación de dos factores disponible para tu cuenta.
- Monitoreo continuo de accesos y actividades sospechosas.
- Capacitación periódica del equipo en protección de datos.`,
  },
  {
    title: "9. Cookies",
    content: `GTM Xchange utiliza cookies y tecnologías similares para el funcionamiento de la plataforma y el análisis de uso. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.

**Cookies esenciales:** Necesarias para el funcionamiento básico (sesión, seguridad). No pueden desactivarse.

**Cookies analíticas:** Nos ayudan a entender cómo se usa la plataforma. Pueden desactivarse sin afectar la funcionalidad.`,
  },
  {
    title: "10. Cambios a esta Política",
    content: `Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos de cambios significativos por correo electrónico o mediante aviso destacado en la plataforma, con al menos 7 días de anticipación.

*Última actualización: Mayo 2025*

Contacto de privacidad: privacidad@gtm-xchange.com`,
  },
];

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Header />
      <main style={{ marginTop: 72 }}>
        <section className="bg-gradient-to-br from-[#EEF4FF] via-white to-[#FFF2EE] py-16">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <span className="inline-block bg-[#1B4FA0]/10 text-[#1B4FA0] text-[13px] font-semibold px-4 py-1.5 rounded-full mb-4">
              Legal
            </span>
            <h1 className="text-[40px] sm:text-[48px] font-bold text-[#0A1628] leading-tight mb-4">
              Política de <span className="text-[#E84518]">Privacidad</span>
            </h1>
            <p className="text-[16px] text-[#6B7A90]">
              Ley N° 29733 — Protección de Datos Personales del Perú
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6 space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="border-b border-[#F1F5F9] pb-10 last:border-0">
                <h2 className="text-[20px] font-bold text-[#0A1628] mb-4">{s.title}</h2>
                <div className="text-[15px] text-[#6B7A90] leading-relaxed">
                  {s.content.split("\n").map((line, i) => (
                    <p key={i} className={line === "" ? "mb-3" : "mb-2"}
                      dangerouslySetInnerHTML={{
                        __html: line.replace(/\*\*(.+?)\*\*/g, "<strong class='text-[#0A1628]'>$1</strong>")
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
