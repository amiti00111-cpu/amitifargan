# Site review — 2026-11-01

## Scope and limits
Reviewed the public landing page, its source, response headers, static policies, dependency advisories, and selected keyboard interactions. This is not a penetration test, assistive-technology certification, or legal opinion. No guarantee against claims, intrusion, or unknown vulnerabilities. The private coaching app, questionnaire, payment provider, signed client agreement, account permissions, MFA, WhatsApp backups, and business operations were not inspected.

## Verified observations
- Public homepage and privacy, cookies, terms and accessibility pages return HTTP 200.
- Unknown page and removed /api/contact return HTTP 404.
- No forms, login, payment or server-side data collection endpoints remain in this repository's active site.
- No analytics, pixels, social embeds or remote fonts found. Initial public DOM loaded only the local application script; no third-party embeds were observed.
- One first-party essential cookie stores the consent preference (Secure on HTTPS, SameSite=Lax, max age 180 days); no advertising consent inferred.
- HTTPS, HSTS, CSP, nosniff, anti-framing and Permissions-Policy verified in live responses before this change.
- Images have alternative text, one H1, Hebrew/RTL, structured headings, skip link, named gallery region, visible focus, pause/manual carousel, reduced-motion support. Duplicate gallery group is inert and aria-hidden.
- Primary text color pairs were checked previously: blue/white 11.30, ink/white 14.35, muted/light 5.77, pale/navy 9.40. These are selected pairs, not a full visual accessibility audit.
- No fabricated testimonial entries. 90+ and ten years of study are owner-supplied claims, not independently evidenced.

## Changes in this review
- Upgrade Vite 7.3.1 to 7.3.7 and update esbuild to the patched dependency resolved by the lockfile. Advisories primarily concern development servers, not evidence of a live-site compromise. Development and preview commands now bind localhost.
- Tighten CSP connect-src, form-action and base-uri to 'none'; change Referrer-Policy to no-referrer. Reassess these if any new API, analytics, embed or form is introduced.
- Add telephone contact alongside WhatsApp in footer and policy contact information.
- Clarify voluntary disclosure, controller identity, and possible inability to respond without contact details.
- Correct policy instructions: Enter for links; Enter/Space for buttons.
- Preserve list semantics explicitly and close mobile navigation when keyboard focus leaves it.
- Hide fixed mobile contact control while other content has keyboard focus, so it cannot cover that focused content.
- Restore cookie-banner focus only to its actual opener; initial dismissal no longer focuses a distant footer control.
- Add visible privacy link and note about variable results and medical-advice limits near contact CTA.

## Required operator/professional follow-up
1. Image permissions: four active before/after pairs plus hero versions. User supplied the files and pairings, but photographer licenses and each subject's commercial publication consent were not furnished. Verify age and appropriate guardian permissions if applicable. Do not treat upload permission as proof of rights. Maintain written evidence and correct context.
2. Accessibility: no actual-device mobile test, screen-reader session, full browser/zoom matrix, or professional compliance sign-off. The website declaration deliberately does not claim full compliance. Determine and document any lawful exemption using current business facts; none has been asserted on the website.
3. Nutrition scope: the site promises personalized menus but does not claim a dietitian license. Verify qualifications, actual services, referral boundaries and wording with a qualified legal adviser. A disclaimer does not authorize a regulated service.
4. Commercial promises: verify 90+ coached, ten years studying, monthly meetings and availability. Confirm photo outcomes are genuine and correctly attributed. No refund guarantee or blanket no-liability clause was introduced.
5. Client onboarding: website terms cover a contact-only page, not the paid coaching agreement. Review the actual Grow flow, required consumer disclosures, cancellation rules, and evidence of terms acceptance before payment separately.
6. Data outside the landing page: document questionnaire/app vendors, collected health/body/progress data, access, legal basis/notice, retention and deletion, backups and processor arrangements. Website privacy text is not a full audit of these systems.
7. Account security: owner must verify MFA, least-privilege repository/Vercel access and device/WhatsApp security. No credentials or account security settings were collected or changed.

## Reference materials checked
- https://www.gov.il/he/pages/website_accessibility
- https://www.gov.il/he/pages/declaration_website_accessibility
- https://www.gov.il/BlobFolder/legalinfo/duty_to_notify/he/notify13.pdf
- https://www.gov.il/he/pages/licensing-medical-nutrition
- https://github.com/vitejs/vite/security/advisories
- https://github.com/advisories/GHSA-g7r4-m6w7-qqqr

Dependency scan/build results are reported in the review handoff. An npm audit with zero findings is limited to advisories known to the registry at scan time.

## Verification result for this revision
- npm run build passed on Vite 7.3.7 / esbuild 0.28.2.
- npm audit (all production and development dependencies): 0 known vulnerabilities reported at scan time.
- Generated policy pages contain telephone contact; voluntary-information notice and links verified.
