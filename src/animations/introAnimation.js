import { gsap } from 'gsap';

const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const prefersReducedMotion = reduceMotionQuery.matches;

const INTRO_DELAY = 0.5; // pre-silencio antes del primer pulso

const INTRO_ANIMATION = {
  duration: 1.6,
  overlap: 0.35,
  easing: 'sine.inOut',
  titleOffset: 32,
  eyebrowOffset: 18,
  leadOffset: 18,
  ctaOffset: 8,
  ctaDuration: 1.4,
};

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
    delay: INTRO_DELAY,
    defaults: {
      duration: INTRO_ANIMATION.duration,
      ease: INTRO_ANIMATION.easing,
    },
  });

  tl.from(title, { opacity: 0, y: INTRO_ANIMATION.titleOffset });

  if (eyebrow) {
    tl.from(
      eyebrow,
      { opacity: 0, y: INTRO_ANIMATION.eyebrowOffset },
      `-=${INTRO_ANIMATION.overlap}`,
    );
  }

  if (lead) {
    tl.from(
      lead,
      { opacity: 0, y: INTRO_ANIMATION.leadOffset },
      `-=${INTRO_ANIMATION.overlap}`,
    );
  }

  if (cta) {
    tl.from(
      cta,
      {
        opacity: 0,
        y: INTRO_ANIMATION.ctaOffset,
        duration: INTRO_ANIMATION.ctaDuration,
      },
      '+=0.15',
    );
  }

  return tl;
}
