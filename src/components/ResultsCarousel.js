import { content } from '../data/content.js';
import { escapeHtml as e } from '../lib/html.js';
import { media } from '../lib/media.js';

const items = content.results.items.filter(item => item.image?.src || (item.before?.src && item.after?.src));

function photo(image, label) {
  return `<figure class="result-photo-overlay"><figcaption>${label}</figcaption><div class="result-frame">${media(image, label)}</div></figure>`;
}

function card(item, index) {
  const pictures = item.image?.src
    ? media(item.image, 'לפני ואחרי', { className: 'result-combined' })
    : `<div class="result-pair">${photo(item.before, 'לפני')}${photo(item.after, 'אחרי')}</div>`;
  return `<article class="result-slide" data-transformation="${e(item.id || index)}" aria-label="תוצאה ${index + 1}"><div class="result-media">${pictures}</div></article>`;
}

export function ResultsCarousel() {
  if (!items.length) return '';
  const cards = items.map(card).join('');
  return `<section class="section results results-marquee" id="results" aria-labelledby="results-title"><div class="container results-layout">
    <div class="results-intro"><div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="results-title">${e(content.results.title)}</h2></div>
    <button type="button" class="cookie-settings marquee-toggle" aria-controls="results-track" aria-label="עצירת תנועת התמונות">עצירת התנועה</button></div>
    <div class="marquee-window" role="region" aria-label="תמונות לפני ואחרי בתנועה רציפה">
      <div class="marquee-track" id="results-track">
        <div class="marquee-group">${cards}</div><div class="marquee-group marquee-copy" aria-hidden="true" inert>${cards}</div>
      </div>
    </div>
  </div></section>`;
}

export function initResultsCarousel() {
  const section = document.querySelector('.results-marquee');
  if (!section) return;
  const toggle = section.querySelector('.marquee-toggle');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = motion.matches;
  function update() {
    section.classList.toggle('marquee-paused', paused);
    toggle.textContent = paused ? 'הפעלת התנועה' : 'עצירת התנועה';
    toggle.setAttribute('aria-label', paused ? 'הפעלת תנועת התמונות' : 'עצירת תנועת התמונות');
  }
  toggle.addEventListener('click', () => { paused = !paused; update(); });
  motion.addEventListener('change', event => { paused = event.matches; update(); });
  update();
}
