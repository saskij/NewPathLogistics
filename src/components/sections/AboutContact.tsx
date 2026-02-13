import { Send } from "lucide-react";

export default function AboutContact() {
    return (
        <section className="py-24 bg-anthracite text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* About Text Side */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">About New Path</h2>
                        <div className="w-20 h-1 bg-white mb-8"></div>

                        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                            "New Path Logistics is committed to providing qualified drivers with real opportunities.
                            If you take pride in your work and operate with integrity, your efforts will be recognized here."
                        </p>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            We are more than just a logistics company; we are a partner in your success.
                            Our fleet is built on the foundation of trust, reliability, and mutual respect.
                        </p>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl">
                        <h3 className="text-3xl font-bold mb-6 uppercase tracking-wide">Get a Quote</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-400">Service Type</label>
                                <select
                                    id="service"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors appearance-none"
                                >
                                    <option className="bg-anthracite">Nationwide Trucking</option>
                                    <option className="bg-anthracite">Freight Solutions</option>
                                    <option className="bg-anthracite">Logistics Management</option>
                                    <option className="bg-anthracite">Warehousing</option>
                                    <option className="bg-anthracite">Last Mile Delivery</option>
                                    <option className="bg-anthracite">Specialized Transport</option>
                                    <option className="bg-anthracite">Other</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="button"
                                    className="w-full bg-white text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    Submit Request
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
