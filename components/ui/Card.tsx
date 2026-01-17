import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'normal' | 'none';
}

export const Card = ({
    children,
    className = '',
    padding = 'normal',
}: CardProps) => {
    return (
        <div className={`${styles.card} ${styles[padding]} ${className}`}>
            {children}
        </div>
    );
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.header}>{children}</div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.content}>{children}</div>
);

export const CardFooter = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.footer}>{children}</div>
);
