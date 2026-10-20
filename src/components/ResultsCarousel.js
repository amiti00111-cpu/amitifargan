import { content } from '../data/content.js';
import { escapeHtml as e } from '../lib/html.js';
import { media } from '../lib/media.js';

const items = content.results.items.filter(item => item.image?.src || (item.before?.src && item.after?.src));

function photo(image, label) {
  return `<figure class="result-photo-overlay"><figcaption>${label}</figcaption><div class="result-frame">${media(image, label).replace('loading="lazy"', 'loading="eager"')}</div></figure>`;
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
  const track = section.querySelector('.marquee-track');
  const group = section.querySelector('.marquee-group');
  let imagesReady = false;
  function measure() {
    if (!imagesReady) return;
    const distance = group.getBoundingClientRect().width;
    if (!distance) return;
    track.style.setProperty('--loop-distance', distance + 'px');
    // A fixed 18px/sec keeps the pace slow on both mobile and desktop.
    track.style.setProperty('--loop-duration', (distance / 18) + 's');
    section.classList.add('marquee-ready');
  }
  const images = [...track.querySelectorAll('img')];
  Promise.allSettled(images.map(img => img.decode())).then(() => { imagesReady = true; measure(); });
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(group);
  else window.addEventListener('resize', measure);
}
