import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutContact() {
    return (
        <section className="py-32 bg-zinc-50 text-zinc-900 relative overflow-hidden">
            {/* Mountain SVG Background - Silhouette */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-0 text-zinc-100">
                <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" opacity=".25" fill="currentColor"></path>
                    <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" opacity=".5" fill="currentColor"></path>
                    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" fill="currentColor"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* About Text Side */}
                    <div className="mt-8">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8 text-zinc-900">About New Path</h2>
                        <div className="w-24 h-1 bg-zinc-900 mb-10"></div>

                        <div className="space-y-8 text-zinc-700 font-light text-lg leading-relaxed">
                            <p>
                                <strong className="text-zinc-900 font-bold block mb-2 text-xl uppercase tracking-wide">Merit & Performance</strong>
                                At New Path Logistics, we believe that success should be earned, not given. We have built a culture where hard work, skill, and dedication are the sole drivers of advancement.
                            </p>

                            <p>
                                <strong className="text-zinc-900 font-bold block mb-2 text-xl uppercase tracking-wide">Integrity in Motion</strong>
                                We operate with absolute transparency. Whether it&apos;s clear pricing for our clients or straightforward pay for our drivers, integrity is at the core of every mile we drive.
                            </p>

                            <div className="pt-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider hover:text-red-700 transition-colors group"
                                    aria-label="Read our full story about New Path Logistics"
                                >
                                    Read Our Full Story
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="pt-8 mt-4 border-t border-zinc-200">
                                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Headquarters</p>
                                <p className="text-xl text-zinc-900 font-bold mt-2">Proudly based in <span className="text-red-600">Meridian, Idaho</span>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border border-zinc-900 rounded-none relative">
                        <h3 className="text-3xl font-bold mb-2 uppercase tracking-wide text-white">Get a Quote</h3>
                        <p className="text-zinc-400 mb-8">Start your partnership with us today.</p>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full h-12 bg-[#1A1A1A] border border-zinc-700 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors rounded-none"
                                    placeholder="YOUR NAME"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full h-12 bg-[#1A1A1A] border border-zinc-700 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors rounded-none"
                                    placeholder="YOUR EMAIL"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-[#1A1A1A] border border-zinc-700 px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none rounded-none"
                                    placeholder="HOW CAN WE HELP YOU?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 bg-white text-black font-black uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-4 rounded-none"
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
