import React from 'react';

export default function TermsPage() {
    return (
        <div className="bg-zinc-50 text-zinc-900 min-h-screen">
            {/* Hero Section */}
            <section className="bg-zinc-950 py-24 px-4 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                        Terms & Conditions
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto opacity-50"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl space-y-12">

                    {/* Acceptance of Terms */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Acceptance of Terms</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. All such guidelines or rules are hereby incorporated by reference into the Terms of Service.
                        </p>
                    </div>

                    {/* Limitation of Liability */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Limitation of Liability</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            New Path Logistics shall not be liable for any damages whatsoever, and in particular New Path Logistics shall not be liable for any special, indirect, consequential, or incidental damages, or damages for lost profits, loss of revenue, or loss of use, arising out of or related to this web site or the information contained in it, whether such damages arise in contract, negligence, tort, under statute, in equity, at law, or otherwise, even if verify has been advised of the possibility of such damages.
                        </p>
                    </div>

                    {/* Intellectual Property */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Intellectual Property</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            The Site and its original content, features and functionality are and will remain the exclusive property of New Path Logistics and its licensors. The Site is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of New Path Logistics.
                        </p>
                    </div>

                    {/* Governing Law */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Governing Law</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            These Terms shall be governed and construed in accordance with the laws of the State of Colorado, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                        </p>
                    </div>

                    {/* Changes to Terms */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Changes to Terms</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}
