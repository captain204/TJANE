"use client";

import { useState, useEffect } from "react";
import { BookingCalendar } from "./BookingCalendar";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { Loader2, CheckCircle2, Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

import { COURSES } from "@/lib/constants";

interface BookingFormProps {
    courseTitle?: string;
}

export const BookingForm = ({ courseTitle }: BookingFormProps) => {
    const [step, setStep] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState(courseTitle || "");
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [time, setTime] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        notes: ""
    });
    const [paymentOption, setPaymentOption] = useState<"single" | "full">("single");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    // Hydration safe 'now'
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const timer = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Generate 24-hour time slots (every 30 minutes)
    const generateTimeSlots = () => {
        const slots = [];
        for (let i = 0; i < 24; i++) {
            const hour = i;
            const hourFormatted = hour % 12 || 12;
            const ampm = hour < 12 ? "AM" : "PM";

            // push hour:00
            slots.push(`${hourFormatted}:00 ${ampm}`);
            // push hour:30
            slots.push(`${hourFormatted}:30 ${ampm}`);
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const handleNext = () => {
        if (step === 1 && (!date || !selectedCourse)) return;
        if (step === 2 && !time) return;
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    course: selectedCourse,
                    date: date ? format(date, 'PPP') : '',
                    time,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    notes: formData.notes,
                    paymentOption
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600 mb-6">
                    Thank you {formData.name}. We have received your booking request for {selectedCourse} on {date ? format(date, 'PPP') : ''} at {time}. We will contact you shortly to confirm details.
                </p>
                <button
                    onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                        setDate(new Date());
                        setTime("");
                        if (!courseTitle) setSelectedCourse("");
                        setFormData({ name: "", email: "", phone: "", notes: "" });
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
            {/* Header / Progress */}
            <div className="bg-brand-primary-900 p-6 text-white">
                <h3 className="text-xl font-bold mb-4">{selectedCourse ? `Book ${selectedCourse}` : 'Book a Class'}</h3>
                <div className="flex items-center justify-between text-sm px-2">
                    <div className={`flex flex-col items-center ${step >= 1 ? 'text-white' : 'text-brand-primary-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 1 ? 'bg-white text-brand-primary-900 font-bold' : 'bg-brand-primary-800'}`}>1</div>
                        <span>Date</span>
                    </div>
                    <div className={`h-0.5 w-full mx-2 ${step >= 2 ? 'bg-white' : 'bg-brand-primary-800'}`} />
                    <div className={`flex flex-col items-center ${step >= 2 ? 'text-white' : 'text-brand-primary-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 2 ? 'bg-white text-brand-primary-900 font-bold' : 'bg-brand-primary-800'}`}>2</div>
                        <span>Time</span>
                    </div>
                    <div className={`h-0.5 w-full mx-2 ${step >= 3 ? 'bg-white' : 'bg-brand-primary-800'}`} />
                    <div className={`flex flex-col items-center ${step >= 3 ? 'text-white' : 'text-brand-primary-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${step >= 3 ? 'bg-white text-brand-primary-900 font-bold' : 'bg-brand-primary-800'}`}>3</div>
                        <span>Details</span>
                    </div>
                </div>
            </div>

            <div className="p-6 min-h-[400px]">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            {!courseTitle && (
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">Select a Course</label>
                                    <select
                                        className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-primary-500 transition-all font-medium"
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                    >
                                        <option value="">-- Choose a class --</option>
                                        {COURSES.map(c => (
                                            <option key={c.slug} value={c.title}>{c.title}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div className="text-center mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">Select a Date</h4>
                                <p className="text-sm text-gray-500">Choose a day that works best for you.</p>
                            </div>
                            <BookingCalendar selected={date} onSelect={setDate} />
                            <div className="flex justify-end pt-4">
                                <button
                                    onClick={handleNext}
                                    disabled={!date || !selectedCourse}
                                    className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Continue to Time Selection <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">Select a Time</h4>
                                <p className="text-sm text-gray-500">Available slots for {date ? format(date, 'MMM do') : ''}</p>
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-60 overflow-y-auto p-2 border rounded-lg">
                                {timeSlots.map((slot) => {
                                    // Check if slot is in the past
                                    let isPastTime = false;
                                    if (date && now) {
                                        const isToday = date.getDate() === now.getDate() &&
                                            date.getMonth() === now.getMonth() &&
                                            date.getFullYear() === now.getFullYear();

                                        if (isToday) {
                                            const [timeStr, period] = slot.split(' ');
                                            const [hoursStr, minutesStr] = timeStr.split(':');
                                            let hours = parseInt(hoursStr);
                                            const minutes = parseInt(minutesStr);

                                            if (period === 'PM' && hours !== 12) hours += 12;
                                            if (period === 'AM' && hours === 12) hours = 0;

                                            const slotDate = new Date(date);
                                            slotDate.setHours(hours, minutes, 0, 0);

                                            if (slotDate < now) {
                                                isPastTime = true;
                                            }
                                        }
                                    }

                                    return (
                                        <button
                                            key={slot}
                                            onClick={() => !isPastTime && setTime(slot)}
                                            disabled={isPastTime}
                                            className={`p-2 rounded-md text-xs font-medium border transition-all 
                                                ${time === slot ? 'bg-brand-primary text-white border-brand-primary' :
                                                    isPastTime ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed' :
                                                        'bg-white text-gray-700 border-gray-200 hover:border-brand-primary hover:shadow-sm'}
                                            `}
                                        >
                                            {slot}
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="flex justify-between pt-4">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <ArrowLeft size={18} /> Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={!time}
                                    className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Next <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="text-center mb-4">
                                <h4 className="text-lg font-semibold text-gray-900">Your Details</h4>
                                <p className="text-sm text-gray-500">We need a few details to confirm your booking.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
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
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-primary focus:border-brand-primary"
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    />
                                </div>

                                {selectedCourse === "Anger Management" && (
                                    <div className="bg-brand-primary-50 p-4 rounded-xl border border-brand-primary-100 mb-4">
                                        <label className="block text-sm font-bold text-gray-900 mb-3">Payment Option</label>
                                        <div className="space-y-3">
                                            <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border bg-white hover:border-brand-primary transition-colors">
                                                <input
                                                    type="radio"
                                                    name="paymentOption"
                                                    value="single"
                                                    checked={paymentOption === "single"}
                                                    onChange={() => setPaymentOption("single")}
                                                    className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-gray-900">Pay per session ($25)</span>
                                                    <span className="text-xs text-gray-500">You will be charged $25 today for the first session.</span>
                                                </div>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border bg-white hover:border-brand-primary transition-colors">
                                                <input
                                                    type="radio"
                                                    name="paymentOption"
                                                    value="full"
                                                    checked={paymentOption === "full"}
                                                    onChange={() => setPaymentOption("full")}
                                                    className="w-4 h-4 text-brand-primary focus:ring-brand-primary"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-gray-900">Pay fully for 12 sessions ($300)</span>
                                                    <span className="text-xs text-gray-500">Save time by paying for all 12 sessions upfront.</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <div className="flex justify-between pt-4">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        disabled={isSubmitting}
                                        className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <ArrowLeft size={18} /> Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex items-center gap-2 px-8 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-700 disabled:opacity-50 transition-colors font-semibold shadow-lg shadow-brand-primary-200"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin h-5 w-5" /> Processing...
                                            </>
                                        ) : (
                                            "Confirm Booking"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
