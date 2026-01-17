"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";

const FAQS = [
    {
        q: "How long does certification last?",
        a: "Most AHA and Red Cross certifications are valid for 2 years from the date of completion."
    },
    {
        q: "Do I get my card the same day?",
        a: "Yes! If you successfully pass the skills session and written exam (if applicable), you will receive your eCard via email immediately or within 24 hours."
    },
    {
        q: "What if I need to cancel?",
        a: "We offer full refunds for cancellations made at least 24 hours in advance. Rescheduling is free."
    },
    {
        q: "Do you offer group discounts?",
        a: "Yes, for groups of 5 or more students. Please contact us for a custom quote."
    }
];

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Get in Touch"
                subtitle="Have questions about a course or need to schedule group training? We're here to help."
                breadcrumbs={[{ label: "Contact", href: "/contact" }]}
                backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info & FAQ */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                                        <Phone className="text-brand-primary-600 shrink-0" />
                                        <div>
                                            <p className="font-bold text-gray-900">Phone</p>
                                            <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                                        <Mail className="text-brand-primary-600 shrink-0" />
                                        <div>
                                            <p className="font-bold text-gray-900">Email</p>
                                            <p className="text-gray-600">{COMPANY_INFO.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 md:col-span-2">
                                        <MapPin className="text-brand-primary-600 shrink-0" />
                                        <div>
                                            <p className="font-bold text-gray-900">Training Center</p>
                                            <p className="text-gray-600">{COMPANY_INFO.address.replace(", ", "\n")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="pt-8 border-t border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {FAQS.map((faq, index) => (
                                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 text-left transition-colors"
                                            >
                                                <span className="font-semibold text-gray-900">{faq.q}</span>
                                                {openFaq === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                                            </button>
                                            <AnimatePresence>
                                                {openFaq === index && (
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        animate={{ height: "auto" }}
                                                        exit={{ height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="p-4 pt-0 text-gray-600 bg-gray-50/50 border-t border-gray-100">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
