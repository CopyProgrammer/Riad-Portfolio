'use client';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import { VideoMotionProvider } from '../SectionVideo/MotionContext';

/**
 * ClientLayout: section-reveal IntersectionObserver + single shared motion control.
 * DataBackground SVG is replaced by per-section video backgrounds.
 * A static #07120e body background acts as the fallback surface.
 */
export default function ClientLayout({ children }) {

  // Section reveal via IntersectionObserver
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cs-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const elements = [...document.querySelectorAll('[data-aos]')];
    elements.forEach((el, i) => {
      el.classList.add('cs-reveal');
      el.style.setProperty('--reveal-delay', `${(i % 3) * 65}ms`);
      observer.observe(el);
    });
    const revealAll = () => {
      if (motion.matches) { observer.disconnect(); elements.forEach(el => el.classList.add('cs-visible')); }
    };
    motion.addEventListener('change', revealAll);
    return () => { observer.disconnect(); motion.removeEventListener('change', revealAll); };
  }, []);

  return <VideoMotionProvider>{children}<Footer /></VideoMotionProvider>;
}
