import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle2, HeadphonesIcon, Phone, FileBadge2, Award } from "lucide-react";
import { BookingForm } from "@/components/ui/BookingForm";

export const metadata: Metadata = {
    title: "Anger Management Course | Tjane Health",
    description: "Enroll in our comprehensive 12-session Anger Management course to understand and manage your emotions effectively. Available online and in-person.",
};

export default function AngerManagementPage() {
    return (
        <div className="bg-[#f0f9f3] min-h-screen text-gray-800 font-sans">
            {/* HEROS SECTION */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop"
                        alt="Calm Nature Background"
                        fill
                        className="object-cover opacity-10"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="mb-6 inline-block animate-fade-in-down">
                        <div className="w-24 h-24 mx-auto mb-4 relative">
                            {/* SVG Leaf Logo representation */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-primary-600 drop-shadow-md">
                                <path fill="currentColor" d="M50 20 C20 20 20 50 50 80 C80 50 80 20 50 20 Z" />
                                <circle fill="#84cc16" cx="50" cy="15" r="10" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Tjane_health</h2>
                        <p className="text-sm font-medium text-gray-600 uppercase tracking-widest mt-1">Together we can save lives</p>
                    </div>

                    <div className="inline-block bg-brand-primary-700 text-white px-8 py-3 rounded-sm shadow-xl transform -skew-x-12 mb-6">
                        <h1 className="text-5xl md:text-6xl font-black transform skew-x-12 tracking-wider">
                            ANGER
                        </h1>
                    </div>
                    <div className="inline-block bg-brand-primary-800 text-white px-8 py-2 rounded-sm shadow-lg mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
                            MANAGEMENT COURSE
                        </h2>
                    </div>

                    <p className="text-xl md:text-2xl font-semibold text-brand-primary-900 mb-12">
                        Gain Control Over Your Anger & <span className="text-brand-primary-600 font-bold">Improve Your Life!</span>
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT DIVIDER / WAVE */}
            <div className="w-full h-16 bg-gradient-to-b from-brand-primary-100 to-[#f0f9f3] opacity-60"></div>

            {/* ABOUT & SESSIONS SECTION */}
            <section className="py-16 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
                    {/* Visual: Anger / Calm */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center relative gap-8">
                        <div className="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop"
                                alt="Frustrated Person Silhouette"
                                width={200}
                                height={200}
                                className="rounded-full blur-[1px] grayscale contrast-125 mix-blend-multiply"
                            />
                            <div className="absolute top-10 -right-4 text-red-500 scale-150">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L15 10H23L16 15L19 23L12 18L5 23L8 15L1 10H9L12 2Z" />
                                </svg>
                            </div>
                        </div>

                        <div className="hidden md:block text-brand-primary-300">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
                                alt="Calm Meditating Person"
                                width={240}
                                height={240}
                                className="rounded-full shadow-2xl border-4 border-white object-cover object-top h-[240px]"
                            />
                            {/* Decorative leaves */}
                            <div className="absolute -bottom-4 -left-4 text-brand-primary-500 bg-white rounded-full p-2 shadow-lg">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 22c-4.4 0-8-3.6-8-8 0-3.3 2-6.2 5-7.5V4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2.5c3 1.3 5 4.2 5 7.5 0 4.4-3.6 8-8 8zm-2-15.3c-2 1.3-3.4 3.5-3.4 6 0 3 2.5 5.4 5.4 5.4 3 0 5.4-2.5 5.4-5.4 0-2.5-1.4-4.7-3.4-6L14 11l-2 2-2-2-1.6 2.3-2.4-1.6z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Content: About */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] relative overflow-hidden border border-brand-primary-50">
                            <div className="inline-block bg-brand-primary-700 text-white px-6 py-2 rounded-r-xl shadow-md mb-8 absolute top-8 left-0">
                                <h3 className="text-xl font-bold tracking-wide">ABOUT THE COURSE:</h3>
                            </div>
                            <div className="mt-16 space-y-5">
                                {[
                                    "Learn to identify triggers & control reactions",
                                    "Develop healthy coping strategies",
                                    "Improve communication skills & reduce stress."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="bg-green-100 rounded-full p-1 mt-0.5 shrink-0 flex items-center justify-center">
                                            <Check className="w-5 h-5 text-brand-primary-600 stroke-[3]" />
                                        </div>
                                        <p className="text-lg font-medium text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILS BANNER */}
            <section className="bg-white border-y border-brand-primary-100 py-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary-50/50 mix-blend-multiply"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-center md:text-left">
                    <div className="bg-brand-primary-800 text-white px-8 py-3 rounded-sm shadow-xl transform -skew-x-12">
                        <h3 className="text-4xl lg:text-5xl font-black transform skew-x-12">12 SESSIONS</h3>
                    </div>
                    <div>
                        <p className="text-xl lg:text-2xl font-bold text-gray-800 tracking-wide mb-1">AVAILABLE ONLINE & IN-PERSON</p>
                        <p className="text-3xl lg:text-4xl font-black text-brand-primary-600"><span className="text-4xl lg:text-5xl">$25</span> PER SESSION</p>
                    </div>
                </div>
            </section>

            {/* FEATURES & CERTIFICATE */}
            <section className="py-20 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                    {/* Features block */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-24 h-24 mx-auto bg-brand-primary-600 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-green-100">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wider">Effective Techniques</h4>
                            <p className="text-gray-600">Learn proven strategies for managing anger</p>
                        </div>

                        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-24 h-24 mx-auto bg-brand-primary-600 rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-green-100">
                                <HeadphonesIcon className="w-12 h-12 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wider">Expert Guidance</h4>
                            <p className="text-gray-600">Led by qualified and experienced therapists</p>
                        </div>
                    </div>

                    {/* Certificate */}
                    <div className="lg:col-span-1 flex flex-col items-center">
                        <div className="text-center mb-4">
                            <p className="font-semibold text-lg text-gray-800">Certificate of Completion <br /> will be issued</p>
                        </div>
                        <div className="relative rotate-2 hover:rotate-0 transition-transform duration-300 shadow-2xl rounded-sm border-8 border-white bg-[#faf8f0] p-6 max-w-[300px]">
                            <div className="border border-brand-primary-300 p-4 text-center h-full flex flex-col justify-center items-center">
                                <FileBadge2 className="w-10 h-10 text-brand-primary-600 mb-2 opacity-50" />
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-serif">Tjane Health</p>
                                <h5 className="font-serif text-xl text-brand-primary-800 mb-4 italic">Certificate of Completion</h5>
                                <div className="w-full border-b border-gray-400 mb-1 pb-1">
                                    <p className="text-sm font-semibold">Your Name Here</p>
                                </div>
                                <p className="text-[8px] text-gray-400">For successfully completing the Anger Management course.</p>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-brand-primary-600 rounded-full p-2 text-white shadow-lg border-4 border-white">
                                <Award className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA & BOOKING FORM */}
            <section className="bg-white py-20 relative border-t border-brand-primary-100 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-primary-800 mb-8 tracking-tight">
                        READY TO TAKE CONTROL?
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16">
                        <div className="flex items-center gap-4 group">
                            <div className="bg-brand-primary-600 p-4 rounded-full text-white shadow-lg group-hover:bg-brand-primary-700 transition-colors">
                                <Phone className="w-8 h-8" fill="currentColor" />
                            </div>
                            <a href="tel:443-560-0550" className="text-3xl lg:text-4xl font-bold text-gray-800 hover:text-brand-primary-600 transition-colors">
                                (443) 560-0550
                            </a>
                        </div>

                    </div>

                    <div className="bg-[#f8fcf9] p-6 lg:p-10 rounded-2xl shadow-xl border border-brand-primary-100 text-left relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary-100 rounded-full -mr-32 -mt-32 opacity-50 pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative z-10">Book Your Session Instantly</h3>
                        <div className="relative z-10 max-w-3xl mx-auto backdrop-blur-sm bg-white/50 p-4 rounded-xl">
                            <BookingForm courseTitle="Anger Management" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
