const CONSENT_COOKIE = 'amitifargan_cookie_consent';
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

export function CookieConsent() {
  return `<section class="cookie-banner" id="cookie-banner" hidden aria-labelledby="cookie-title">
    <div class="cookie-copy">
      <h2 id="cookie-title">העדפות עוגיות</h2>
      <p>אנחנו שומרים עוגייה חיונית כדי לזכור את הבחירה שלך. כרגע אין באתר עוגיות מדידה או פרסום. אפשר לשנות את הבחירה דרך הקישור שבתחתית האתר.</p>
    </div>
    <div class="cookie-actions">
      <button type="button" data-cookie-essential>רק הכרחיות</button>
      <button type="button" data-cookie-accept>אישור</button>
    </div>
  </section>`;
}

export function initCookieConsent() {
  const banner = document.getElementById('cookie-banner');
  const acceptButton = banner.querySelector('[data-cookie-accept]');
  const essentialButton = banner.querySelector('[data-cookie-essential]');
  const settingsButton = document.querySelector('[data-cookie-settings]');
  const hasChoice = document.cookie.split(';').some((cookie) => cookie.trim().startsWith(`${CONSENT_COOKIE}=`));

  function saveChoice(choice) {
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    banner.hidden = true;
  }

  if (!hasChoice) banner.hidden = false;
  acceptButton.addEventListener('click', () => saveChoice('accepted'));
  essentialButton.addEventListener('click', () => saveChoice('essential'));
  settingsButton?.addEventListener('click', () => {
    banner.hidden = false;
    essentialButton.focus();
  });
}
