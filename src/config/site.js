export const site = {
  // Direct contact through the WhatsApp number supplied by the site owner.
  contactMode: 'whatsapp',
  whatsappNumber: '972533352635', // International digits only, e.g. country code + number.
  whatsappMessage: '', // Add only supplied message text.
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
    : '#top';
}
