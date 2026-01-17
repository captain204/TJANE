"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for video or high-quality image */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-950/90 to-brand-primary-900/40 z-10" />
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                            <ShieldCheck size={16} className="text-brand-secondary-400" />
                            <span>AHA Authorized Provider</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            Lifesaving Skills <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary-400 to-white">
                                Within Reach.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                            Join thousands of certified professionals. accredited CPR, BLS, and First Aid training designed for healthcare providers and the community.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/services"
                                className="bg-brand-secondary-500 hover:bg-brand-secondary-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-secondary-500/20 transition-all hover:scale-105 flex items-center gap-2"
                            >
                                Find a Class
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/corporate-training"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-xl border border-white/30 transition-all hover:bg-white/20"
                            >
                                Corporate Training
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-8 border-t border-white/10">
                            <div className="text-center md:text-left">
                                <p className="text-3xl font-bold text-white">5k+</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Students Cert.</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-3xl font-bold text-white">100%</p>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Ideally simpler or visual interactive element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        {/* Decorative abstract elements */}
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-secondary-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-brand-primary-500 p-3 rounded-full">
                                    <HeartPulse size={32} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white text-xl font-bold">Today's Availability</h3>
                                    <p className="text-brand-secondary-300 text-sm">Book your spot now</p>
                                </div>
                            </div>
                            {/* Mini list representation */}
                            <div className="space-y-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="text-white">
                                            <p className="font-bold">BLS Provider</p>
                                            <p className="text-xs text-gray-400">09:00 AM - 1:00 PM</p>
                                        </div>
                                        <div className="text-brand-secondary-400 text-sm font-semibold">
                                            $85
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Organic Shape Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};
