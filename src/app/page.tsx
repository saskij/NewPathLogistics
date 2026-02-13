import Image from "next/image";
import Link from "next/link";
import Services from "@/components/sections/Services";
import Advantage from "@/components/sections/Advantage";
import Careers from "@/components/sections/Careers";
import AboutContact from "@/components/sections/AboutContact";
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
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-start pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 max-w-5xl leading-[0.9]">
            Real Truckers.<br />
            <span className="text-gray-300">Real Aptitude.</span>
          </h1>

          <div className="max-w-2xl mb-10 pl-1 border-l-4 border-white/30">
            <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed pl-6">
              At New Path Logistics, success is earned through skill and performance.
              We provide real opportunities to grow and be rewarded based on merit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black text-lg font-bold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
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

      {/* Advantage Section */}
      <Advantage />

      {/* Careers Section */}
      <Careers />

      {/* About & Contact Section */}
      <AboutContact />
    </main>
  );
}
