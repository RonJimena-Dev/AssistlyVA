import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
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
              <a href="https://www.instagram.com/opsalpha.va?igsh=MXB1ZzFncHB4bGNrNQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.disabledLink}>
                <FaLinkedin className={styles.socialIcon} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.disabledLink}>
                <FaTwitter className={styles.socialIcon} />
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
                <li><a href="#about">About Us</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#">Careers</a></li>
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
