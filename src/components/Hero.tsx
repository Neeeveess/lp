import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const stickyHeight = window.innerHeight;
      
      // Calculate scroll progress within the container
      // If top > 0, we haven't reached it yet
      // If the negated top is higher than the maxScroll, we have scrolled past it
      if (top > 0) return;
      
      // The total scrollable distance is container height - window height
      const maxScroll = height - stickyHeight;
      const scrolled = -top;
      
      // Clamp progress between 0 and 1
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
      
      if (!isNaN(videoRef.current.duration)) {
        // requestAnimationFrame for smooth update
        requestAnimationFrame(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = progress * videoRef.current.duration;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-scroll-wrapper" ref={containerRef} id="home">
      <div className="hero-sticky">
        <video 
          ref={videoRef}
          className="hero-video"
          src="/hero_video.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="fade-in visible">
            Building the Future,<br />
            <span className="text-amber">Restoring the Past.</span>
          </h1>
          <p className="fade-in visible" style={{ transitionDelay: '0.2s' }}>
            Premium construction &amp; renovation services with unmatched quality. 
            We bring architectural visions to life.
          </p>
          <div className="hero-actions fade-in visible" style={{ transitionDelay: '0.4s' }}>
            <button className="btn btn-primary">
              View Our Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn btn-outline">
              Our Services <ChevronRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
