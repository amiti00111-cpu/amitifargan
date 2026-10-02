import { content } from '../data/content.js';
import { contactHref } from '../config/site.js';
import { escapeHtml as e, icon } from '../lib/html.js';

export function CTASection() {
  return `<section class="section cta-section" aria-labelledby="cta-title"><div class="container cta-inner"><div><h2 id="cta-title">${e(content.cta.title)}</h2><p>${e(content.cta.text)}</p></div><a class="button button-light" href="${e(contactHref())}">${e(content.cta.button)}${icon()}</a></div></section>`;
}
