import { gsap } from 'gsap';

const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = reduceMotionQuery.matches;

const setIntroStaticState = (elements) => {
  const { title, eyebrow, lead, cta } = elements;
  if (title) gsap.set(title, { opacity: 1, y: 0 });
  if (eyebrow) gsap.set(eyebrow, { opacity: 1, y: 0 });
  if (lead) gsap.set(lead, { opacity: 1, y: 0 });
  if (cta) gsap.set(cta, { opacity: 1, y: 0, scale: 1 });
};

export function initIntroAnimation() {
  const title = document.querySelector('.intro__title');
  const eyebrow = document.querySelector('.intro__eyebrow');
  const lead = document.querySelector('.intro__lead');
  const cta = document.querySelector('.intro__cta');

  if (!title) return;

  setIntroStaticState({ title, eyebrow, lead, cta });

  if (prefersReducedMotion) {
    return;
  }

  const tl = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'power2.out',
    },
  });

  tl.from(title, { opacity: 0, y: 32 });

  if (eyebrow) {
    tl.from(eyebrow, { opacity: 0, y: 16 }, '-=0.3');
  }

  if (lead) {
    tl.from(lead, { opacity: 0, y: 16 }, '-=0.2');
  }

  if (cta) {
    tl.from(cta, { opacity: 0, y: 16, scale: 0.96 });
  }

  return tl;
}
