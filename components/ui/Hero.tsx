import React from 'react';
import styles from './Hero.module.css';
import { Button } from './Button';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Master Life-Saving Skills with <span className={styles.highlight}>Confidence</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Accredited CPR, BLS, and First Aid Training for Medical Professionals and Individuals.
                    </p>

                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            placeholder="Enter Zip Code or City"
                            className={styles.searchInput}
                        />
                        <Button variant="primary" size="lg">
                            Find a Class
                        </Button>
                    </div>

                    <div className={styles.trustSignals}>
                        <span>✓ Same Day Certification</span>
                        <span>✓ AHA & Red Cross Authorized</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
