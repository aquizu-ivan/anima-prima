import { gsap } from 'gsap';

export function initIntroAnimation() {
  const title = document.querySelector('.intro__title');
  const eyebrow = document.querySelector('.intro__eyebrow');
  const lead = document.querySelector('.intro__lead');
  const cta = document.querySelector('.intro__cta');

  if (!title) return;

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
