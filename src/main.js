import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/components.css';
import './styles/sections/intro.css';

import { domReady } from './core/domReady.js';
import { initIntroAnimation } from './animations/introAnimation.js';

domReady(() => {
  initIntroAnimation();
});
