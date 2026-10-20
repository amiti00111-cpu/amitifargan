import '@fontsource-variable/heebo';
import './styles.css';
import { Header, initHeader } from './components/Header.js';
import { HeroSection } from './components/HeroSection.js';
import { AudienceSection, ProblemSection, CoachingFeatures, ProcessSection, BenefitsSection, initClientCount } from './components/ContentSections.js';
import { ResultsCarousel, initResultsCarousel } from './components/ResultsCarousel.js';
import { TestimonialsSection } from './components/TestimonialsSection.js';
import { CTASection } from './components/CTASection.js';
import { LeadForm, initLeadForm } from './components/LeadForm.js';
import { FAQSection } from './components/FAQSection.js';
import { Footer } from './components/Footer.js';
import { MobileStickyCTA, initMobileStickyCTA } from './components/MobileStickyCTA.js';
import { CookieConsent, initCookieConsent } from './components/CookieConsent.js';
import { site } from './config/site.js';
import { safeUrl } from './lib/html.js';

document.querySelector('#app').innerHTML = `${Header()}<main id="main" tabindex="-1"><div id="top">${HeroSection()}</div>${AudienceSection()}${ProblemSection()}${CoachingFeatures()}${ResultsCarousel()}${ProcessSection()}${BenefitsSection()}${TestimonialsSection()}${CTASection()}${LeadForm()}${FAQSection()}</main>${Footer()}${MobileStickyCTA()}${CookieConsent()}`;

initHeader();
initClientCount();
initResultsCarousel();
initLeadForm();
initMobileStickyCTA();
initCookieConsent();

// Place keyboard focus at internal CTA destinations after navigation.
document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.getElementById(anchor.getAttribute('href').slice(1));
  if (!target) return;
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});

if (safeUrl(site.seo.canonicalUrl)) {
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = site.seo.canonicalUrl;
  document.head.append(canonical);
  const ogUrl = document.createElement('meta');
  ogUrl.setAttribute('property', 'og:url');
  ogUrl.content = site.seo.canonicalUrl;
  document.head.append(ogUrl);
}
if (safeUrl(site.seo.imageUrl)) {
  const image = document.createElement('meta');
  image.setAttribute('property', 'og:image');
  image.content = site.seo.imageUrl;
  document.head.append(image);
}
