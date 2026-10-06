/* Dependency-free enhancements. Reading never depends on JavaScript. */
(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let explicitTheme = null;
  try {
    explicitTheme = localStorage.getItem('jiangyan-theme');
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
  const setMotion = () => { root.dataset.motion = reducedMotion.matches ? 'off' : 'on'; };
  setMotion();
  reducedMotion.addEventListener('change', setMotion);
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

