/* Dependency-free enhancements. Reading never depends on JavaScript. */
(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let explicitTheme = null;
  let motionPreference = 'on';
  try {
    explicitTheme = localStorage.getItem('jiangyan-theme');
    motionPreference = localStorage.getItem('jiangyan-motion') === 'off' ? 'off' : 'on';
  } catch (_) {}
  const setTheme = theme => {
    root.dataset.theme = theme;
    if (themeButton) themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0b141e' : '#f8faf9';
  };
  setTheme(explicitTheme === 'light' || explicitTheme === 'dark' ? explicitTheme : 'dark');
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', () => {
      explicitTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(explicitTheme);
      try { localStorage.setItem('jiangyan-theme', explicitTheme); } catch (_) {}
    });
  }
  const motionButton = document.querySelector('.motion-toggle');
  const geometry = document.querySelector('.hero-geometry');
  const canvas = document.querySelector('.geometry-canvas');
  const setMotion = () => {
    const enabled = motionPreference === 'on' && !reducedMotion.matches;
    root.dataset.motion = enabled ? 'on' : 'off';
    if (!enabled && canvas) {
      canvas.style.removeProperty('--px');
      canvas.style.removeProperty('--py');
    }
    if (motionButton) {
      motionButton.hidden = reducedMotion.matches;
      motionButton.setAttribute('aria-label', enabled ? 'Pause animation' : 'Resume animation');
      motionButton.querySelector('.motion-label').textContent = enabled ? 'Pause motion' : 'Resume motion';
      motionButton.querySelector('.motion-icon').textContent = enabled ? 'Ⅱ' : '▷';
    }
  };
  setMotion();
  reducedMotion.addEventListener('change', setMotion);
  if (motionButton) motionButton.addEventListener('click', () => {
    motionPreference = motionPreference === 'on' ? 'off' : 'on';
    try { localStorage.setItem('jiangyan-motion', motionPreference); } catch (_) {}
    setMotion();
  });
  if (geometry && canvas && window.matchMedia('(min-width: 721px) and (pointer: fine)').matches) {
    geometry.addEventListener('pointermove', event => {
      if (root.dataset.motion !== 'on') return;
      const rect = geometry.getBoundingClientRect();
      canvas.style.setProperty('--px', `${((event.clientX-rect.left)/rect.width-.5)*12}px`);
      canvas.style.setProperty('--py', `${((event.clientY-rect.top)/rect.height-.5)*8}px`);
    });
    geometry.addEventListener('pointerleave', () => {
      canvas.style.removeProperty('--px');
      canvas.style.removeProperty('--py');
    });
  }
  document.addEventListener('visibilitychange', () => { root.dataset.visibility = document.hidden ? 'hidden' : 'visible'; });
  const header = document.querySelector('.site-header');
  const updateHeader = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 20); };
  updateHeader();
  window.addEventListener('scroll', updateHeader, {passive: true});
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    document.querySelectorAll('.reveal').forEach(section => {
      section.classList.add('reveal-ready');
      observer.observe(section);
    });
  }
})();
