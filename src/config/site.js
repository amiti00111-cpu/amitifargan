export const site = {
  // CTA defaults to the form. Set to 'whatsapp' only after adding a real number.
  contactMode: 'form',
  whatsappNumber: '', // International digits only, e.g. country code + number.
  whatsappMessage: '', // Add only supplied message text.
  form: {
    // A real HTTPS endpoint accepting JSON { name, phone, goal }.
    // Keep private credentials on your server, never in this client config.
    endpoint: 'https://formsubmit.co/ajax/amiti00111@gmail.com',
    timeoutMs: 15000,
  },
  seo: {
    // Title / description already use supplied copy in index.html.
    // Add the final canonical URL and supplied Open Graph image here.
    canonicalUrl: 'https://amitifargan.vercel.app/',
    imageUrl: 'https://amitifargan.vercel.app/images/coach-960.webp',
  },
};

export function contactHref() {
  const number = site.whatsappNumber.replace(/\D/g, '');
  return site.contactMode === 'whatsapp' && number
    ? `https://wa.me/${number}${site.whatsappMessage ? `?text=${encodeURIComponent(site.whatsappMessage)}` : ''}`
    : '#lead-form';
}
