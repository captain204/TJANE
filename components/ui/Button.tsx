import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    onClick,
    type = 'button',
    fullWidth = false,
}: ButtonProps) => {
    const rootClassName = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        className,
    ].filter(Boolean).join(' ');

    if (href) {
        return (
            <Link href={href} className={rootClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={rootClassName} onClick={onClick}>
            {children}
        </button>
    );
};
