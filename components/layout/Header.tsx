"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        // Services is now a dropdown handled separately
        { name: "Contact", href: "/contact" },
    ];

    const services = [
        { name: "Trainings", href: "/services" },
        { name: "Career program", href: "https://www.careerstep.com/lp/partner/ap/tjanehealth/", external: true },
        { name: "Staffing agency", href: "/staffing-agency" },
        { name: "Careers", href: "/careers" },
    ];

    const programs = [
        { name: "Medical Assistant", href: "/courses/medical-assistant" },
        { name: "Medical Coding and Billing Professional", href: "/courses/medical-coding-and-billing" },
        { name: "Dental Assistant", href: "/courses/dental-assistant" },
        { name: "Pharmacy Technician", href: "/courses/pharmacy-technician" },
        { name: "Mental Health Technician", href: "/courses/mental-health-technician" },
        { name: "Patient Care Technician", href: "/courses/patient-care-technician" },
        { name: "Anger Management", href: "/anger-management" },
        { name: "All other programs", href: "/courses/other-programs" },
    ];

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                                <Image
                                    src="/logo.png"
                                    alt="Tjane Health Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-brand-accent hidden sm:block">
                                Tjane Health
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {/* Static Links (Home, About) */}
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-brand-primary font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-brand-primary font-medium transition-colors duration-200"
                        >
                            About Us
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-700 group-hover:text-brand-primary font-medium transition-colors duration-200"
                                aria-expanded={isServicesDropdownOpen}
                            >
                                Services
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {isServicesDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 pt-4 w-56 z-50"
                                    >
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    target={service.external ? "_blank" : undefined}
                                                    rel={service.external ? "noopener noreferrer" : undefined}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-colors duration-150"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Programs Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                            onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-1 text-gray-700 group-hover:text-brand-primary font-medium transition-colors duration-200"
                                aria-expanded={isProgramsDropdownOpen}
                            >
                                Programs and Certifications
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {isProgramsDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 pt-4 w-72 z-50"
                                    >
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                                            {programs.map((program) => (
                                                <Link
                                                    key={program.name}
                                                    href={program.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary-50 hover:text-brand-primary-600 transition-colors duration-150"
                                                >
                                                    {program.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-brand-primary font-medium transition-colors duration-200"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/courses"
                            className="bg-brand-primary-600 text-white hover:bg-brand-primary-700 px-5 py-2 rounded-lg font-medium shadow-sm hover:shadow transition-all duration-200"
                        >
                            Book a Course
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-brand-primary p-2 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>

                            {/* Mobile Services */}
                            <div className="pt-2 pb-2">
                                <div className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                    Services
                                </div>
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        target={service.external ? "_blank" : undefined}
                                        rel={service.external ? "noopener noreferrer" : undefined}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors pl-6"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Programs */}
                            <div className="pt-2 pb-2 border-t border-gray-50">
                                <div className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                    Programs and Certifications
                                </div>
                                {programs.map((program) => (
                                    <Link
                                        key={program.name}
                                        href={program.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors pl-6"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {program.name}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 transition-colors border-t border-gray-50 mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            <Link
                                href="/courses"
                                className="block px-3 py-3 mt-4 text-center rounded-lg text-base font-bold text-white bg-brand-primary-600 hover:bg-brand-primary-700 transition-colors shadow-md mx-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Book a Course
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
