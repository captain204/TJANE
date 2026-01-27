"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Upload, Send, User, Mail, Phone, Briefcase, FileText } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CareersPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            position: formData.get("position") as string,
            coverLetter: formData.get("coverLetter") as string,
        };

        try {
            const htmlContent = `
                <h3>New Job Application</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Position:</strong> ${data.position}</p>
                <p><strong>Cover Letter:</strong></p>
                <p>${data.coverLetter}</p>
            `;

            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: data.email, // Defaults to sender for now, ideally admin email
                    replyTo: data.email,
                    subject: `Job Application: ${data.position} - ${data.name}`,
                    html: htmlContent
                })
            });

            if (!res.ok) throw new Error("Failed to submit application");

            setSubmitted(true);
        } catch (err) {
            setError("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                title="Join Our Team"
                subtitle="Build a rewarding career with Tjane Health. Apply today and make a difference."
                breadcrumbs={[{ label: "Careers", href: "/careers" }]}
                backgroundImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            />

            {/* Application Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-brand-primary-900 p-8 text-center">
                            <h2 className="text-3xl font-bold text-white mb-2">Job Application</h2>
                            <p className="text-brand-primary-100">Take the next step in your professional journey.</p>
                        </div>

                        <div className="p-8 md:p-12">
                            {submitted ? (
                                <motion.div
                                    className="text-center py-16"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="h-10 w-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Received!</h3>
                                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                        Thank you for your interest in Tjane Health. Our team will review your application and get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-brand-primary font-medium hover:text-brand-primary-700 underline"
                                    >
                                        Submit another application
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <User className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition-colors hover:border-brand-primary-300"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Mail className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition-colors hover:border-brand-primary-300"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Phone className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition-colors hover:border-brand-primary-300"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                        </div>

                                        {/* Position */}
                                        <div className="space-y-2">
                                            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position Applying For</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Briefcase className="h-5 w-5 text-gray-400" />
                                                </div>
                                                <select
                                                    id="position"
                                                    name="position"
                                                    required
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition-colors hover:border-brand-primary-300 bg-white"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>Select a position</option>
                                                    <option value="rn">Registered Nurse (RN)</option>
                                                    <option value="lpn">Licensed Practical Nurse (LPN)</option>
                                                    <option value="cna">Certified Nursing Assistant (CNA)</option>
                                                    <option value="ma">Medical Assistant</option>
                                                    <option value="admin">Administrative Staff</option>
                                                    <option value="instructor">Instructor</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cover Letter */}
                                    <div className="space-y-2">
                                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                                                <FileText className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <textarea
                                                id="coverLetter"
                                                name="coverLetter"
                                                rows={4}
                                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary transition-colors hover:border-brand-primary-300"
                                                placeholder="Tell us why you're a great fit..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Resume Upload - Note: handling file upload for real requires more complex setup (e.g. uploadthing or S3), keeping UI for now but note */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Resume / CV</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                                            <div className="space-y-1 text-center">
                                                <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-brand-primary transition-colors" />
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-brand-primary hover:bg-brand-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit Application"}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
