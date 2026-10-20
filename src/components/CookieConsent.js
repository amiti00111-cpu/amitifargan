const CONSENT_COOKIE = 'amitifargan_cookie_consent';
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

export function CookieConsent() {
  return `<section class="cookie-banner" id="cookie-banner" hidden aria-labelledby="cookie-title">
    <div class="cookie-copy">
      <h2 id="cookie-title">העדפות עוגיות</h2>
      <p>אנחנו שומרים עוגייה חיונית כדי לזכור את הבחירה שלך. כרגע אין באתר כלי מדידה, פרסום או הטמעות חיצוניות. <a href="/cookies.html">למדיניות העוגיות</a>. אפשר לשנות את הבחירה דרך הקישור שבתחתית האתר.</p>
    </div>
    <div class="cookie-actions">
      <button type="button" data-cookie-essential>רק הכרחיות</button>
      <button type="button" data-cookie-accept>שמירת הבחירה</button>
    </div>
  </section>`;
}

export function initCookieConsent() {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = banner.querySelector('[data-cookie-accept]');
  const essentialButton = banner.querySelector('[data-cookie-essential]');
  const settingsButton = document.querySelector('[data-cookie-settings]');
  const choice = document.cookie.split(';').map(cookie => cookie.trim()).find(cookie => cookie.startsWith(`${CONSENT_COOKIE}=`))?.split('=')[1];
  const hasChoice = ['v2-essential'].includes(choice);

  function saveChoice(choice) {
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${CONSENT_COOKIE}=v2-essential; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    const hadFocus = banner.contains(document.activeElement);
    banner.hidden = true;
    document.body.classList.remove('cookie-open');
    if (hadFocus) settingsButton?.focus({ preventScroll: true });
  }

  if (!hasChoice || new URLSearchParams(window.location.search).get('cookies') === 'settings') { banner.hidden = false; document.body.classList.add('cookie-open'); }
  acceptButton.addEventListener('click', () => saveChoice('accepted'));
  essentialButton.addEventListener('click', () => saveChoice('essential'));
  settingsButton?.addEventListener('click', () => {
    banner.hidden = false;
    document.body.classList.add('cookie-open');
    essentialButton.focus();
  });
}
