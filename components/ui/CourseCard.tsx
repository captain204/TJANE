"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";

interface CourseCardProps {
    title: string;
    description: string;
    image: string;
    slug: string; // Added slug for linking
    duration?: string; // Made optional as not all courses in constants have it
    location?: string; // Made optional
    certification?: string; // Made optional
}

export const CourseCard = ({
    title,
    description,
    image,
    slug,
    duration = "Flexible",
    location = "Multiple Locations",
    certification = "Certified",
}: CourseCardProps) => {
    return (
        <Link href={`/courses/${slug}`} className="block h-full">
            <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-primary-700 shadow-sm uppercase tracking-wide">
                        {certification}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {description}
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-4">
                            <div className="flex items-center gap-1.5">
                                <Clock size={16} className="text-brand-secondary-500" />
                                <span>{duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin size={16} className="text-brand-secondary-500" />
                                <span>{location}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-end pt-2">
                            {/* Price removed */}
                            <span className="flex items-center gap-1 text-sm font-semibold text-brand-primary-600 group-hover:translate-x-1 transition-transform">
                                View Details <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};
