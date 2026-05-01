import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Definiciones",
    content: `Para los efectos del presente documento, se entiende por:

**Plataforma:** El sitio web gtm-xchange.com y sus aplicaciones digitales, operados por GTM Trading Technologies S.A.C.

**Usuario:** Persona natural o jurídica que se registra y utiliza los servicios de GTM Xchange.

**Operación de cambio:** Transacción mediante la cual el Usuario intercambia una divisa por otra (USD/PEN o PEN/USD) a través de la Plataforma.

**Tipo de cambio:** La tasa aplicable al momento de confirmar cada operación, expresada en unidades de una divisa por unidad de la otra.

**KYC (Know Your Customer):** Proceso de verificación de identidad exigido por la normativa vigente.`,
  },
  {
    title: "2. Aceptación de los Términos",
    content: `El acceso y uso de la Plataforma implica la aceptación plena e incondicional de estos Términos y Condiciones por parte del Usuario.

Si el Usuario no está de acuerdo con alguna disposición de este documento, debe abstenerse de usar la Plataforma.

GTM Trading Technologies S.A.C. se reserva el derecho de modificar estos Términos en cualquier momento, notificando a los usuarios registrados con al menos 7 días de anticipación antes de que los cambios entren en vigor.`,
  },
  {
    title: "3. Registro y Verificación de Identidad",
    content: `**3.1** Para utilizar los servicios de GTM Xchange, el Usuario debe completar el proceso de registro y verificación de identidad (KYC) conforme a la Ley N° 27693, Ley que crea la Unidad de Inteligencia Financiera del Perú (UIF-Perú) y sus modificatorias.

**3.2** El Usuario se compromete a proporcionar información veraz, completa y actualizada durante el proceso de registro. Cualquier información falsa o incompleta podrá dar lugar a la suspensión o cancelación de la cuenta.

**3.3** El Usuario es responsable de mantener la confidencialidad de sus credenciales de acceso (usuario y contraseña) y de todas las actividades que ocurran bajo su cuenta.

**3.4** El Usuario deberá notificar de inmediato a GTM Xchange ante cualquier uso no autorizado de su cuenta.`,
  },
  {
    title: "4. Operaciones de Cambio",
    content: `**4.1 Proceso:** Las operaciones se realizan mediante transferencia bancaria entre las cuentas del Usuario y las cuentas de GTM Trading Technologies S.A.C. El Usuario inicia la operación en la Plataforma, transfiere los fondos, y recibe el monto cambiado en su cuenta destino.

**4.2 Tipo de cambio:** El tipo de cambio mostrado al momento de confirmar la operación queda garantizado por un período de cinco (5) minutos. Pasado ese tiempo, la tasa puede actualizarse según el mercado.

**4.3 Montos:** El monto mínimo por operación es de S/ 100.00 o USD 30.00. Para operaciones superiores a USD 5,000.00 o S/ 18,000.00, GTM Xchange puede requerir documentación adicional conforme a la normativa PLAFT.

**4.4 Confirmación:** Una vez confirmada la recepción de los fondos del Usuario, GTM Xchange procesa el envío en un plazo máximo de 15 minutos durante el horario de atención.

**4.5 Horario de atención:** Lunes a Viernes de 9:00 a.m. a 7:00 p.m., Sábados de 9:00 a.m. a 2:00 p.m. (hora de Lima, Perú). Las operaciones iniciadas fuera de horario se procesarán el siguiente día hábil.

**4.6 Cancelaciones:** Una vez que el Usuario ha transferido los fondos a la cuenta de GTM Xchange, la operación no puede ser cancelada unilateralmente, salvo por motivos de fuerza mayor debidamente justificados.`,
  },
  {
    title: "5. Comisiones y Costos",
    content: `GTM Xchange no cobra comisiones ni cargos adicionales sobre las operaciones de cambio. El costo del servicio está incorporado en el spread (diferencia) entre el tipo de cambio de compra y venta.

Los costos de transferencia bancaria propios de cada entidad financiera (bancos, billeteras digitales) son responsabilidad del Usuario y no están incluidos en el servicio de GTM Xchange.`,
  },
  {
    title: "6. Prevención de Lavado de Activos",
    content: `**6.1** GTM Trading Technologies S.A.C. cumple con la Ley N° 27693 y sus modificatorias, así como con las normas emitidas por la UIF-Perú en materia de Prevención del Lavado de Activos y Financiamiento del Terrorismo (PLAFT).

**6.2** GTM Xchange puede solicitar al Usuario información adicional sobre el origen de los fondos en cualquier momento, especialmente en operaciones de alto monto o cuando existan indicios de actividad inusual.

**6.3** GTM Xchange se reserva el derecho de suspender operaciones o cuentas que presenten señales de alerta conforme a sus políticas internas de cumplimiento, sin necesidad de justificación previa al Usuario.

**6.4** El Usuario declara que los fondos utilizados en las operaciones tienen un origen lícito.`,
  },
  {
    title: "7. Responsabilidades y Limitaciones",
    content: `**7.1** GTM Trading Technologies S.A.C. no será responsable por: (i) interrupciones del servicio causadas por fallos de terceros (bancos, operadoras, internet); (ii) pérdidas derivadas del uso no autorizado de la cuenta del Usuario; (iii) fluctuaciones del tipo de cambio posteriores a la confirmación de la operación.

**7.2** La responsabilidad máxima de GTM Xchange ante el Usuario, por cualquier causa, se limita al monto de la operación específica que dio origen al reclamo.

**7.3** GTM Xchange no garantiza disponibilidad ininterrumpida del servicio y puede realizar mantenimientos programados notificando previamente a los usuarios.`,
  },
  {
    title: "8. Propiedad Intelectual",
    content: `Todos los contenidos de la Plataforma (marca, logotipos, textos, diseños, software) son propiedad de GTM Trading Technologies S.A.C. o cuentan con la debida autorización de uso. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa y escrita.`,
  },
  {
    title: "9. Ley Aplicable y Jurisdicción",
    content: `Estos Términos se rigen por las leyes de la República del Perú. Cualquier controversia derivada de su interpretación o ejecución se someterá a los juzgados y tribunales del Cercado de Lima, renunciando las partes a cualquier otro fuero que pudiera corresponderles.`,
  },
  {
    title: "10. Contacto",
    content: `Para consultas sobre estos Términos y Condiciones:

**GTM Trading Technologies S.A.C.**
RUC: 20615832015
Correo: contacto@gtm-xchange.com
Lima, Perú

*Última actualización: Mayo 2025*`,
  },
];

export default function TerminosYCondiciones() {
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
              Términos y <span className="text-[#E84518]">Condiciones</span>
            </h1>
            <p className="text-[16px] text-[#6B7A90]">
              Lee detenidamente este documento antes de usar nuestros servicios.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-6 space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="border-b border-[#F1F5F9] pb-10 last:border-0">
                <h2 className="text-[20px] font-bold text-[#0A1628] mb-4">{s.title}</h2>
                <div className="text-[15px] text-[#6B7A90] leading-relaxed whitespace-pre-line">
                  {s.content.split("\n").map((line, i) => {
                    const bold = line.replace(/\*\*(.+?)\*\*/g, "");
                    if (line.startsWith("**") && line.endsWith("**") && bold.length === 0) return null;
                    return (
                      <p key={i} className={line === "" ? "mb-3" : "mb-2"}
                        dangerouslySetInnerHTML={{
                          __html: line.replace(/\*\*(.+?)\*\*/g, "<strong class='text-[#0A1628]'>$1</strong>")
                        }}
                      />
                    );
                  })}
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
