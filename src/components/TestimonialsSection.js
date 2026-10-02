import { content } from '../data/content.js';
import { escapeHtml as e } from '../lib/html.js';
import { media } from '../lib/media.js';

export function TestimonialsSection() {
  const { testimonials } = content;
  if (!testimonials.items.length) return '';
  return `<section class="section container" id="testimonials" aria-labelledby="testimonials-title"><div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="testimonials-title">${e(testimonials.title)}</h2></div><div class="testimonial-grid">${testimonials.items.map((item) => `<article class="testimonial-card">${item.image?.src ? media(item.image, '[Client Testimonial]') : `<blockquote><p>${e(item.text)}</p>${item.name ? `<cite>${e(item.name)}</cite>` : ''}</blockquote>`}</article>`).join('')}</div></section>`;
}
