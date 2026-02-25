"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

function BookingStatusContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("Confirming your booking...");

    useEffect(() => {
        if (!sessionId) {
            setStatus("error");
            setMessage("No session ID found.");
            return;
        }

        const confirmBooking = async () => {
            try {
                const res = await fetch("/api/confirm-booking", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ session_id: sessionId })
                });

                const data = await res.json();

                if (res.ok) {
                    setStatus("success");
                    setMessage("Your payment was successful and your booking is confirmed!");
                } else {
                    setStatus("error");
                    setMessage(data.error || "Failed to confirm booking.");
                }
            } catch (error) {
                setStatus("error");
                setMessage("Something went wrong while confirming the booking.");
            }
        };

        confirmBooking();
    }, [sessionId]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <PageHeader title="Booking Status" subtitle="Thank you for choosing Tjane Health" breadcrumbs={[{ label: "Booking Status", href: "#" }]} />
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col items-center">
                    {status === "loading" && (
                        <>
                            <Loader2 className="h-16 w-16 text-brand-primary animate-spin mb-6" />
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing...</h2>
                            <p className="text-gray-600">{message}</p>
                        </>
                    )}

                    {status === "success" && (
                        <>
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="h-10 w-10 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">{message} We've sent a confirmation email to your inbox with the details.</p>
                            <Link href="/courses" className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary-700 transition-colors shadow-lg">
                                Browse More Courses
                            </Link>
                        </>
                    )}

                    {status === "error" && (
                        <>
                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Failed</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">{message} If you believe this is an error, please contact support.</p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-primary text-brand-primary font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                Contact Support
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function BookingSuccessPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin h-8 w-8 text-brand-primary" /></div>}>
            <BookingStatusContent />
        </Suspense>
    );
}
