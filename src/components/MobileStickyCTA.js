import { content } from '../data/content.js';
import { contactHref } from '../config/site.js';
import { escapeHtml as e, icon } from '../lib/html.js';

export function MobileStickyCTA() {
  return `<div class="mobile-sticky-cta" hidden><a class="button" href="${e(contactHref())}">${e(content.cta.button)}${icon()}</a></div>`;
}

export function initMobileStickyCTA() {
  const sticky = document.querySelector('.mobile-sticky-cta');
  if (!sticky) return;
  const visibleCtas = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleCtas.add(entry.target);
      else visibleCtas.delete(entry.target);
    });
    sticky.hidden = visibleCtas.size > 0;
  });
  document.querySelectorAll('.hero-button, .cta-section .button').forEach(cta => observer.observe(cta));
}
