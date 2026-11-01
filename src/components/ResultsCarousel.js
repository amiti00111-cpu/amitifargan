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
  return `<article class="result-slide" data-transformation="${e(item.id || index)}" aria-label="זוג תמונות לפני ואחרי ${index + 1}"><h3 class="result-person">לפני ואחרי · ${String(index + 1).padStart(2, '0')}</h3><div class="result-media">${pictures}</div></article>`;
}
export function ResultsCarousel() {
  if (!items.length) return '';
  const cards = items.map(card).join('');
  return `<section class="section results results-marquee" id="results" aria-labelledby="results-title"><div class="container results-layout">
    <div class="results-intro"><div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="results-title">${e(content.results.title)}</h2></div><button type="button" class="marquee-toggle" aria-controls="results-track">עצירת התנועה</button></div>
    <p class="results-help" id="results-help">אפשר לעצור את התנועה ולראות כל זוג תמונות בקצב שלכם. התוצאות משתנות מאדם לאדם.</p>
    <div class="marquee-window" role="region" tabindex="0" aria-label="גלריית לפני ואחרי" aria-describedby="results-help">
      <div class="marquee-track" id="results-track"><div class="marquee-group">${cards}</div><div class="marquee-group marquee-copy" aria-hidden="true" inert>${cards}</div></div>
    </div><div class="results-navigation"><button class="result-previous" type="button" aria-label="הצגת זוג התמונות הקודם">לתוצאה הקודמת</button><button class="result-next" type="button" aria-label="הצגת זוג התמונות הבא">לתוצאה הבאה</button></div>
  </div></section>`;
}
export function initResultsCarousel() {
  const section = document.querySelector('.results-marquee');
  if (!section) return;
  const toggle = section.querySelector('.marquee-toggle');
  const viewport = section.querySelector('.marquee-window');
  const track = section.querySelector('.marquee-track');
  const group = section.querySelector('.marquee-group');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let manual = motion.matches;
  let imagesReady = false;
  function update() {
    section.classList.toggle('marquee-manual', manual);
    toggle.hidden = motion.matches;
    toggle.textContent = manual ? 'הפעלת התנועה' : 'עצירת התנועה';
    toggle.setAttribute('aria-label', manual ? 'הפעלת תנועה אוטומטית של התמונות' : 'עצירת התנועה ומעבר לגלילה ידנית');
  }
  function measure() {
    if (!imagesReady) return;
    const distance = group.getBoundingClientRect().width;
    if (!distance) return;
    track.style.setProperty('--loop-distance', distance + 'px');
    track.style.setProperty('--loop-duration', (distance / 18) + 's');
    section.classList.add('marquee-ready');
  }
  function stop() { if (!manual) { manual = true; update(); } }
  toggle.addEventListener('click', () => { manual = !manual; viewport.scrollLeft = 0; update(); measure(); });
  viewport.addEventListener('focus', stop);
  viewport.addEventListener('pointerdown', stop, { passive: true });
  const move = direction => {
    stop();
    const cardWidth = group.querySelector('.result-slide').getBoundingClientRect().width;
    viewport.scrollBy({ left: direction * (cardWidth + 20), behavior: motion.matches ? 'instant' : 'smooth' });
  };
  section.querySelector('.result-previous').addEventListener('click', () => move(-1));
  section.querySelector('.result-next').addEventListener('click', () => move(1));
  viewport.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  motion.addEventListener('change', event => { manual = event.matches; update(); });
  update();
  Promise.allSettled([...track.querySelectorAll('img')].map(img => img.decode())).then(() => { imagesReady = true; measure(); });
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(group);
  else window.addEventListener('resize', measure);
}
