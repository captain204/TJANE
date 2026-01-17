"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export const ContactForm = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Mock success
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary-500 focus:ring-2 focus:ring-brand-primary-200 outline-none transition-all placeholder:text-gray-400"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary-500 focus:ring-2 focus:ring-brand-primary-200 outline-none transition-all placeholder:text-gray-400"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Subject</label>
                    <select
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary-500 focus:ring-2 focus:ring-brand-primary-200 outline-none transition-all bg-white"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                    >
                        <option value="" disabled selected>Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="booking">Course Booking</option>
                        <option value="corporate">Corporate Training</option>
                        <option value="support">Certification Support</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary-500 focus:ring-2 focus:ring-brand-primary-200 outline-none transition-all placeholder:text-gray-400 resize-none"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={status === "submitting" || status === "success"}
                        className="w-full bg-brand-primary-600 hover:bg-brand-primary-700 disabled:bg-brand-primary-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-primary-500/30 transition-all flex items-center justify-center gap-2 group"
                    >
                        {status === "submitting" ? (
                            <Loader2 className="animate-spin" />
                        ) : status === "success" ? (
                            <>
                                <CheckCircle size={20} />
                                Message Sent!
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};
