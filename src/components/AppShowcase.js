import { icon } from '../lib/html.js';
export function AppShowcase() {
  const items = [
    ['training','תוכנית אימונים','מותאמת לרמה ולמטרה שלכם'],
    ['nutrition','תפריט אישי','בהתאם לשגרה ולהעדפות'],
    ['progress','מעקב התקדמות','בודקים ומשפרים לאורך הדרך'],
    ['adjust','קשר אישי','שאלות והתאמות עם המאמן'],
  ];
  return `<section class="section premium-app" id="app-experience" aria-label="המחשת האפליקציה"><div class="container premium-app-layout copy-app-layout"><div class="premium-app-visual"><div class="premium-phone" aria-hidden="true"><div class="premium-phone-top"></div><div class="premium-phone-header">AMIT IFARGAN • ONLINE COACHING</div><div class="premium-phone-title">הליווי שלי</div>${items.map(([key,title,sub])=>`<div class="premium-phone-card">${icon(key)}<div><strong>${title}</strong><small>${sub}</small></div></div>`).join('')}</div><p class="premium-demo-label">זו המחשה של חוויית הליווי, לא צילום מסך של האפליקציה.</p></div>
  </div></section>`;
}
export function initPremiumMotion() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('premium-reveal');
    observer.unobserve(entry.target);
  }), {threshold: .12});
  document.querySelectorAll('.section-heading, .premium-app-copy, .premium-app-visual, .benefits-panel').forEach(el => observer.observe(el));
}
