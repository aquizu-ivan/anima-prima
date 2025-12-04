import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/components.css';
import './styles/sections/intro.css';

import { domReady } from './core/domReady.js';
import { gsap } from 'gsap';

domReady(() => {
  const introTitle = document.querySelector('.intro__title');

  if (!introTitle) return;

  gsap.fromTo(
    introTitle,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
  );
});
