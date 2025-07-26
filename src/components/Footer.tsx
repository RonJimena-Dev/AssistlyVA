import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../app/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandInfo}>
            <h3 className={styles.brandName}>OpsAlpha VA</h3>
            <p className={styles.tagline}>Empowering Professionals. Elevating Businesses. Every Day.</p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/share/1AxiMU462s/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className={styles.socialIcon} />
              </a>
              <a href="https://www.instagram.com/opsalpha.va/?igsh=MXB1ZzFncHB4bGNrNQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a href="https://www.tiktok.com/@opsalpha.va?_t=ZS-8yJeQbeYODy&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className={styles.socialIcon} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.disabledLink}>
                <FaLinkedin className={styles.socialIcon} />
              </a>
              <a href="mailto:opsalphava@gmail.com" aria-label="Email">
                <FaEnvelope className={styles.socialIcon} />
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Company</h4>
              <ul>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="/join-us">Careers</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className={styles.linkColumn}>
  <h4>Contact</h4>
  <ul style={{ marginTop: '1em' }}>
  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75em', marginBottom: '1.1em' }}>
    <FaEnvelope style={{ color: '#2E5AAC' }} />
    <span style={{ color: '#F5F7FA', opacity: 0.9 }}>opsalphava@gmail.com</span>
  </li>
  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75em', marginBottom: '0.8em' }}>
    <FaMapMarkerAlt style={{ color: '#2E5AAC' }} />
    <span style={{ color: '#F5F7FA', opacity: 0.9 }}>Manila, Philippines</span>
  </li>
  <li style={{ color: '#B0B5C3', fontStyle: 'italic', fontSize: '0.95em', marginBottom: '1em' }}>Serving clients worldwide</li>
  <li style={{ color: '#F5F7FA', opacity: 0.9, marginBottom: '0.8em' }}>Mon-Fri: 9:00 AM - 6:00 PM (PHT)</li>
  <li style={{ color: '#B0B5C3', fontStyle: 'italic', fontSize: '0.95em' }}>Weekends: By appointment</li>
</ul>
</div>
<div className={styles.newsletter}>
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for tips and updates.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.emailInput}
                required 
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; {currentYear} OpsAlpha VA. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
