import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/typography.css';
import './styles/components.css';
import './styles/sections/intro.css';
import './styles/sections/cuerpo.css';
import './styles/sections/mente.css';
import './styles/sections/energia.css';
import './styles/sections/creacion.css';
import './styles/sections/manifesto.css';
import './styles/sections/origen.css';
import './styles/sections/contacto.css';

import { domReady } from './core/domReady.js';
import { initIntroAnimation } from './animations/introAnimation.js';
import { initRitmoInterno } from './animation/ritmoInterno.js';

domReady(() => {
  initIntroAnimation();
  initRitmoInterno();
});
