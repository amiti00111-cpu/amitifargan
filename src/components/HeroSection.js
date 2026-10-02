import { content } from '../data/content.js';
import { contactHref } from '../config/site.js';
import { escapeHtml as e, icon } from '../lib/html.js';
import { media } from '../lib/media.js';

export function HeroSection() {
  const { hero } = content;
  // Suggested line breaks only apply while they match the supplied title exactly.
  const title = hero.titleLines?.join(' ') === hero.title
    ? hero.titleLines.map(line => `<span>${e(line)}</span>`).join(' ')
    : e(hero.title);
  return `<section class="hero container ${hero.image?.src ? 'hero-photo' : ''}" aria-labelledby="hero-title">
    <div class="hero-copy">
      <h1 id="hero-title">${title}</h1>
      <p class="hero-subtitle">${e(hero.subtitle)}</p>
      <p class="hero-description">${e(hero.description)}</p>
      <a class="button hero-button" href="${e(contactHref())}">${e(hero.cta)}${icon()}</a>
    </div>
    <div class="hero-media">
      ${media(hero.image, '[Hero Image]', { hero: true })}
      ${hero.image?.src ? '<span class="hero-overlay" aria-hidden="true"></span>' : ''}
    </div>
  </section>`;
}
