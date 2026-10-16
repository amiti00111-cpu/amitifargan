import { content } from '../data/content.js';
import { escapeHtml as e, safeUrl } from '../lib/html.js';

export function Footer() {
  return `<footer class="site-footer"><div class="container footer-inner"><a class="brand" href="#top">${e(content.brand)}</a>${content.footer.text ? `<p>${e(content.footer.text)}</p>` : ''}${content.footer.links.length ? `<nav aria-label="קישורי יצירת קשר">${content.footer.links.map((link) => `<a href="${e(safeUrl(link.href))}">${e(link.label)}</a>`).join('')}</nav>` : ''}<button class="cookie-settings" type="button" data-cookie-settings>הגדרות עוגיות</button></div></footer>`;
}
