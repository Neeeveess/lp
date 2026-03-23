import { useState, useEffect } from 'react';
import { HardHat, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home');
      if (hero) {
        const { bottom } = hero.getBoundingClientRect();
        const headerHeight = 80;
        setIsScrolled(bottom <= headerHeight);
      } else {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <HardHat size={32} color="var(--amber-500)" />
          <span>BuildCraft</span>
        </div>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <button className="btn btn-primary">Get a Quote</button>
        </nav>

        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
