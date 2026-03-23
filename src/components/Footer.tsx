// React import removed
import { HardHat, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <HardHat size={32} color="var(--amber-500)" />
            <span>BuildCraft</span>
          </div>
          <p>
            Premium construction and architectural services since 1998. 
            We build the future with integrity and excellence.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><Phone size={18} /> +1 (555) 123-4567</li>
            <li><Mail size={18} /> hello@buildcraft.com</li>
            <li><MapPin size={18} /> 100 Innovation Drive,<br/>Metropolis, NY 10001</li>
          </ul>
        </div>
        
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for company updates and news.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} BuildCraft Construction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
