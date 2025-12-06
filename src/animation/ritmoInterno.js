import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let estadoRitmoGlobal = 'reposo';
const tweensRitmo = [];

const RITMO_BASE = {
  core: {
    duration: 12,
    scaleDelta: 0.03,
  },
  texto: {
    duration: 14,
    yOffset: -4,
  },
  atmosfera: {
    duration: 18,
  },
};

const RITMO_SECCION = {
  intro: { tempoFactor: 1, amplitudeFactor: 1 },
  cuerpo: { tempoFactor: 0.95, amplitudeFactor: 0.9 },
  mente: { tempoFactor: 0.9, amplitudeFactor: 0.9 },
  energia: { tempoFactor: 1.05, amplitudeFactor: 1.1 },
  creacion: { tempoFactor: 1.1, amplitudeFactor: 1.05 },
  manifiesto: { tempoFactor: 0.9, amplitudeFactor: 0.9 },
  origen: { tempoFactor: 0.85, amplitudeFactor: 0.85 },
  contacto: { tempoFactor: 0.95, amplitudeFactor: 0.9 },
};

const getRitmoConfig = (nombreSeccion) => {
  const cfgSeccion = RITMO_SECCION[nombreSeccion] || { tempoFactor: 1, amplitudeFactor: 1 };

  const coreDuration = RITMO_BASE.core.duration * cfgSeccion.tempoFactor;
  const coreScaleDelta = RITMO_BASE.core.scaleDelta * cfgSeccion.amplitudeFactor;

  const textoDuration = RITMO_BASE.texto.duration * cfgSeccion.tempoFactor;
  const textoYOffset = RITMO_BASE.texto.yOffset * cfgSeccion.amplitudeFactor;

  const atmosferaDuration = RITMO_BASE.atmosfera.duration * cfgSeccion.tempoFactor;

  return {
    core: {
      duration: coreDuration,
      scaleDelta: coreScaleDelta,
    },
    texto: {
      duration: textoDuration,
      yOffset: textoYOffset,
    },
    atmosfera: {
      duration: atmosferaDuration,
    },
  };
};

export function initRitmoInterno() {
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotionQuery.matches) {
    return;
  }

  const coreElements = document.querySelectorAll('[data-ritmo="core"]');
  const textElements = document.querySelectorAll('[data-ritmo="texto"]');
  const atmosphereElements = document.querySelectorAll('[data-ritmo="atmosfera"]');

  if (!coreElements.length && !textElements.length && !atmosphereElements.length) {
    return;
  }

  const setEstadoRitmo = (nuevoEstado) => {
    if (estadoRitmoGlobal === nuevoEstado) return;
    estadoRitmoGlobal = nuevoEstado;

    let targetTimeScale = 1;

    if (nuevoEstado === 'atencion') {
      targetTimeScale = 1.25;
    } else if (nuevoEstado === 'transicion') {
      targetTimeScale = 0.85;
    } else {
      targetTimeScale = 1;
    }

    if (!tweensRitmo.length) return;

    gsap.to(tweensRitmo, {
      timeScale: targetTimeScale,
      duration: 1.2,
      ease: 'sine.inOut',
    });
  };

  const createSectionTween = (element, fromVars, toVars, section) => {
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
    tweensRitmo.push(tween);

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
    const section = el.closest('[data-ritmo-seccion]');
    const nombreSeccion = section?.getAttribute('data-ritmo-seccion');
    const ritmo = getRitmoConfig(nombreSeccion);

    createSectionTween(
      el,
      { opacity: 0.85, scale: 1 },
      { opacity: 1, scale: 1 + ritmo.core.scaleDelta, duration: ritmo.core.duration },
      section,
    );
  });

  textElements.forEach((el, index) => {
    const section = el.closest('[data-ritmo-seccion]');
    const nombreSeccion = section?.getAttribute('data-ritmo-seccion');
    const ritmo = getRitmoConfig(nombreSeccion);

    createSectionTween(
      el,
      { opacity: 0.9, y: 0 },
      { opacity: 1, y: ritmo.texto.yOffset, duration: ritmo.texto.duration, delay: index * 0.2 },
      section,
    );
  });

  atmosphereElements.forEach((el) => {
    const section = el.closest('[data-ritmo-seccion]');
    const nombreSeccion = section?.getAttribute('data-ritmo-seccion');
    const ritmo = getRitmoConfig(nombreSeccion);

    createSectionTween(
      el,
      { opacity: 0.6, filter: 'brightness(0.95)' },
      { opacity: 0.8, filter: 'brightness(1)', duration: ritmo.atmosfera.duration },
      section,
    );
  });

  const nodosAtencion = document.querySelectorAll('[data-ritmo="core"], [data-ritmo="texto"]');

  nodosAtencion.forEach((el) => {
    el.addEventListener('mouseenter', () => setEstadoRitmo('atencion'));
    el.addEventListener('mouseleave', () => setEstadoRitmo('reposo'));
    el.addEventListener('focus', () => setEstadoRitmo('atencion'));
    el.addEventListener('blur', () => setEstadoRitmo('reposo'));
  });
}
