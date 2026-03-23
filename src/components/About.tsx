// React import removed
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-image-wrapper fade-in visible">
          <img src="./about_img.png" alt="About BuildCraft" className="about-img" />
          <div className="experience-badge">
            <span className="years">25+</span>
            <span className="text">Years of Excellence</span>
          </div>
        </div>
        
        <div className="about-content fade-in visible" style={{ transitionDelay: '0.2s' }}>
          <h4 className="section-subtitle">ABOUT BUILDCRAFT</h4>
          <h2 className="section-title">We Build Relationships as Strong as Our Foundations</h2>
          <p className="about-text">
            For over two decades, BuildCraft has been at the forefront of the construction 
            industry. We specialize in transforming architectural blueprints into magnificent 
            realities, ensuring every project is executed with precision, safety, and 
            unrivaled quality.
          </p>
          
          <ul className="about-features">
            <li><CheckCircle className="check-icon" /> Industry-Leading Safety Standards</li>
            <li><CheckCircle className="check-icon" /> Premium Materials &amp; Craftsmanship</li>
            <li><CheckCircle className="check-icon" /> On-Time &amp; On-Budget Delivery</li>
            <li><CheckCircle className="check-icon" /> Sustainable Building Practices</li>
          </ul>
          
          <button className="btn btn-primary mt-4">Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default About;
