import { useEffect } from 'react';
import gsap from 'gsap';

export const usePreloader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('#loader-text', { opacity: 1, duration: 0.6 })
      .to('#loader-line', { x: '0%', duration: 1, ease: 'power2.inOut' })
      .to('#preloader', { y: '-100%', duration: 0.8, delay: 0.2, ease: 'power4.inOut' })
      .to('.hero-anim', { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power3.out' }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, []);
};
