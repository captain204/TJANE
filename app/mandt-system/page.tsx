import { Metadata } from "next";
import Image from "next/image";
import { Check, HeadphonesIcon, Phone, FileBadge2, Award, CalendarDays, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Mandt System Training | Tjane Health",
    description: "Learn how to implement the Mandt System. Acknowledge and manage emotions, choose constructive behaviors, and maintain safety.",
};

export default function MandtSystemPage() {
    return (
        <div className="bg-[#f0f9f3] min-h-screen text-gray-800 font-sans">
            {/* HEROS SECTION */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-brand-primary-900">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173ff9e8eb3?q=80&w=2938&auto=format&fit=crop"
                        alt="Medical Training Background"
                        fill
                        className="object-cover opacity-20 mix-blend-overlay"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="mb-6 inline-block animate-fade-in-down">
                        <div className="w-24 h-24 mx-auto mb-4 relative">
                            {/* SVG Leaf Logo representation */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-primary-400 drop-shadow-md">
                                <path fill="currentColor" d="M50 20 C20 20 20 50 50 80 C80 50 80 20 50 20 Z" />
                                <circle fill="#84cc16" cx="50" cy="15" r="10" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">TJANE Health</h2>
                        <p className="text-sm font-medium text-brand-primary-200 uppercase tracking-widest mt-1">Together we can save lives</p>
                    </div>

                    <div className="inline-block bg-brand-primary-600 text-white px-8 py-3 rounded-sm shadow-xl transform -skew-x-12 mb-6 border-l-4 border-brand-primary-300">
                        <h1 className="text-5xl md:text-6xl font-black transform skew-x-12 tracking-wider">
                            MANDT
                        </h1>
                    </div>
                    <div className="inline-block bg-white text-brand-primary-900 px-8 py-2 rounded-sm shadow-lg mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
                            SYSTEM COURSE
                        </h2>
                    </div>

                    <p className="text-xl md:text-2xl font-semibold text-brand-primary-50 max-w-4xl mx-auto mb-12">
                        Are you interested in learning how to implement the Mandt System? This program helps you acknowledge and manage your emotions, choose constructive behaviors, and maintain safety during challenging interactions.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT DIVIDER / WAVE */}
            <div className="w-full h-16 bg-gradient-to-b from-brand-primary-900 to-[#f0f9f3]"></div>

            {/* ABOUT SECTION */}
            <section className="py-16 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
                    {/* Visual Area */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1543269664-56d74c65a38e?q=80&w=2670&auto=format&fit=crop"
                                alt="Training Session"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl border-4 border-white object-cover object-center"
                            />
                            <div className="absolute -bottom-6 -right-6 text-brand-primary-600 bg-white rounded-full p-4 shadow-xl border-2 border-brand-primary-100">
                                <ShieldCheck className="w-12 h-12" />
                            </div>
                        </div>
                    </div>

                    {/* Content: About */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] relative overflow-hidden border border-brand-primary-50">
                            <div className="inline-block bg-brand-primary-700 text-white px-6 py-2 rounded-r-xl shadow-md mb-8 absolute top-8 left-0">
                                <h3 className="text-xl font-bold tracking-wide">COURSE OVERVIEW</h3>
                            </div>
                            <div className="mt-16 space-y-6">
                                <p className="text-lg text-gray-700 font-medium">
                                    Tjane Health is committed to fostering safe and respectful environments through the Mandt System, providing comprehensive training to healthcare staff and the wider community.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-brand-primary-100 rounded-lg p-2 mt-0.5 shrink-0">
                                            <Check className="w-5 h-5 text-brand-primary-700 stroke-[3]" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900">Relational Chapters (1-2)</h4>
                                            <p className="text-gray-600">Focus on building positive relationships.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-brand-primary-100 rounded-lg p-2 mt-0.5 shrink-0">
                                            <Check className="w-5 h-5 text-brand-primary-700 stroke-[3]" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900">Technical Chapters (3-4)</h4>
                                            <p className="text-gray-600">Physical skills and safety techniques.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILS BANNER */}
            <section className="bg-white border-y border-brand-primary-100 py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary-50/50 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-center">

                    <div className="bg-brand-primary-800 text-white px-8 py-6 rounded-xl shadow-xl border-b-4 border-brand-primary-900 flex-1 max-w-xs w-full">
                        <h4 className="text-xl font-bold uppercase tracking-widest text-brand-primary-200 mb-2">2-Day Course</h4>
                        <div className="text-4xl lg:text-5xl font-black mb-1">$220</div>
                        <p className="text-sm font-medium text-brand-primary-100 uppercase">Per student</p>
                    </div>

                    <div className="bg-white text-brand-primary-900 px-8 py-6 rounded-xl shadow-xl border-b-4 border-brand-primary-200 flex-1 max-w-xs w-full">
                        <h4 className="text-xl font-bold uppercase tracking-widest text-brand-primary-600 mb-2">1-Day Course</h4>
                        <div className="text-4xl lg:text-5xl font-black mb-1 text-gray-900">$120</div>
                        <p className="text-sm font-medium text-gray-500 uppercase">Per student (Refresher)</p>
                    </div>

                </div>
            </section>

            {/* FEATURES & CERTIFICATE & SCHEDULE */}
            <section className="py-20 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* What you'll receive block */}
                    <div className="lg:col-span-7 space-y-8">
                        <h3 className="text-3xl font-black text-brand-primary-900 border-b-2 border-brand-primary-100 pb-4 inline-block">What You'll Receive</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mb-4 text-brand-primary-700">
                                    <FileBadge2 className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Official Certificate</h4>
                                <p className="text-sm text-gray-600">Official Mandt System certificate upon successful completion (distributed via email).</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mb-4 text-brand-primary-700">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Student Profile Access</h4>
                                <p className="text-sm text-gray-600">Virtual access to your Mandt Student Learning Profile (certificate, workbook, video library).</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center sm:col-span-2">
                                <div className="w-16 h-16 bg-brand-primary-100 rounded-full flex items-center justify-center mb-4 text-brand-primary-700">
                                    <HeadphonesIcon className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">Conceptual Content</h4>
                                <p className="text-sm text-gray-600">Virtual access to Trauma Informed Services, Behavior Interventions & Support.</p>
                            </div>
                        </div>
                    </div>

                    {/* Schedule */}
                    <div className="lg:col-span-5 bg-[#f8fcf9] p-8 rounded-2xl shadow-xl border border-brand-primary-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-brand-primary-600 p-3 rounded-lg text-white">
                                <CalendarDays className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Scheduled Classes</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-brand-primary-800 mb-3 border-b border-gray-200 pb-2">Mandt 2-Day (9am-5pm/day)</h4>
                                <ul className="space-y-2">
                                    {['3/25 – 3/26', '6/10 – 6/11', '9/21 – 9/22', '11/30 – 12/1'].map((date, i) => (
                                        <li key={i} className="flex justify-between items-center text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                            <span className="font-semibold">{date}</span>
                                            <span className="text-sm text-gray-500">9:00 AM – 5:00 PM</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-brand-primary-800 mb-3 border-b border-gray-200 pb-2">Mandt Refresher 1-Day (9am-5pm)</h4>
                                <ul className="space-y-2">
                                    {['4/24', '8/19', '12/18'].map((date, i) => (
                                        <li key={i} className="flex justify-between items-center text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                            <span className="font-semibold">{date}</span>
                                            <span className="text-sm text-gray-500">9:00 AM – 5:00 PM</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Questions?</p>
                            <p className="text-gray-900 font-bold mb-1">Tjane Training Team</p>
                            <a href="mailto:admin@tjanehealth.com" className="text-brand-primary-600 hover:text-brand-primary-800 transition-colors font-medium">admin@tjanehealth.com</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA & INTAKE FORM */}
            <section className="bg-brand-primary-900 py-20 relative shadow-[0_-10px_40px_rgba(0,0,0,0.03)] text-white">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2929&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-950 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        GET STARTED WITH MANDT
                    </h2>

                    <p className="text-lg md:text-xl text-brand-primary-100 mb-12 max-w-2xl mx-auto">
                        Please complete the form below so we can understand your and your company’s specific training needs. After submission and approval, a member of our training team will contact you with payment details.
                    </p>

                    <div className="bg-white text-left p-6 lg:p-10 rounded-2xl shadow-2xl border border-brand-primary-800/30 relative overflow-hidden backdrop-blur-md">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative z-10">Training Request Form</h3>

                        {/* Assuming we will create a MandtIntakeForm component */}
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <MandtIntakeForm />
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-4 group bg-white/10 px-6 py-4 rounded-full backdrop-blur-sm border border-white/20">
                            <div className="bg-brand-primary-500 p-3 rounded-full text-white shadow-lg">
                                <Phone className="w-6 h-6" fill="currentColor" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-brand-primary-200 uppercase tracking-wider font-semibold">Call Us Direct</p>
                                <a href="tel:443-560-0550" className="text-2xl font-bold text-white hover:text-brand-primary-300 transition-colors">
                                    (443) 560-0550
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

// Inline component for now to ensure it works, we can extract this if needed
function MandtIntakeForm() {
    return (
        <form className="space-y-6 text-gray-800" action="/api/mandt-intake" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50" placeholder="john@company.com" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50" placeholder="(555) 123-4567" />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company / Organization</label>
                    <input type="text" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50" placeholder="Company Name" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Training Type *</label>
                    <select name="trainingType" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50 font-medium">
                        <option value="">-- Select Training Type --</option>
                        <option value="2-Day Mandt Course">2-Day Mandt Course ($220/student)</option>
                        <option value="1-Day Refresher">1-Day Mandt Refresher ($120/student)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Number of Students *</label>
                    <input type="number" name="studentCount" min="1" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50" placeholder="e.g. 5" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date(s)</label>
                <input type="text" name="preferredDates" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50" placeholder="e.g. March 25-26" />
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Specific Training Needs or Additional Notes</label>
                <textarea name="notes" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary-500 focus:border-brand-primary-500 transition-shadow bg-gray-50 resize-y" placeholder="Tell us more about your specific requirements..."></textarea>
            </div>

            <div className="pt-4 text-center">
                <button type="submit" className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary-600 text-white font-bold rounded-lg hover:bg-brand-primary-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[250px]">
                    Submit Request
                </button>
                <p className="text-xs text-gray-500 mt-4">We will review your request and contact you with payment details.</p>
            </div>
        </form>
    );
}
