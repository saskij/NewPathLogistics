import Image from "next/image";
import Link from "next/link";
import Services from "@/components/sections/Services";
import Advantage from "@/components/sections/Advantage";
import Careers from "@/components/sections/Careers";
import AboutContact from "@/components/sections/AboutContact";
import WhyDrive from "@/components/sections/WhyDrive";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import heroBg from "../../public/hero-new.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-anthracite text-white flex flex-col">
      <PageHero
        title="Success Driven By Performance, Not Labels."
        bottomCaption="USDOT 4499738 | MC 1779954"
        subtitle="Reliable freight solutions and career opportunities for drivers who value respect and results."
        backgroundImage={heroBg}
        size="large"
      >
        <Link
          href="/careers"
          className="bg-red-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 group ring-2 ring-red-600 ring-offset-2 ring-offset-black/50"
          aria-label="Apply for a driving job"
        >
          JOIN OUR FLEET
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/services"
          className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2"
          aria-label="Learn more about our freight services"
        >
          FREIGHT SOLUTIONS
        </Link>
      </PageHero>

      {/* Services Section */}
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>

      {/* Why Choose Us Section */}
      <ScrollAnimation>
        <WhyChooseUs />
      </ScrollAnimation>

      {/* Why Drive Section */}
      <ScrollAnimation>
        <WhyDrive />
      </ScrollAnimation>


      {/* Careers Section */}
      <ScrollAnimation>
        <Careers />
      </ScrollAnimation>

      {/* About & Contact Section */}
      <ScrollAnimation>
        <AboutContact />
      </ScrollAnimation>
    </main>
  );
}
