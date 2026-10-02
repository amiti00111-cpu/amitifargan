import { content } from '../data/content.js';
import { contactHref } from '../config/site.js';
import { escapeHtml as e, icon } from '../lib/html.js';
import { media } from '../lib/media.js';

export function Header() {
  return `<a class="skip-link" href="#main">דלגו לתוכן</a><header class="site-header"><div class="container header-inner"><a class="brand" href="#top" aria-label="${e(content.brand)}">${content.logo ? media(content.logo, content.brand) : `<span class="brand-mark" aria-hidden="true"></span><span>${e(content.brand)}</span>`}</a><button class="menu-toggle icon-button" aria-label="תפריט ניווט" aria-expanded="false" aria-controls="header-nav">${icon('menu')}</button><nav id="header-nav" class="header-nav" aria-label="ניווט ראשי"><a href="#features">${e(content.features.title)}</a>${content.results.items.length ? `<a href="#results">${e(content.results.title)}</a>` : ''}<a href="#process">${e(content.process.title)}</a><a class="button button-small" href="${e(contactHref())}">${e(content.cta.button)}${icon()}</a></nav></div></header>`;
}

export function initHeader() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#header-nav');
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); } });
  document.addEventListener('click', (event) => { if (!event.target.closest('.header-inner')) close(); });
  window.matchMedia('(min-width: 768px)').addEventListener('change', close);
}
