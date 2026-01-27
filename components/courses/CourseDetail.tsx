"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookingForm } from "@/components/ui/BookingForm";

interface Course {
    title: string;
    slug: string;
    description: string;
    image: string;
    tags?: string[];
}

export const CourseDetail = ({ course }: { course: Course }) => {
    const [showBooking, setShowBooking] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Image Column */}
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-auto border border-gray-100"
                    >
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover transform hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    {/* Details Column */}
                    <motion.div variants={itemVariants}>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {course.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-brand-secondary-50 text-brand-secondary-700 px-3 py-1 rounded-full text-sm font-semibold border border-brand-secondary-100"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Description</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {course.description}
                            <br /><br />
                            Our {course.title} course is designed to provide you with the knowledge and skills necessary to excel in your healthcare career.
                            This comprehensive training covers evidence-based techniques and professional standards.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: Clock, text: "Self-Paced / Flexible" },
                                { icon: Award, text: "Official Certification" },
                                { icon: MapPin, text: "Multiple Locations" },
                                { icon: CheckCircle2, text: "Hands-on Training" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -2 }}
                                    className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all"
                                >
                                    <item.icon className="text-brand-primary-500" />
                                    <span className="font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {!showBooking ? (
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                                    <button
                                        onClick={() => setShowBooking(true)}
                                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-brand-primary-600 text-white font-bold rounded-xl hover:bg-brand-primary-700 transition-colors shadow-lg shadow-brand-primary-200"
                                    >
                                        Book Now
                                    </button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
                                    <Link
                                        href="/contact"
                                        className="w-full inline-flex items-center justify-center px-8 py-4 border-2 border-brand-primary-100 text-brand-primary-700 font-bold rounded-xl hover:bg-brand-primary-50 transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.5 }}
                            >
                                <BookingForm courseTitle={course.title} />
                                <div className="mt-4 text-center">
                                    <button
                                        onClick={() => setShowBooking(false)}
                                        className="text-gray-500 hover:text-gray-700 text-sm underline"
                                    >
                                        Cancel Booking
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
