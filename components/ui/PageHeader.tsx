"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    breadcrumbs: { label: string; href: string }[];
}

export const PageHeader = ({
    title,
    subtitle,
    backgroundImage = "https://images.unsplash.com/photo-1576091160550-2187d80a00d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    breadcrumbs,
}: PageHeaderProps) => {
    return (
        <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-primary-950/80 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center parallax-bg"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center gap-2 text-sm text-brand-secondary-200 mb-4 font-medium uppercase tracking-wider">
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <ChevronRight size={14} />
                                <Link
                                    href={crumb.href}
                                    className={`${index === breadcrumbs.length - 1
                                            ? "text-brand-secondary-400 pointer-events-none"
                                            : "hover:text-white transition-colors"
                                        }`}
                                >
                                    {crumb.label}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
