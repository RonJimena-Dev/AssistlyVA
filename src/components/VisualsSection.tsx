import React from 'react';
import Image from 'next/image';
import styles from '../app/VisualsSection.module.css';

const VisualsSection = () => {
  return (
    <section className={styles.visualsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Our Workspace & Team</h2>
          <p>Get a glimpse of where the magic happens and the team behind OpsAlpha</p>
        </div>
        
        <div className={styles.visualGrid}>
          {/* Main featured image */}
          <div className={`${styles.visualItem} ${styles.featured}`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/workspace.jpg"
                alt="Modern workspace at OpsAlpha"
                width={800}
                height={500}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>Our Modern Workspace</span>
              </div>
            </div>
          </div>
          
          {/* Team member 1 */}
          <div className={styles.visualItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/team-member-1.jpg"
                alt="Team member at work"
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>Meet Our Team</span>
              </div>
            </div>
          </div>
          
          {/* Team collaboration */}
          <div className={styles.visualItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/team-collab.jpg"
                alt="Team collaboration"
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>Collaboration in Action</span>
              </div>
            </div>
          </div>
          
          {/* Workspace detail */}
          <div className={styles.visualItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/workspace-detail.jpg"
                alt="Workspace details"
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>Attention to Detail</span>
              </div>
            </div>
          </div>
          
          {/* Team event */}
          <div className={styles.visualItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/team-event.jpg"
                alt="Team event"
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>Team Building</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaWrapper}>
          <p>Join our team of talented professionals</p>
          <a 
            href="mailto:careers@opsalpha.com" 
            className={styles.ctaButton}
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisualsSection;
