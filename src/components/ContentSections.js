import { content } from '../data/content.js';
import { escapeHtml as e, icon } from '../lib/html.js';

export function AudienceSection() {
  return `<section class="section audience" id="audience" aria-labelledby="audience-title"><div class="container"><div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="audience-title">${e(content.audience.title)}</h2></div><ul class="audience-grid">${content.audience.items.map((text) => `<li>${icon('check')}<span>${e(text)}</span></li>`).join('')}</ul></div></section>`;
}

export function ProblemSection() {
  return `<section class="section problem container" id="problem" aria-labelledby="problem-title"><div class="problem-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="problem-title">${e(content.problem.title)}</h2></div><div class="prose">${content.problem.paragraphs.map((text) => `<p>${e(text)}</p>`).join('')}</div></section>`;
}

export function CoachingFeatures() {
  return `<section class="section features" id="features" aria-labelledby="features-title"><div class="container"><div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="features-title">${e(content.features.title)}</h2></div><ul class="feature-grid">${content.features.items.map((item) => `<li class="feature-card"><span class="feature-icon">${icon(item.icon)}</span><p>${e(item.text)}</p></li>`).join('')}</ul></div></section>`;
}

export function ProcessSection() {
  return `<section class="section container" id="process" aria-labelledby="process-title"><div class="section-heading"><span class="heading-rule" aria-hidden="true"></span><h2 id="process-title">${e(content.process.title)}</h2></div><ol class="process-grid">${content.process.items.map((item, index) => `<li class="process-step"><span class="step-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h3>${e(item.title)}</h3><p>${e(item.text)}</p></li>`).join('')}</ol></section>`;
}

export function BenefitsSection() {
  return `<section class="section container benefits" id="benefits" aria-labelledby="benefits-title"><div class="benefits-panel"><span class="heading-rule" aria-hidden="true"></span><h2 id="benefits-title">${e(content.benefits.title)}</h2><p>${e(content.benefits.text)}</p><ul class="benefits-proof">${content.benefits.proofPoints.map((item) => `<li><strong>${e(item.value)}</strong><span>${e(item.label)}</span></li>`).join('')}</ul><p class="benefits-motivation">${e(content.benefits.motivation)}</p></div></section>`;
}
