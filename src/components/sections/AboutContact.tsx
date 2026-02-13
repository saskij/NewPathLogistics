import { Send } from "lucide-react";

export default function AboutContact() {
    return (
        <section className="py-24 bg-anthracite text-white relative overflow-hidden">
            {/* Mountain SVG Background */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-0 text-white/5">
                <svg className="w-full h-auto" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fillOpacity="0.5" d="M0,256L48,250.7C96,245,192,235,288,213.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* About Text Side */}
                    <div className="mt-8">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">About New Path</h2>
                        <div className="w-24 h-1 bg-white mb-10"></div>

                        <div className="space-y-8 text-gray-300 font-light text-lg leading-relaxed">
                            <p>
                                <strong className="text-white font-bold block mb-2 text-xl uppercase tracking-wide">Merit & Performance</strong>
                                At New Path Logistics, we believe that success should be earned, not given. We have built a culture where hard work, skill, and dedication are the sole drivers of advancement. Your background doesn't define you here—your performance does.
                            </p>

                            <p>
                                <strong className="text-white font-bold block mb-2 text-xl uppercase tracking-wide">Integrity in Motion</strong>
                                We operate with absolute transparency and honesty. Whether it’s clear pricing for our clients or straightforward pay for our drivers, integrity is at the core of every mile we drive. We do what we say, every time.
                            </p>

                            <p>
                                <strong className="text-white font-bold block mb-2 text-xl uppercase tracking-wide">A Partnership</strong>
                                We view our drivers and clients as partners. When you drive for New Path, you're not just a number; you're the backbone of our operation. We invest in top‐tier equipment and support systems to ensure you succeed on the road.
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-black p-8 md:p-12 shadow-2xl border border-zinc-800">
                        <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide text-white">Get a Quote</h3>
                        <p className="text-gray-500 mb-8">Start your partnership with us today.</p>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-[#1A1A1A] border border-zinc-700 px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                                    placeholder="YOUR NAME"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-[#1A1A1A] border border-zinc-700 px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                                    placeholder="YOUR EMAIL"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-[#1A1A1A] border border-zinc-700 px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                                    placeholder="HOW CAN WE HELP YOU?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black font-black uppercase tracking-widest py-5 hover:bg-gray-200 transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
