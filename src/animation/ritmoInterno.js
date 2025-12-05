import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initRitmoInterno() {
  const coreElements = document.querySelectorAll('[data-ritmo="core"]');
  const textElements = document.querySelectorAll('[data-ritmo="texto"]');

  if (!coreElements.length && !textElements.length) {
    return;
  }

  if (coreElements.length) {
    gsap.fromTo(
      coreElements,
      { opacity: 0.85, scale: 1 },
      {
        opacity: 1,
        scale: 1.03,
        duration: 12,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      },
    );
  }

  if (textElements.length) {
    gsap.fromTo(
      textElements,
      { opacity: 0.9, y: 0 },
      {
        opacity: 1,
        y: -4,
        duration: 14,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.6,
          from: 'start',
        },
      },
    );
  }
}
