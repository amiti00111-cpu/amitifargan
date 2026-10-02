import { escapeHtml as e, safeUrl, icon } from './html.js';

export function media(image, placeholder, { hero = false, className = '' } = {}) {
  const src = safeUrl(image?.src);
  if (!src) return `<div class="image-placeholder ${className}" role="img" aria-label="${e(placeholder)}"><span class="placeholder-glyph">${icon('image')}</span><span dir="auto">${e(placeholder)}</span></div>`;
  return `<img class="${className}" src="${e(src)}" alt="${e(image.alt || placeholder)}" width="${Number(image.width) || 900}" height="${Number(image.height) || 1100}" ${image.srcSet ? `srcset="${e(image.srcSet)}" sizes="${e(image.sizes || '(min-width: 1024px) 540px, 90vw')}"` : ''} loading="${hero ? 'eager' : 'lazy'}" ${hero ? 'fetchpriority="high"' : ''} decoding="async" />`;
}
