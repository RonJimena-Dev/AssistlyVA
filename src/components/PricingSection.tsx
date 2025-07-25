import React from 'react';
import { FaCheckCircle, FaClock, FaStar } from 'react-icons/fa';
import styles from '../app/PricingSection.module.css';

const PricingSection = () => {
  const features = [
    'Dedicated Virtual Assistant',
    'Email & Calendar Management',
    'Data Entry & Reporting',
    'Research & Presentation Support',
    'Custom Workflows'
  ];

  return (
    <section className={styles.pricingSection} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.subtitle}>Choose the plan that works best for your business needs</p>
        </div>

        <div className={styles.pricingGrid}>
          {/* Part Time Plan */}
          <div className={styles.pricingCard}>
            <div className={styles.popularBadge}>
              <FaStar /> Most Flexible
            </div>
            <div className={styles.planHeader}>
              <h3>Part Time</h3>
              <div className={styles.price}>
                <div className={styles.priceContent}>
                  <div className={styles.startsAtLabel}>Starts at</div>
                  <div className={styles.priceAmount}>$10<span className={styles.duration}>/hour</span></div>
                </div>
              </div>
              <p className={styles.description}>Perfect for growing businesses with variable needs</p>
            </div>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
              <li className={styles.featureItem}>
                <FaClock className={styles.checkIcon} />
                Minimum 20 hours/month
              </li>
            </ul>
            <a 
              href="https://calendly.com/opsalphava/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Get Started
            </a>
          </div>

          {/* Full Time Plan */}
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.popularBadge}>
              <FaStar /> Best Value
            </div>
            <div className={styles.planHeader}>
              <h3>Full Time</h3>
              <div className={styles.price}>
                <div className={styles.priceContent}>
                  <div className={styles.startsAtLabel}>Starts at</div>
                  <div className={styles.priceAmount}>$9<span className={styles.duration}>/hour</span></div>
                </div>
              </div>
              <p className={styles.description}>Ideal for established businesses with consistent needs</p>
            </div>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  {feature}
                </li>
              ))}
              <li className={styles.featureItem}>
                <FaClock className={styles.checkIcon} />
                160+ hours/month
              </li>
            </ul>
            <a 
              href="https://calendly.com/opsalphava/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Get Started
            </a>
          </div>

          {/* Custom Plan */}
          <div className={styles.pricingCard}>
            <div className={styles.planHeader}>
              <h3>Custom Solution</h3>
              <div className={styles.price}>
                <span className={styles.amount}>Custom</span>
              </div>
              <p className={styles.description}>Tailored solutions for unique business requirements</p>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <FaCheckCircle className={styles.checkIcon} />
                Custom Hours
              </li>
              <li className={styles.featureItem}>
                <FaCheckCircle className={styles.checkIcon} />
                Specialized Skills
              </li>
              <li className={styles.featureItem}>
                <FaCheckCircle className={styles.checkIcon} />
                Flexible Scheduling
              </li>
              <li className={styles.featureItem}>
                <FaCheckCircle className={styles.checkIcon} />
                Priority Support
              </li>
              <li className={styles.featureItem}>
                <FaCheckCircle className={styles.checkIcon} />
                Dedicated Account Manager
              </li>
              <li className={styles.featureItem}>
                <FaCheckCircle className={styles.checkIcon} />
                Custom Reporting
              </li>
            </ul>
            <a 
              href="https://calendly.com/opsalphava/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Contact Us
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PricingSection;
