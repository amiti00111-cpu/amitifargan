import { content } from '../data/content.js';
import { site } from '../config/site.js';
import { escapeHtml as e, icon } from '../lib/html.js';

export function LeadForm() {
  const { form } = content;
  return `<section class="section container lead-section" id="lead-form" aria-labelledby="form-title"><div class="form-intro"><span class="heading-rule" aria-hidden="true"></span><h2 id="form-title">${e(form.title)}</h2><p>${e(form.note)}</p></div><form class="lead-form" novalidate><div class="form-fields"><div class="field"><label for="lead-name">${e(form.fields.name)}</label><input id="lead-name" name="name" type="text" autocomplete="name" required minlength="2" maxlength="100" aria-describedby="name-error"/><span class="field-error" id="name-error"></span></div><div class="field"><label for="lead-phone">${e(form.fields.phone)}</label><input id="lead-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" required maxlength="25" aria-describedby="phone-error"/><span class="field-error" id="phone-error"></span></div><div class="field field-full"><label for="lead-goal">${e(form.fields.goal)}</label><textarea id="lead-goal" name="goal" rows="2" required maxlength="1000" aria-describedby="goal-error"></textarea><span class="field-error" id="goal-error"></span></div></div><button class="button form-submit" type="submit"><span>${e(form.button)}</span>${icon()}</button><p class="form-status" role="status" aria-live="polite" aria-atomic="true" tabindex="-1"></p></form></section>`;
}

export function initLeadForm() {
  const form = document.querySelector('.lead-form');
  const status = form.querySelector('.form-status');
  const button = form.querySelector('[type="submit"]');
  const messages = content.form.messages;
  const validators = {
    name: (value) => value.trim().length >= 2 && value.trim().length <= 100 ? '' : messages.invalidName,
    phone: (value) => /^\+?[\d\s().-]+$/.test(value.trim()) && value.replace(/\D/g, '').length >= 8 && value.replace(/\D/g, '').length <= 15 ? '' : messages.invalidPhone,
    goal: (value) => value.trim().length > 0 && value.trim().length <= 1000 ? '' : messages.invalidGoal,
  };
  function validate(name) {
    const input = form.elements.namedItem(name);
    const error = validators[name](input.value);
    document.getElementById(`${name}-error`).textContent = error;
    input.setAttribute('aria-invalid', String(Boolean(error)));
    return !error;
  }
  Object.keys(validators).forEach((name) => {
    const input = form.elements.namedItem(name);
    input.addEventListener('blur', () => { if (input.value || input.getAttribute('aria-invalid') === 'true') validate(name); });
    input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') validate(name); });
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;
    status.textContent = '';
    const invalid = Object.keys(validators).filter((name) => !validate(name));
    if (invalid.length) { form.elements.namedItem(invalid[0]).focus(); return; }
    // No endpoint means no network call, no false success and no data storage.
    if (!site.form.endpoint) { status.dataset.state = 'error'; status.textContent = messages.notConnected; status.focus({ preventScroll: true }); return; }
    const data = Object.fromEntries(new FormData(form));
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), site.form.timeoutMs);
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    button.querySelector('span').textContent = messages.pending;
    try {
      const endpoint = new URL(site.form.endpoint, window.location.origin);
      if (endpoint.protocol !== 'https:' && endpoint.origin !== window.location.origin) throw new Error('Unsupported endpoint');
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), signal: controller.signal });
      if (!response.ok) throw new Error('Submission failed');
      status.dataset.state = 'success';
      status.textContent = messages.success;
      form.reset();
      Object.keys(validators).forEach((name) => form.elements.namedItem(name).removeAttribute('aria-invalid'));
    } catch {
      status.dataset.state = 'error';
      status.textContent = messages.error;
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
      form.removeAttribute('aria-busy');
      button.querySelector('span').textContent = content.form.button;
      status.focus({ preventScroll: true });
    }
  });
}
