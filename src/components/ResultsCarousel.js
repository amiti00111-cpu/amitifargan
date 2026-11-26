import { content } from '../data/content.js';
import { escapeHtml as e } from '../lib/html.js';
import { media } from '../lib/media.js';

const items = content.results.items.filter(item => item.image?.src || (item.before?.src && item.after?.src));

function photo(image, label) {
  return `<figure class="result-photo">
    <button class="premium-photo-open" type="button" aria-label="הגדלת תמונת ${e(label)}"><span class="result-frame">${media(image, label)}</span></button>
    <figcaption><span>${e(label)}</span></figcaption>
  </figure>`;
}

function card(item, index) {
  const pictures = item.image?.src
    ? `<div class="result-combined-wrap">${media(item.image, 'לפני ואחרי', { className: 'result-combined' })}</div>`
    : `<div class="result-pair" aria-label="לפני ואחרי של אותו מתאמן">${photo(item.before, 'לפני')}${photo(item.after, 'אחרי')}</div>`;

  const details = [item.name, item.duration, item.detail].filter(Boolean);
  const caption = details.length
    ? `<div class="result-caption">${details.map(value => `<p>${e(value)}</p>`).join('')}</div>`
    : '';

  return `<article class="result-slide" data-transformation="${e(item.id || index)}" aria-label="תוצאת לפני ואחרי ${index + 1} מתוך ${items.length}">
    <h3 class="result-person">לפני ואחרי · ${String(index + 1).padStart(2, '0')}</h3>
    <div class="result-media">${pictures}</div>
    ${caption}
  </article>`;
}

function dots() {
  return items.map((_, index) =>
    `<button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" data-carousel-index="${index}" aria-label="מעבר לתוצאה ${index + 1}" aria-current="${index === 0 ? 'true' : 'false'}"></button>`
  ).join('');
}

export function ResultsCarousel() {
  if (!items.length) return '';
  const cards = items.map(card).join('');

  return `<section class="section results results-carousel" id="results" aria-labelledby="results-title">
    <div class="container results-layout">
      <div class="results-intro">
        <div class="section-heading">
          <span class="heading-rule" aria-hidden="true"></span>
          <h2 id="results-title">${e(content.results.title)}</h2><p class="signature-results-lead">${e(content.results.intro)}</p>
        </div>
        <div class="carousel-controls" aria-label="ניווט בין תוצאות">
          <button class="icon-button result-previous" type="button" aria-label="התוצאה הקודמת">←</button>
          <span class="carousel-counter" aria-live="polite"><strong>1</strong> / ${items.length}</span>
          <button class="icon-button result-next" type="button" aria-label="התוצאה הבאה">→</button>
        </div>
      </div>
      <div class="carousel" data-carousel>
        <div class="carousel-window" tabindex="0" role="region" aria-roledescription="carousel" aria-label="תוצאות לפני ואחרי" aria-describedby="results-help">
          <div class="carousel-track">${cards}</div>
        </div>
        <div class="carousel-dots" aria-label="בחירת תוצאה">${dots()}</div>
        <div class="premium-carousel-bar"><button type="button" data-carousel-play aria-pressed="false">הפעלה אוטומטית</button><span>החליקו בין התמונות או לחצו להגדלה</span></div>
        <p class="results-help" id="results-help">${e(content.results.note)}</p>
        <dialog class="premium-photo-dialog" aria-label="תמונה מוגדלת"><button type="button" data-close-photo>סגירה ✕</button><img alt=""></dialog>
      </div>
    </div>
  </section>`;
}

export function initResultsCarousel() {
  const root = document.querySelector('[data-carousel]');
  if (!root) return;

  const viewport = root.querySelector('.carousel-window');
  const track = root.querySelector('.carousel-track');
  const slides = [...root.querySelectorAll('.result-slide')];
  const dots = [...root.querySelectorAll('.carousel-dot')];
  const section = root.closest('.results-carousel');
  const previous = section.querySelector('.result-previous');
  const next = section.querySelector('.result-next');
  const counter = section.querySelector('.carousel-counter strong');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let pointerStart = null;
  let playing = false, timer, dragged = false;
  const play = root.querySelector("[data-carousel-play]");
  const dialog = root.querySelector("dialog");
  let opener;
  function stop() { clearInterval(timer); playing = false; play.setAttribute("aria-pressed", "false"); play.textContent = "הפעלה אוטומטית"; }
  play.addEventListener("click", () => { if (playing) return stop(); if (slides.length < 2) return; playing = true; play.setAttribute("aria-pressed", "true"); play.textContent = "עצירה"; timer = setInterval(() => { if (!document.hidden && !dialog.open && !viewport.matches(":hover") && !viewport.contains(document.activeElement)) goTo(index + 1); }, 4500); });
  root.querySelectorAll(".premium-photo-open").forEach(button => button.addEventListener("click", () => { if (dragged || !dialog.showModal) return; stop(); opener = button; const source = button.querySelector("img"); const image = dialog.querySelector("img"); image.src = source.currentSrc || source.src; image.alt = source.alt; dialog.showModal(); }));
  dialog.querySelector("[data-close-photo]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => { opener?.focus(); });

  function render() {
    track.style.transitionDuration = motion.matches ? '0s' : '';
    track.style.transform = `translate3d(${index * -100}%, 0, 0)`;
    slides.forEach((slide, slideIndex) => {
      const hidden = slideIndex !== index;
      slide.setAttribute('aria-hidden', String(hidden));
      slide.toggleAttribute('inert', hidden);
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', String(active));
    });
    previous.disabled = slides.length < 2;
    next.disabled = slides.length < 2;
    counter.textContent = String(index + 1);
  }

  function goTo(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    render();
  }

  previous.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));
  dots.forEach((dot, dotIndex) => dot.addEventListener('click', () => goTo(dotIndex)));

  viewport.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(index + 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(index - 1); }
    if (event.key === 'Home') { event.preventDefault(); goTo(0); }
    if (event.key === 'End') { event.preventDefault(); goTo(slides.length - 1); }
  });

  viewport.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    dragged = false;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
  }, { passive: true });

  viewport.addEventListener('pointerup', event => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    dragged = true;
    if (deltaX < 0) goTo(index + 1);
    else goTo(index - 1);
  }, { passive: true });

  viewport.addEventListener('pointercancel', () => { pointerStart = null; }, { passive: true });
  motion.addEventListener('change', () => { if (motion.matches) stop(); render(); });
  if (slides.length < 2) play.disabled = true;
  render();
}
