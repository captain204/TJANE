import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";

const Footer = () => {
    return (
        <footer className="bg-brand-accent text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-10 h-10 bg-white rounded-full p-1">
                                <Image
                                    src="/logo.png"
                                    alt="Tjane Health Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <span className="text-xl font-bold">Tjane Health</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Your trusted partner in health solutions. Together we can save lives.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-secondary">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/corporate-training" className="hover:text-white transition-colors">Corporate Training</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-secondary">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>{COMPANY_INFO.address.split(",")[0]}</li>
                            <li>{COMPANY_INFO.address.split(",").slice(1).join(",")}</li>
                            <li>{COMPANY_INFO.email}</li>
                            <li>{COMPANY_INFO.phone}</li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-brand-secondary">Stay Connected</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for health tips and updates.
                        </p>
                        {/* Placeholder for newsletter form */}
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-gray-800 text-white px-3 py-2 rounded text-sm w-full focus:outline-none focus:ring-1 focus:ring-brand-primary"
                            />
                            <button className="bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded text-sm transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Tjane Health. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
