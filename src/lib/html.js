export const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

// Restrict editable links and image sources to ordinary web/local URLs.
export function safeUrl(value = '') {
  const url = String(value).trim();
  return /^(https?:\/\/|\/[^/]|#|mailto:|tel:)/i.test(url) ? url : '';
}

export function icon(name = 'arrow') {
  const paths = {
    arrow: '<path d="M19 12H5m6-6-6 6 6 6"/>',
    'arrow-right': '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 5-5 4 4 4-6 5 7"/>',
    training: '<path d="M6 9v6m-3-4v2m15-4v6m3-4v2M6 12h12M6 6v12m12-12v12"/>',
    nutrition: '<path d="M12 21c-6 0-9-8-6-12 2-3 4-2 6-1 2-1 4-2 6 1 3 4 0 12-6 12ZM12 8c0-5 2-6 5-6M12 6 8 3"/>',
    progress: '<path d="M4 4v16h16M8 15l4-5 4 2 5-7"/>',
    adjust: '<path d="M4 7h6m4 0h6M4 17h10m4 0h2"/><circle cx="12" cy="7" r="2"/><circle cx="16" cy="17" r="2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}
