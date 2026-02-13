
import { Banknote, Award, Clock, Truck, ShieldCheck, CheckCircle, Send } from "lucide-react";
import Image from "next/image";
import driverFleet from "../../../public/driver-fleet.jpg";

export default function CareersPage() {
    return (
        <div className="bg-anthracite text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={driverFleet}
                        alt="New Path Logistics Flight"
                        fill
                        className="object-cover object-center brightness-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-transparent to-black/60" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
                        A Fleet Built on Merit.<br />
                        <span className="text-gray-400">Not Labels.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 font-light max-w-3xl mx-auto">
                        Real opportunities for real truckers.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 bg-[#111]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Guaranteed Pay */}
                        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-white transition-all duration-300 group">
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                                <Banknote className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">Guaranteed Pay</h3>
                            <p className="text-gray-400 leading-relaxed">
                                <span className="text-white font-bold">$1,800 gross weekly minimum.</span> We value your time and commitment from day one.
                            </p>
                        </div>

                        {/* Sign-on Bonus */}
                        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-white transition-all duration-300 group">
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                                <Award className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">Sign-on Bonus</h3>
                            <p className="text-gray-400 leading-relaxed">
                                <span className="text-white font-bold">$1,000 extra</span> after your first 90 days. A reward for choosing the right path.
                            </p>
                        </div>

                        {/* Flexibility */}
                        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-white transition-all duration-300 group">
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                                <Clock className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">Flexibility</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Choice between <span className="text-white font-bold">1099 or W-2</span>. We structure our partnership to fit your needs.
                            </p>
                        </div>

                        {/* Stability */}
                        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-white transition-all duration-300 group">
                            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                                <Truck className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">Stability</h3>
                            <p className="text-gray-400 leading-relaxed">
                                <span className="text-white font-bold">Dedicated runs</span> and no slip seating. Your own truck, consistent miles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area: Philosophy + Form */}
            <section className="py-24 bg-anthracite relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Philosophy Text */}
                        <div className="lg:sticky lg:top-32">
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">The "New Path" Philosophy</h2>
                            <div className="w-24 h-1 bg-white mb-10"></div>

                            <div className="space-y-8 text-lg text-gray-300 font-light leading-relaxed">
                                <p>
                                    At New Path Logistics, we don't look at your past—we look at your potential. We understand that in this industry, sometimes good drivers get a raw deal. Whether you're looking for a fresh start or simply a better home for your skills, we are here to provide that opportunity.
                                </p>
                                <p>
                                    <strong className="text-white font-bold block mb-2 text-xl uppercase tracking-wide">Second Chances</strong>
                                    We believe in second chances for professionals who are ready to work. If you have the aptitude and the drive, "labels" from previous carriers don't matter to us. Your performance on the road is the only metric that counts.
                                </p>
                                <p>
                                    <strong className="text-white font-bold block mb-2 text-xl uppercase tracking-wide">Merit-Based Culture</strong>
                                    There are no politics here. You run the miles, you deliver safely, you get paid and respected. It's that simple. We stripped away the corporate noise to focus on what matters: moving freight and supporting the people who move it.
                                </p>
                            </div>
                        </div>

                        {/* Application Form */}
                        <div className="bg-white text-black p-8 md:p-12 rounded-lg shadow-2xl relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800" />

                            <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Join The Fleet</h3>
                            <p className="text-gray-600 mb-8 font-medium">Start your application today. No obligations.</p>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="fullname" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="w-full bg-gray-100 border border-gray-300 px-4 py-4 text-black placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors rounded-sm"
                                        placeholder="ENTER YOUR FULL NAME"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-gray-100 border border-gray-300 px-4 py-4 text-black placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors rounded-sm"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-gray-100 border border-gray-300 px-4 py-4 text-black placeholder-gray-500 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors rounded-sm"
                                            placeholder="YOU@EXAMPLE.COM"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="cdl" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">CDL Class</label>
                                        <select
                                            id="cdl"
                                            className="w-full bg-gray-100 border border-gray-300 px-4 py-4 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors rounded-sm appearance-none"
                                        >
                                            <option>Class A</option>
                                            <option>Class B</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="experience" className="block text-sm font-bold uppercase tracking-wider mb-2 text-gray-700">Years of Experience</label>
                                        <select
                                            id="experience"
                                            className="w-full bg-gray-100 border border-gray-300 px-4 py-4 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors rounded-sm appearance-none"
                                        >
                                            <option>Less than 1 year</option>
                                            <option>1-3 years</option>
                                            <option>3-5 years</option>
                                            <option>5+ years</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 py-2">
                                    <input
                                        type="checkbox"
                                        id="team"
                                        className="w-6 h-6 text-black border-gray-300 rounded focus:ring-black"
                                    />
                                    <label htmlFor="team" className="text-sm font-bold uppercase tracking-wide text-gray-700 cursor-pointer select-none">
                                        Are you applying as a Team?
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black text-white font-black uppercase tracking-widest py-5 hover:bg-zinc-800 transition-all duration-300 text-lg shadow-lg hover:shadow-xl mt-4 flex items-center justify-center gap-2"
                                >
                                    Submit Application
                                    <Send className="w-5 h-5" />
                                </button>

                                <p className="text-xs text-center text-gray-500 mt-4">
                                    By submitting this form, you agree to our privacy policy and consent to be contacted by our recruiting team.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
