"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { CourseCard } from "@/components/ui/CourseCard";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

            {/* Comparison / Corporate Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Options Comparison</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Choose the learning format that best fits your schedule and learning style.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Classroom */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Classroom Training</h3>
                            <div className="text-sm font-semibold text-brand-secondary-600 mb-6 uppercase tracking-wider">Traditional</div>
                            <p className="text-gray-500 mb-6 text-sm">Instructor-led, hands-on training in a classroom setting with video-based lessons.</p>
                            <ul className="space-y-3 mb-8">
                                {["100% In-Person", "Immediate Feedback", "Group Practice"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <Check size={16} className="text-brand-primary-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Blended */}
                        <div className="bg-brand-primary-950 p-8 rounded-2xl shadow-xl border border-brand-primary-800 relative overflow-hidden transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 bg-brand-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <h3 className="text-xl font-bold text-white mb-2">Blended Learning</h3>
                            <div className="text-sm font-semibold text-brand-secondary-400 mb-6 uppercase tracking-wider">Online + Skills</div>
                            <p className="text-gray-300 mb-6 text-sm">Complete the cognitive portion online at your own pace, then come in for a quick skills session.</p>
                            <ul className="space-y-3 mb-8">
                                {["Flexible Schedule", "Short In-Person Session", "Same Certification"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                                        <Check size={16} className="text-brand-secondary-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* On-Site */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate On-Site</h3>
                            <div className="text-sm font-semibold text-brand-secondary-600 mb-6 uppercase tracking-wider">We Come to You</div>
                            <p className="text-gray-500 mb-6 text-sm">Training for groups at your business or organization. Customized to your workplace.</p>
                            <ul className="space-y-3 mb-8">
                                {["Group Discounts", "Tailored Scenarios", "Convenient"].map((item, i) => (
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
