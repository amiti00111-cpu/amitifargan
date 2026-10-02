import { content } from '../data/content.js';
import { escapeHtml as e, icon } from '../lib/html.js';

export function FAQSection() {
  if (!content.faq.items.length) return '';
  return `<section class="section container faq-section" id="faq" aria-labelledby="faq-title"><div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="faq-title">${e(content.faq.title)}</h2></div><div class="faq-list">${content.faq.items.map((item) => `<details class="faq-item"><summary>${e(item.question)}${icon('plus')}</summary><div class="faq-answer"><p>${e(item.answer)}</p></div></details>`).join('')}</div></section>`;
}
