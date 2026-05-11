"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

import { COURSES } from "@/lib/constants";

interface BookingFormProps {
    courseTitle?: string;
    isAngerManagementPage?: boolean;
}

export const BookingForm = ({ courseTitle, isAngerManagementPage }: BookingFormProps) => {
    const [selectedCourse, setSelectedCourse] = useState(courseTitle || "");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        notes: ""
    });
    const [reason, setReason] = useState("");
    const [otherReason, setOtherReason] = useState("");
    const [paymentOption, setPaymentOption] = useState<"single" | "full">("single");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (courseTitle) {
            setSelectedCourse(courseTitle);
        }
    }, [courseTitle]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCourse) {
            setError("Please select a course");
            return;
        }
        setIsSubmitting(true);
        setError("");

        if (selectedCourse === "Anger Management") {
            const params = new URLSearchParams({
                fullName: formData.name,
                email: formData.email,
                phone: formData.phone,
            });
            window.location.href = `/anger-management-intake?${params.toString()}`;
            return;
        }

        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    course: selectedCourse,
                    date: "Online/Flexible",
                    time: "Anytime",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    notes: formData.notes,
                    paymentOption,
                    reason: reason === "Other(explain)" ? `Other: ${otherReason}` : reason
                })
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to create checkout session");

            // Redirect to Stripe Checkout
            window.location.href = data.url;

        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Received!</h3>
                <p className="text-gray-600 mb-6">
                    Thank you {formData.name}. We have received your booking request for {selectedCourse}. We will contact you shortly to confirm details.
                </p>
                <button
                    onClick={() => {
                        setIsSuccess(false);
                        if (!courseTitle) setSelectedCourse("");
                        setFormData({ name: "", email: "", phone: "", notes: "" });
                        setReason("");
                        setOtherReason("");
                    }}
                    className="text-brand-primary font-medium hover:underline"
                >
                    Book another session
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-brand-primary-900 p-6 text-white">
                <h3 className="text-xl font-bold">{selectedCourse ? `Book ${selectedCourse}` : 'Book a Course'}</h3>
                <p className="text-brand-primary-300 text-sm mt-1">Fill in your details below to secure your spot.</p>
            </div>

            <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!courseTitle && (
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">Select a Course</label>
                            <select
                                required
                                className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-primary-500 transition-all font-medium"
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                            >
                                <option value="">-- Choose a course --</option>
                                {COURSES.map(c => (
                                    <option key={c.slug} value={c.title}>{c.title}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                        <textarea
                            rows={3}
                            placeholder="Any special requirements or questions?"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        />
                    </div>

                    {selectedCourse === "Anger Management" && (
                        <div className="bg-brand-primary-50 p-4 rounded-xl border border-brand-primary-100 mb-4">
                            <label className="block text-sm font-bold text-gray-900 mb-3">Why are you taking the course?</label>
                            <select
                                required
                                className="w-full p-3 border rounded-xl bg-white focus:ring-2 focus:ring-brand-primary-500 transition-all font-medium"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            >
                                <option value="">-- Select a reason --</option>
                                {["Court Order", "self development", "Work issue", "Other(explain)"].map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            {reason === "Other(explain)" && (
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Please explain..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                                        value={otherReason}
                                        onChange={(e) => setOtherReason(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary-600 text-white rounded-xl hover:bg-brand-primary-700 disabled:opacity-50 transition-colors font-bold shadow-lg shadow-brand-primary-200"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin h-5 w-5" /> Processing...
                                </>
                            ) : (
                                "Book Now"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
