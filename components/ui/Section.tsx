import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'gray';
    id?: string;
}

export const Section = ({
    children,
    className = '',
    background = 'white',
    id,
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${styles[background]} ${className}`}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
};
