"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Heart, Users, Target } from "lucide-react";

const STATS = [
    { label: "Students Trained", value: "5,000+", icon: Users },
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Lives Impacted", value: "Countless", icon: Heart },
    { label: "Pass Rate", value: "99%", icon: Target },
];

const VALUES = [
    {
        title: "Integrity",
        desc: "We believe in honest, transparent training that puts the student's learning first."
    },
    {
        title: "Excellence",
        desc: "Our instructors are seasoned healthcare professionals, not just textbook readers."
    },
    {
        title: "Accessibility",
        desc: "Life-saving skills should be available to everyone, regardless of background."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Our Mission"
                subtitle="Empowering our community with the confidence and skills to act in emergencies."
                breadcrumbs={[{ label: "About Us", href: "/about" }]}
                backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            />

            {/* Story Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-secondary-100 rounded-full blur-3xl opacity-50" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                                <Image
                                    src="https://images.unsplash.com/photo-1551601651-7360a92d046f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Instructor teaching CPR"
                                    width={800}
                                    height={600}
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">More Than Just a Certification</h2>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Founded by experienced healthcare providers, Tjane Health started with a simple observation:
                                    too many people hesitate in emergencies because they lack confidence, not just knowledge.
                                </p>
                                <p>
                                    We set out to change that. Our training isn't about ticking a box; it's about building the muscle memory
                                    and mindset to save a life.
                                </p>
                                <p>
                                    Today, we are proud to be one of the region's most trusted training centers, authorized by the
                                    American Heart Association and Red Cross.
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-brand-primary-600 font-bold text-xl mb-1">Our Instructor Standard</div>
                                    <p className="text-sm text-gray-500">Every instructor is a current or former medical professional.</p>
                                </div>
                                <div>
                                    <div className="text-brand-primary-600 font-bold text-xl mb-1">Our Equipment</div>
                                    <p className="text-sm text-gray-500">We train with high-feedback manikins that mimic real life.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Parallax */}
            <section className="py-20 bg-brand-primary-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {STATS.map((stat, i) => (
                            <div key={i} className="p-6">
                                <stat.icon className="mx-auto text-brand-secondary-500 mb-4" size={40} />
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-brand-secondary-200 uppercase tracking-widest text-xs font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {VALUES.map((val, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary-200 transition-colors">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{val.title}</h3>
                                <p className="text-gray-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
