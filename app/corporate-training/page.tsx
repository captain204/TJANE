"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { useState } from "react";
import { COURSES } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Send, Users } from "lucide-react";

export default function CorporateTrainingPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        course: "",
        studentCount: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Corporate Training"
                subtitle="Customized health and safety training for your organization, delivered online."
                breadcrumbs={[{ label: "Corporate Training", href: "/corporate-training" }]}
            />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Train Your Entire Team</h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                Ensure your workplace is compliant and safe with our comprehensive corporate training programs.
                                Our online platform allows your staff to complete their certifications at their own pace, from anywhere.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary-50 p-3 rounded-lg text-brand-primary-600">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Official AHA/Red Cross Training</h3>
                                        <p className="text-gray-500">Nationally recognized certifications for your staff.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary-50 p-3 rounded-lg text-brand-primary-600">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">100% Online Delivery</h3>
                                        <p className="text-gray-500">No travel required. Your team can learn from their desks or home.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary-50 p-3 rounded-lg text-brand-primary-600">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Bulk Discounts Available</h3>
                                        <p className="text-gray-500">Special pricing for organizations with 5 or more students.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                        >
                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                                    <p className="text-gray-600">We'll be in touch shortly to coordinate your corporate training package.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 text-brand-primary-600 font-semibold hover:underline"
                                    >
                                        Send another request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Request Corporate Quote</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="Org LLC"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                                            <select
                                                name="course"
                                                required
                                                value={formData.course}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent outline-none transition-all bg-white"
                                            >
                                                <option value="">-- Choose a Course --</option>
                                                {COURSES.map((course) => (
                                                    <option key={course.slug} value={course.slug}>
                                                        {course.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Approx. Students</label>
                                            <input
                                                type="number"
                                                name="studentCount"
                                                required
                                                value={formData.studentCount}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent outline-none transition-all"
                                                placeholder="e.g. 10"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Any specific requirements?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-brand-primary-600 text-white font-bold py-4 rounded-lg hover:bg-brand-primary-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Submit Quote Request <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
