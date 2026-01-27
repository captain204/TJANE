"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Building2, Users, HeartHandshake, Stethoscope, Briefcase, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StaffingAgencyPage() {
    const features = [
        {
            icon: Users,
            title: "Expert Vetting",
            description: "Every candidate undergoes rigorous screening, ensuring only top-tier professionals join your team."
        },
        {
            icon: Clock,
            title: "Rapid Deployment",
            description: "We understand urgency. Get qualified staff placed quickly to maintain seamless operations."
        },
        {
            icon: HeartHandshake,
            title: "Perfect Match",
            description: "We don't just fill spots; we align skills and culture for long-term success and satisfaction."
        }
    ];

    const roles = [
        "Registered Nurses (RN)",
        "Licensed Practical Nurses (LPN)",
        "Certified Nursing Assistants (CNA)",
        "Medical Assistants",
        "Home Health Aides",
        "Physical Therapists"
    ];

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Staffing Solutions"
                subtitle="Connecting world-class healthcare facilities with exceptional medical professionals."
                breadcrumbs={[{ label: "Staffing Agency", href: "/staffing-agency" }]}
                backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            />

            {/* Intro Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Elevating Healthcare Staffing Standards
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At Tjane Health, we bridge the gap between healthcare providers and skilled professionals. Our staffing agency is dedicated to ensuring that hospitals, clinics, and long-term care facilities have the support they need to deliver outstanding patient care.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primary-700 transition-colors"
                                >
                                    Hire Talent
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="/careers"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                                >
                                    Apply for Jobs
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Medical team meeting"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We deliver more than just staffing; we deliver peace of mind and operational excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-brand-primary-50 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="h-6 w-6 text-brand-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roles We Fill */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Roles We Specialize In</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our extensive network allows us to fill a wide variety of clinical and administrative positions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {roles.map((role, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-brand-primary-200 transition-colors"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Stethoscope className="h-5 w-5 text-brand-secondary-500 mr-4 flex-shrink-0" />
                                <span className="text-lg font-medium text-gray-800">{role}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-primary-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Staffing?</h2>
                        <p className="text-brand-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                            Let us handle the recruitment so you can focus on what matters most—your patients.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-brand-primary-900 bg-white hover:bg-brand-primary-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
