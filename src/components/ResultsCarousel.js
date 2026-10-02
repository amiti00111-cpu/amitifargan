import { content } from '../data/content.js';
import { escapeHtml as e, icon } from '../lib/html.js';
import { media } from '../lib/media.js';

function resultPhoto(image, label) {
  return `<figure><figcaption>${label}</figcaption><div class="result-frame">${media(image, `[${label}]`)}</div></figure>`;
}

function resultSlide(item, index) {
  // Each slide holds one confirmed pair. Combined photos remain intact.
  const imageContent = item.image?.src
    ? media(item.image, item.placeholder || '[Before / After]', { className: 'result-combined' })
    : `<div class="result-pair">${resultPhoto(item.before, 'לפני')}${resultPhoto(item.after, 'אחרי')}</div>`;
  const caption = [item.name, item.duration, item.detail].filter(Boolean);
  return `<article class="result-slide" data-transformation="${e(item.id || index + 1)}" role="group" aria-roledescription="שקופית" aria-label="${index + 1} מתוך ${content.results.items.length}" ${index ? 'inert aria-hidden="true"' : ''}>
    <div class="result-media">${imageContent}</div>
    ${caption.length ? `<div class="result-caption">${caption.map(text => `<p>${e(text)}</p>`).join('')}</div>` : ''}
  </article>`;
}

export function ResultsCarousel() {
  const count = content.results.items.length;
  if (!count) return '';
  const dots = count > 1 && count <= 8
    ? `<div class="carousel-dots" aria-label="בחירת תוצאה">${content.results.items.map((_, index) => `<button type="button" class="carousel-dot ${index ? '' : 'is-active'}" aria-label="הצגת תוצאה ${index + 1}" aria-current="${index ? 'false' : 'true'}" aria-controls="results-track" data-slide="${index}"></button>`).join('')}</div>`
    : '';
  return `<section class="section results" id="results" aria-labelledby="results-title"><div class="container results-layout">
    <div class="results-intro">
      <div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="results-title">${e(content.results.title)}</h2></div>
      <div class="carousel-controls">
        <button type="button" class="icon-button carousel-prev" aria-label="התוצאה הקודמת" aria-controls="results-track" disabled>${icon('arrow-right')}</button>
        <span class="carousel-counter" dir="ltr" aria-live="polite" aria-atomic="true">1 / ${count}</span>
        <button type="button" class="icon-button carousel-next" aria-label="התוצאה הבאה" aria-controls="results-track" ${count === 1 ? 'disabled' : ''}>${icon('arrow')}</button>
      </div>
    </div>
    <div class="carousel" role="region" aria-roledescription="קרוסלה" aria-labelledby="results-title" tabindex="0">
      <div class="carousel-window"><div class="carousel-track" id="results-track">${content.results.items.map(resultSlide).join('')}</div></div>
      ${dots}
    </div>
  </div></section>`;
}

export function initResultsCarousel() {
  const section = document.querySelector('.results');
  if (!section) return;
  const carousel = section.querySelector('.carousel');
  const track = carousel.querySelector('.carousel-track');
  const slides = [...track.children];
  const dots = [...carousel.querySelectorAll('.carousel-dot')];
  const counter = section.querySelector('.carousel-counter');
  const previous = section.querySelector('.carousel-prev');
  const next = section.querySelector('.carousel-next');
  let index = 0;

  function goTo(target) {
    index = Math.max(0, Math.min(target, slides.length - 1));
    // RTL slides extend to the left; moving right reveals the next pair.
    track.style.transform = `translateX(${index * 100}%)`;
    slides.forEach((slide, i) => {
      slide.inert = i !== index;
      slide.setAttribute('aria-hidden', String(i !== index));
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-current', String(i === index));
    });
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    counter.textContent = `${index + 1} / ${slides.length}`;
  }

  next.addEventListener('click', () => goTo(index + 1));
  previous.addEventListener('click', () => goTo(index - 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  section.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const targets = { ArrowLeft: index + 1, ArrowRight: index - 1, Home: 0, End: slides.length - 1 };
    if (event.key in targets) {
      event.preventDefault();
      goTo(targets[event.key]);
    }
  });

  let pointerStart = null;
  const viewport = carousel.querySelector('.carousel-window');
  const resetDrag = () => {
    pointerStart = null;
    track.classList.remove('is-dragging');
    track.style.transform = `translateX(${index * 100}%)`;
  };
  viewport.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0 || slides.length < 2) return;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener('pointermove', event => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    let dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy) * 1.3) return;
    if ((index === 0 && dx < 0) || (index === slides.length - 1 && dx > 0)) dx *= .2;
    track.classList.add('is-dragging');
    track.style.transform = `translateX(calc(${index * 100}% + ${dx}px))`;
  });
  viewport.addEventListener('pointerup', event => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    resetDrag();
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) goTo(index + (dx > 0 ? 1 : -1));
  });
  viewport.addEventListener('pointercancel', resetDrag);
  viewport.addEventListener('lostpointercapture', resetDrag);
  viewport.addEventListener('dragstart', event => event.preventDefault());
  window.addEventListener('blur', resetDrag);
  goTo(0);
}
