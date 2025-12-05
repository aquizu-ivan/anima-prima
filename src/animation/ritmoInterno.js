import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initRitmoInterno() {
  const coreElements = document.querySelectorAll('[data-ritmo="core"]');
  const textElements = document.querySelectorAll('[data-ritmo="texto"]');
  const atmosphereElements = document.querySelectorAll('[data-ritmo="atmósfera"]');

  if (!coreElements.length && !textElements.length && !atmosphereElements.length) {
    return;
  }

  const createSectionTween = (element, fromVars, toVars) => {
    const section = element.closest('[data-ritmo-seccion]');
    const tween = gsap.fromTo(
      element,
      fromVars,
      {
        ...toVars,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        paused: true,
      },
    );

    ScrollTrigger.create({
      trigger: section || element,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => tween.play(),
      onEnterBack: () => tween.play(),
      onLeave: () => tween.pause(),
      onLeaveBack: () => tween.pause(),
    });
  };

  coreElements.forEach((el) => {
    createSectionTween(
      el,
      { opacity: 0.85, scale: 1 },
      { opacity: 1, scale: 1.03, duration: 12 },
    );
  });

  textElements.forEach((el, index) => {
    createSectionTween(
      el,
      { opacity: 0.9, y: 0 },
      { opacity: 1, y: -4, duration: 14, delay: index * 0.2 },
    );
  });

  atmosphereElements.forEach((el) => {
    createSectionTween(
      el,
      { opacity: 0.6, filter: 'brightness(0.95)' },
      { opacity: 0.8, filter: 'brightness(1)', duration: 18 },
    );
  });
}
