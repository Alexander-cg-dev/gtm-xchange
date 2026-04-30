import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
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
        <HowItWorks />
        <WhyUs />
        <AppAlerts />
        <Stats />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
