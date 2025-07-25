import React from 'react';
import { FaCalendarAlt, FaChartBar, FaSearch } from 'react-icons/fa';
import styles from '../app/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Your Strategic Operations Partner</h2>
          <p className={styles.description}>
            OpsAlpha is a hand-picked team of trained virtual assistants helping founders, startups, and consultants scale without burnout. 
            With systemized workflows, AI tools, and personalized service — we don't just assist, we optimize.
          </p>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <FaCalendarAlt />
              </div>
              <h3>Calendar & Inbox Management</h3>
              <p>We tame your schedule and declutter your inbox.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <FaChartBar />
              </div>
              <h3>Data Entry & Reporting</h3>
              <p>Accurate, on-time, and formatted the way you like it.</p>
            </div>
            
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>
                <FaSearch />
              </div>
              <h3>Research & Presentation Support</h3>
              <p>Give us the topic, we'll deliver insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
