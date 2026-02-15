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
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-start pt-48 pb-20">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.05em] mb-8 max-w-5xl leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
              Nationwide<br />
              <span className="text-zinc-200">Trucking</span>
            </h1>

            <div className="max-w-2xl mb-12 pl-1 border-l-8 border-white">
              <p className="text-xl md:text-2xl text-gray-100 font-medium leading-relaxed pl-8 drop-shadow-md">
                At New Path Logistics, success is earned through skill and performance.
                Real opportunities based on merit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 rounded-sm"
              >
                Get a Quote
              </Link>
              <Link
                href="/careers"
                className="px-5 py-2.5 bg-transparent border-2 border-white text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                Apply to Drive
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

      {/* Advantage Section */}
      <ScrollAnimation>
        <Advantage />
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
