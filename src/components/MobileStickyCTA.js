import { content } from '../data/content.js';
import { contactHref } from '../config/site.js';
import { escapeHtml as e, icon } from '../lib/html.js';

export function MobileStickyCTA() {
  return `<div class="mobile-sticky-cta" hidden><a class="button" href="${e(contactHref())}">${e(content.cta.button)}${icon()}</a></div>`;
}

export function initMobileStickyCTA() {
  const sticky = document.querySelector('.mobile-sticky-cta');
  const form = document.querySelector('#lead-form');
  let formVisible = false;
  let formFocused = false;
  let heroCtaVisible = false;
  const update = () => { sticky.hidden = formVisible || formFocused || heroCtaVisible; };
  const observer = new IntersectionObserver((entries) => { formVisible = entries[0].isIntersecting; update(); }, { threshold: 0, rootMargin: '0px 0px 80px 0px' });
  observer.observe(form);
  const heroCta = document.querySelector('.hero-button');
  const heroObserver = new IntersectionObserver(entries => { heroCtaVisible = entries[0].isIntersecting; update(); });
  if (heroCta) heroObserver.observe(heroCta);
  form.addEventListener('focusin', () => { formFocused = true; update(); });
  form.addEventListener('focusout', () => { requestAnimationFrame(() => { formFocused = form.contains(document.activeElement); update(); }); });
}
