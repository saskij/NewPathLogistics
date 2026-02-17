
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import Image from "next/image";
import contactHero from "../../../public/CONTACT-hero.jpg";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ContactPage() {
    return (
        <div className="bg-zinc-50 text-zinc-900 min-h-screen">

            {/* Hero / Header */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center border-b border-zinc-800 bg-black overflow-hidden">
                {/* Hero Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={contactHero}
                        alt="New Path Logistics Contact"
                        fill
                        className="object-cover object-center brightness-[0.4]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                </div>

                {/* Abstract background map pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
                    <svg viewBox="0 0 950 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-zinc-600 stroke-[1]">
                        <path d="M936.8,127.3c-2.4-7.3-8.6-12.7-16-14.7c-9.6-2.6-19.4-1.6-28.7,2.1c-6.6,2.6-13.6,1.4-19.2-3.1
c-7.3-5.9-16.7-7-25-2.8c-2,1-4.2,0.9-6.1-0.2c-5.9-3.3-12.3-5.2-19-6.3c-3.1-0.5-5.9-2.3-7.5-5c-3.3-5.5-8.3-9.5-14.5-11.4
c-7.8-2.4-16.2-1.4-23.2,2.8c-1.8,1.1-4,1.4-6,0.8c-6.8-2-14-1.8-20.7,0.7c-4.4,1.6-9.1,1.1-13.2-1.3c-6.4-3.8-13.9-5.1-21.2-3.6
c-4.7,1-9.6-0.3-13.3-3.6c-5.2-4.6-11.8-7.1-18.7-7.1c-0.8,0-1.6,0-2.4,0.1c-6.9,0.5-13.6-2-18.4-7c-5.7-5.9-13.6-9.1-21.9-8.8
c-5.6,0.2-10.9-2-14.7-6.1C591,46.7,581.9,43.2,572.3,44c-11.4,1-21.5,8.2-25.5,18.3c-1.1,2.8-3.4,4.9-6.3,5.7
c-6.4,1.8-12.2,5.8-16.2,11.3c-2.4,3.3-6.2,5.2-10.3,5.1c-9.1-0.2-17.6,4-22.3,11.2c-3.4,5.2-9,8.4-15.2,8.7c-9.3,0.4-17.8,5.4-22.6,13.2
c-2.1,3.4-5.5,5.8-9.5,6.5c-7.8,1.4-14.8,6.2-18.9,12.7c-2.1,3.3-5.6,5.4-9.5,5.8c-7.1,0.7-13.7,4.3-18.1,9.8
c-2.2,2.7-5.3,4.5-8.7,5.1c-7.3,1.3-13.9,5.7-17.9,11.8c-2,3-5.2,5.1-8.8,5.7c-6.2,1.1-11.7,4.6-15.3,9.7c-11.2,15.8-26.6,15.2-34.7,14.6
c-5.4-0.4-10.6,1.4-14.6,4.9c-8.9,7.9-20.7,11.6-32.5,10.2c-5.5-0.7-11,1.1-15.1,4.9c-7.1,6.6-16.7,9.7-26.3,8.5
c-5.7-0.7-11.4,1.2-15.7,5.2c-7.5,6.9-17.7,10-27.7,8.5c-5.4-0.8-10.9,0.9-14.9,4.6c-7.5,6.9-17.7,10-27.7,8.5
c-5.4-0.8-10.9,0.9-14.9,4.6c-9.6,8.8-22.7,11.8-35.3,8c-5.2-1.6-10.8-0.9-15.4,1.9c-10.3,6.2-22.6,7.6-34,3.8
c-4.6-1.5-9.6-1.2-14.1,0.9c-11.8,5.5-25.3,5.1-36.8-1.1c-5.6-3-12.2-3.6-18.3-1.6C44.3,277.1,38,284,28.6,287.6
c-7.2,2.8-13.2,8.2-16.6,14.9C10,306.4,10,310.6,12.1,314.1c4,6.7,3.4,15.1-1.6,21.2c-4.4,5.4-5.6,12.6-3.2,19
c2.4,6.4,8.1,11,14.8,12c5.6,0.8,10.8,3.7,14.2,8.1c4.5,5.8,11.1,9.5,18.3,10.3c6.8,0.7,12.8,4.5,16.4,10.2
c4.7,7.4,12.5,12.2,21.1,13.1c5.9,0.6,11.2,3.8,14.5,8.5c4.6,6.6,11.9,10.9,19.9,11.7c8.3,0.8,15.6,5.6,19.8,12.8
c2.4,4.1,6.5,6.9,11.1,7.6c11.9,1.8,21.8,9.7,26,20.8c2.4,6.4,8.1,11,14.8,12c7.6,1.1,14,6.2,17.3,13.1c2.1,4.4,6.3,7.5,11.1,8.3
c11,1.8,20.3,9.7,23.9,20.1c3,8.6,10.7,14.7,19.7,15.7c9,1,16.8,7.2,19.6,15.7c1.4,4.1,5,7.1,9.3,7.8c11,1.8,20.3,9.7,23.9,20.1
c3,8.6,10.7,14.7,19.7,15.7c9,1,16.8,7.2,19.6,15.7c1.7,5.1,6.5,8.4,11.8,8.2c12.1-0.5,23.5,4.7,29.9,13.6h0.1l0,0
c6.4,8.9,16.5,14.6,27.5,15.4c4.6,0.3,8.9,2.6,11.9,6.2c6.9,8.4,17.1,13.6,27.9,14.1c4.6,0.2,9,2.4,11.9,6
c6.3,7.7,15.7,12.2,25.6,12.2c1.9,0,3.8-0.2,5.7-0.5c6.5-1.1,13,1.4,17.2,6.5c10.4,12.5,25.6,19.6,41.9,19.6c0,0,0,0,0,0
c6.5,0,13,0.3,19.4,0.3c60.3,0,109.1-48.9,109.1-109.1c0-14.7-2.9-28.7-8.2-41.5c-4.4-10.6-2.6-22.8,4.9-31.9
c7.5-9.1,18.8-14.4,30.6-14.4h0c11.7,0,22.9-5.2,30.5-14.1c7.4-8.7,9.6-20.7,5.9-31.5c-3.1-9,0.3-19,8.4-24.5
c9.6-6.5,15.4-17.4,15.4-29c0-8.2,3.3-16.1,9.1-21.9c8.2-8.2,12.8-19.5,12.8-31.1c0-2-0.1-4-0.4-6c-1.3-8.8,3.2-17.6,11.1-21.4
c10.6-5.1,17.3-15.9,17.3-27.7c0-2.4-0.3-4.7-0.8-7.1c-2.6-10.9,2.9-22,13.2-26.2C921.2,138.8,934.3,134.9,936.8,127.3z"/>
                    </svg>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <ScrollAnimation>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                            Start Your Partnership
                        </h1>
                        <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
                        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
                            Ready to move forward? Let&apos;s connect.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 bg-zinc-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Info Side */}
                        <ScrollAnimation>
                            <h2 className="text-3xl font-bold uppercase tracking-wide mb-8 text-zinc-900">Get In Touch</h2>
                            <p className="text-xl text-zinc-600 font-light leading-relaxed mb-12">
                                Whether you&apos;re a shipper looking for reliable capacity or a driver seeking a better career, we&apos;re here to answer your questions.
                            </p>

                            <div className="space-y-10">
                                {/* Phone */}
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-zinc-100 rounded-xl group-hover:bg-zinc-200 transition-colors duration-300">
                                        <Phone className="w-8 h-8 text-zinc-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-wider mb-1 text-zinc-500">Phone</h3>
                                        <a href="tel:5551234567" className="text-2xl font-bold text-zinc-900 hover:text-zinc-600 transition-colors">
                                            (555) 123-4567
                                        </a>
                                        <p className="text-sm text-zinc-500 mt-1">Mon-Fri, 8am - 6pm MST</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-zinc-100 rounded-xl group-hover:bg-zinc-200 transition-colors duration-300">
                                        <Mail className="w-8 h-8 text-zinc-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-wider mb-1 text-zinc-500">Email</h3>
                                        <a href="mailto:info@newpathlogistics.com" className="text-2xl font-bold text-zinc-900 hover:text-zinc-600 transition-colors">
                                            info@newpathlogistics.com
                                        </a>
                                        <p className="text-sm text-zinc-500 mt-1">We typically reply within 24 hours.</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-zinc-100 rounded-xl group-hover:bg-zinc-200 transition-colors duration-300">
                                        <MapPin className="w-8 h-8 text-zinc-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-wider mb-1 text-zinc-500">Headquarters</h3>
                                        <address className="text-2xl font-bold text-zinc-900 not-italic leading-tight">
                                            123 Logistics Way<br />
                                            Denver, CO 80202
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Form Side */}
                        <ScrollAnimation className="bg-white p-8 md:p-12 rounded-xl border border-zinc-200 shadow-xl relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide text-zinc-900 relative z-10 flex items-center gap-3">
                                <MessageSquare className="w-6 h-6" />
                                Send a Message
                            </h3>
                            <p className="text-zinc-500 mb-8 relative z-10">Use the form below to reach out directly.</p>

                            <form className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2 text-zinc-500">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors rounded-lg"
                                        placeholder="YOUR NAME"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2 text-zinc-500">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors rounded-lg"
                                            placeholder="YOUR EMAIL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider mb-2 text-zinc-500">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors rounded-lg"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider mb-2 text-zinc-500">I&apos;m interested in...</label>
                                    <select
                                        id="subject"
                                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 text-zinc-900 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors appearance-none rounded-lg"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Driving Opportunities</option>
                                        <option>Freight Quote</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2 text-zinc-500">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-4 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-colors resize-none rounded-lg"
                                        placeholder="HOW CAN WE HELP YOU?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-zinc-900 text-white font-black uppercase tracking-widest py-5 hover:bg-zinc-800 transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-4 rounded-lg"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

        </div>
    );
}
