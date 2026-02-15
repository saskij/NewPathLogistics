import Image from "next/image";
import Link from "next/link";
import Services from "@/components/sections/Services";
import Advantage from "@/components/sections/Advantage";
import Careers from "@/components/sections/Careers";
import AboutContact from "@/components/sections/AboutContact";
import WhyDrive from "@/components/sections/WhyDrive";
import heroBg from "../../public/hero-new.jpg";

import WhyChooseUs from "@/components/sections/WhyChooseUs";

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-anthracite text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* LCP Optimization: WebP + Mobile Source + Native Priority */}
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={`${process.env.NODE_ENV === 'production' ? '/NewPathLogistics' : ''}/hero-new-mobile.webp?v=2`}
              type="image/webp"
            />
            <source
              media="(max-width: 640px)"
              srcSet={`${process.env.NODE_ENV === 'production' ? '/NewPathLogistics' : ''}/hero-new-mobile.jpg?v=2`}
            />
            <source
              srcSet={`${process.env.NODE_ENV === 'production' ? '/NewPathLogistics' : ''}/hero-new.webp?v=2`}
              type="image/webp"
            />
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/NewPathLogistics' : ''}/hero-new.jpg?v=2`}
              alt="New Path Logistics Truck on Highway"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.75] contrast-[1.2]"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <ScrollAnimation>
            <span className="block text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base bg-black/50 backdrop-blur-sm py-1 px-3 rounded-full inline-block mx-auto border border-red-500/30">
              Nationwide Trucking
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl tracking-wide">
              SUCCESS DRIVEN BY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                PERFORMANCE
              </span>
              , NOT LABELS.
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
              Reliable freight solutions and career opportunities for drivers who value respect and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            </div>
          </ScrollAnimation>
        </div>
      </section>

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
