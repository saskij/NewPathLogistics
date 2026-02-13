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
            className="object-cover object-center"
            priority
            quality={90}
            placeholder="blur"
          />
          {/* Overlay */}
          {/* Overlay */}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 opacity-100" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-start pt-48 pb-20">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter mb-8 max-w-6xl leading-[0.8] text-white drop-shadow-2xl font-sans">
            Nationwide<br />
            <span className="text-zinc-300">Trucking</span>
          </h1>

          <div className="max-w-2xl mb-12 pl-1 border-l-8 border-white">
            <p className="text-xl md:text-3xl text-gray-100 font-medium leading-relaxed pl-8 drop-shadow-lg">
              At New Path Logistics, success is earned through skill and performance.
              Real opportunities based on merit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="px-12 py-6 bg-white text-black text-2xl font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(220,38,38,0.5)] transform hover:-translate-y-2 rounded-sm"
            >
              Get a Quote
            </Link>
            <Link
              href="/careers"
              className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
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
