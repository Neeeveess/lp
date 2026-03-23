// React import removed
import { Building2, Home, Wrench } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Building2 size={40} />,
    title: 'Commercial Construction',
    description: 'State-of-the-art office spaces, retail centers, and industrial facilities built to elevate your business operations.'
  },
  {
    icon: <Home size={40} />,
    title: 'Residential Building',
    description: 'Custom luxury homes and multi-family units designed with immaculate attention to detail and comfort.'
  },
  {
    icon: <Wrench size={40} />,
    title: 'Premium Renovations',
    description: 'Transformative remodeling services that breathe new life into existing structures while preserving their core character.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header center fade-in visible">
          <h4 className="section-subtitle">OUR EXPERTISE</h4>
          <h2 className="section-title">Comprehensive Construction Services</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card fade-in visible" 
              key={index}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn-text">Learn more &rarr;</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
