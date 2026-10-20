# Site review — 2026-10-20

Implemented: server validation of contact consent and allowed fields; bounded name/phone and fixed optional goal choices; no client credentials; no-store API responses; no personal-data logging; generic upstream errors/timeouts; same-origin browser submissions; restrictive CSP, no frames, local images/fonts; static privacy/cookies/terms/accessibility pages and 404; keyboard focus and form errors; cookie preference reopening. No marketing collection, tracking scripts or third-party embeds found. Testimonials list is empty: no invented reviews are displayed.

The API forwards selected fields to FormSubmit and email. Validation and honeypots reduce abuse but are not an authenticated rate limiter. Origin checks do not authenticate bots. The public form destination existed in earlier commits and is not a secret. Account security, MFA, access roles, mailbox retention, provider processing agreements and durable abuse/rate controls need separate operator review. No penetration test or guarantee of immunity is implied.

## Image rights evidence

- `coach-480.webp`, `coach-960.webp`, `coach-1440.webp`: existing README records derivation from user-supplied `IMG_4878.heic`. That is provenance, not proof of photographer copyright or commercial-use rights.
- Result images `ad57073f-9d63-4bc7-8afc-f1b5b4256f61.jpg` and `1ced7f39-eb5f-4e2f-9b65-4c5f0cea92cc.jpg`: user-supplied pairing recorded in content data; written photographer rights and subject publication consent have not been supplied.
- Other carousel entries contain only source filenames and no live image files.
- No external stock photos, remote fonts or embedded social images found. Font is the bundled @fontsource-variable/heebo dependency; retain its OFL license when distributing.

Owner must confirm the rights and publication consent for the existing images. No claim of rights clearance has been added to the site. Existing user-supplied images are retained. Keep only authentic approved testimonials if supplied later.

## Policies and limits

Policies describe actual contact-only site behavior; they do not substitute for the separately supplied paid coaching agreement or change cancellation/refund rights. No unsupported retention period or certification of accessibility was asserted. Owner contact uses the known Instagram account; a direct accessible phone/email channel should be supplied for privacy and accessibility inquiries. Legal review and manual assistive-technology testing remain outstanding.
