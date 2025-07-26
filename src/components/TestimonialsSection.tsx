import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from '../app/TestimonialsSection.module.css';
import { FramerMotionWrapper } from './FramerMotionWrapper';

const testimonials = [
  {
    id: 1,
    quote: "Working with OpsAlpha has been a game-changer for our startup. Their attention to detail and proactive approach saves us countless hours every week.",
    author: "Sarah K.",
    role: "Startup Founder"
  },
  {
    id: 2,
    quote: "The team's ability to understand our business needs and adapt to our workflow is impressive. They've become an extension of our team.",
    author: "Michael T.",
    role: "Business Consultant"
  },
  {
    id: 3,
    quote: "Professional, reliable, and consistently delivers high-quality work. OpsAlpha has helped us streamline our operations significantly.",
    author: "Jennifer L.",
    role: "Small Business Owner"
  }
];

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, i) => (
            <FramerMotionWrapper key={testimonial.id} index={i}>
              <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <FaQuoteLeft />
              </div>
              <p className={styles.quote}>{testimonial.quote}</p>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonial.author}</span>
                <span className={styles.authorRole}>{testimonial.role}</span>
              </div>
            </div>
            </FramerMotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
