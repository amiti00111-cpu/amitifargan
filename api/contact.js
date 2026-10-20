// This identifier is a public form destination, not an API key.
const destination = 'https://formsubmit.co/ajax/38162946dfe5d7f3fcfeafc24c99d8cd';
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ success: false }); }
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) return res.status(415).json({ success: false });
  // Reject cross-site browser submissions. This is not bot authentication.
  const origin = req.headers.origin;
  if (origin && origin !== `https://${req.headers.host}` && origin !== 'https://amitifargan.vercel.app') return res.status(403).json({ success: false });
  if (Number(req.headers['content-length'] || 0) > 4096) return res.status(413).json({ success: false });
  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; } catch { return res.status(400).json({ success: false }); }
  if (!body || Array.isArray(body) || Buffer.byteLength(JSON.stringify(body)) > 4096) return res.status(400).json({ success: false });
  const { name, phone, goal = '', contactConsent, policyVersion } = body;
  if (typeof name !== 'string' || name.trim().length < 2 || name.length > 100 || /[\r\n<>]/.test(name) ||
      typeof phone !== 'string' || phone.length > 25 || !/^\+?[\d\s().-]+$/.test(phone) || phone.replace(/\D/g, '').length < 8 || phone.replace(/\D/g, '').length > 15 ||
      !['', 'fitness', 'strength', 'habits'].includes(goal) || contactConsent !== true || policyVersion !== '2026-10-20' || body._honey) return res.status(400).json({ success: false });
  try {
    const response = await fetch(destination, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: name.trim(), phone: phone.trim(), goal, contactConsent: true, policyVersion, receivedAt: new Date().toISOString(), _subject: 'פנייה חדשה מאתר אימון' }), signal: AbortSignal.timeout(10000) });
    const result = await response.json();
    if (!response.ok || ![true, 'true'].includes(result.success)) return res.status(502).json({ success: false });
    return res.status(200).json({ success: true });
  } catch { return res.status(502).json({ success: false }); }
}
