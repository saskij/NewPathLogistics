import React from 'react';

export default function PrivacyPage() {
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
                        Privacy Policy
                    </h1>
                    <div className="w-24 h-1 bg-white mx-auto opacity-50"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl space-y-12">

                    {/* Introduction */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Introduction</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            New Path Logistics respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </div>

                    {/* Data Collection */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Data Collection</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        </ul>
                    </div>

                    {/* Use of Information */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Use of Information</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light mb-4">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-zinc-600 ml-4">
                            <li>To facilitate logistics operations and shipment deliveries.</li>
                            <li>To communicate with you regarding your account, quotes, or services.</li>
                            <li>To improve our website, products/services, marketing and customer relationships.</li>
                            <li>To comply with a legal or regulatory obligation.</li>
                        </ul>
                    </div>

                    {/* Third-Party Sharing */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Third-Party Sharing</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light">
                            We do not sell your personal data to third parties. We may share your personal data with verified third-party partners strictly for the purpose of fulfilling logistics services (e.g., carriers, warehouses) or when required by law or government authorities. All third parties are required to respect the security of your personal data and to treat it in accordance with the law.
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-zinc-900 border-b border-zinc-200 pb-2">Contact Us</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed font-light mb-4">
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <div className="bg-zinc-100 p-6 rounded-lg border border-zinc-200">
                            <p className="font-bold text-zinc-900 uppercase tracking-wider mb-2">New Path Logistics</p>
                            <p className="text-zinc-600">123 Logistics Way</p>
                            <p className="text-zinc-600 mb-4">Denver, CO 80202</p>
                            <a href="mailto:info@newpathlogistics.com" className="text-red-600 hover:text-red-700 font-bold transition-colors">
                                info@newpathlogistics.com
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
