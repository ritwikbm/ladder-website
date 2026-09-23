// ============================================================
// Ladder — Site Configuration
// ============================================================

// Web app URL
export const APP_URL = 'https://ladderbd.vercel.app'

// Contact info
export const WHATSAPP_NUMBER = '8801871281480'
export const CONTACT_EMAIL = 'kiwtirr@gmail.com'
export const SAFETY_EMAIL = 'kiwtirr@gmail.com'

// Social links
export const SOCIAL = {
  facebook: '',
  instagram: '',
  tiktok: '',
}

// WhatsApp URL helper
export const whatsappURL = (message = '') => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

// Email helper
export const emailURL = (subject = '', body = '') => {
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${CONTACT_EMAIL}${params.length ? '?' + params.join('&') : ''}`
}