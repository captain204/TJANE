"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { CourseCard } from "@/components/ui/CourseCard";
import { motion } from "framer-motion";
import { Check, Globe, Clock, ShieldCheck } from "lucide-react";
import { COURSES } from "@/lib/constants";

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Our Training Programs"
                subtitle="Accredited certification courses designed for healthcare professionals, workplaces, and the community."
                breadcrumbs={[{ label: "Services", href: "/services" }]}
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COURSES.map((course, index) => (
                            <CourseCard
                                key={index}
                                title={course.title}
                                slug={course.slug}
                                description={course.description}
                                image={course.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Online Training */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Get certified with the most flexible and respected healthcare training programs available.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="bg-brand-primary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-brand-primary-600">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Online & Flexible</h3>
                            <p className="text-gray-500 mb-6 text-sm">Access your course materials from any device, anytime. No need to commute or stick to a rigid timetable.</p>
                            <ul className="space-y-3">
                                {["Learn Anywhere", "Pause & Resume Anytime", "Self-Paced Progress"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <Check size={16} className="text-brand-primary-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-brand-primary-950 p-8 rounded-2xl shadow-xl border border-brand-primary-800 relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-brand-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PROVEN</div>
                            <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-brand-secondary-400">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Accredited Certification</h3>
                            <p className="text-gray-300 mb-6 text-sm">Our courses follow the latest guidelines from major health organizations like AHA and the Red Cross.</p>
                            <ul className="space-y-3">
                                {["Nationally Recognized", "Official eCards", "Healthcare Compliant"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                                        <Check size={16} className="text-brand-secondary-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="bg-brand-primary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-brand-primary-600">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Verification</h3>
                            <p className="text-gray-500 mb-6 text-sm">Download your digital certificate immediately upon successful completion of the course and final assessment.</p>
                            <ul className="space-y-3">
                                {["Same-Day eCards", "Digital Records", "Easy Sharing"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <Check size={16} className="text-brand-primary-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
