/* Apply the saved choice before styles load; new visitors start in dark mode. */
(() => {
  'use strict';
  const root = document.documentElement;
  let theme = 'dark';
  try {
    const saved = localStorage.getItem('jiangyan-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) {}

  function updateButton() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const isDark = theme === 'dark';
    const label = root.lang === 'zh-CN'
      ? `切换为${isDark ? '浅色' : '深色'}模式`
      : `Switch to ${isDark ? 'light' : 'dark'} mode`;
    button.setAttribute('aria-label', label);
    button.title = label;
    button.hidden = false;
  }

  function setTheme(next) {
    theme = next === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0b141e' : '#ffffff';
    updateButton();
  }

  setTheme(theme);
  window.addEventListener('languagechange', updateButton);
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    updateButton();
    if (button) button.addEventListener('click', () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      try { localStorage.setItem('jiangyan-theme', theme); } catch (_) {}
    });
  });
})();
