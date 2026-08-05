import { Header } from "@/components/Header";
import { SeamActivator } from "@/components/SeamActivator";
import { Hero } from "@/components/Hero";
import { Pain } from "@/components/Pain";
import { Product } from "@/components/Product";
import { Capabilities } from "@/components/Capabilities";
import { IntegrationsStrip } from "@/components/IntegrationsStrip";
import { Proof } from "@/components/Proof";
import { AcceleratorTeaser } from "@/components/AcceleratorTeaser";
import { HowItWorks } from "@/components/HowItWorks";
import { Calculator } from "@/components/Calculator";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SeamActivator />
      <main>
        <Hero />
        <Pain />
        <Product />
        <Capabilities />
        <IntegrationsStrip />
        <HowItWorks />
        <Proof />
        <AcceleratorTeaser />
        <Calculator />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
