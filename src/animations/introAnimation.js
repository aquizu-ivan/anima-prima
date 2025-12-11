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
  hintOffset: 8,
  hintDuration: 1.4,
};

const setIntroStaticState = (elements) => {
  const { title, eyebrow, lead, hint } = elements;
  if (title) gsap.set(title, { opacity: 1, y: 0 });
  if (eyebrow) gsap.set(eyebrow, { opacity: 1, y: 0 });
  if (lead) gsap.set(lead, { opacity: 1, y: 0 });
  if (hint) gsap.set(hint, { opacity: 1, y: 0 });
};

export function initIntroAnimation() {
  const title = document.querySelector('.intro__title');
  const eyebrow = document.querySelector('.intro__eyebrow');
  const lead = document.querySelector('.intro__lead');
  const hint = document.querySelector('.intro__hint');

  if (!title) return;

  setIntroStaticState({ title, eyebrow, lead, hint });

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

  if (hint) {
    tl.from(
      hint,
      {
        opacity: 0,
        y: INTRO_ANIMATION.hintOffset,
        duration: INTRO_ANIMATION.hintDuration,
      },
      '+=0.15',
    );
  }

  return tl;
}
