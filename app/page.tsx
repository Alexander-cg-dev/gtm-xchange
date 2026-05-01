import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BankLogos from "@/components/sections/BankLogos";
import HowItWorks from "@/components/sections/HowItWorks";
import AppAlerts from "@/components/sections/AppAlerts";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BankLogos />
        <HowItWorks />
        <WhyUs />
        <AppAlerts />
        {/* SECCIÓN OCULTA — activar eliminando el div wrapper cuando se indique */}
        <div style={{display:'none'}}>
          <Stats />
        </div>
        {/* SECCIÓN OCULTA — activar eliminando el div wrapper cuando se indique */}
        <div style={{display:'none'}}>
          <Testimonials />
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
