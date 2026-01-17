"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './Navbar.module.css';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/corporate-training', label: 'Corporate Training' },
    { href: '/resources/verify-certificate', label: 'Verify Certificate' },
    { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>TJANE<span className={styles.logoHighlight}>HEALTH</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}
                    <Button href="/courses" variant="primary" size="sm">
                        Book Now
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className={styles.mobileCta}>
                        <Button href="/courses" fullWidth>Book Now</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};
