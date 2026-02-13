import Image from "next/image";
import Link from "next/link";
import Services from "@/components/sections/Services";
import Advantage from "@/components/sections/Advantage";
import Careers from "@/components/sections/Careers";
import AboutContact from "@/components/sections/AboutContact";
import WhyDrive from "@/components/sections/WhyDrive";
import heroBg from "../../public/hero-new.jpg";

export default function Home() {
  return (
    <main className="min-h-screen bg-anthracite text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt="New Path Logistics Truck on Highway"
            fill
            className="object-cover object-center brightness-[0.75] contrast-[1.2]"
            priority
            quality={90}
            placeholder="blur"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-start pt-48 pb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter mb-8 max-w-5xl leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
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
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Drive Section */}
      <WhyDrive />

      {/* Advantage Section */}
      <Advantage />

      {/* Careers Section */}
      <Careers />

      {/* About & Contact Section */}
      <AboutContact />
    </main>
  );
}
