import { useState } from 'react'
import Icon from '../components/Icon'
import { whatsappURL, CONTACT_EMAIL } from '../lib/config'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in all required fields.')
      return
    }
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject || 'Ladder Contact')}&body=${encodeURIComponent(body)}`
    window.location.href = url
    setSent(true)
  }

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/80 via-cream to-cream" />
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full bg-brand/10 blur-3xl -z-10" />

        <div className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-4">
              Contact
            </div>

            <h1 className="text-[42px] md:text-[64px] leading-[1.04] font-extrabold tracking-tight text-ink mb-6">
              We'd love to{' '}
              <span className="bg-gradient-to-br from-brand to-terra bg-clip-text text-transparent">
                hear from you.
              </span>
            </h1>

            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink/70 max-w-2xl">
              Questions, feedback, partnership ideas, or just want to say hello? Reach out — we usually respond within a day.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT OPTIONS ===================== */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href={whatsappURL("Hi Ladder team,")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-linec bg-cream p-7 transition-all duration-300 hover:border-terra/40 hover:shadow-lg hover:shadow-black/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-4 group-hover:from-amber-100 group-hover:to-orange-100 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#CC6B4A">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-ink mb-2">WhatsApp</h3>
              <p className="text-[14.5px] leading-relaxed text-ink/65 mb-3">
                Fastest way to reach us. Ask anything.
              </p>
              <span className="text-[12.5px] font-bold text-terra uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Start chat →
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-2xl border border-linec bg-cream p-7 transition-all duration-300 hover:border-terra/40 hover:shadow-lg hover:shadow-black/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-4 group-hover:from-amber-100 group-hover:to-orange-100 transition">
                <Icon name="message" className="text-terra" />
              </div>
              <h3 className="text-[18px] font-bold text-ink mb-2">Email</h3>
              <p className="text-[14.5px] leading-relaxed text-ink/65 mb-3">
                For detailed questions and formal requests.
              </p>
              <span className="text-[12.5px] font-bold text-terra uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Send email →
              </span>
            </a>

            {/* Safety */}
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Safety%20Concern`}
              className="rounded-2xl border border-linec bg-cream p-7 transition-all duration-300 hover:border-terra/40 hover:shadow-lg hover:shadow-black/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center mb-4 group-hover:from-red-100 group-hover:to-orange-100 transition">
                <Icon name="shield" className="text-terra" />
              </div>
              <h3 className="text-[18px] font-bold text-ink mb-2">Report a concern</h3>
              <p className="text-[14.5px] leading-relaxed text-ink/65 mb-3">
                Safety issues, abuse, or policy violations.
              </p>
              <span className="text-[12.5px] font-bold text-terra uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Report now →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FORM ===================== */}
      <section className="container-page py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
              Send us a message
            </div>
            <h2 className="text-[30px] md:text-[40px] leading-tight font-bold text-ink mb-6">
              Tell us what's on your mind.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-ink/65 mb-8">
              Whether you're a hirer, worker, or just curious about Ladder — we want to hear it.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <Icon name="clock" className="text-terra" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink mb-1">Response time</div>
                  <div className="text-[14px] text-ink/60 leading-relaxed">Usually within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <Icon name="map-pin" className="text-terra" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink mb-1">Based in</div>
                  <div className="text-[14px] text-ink/60 leading-relaxed">Dhaka, Bangladesh</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                  <Icon name="handshake" className="text-terra" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink mb-1">Partnerships</div>
                  <div className="text-[14px] text-ink/60 leading-relaxed">Interested in working with us? Let's talk.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-linec bg-white p-8 md:p-10">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[20px] font-bold text-ink mb-2">Message ready!</h3>
                <p className="text-[14.5px] text-ink/60 mb-6">
                  Your email app should have opened with your message. If not, reach us directly at <b>{CONTACT_EMAIL}</b>.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-2.5 font-semibold text-[14px] hover:bg-amber-500 transition"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div>
                  <label className="block text-[13px] font-bold text-ink mb-2">Your name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    className="w-full rounded-xl border border-linec bg-cream px-4 py-3 text-[14.5px] outline-none focus:border-terra transition"
                    placeholder="e.g. Sabrina Ahmed"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-ink mb-2">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    className="w-full rounded-xl border border-linec bg-cream px-4 py-3 text-[14.5px] outline-none focus:border-terra transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-ink mb-2">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={set('subject')}
                    className="w-full rounded-xl border border-linec bg-cream px-4 py-3 text-[14.5px] outline-none focus:border-terra transition"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-ink mb-2">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={set('message')}
                    rows={5}
                    className="w-full rounded-xl border border-linec bg-cream px-4 py-3 text-[14.5px] outline-none focus:border-terra transition resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-3.5 font-bold text-[15px] shadow-lg shadow-brand/25 hover:bg-amber-500 transition active:scale-[0.98]"
                >
                  Send message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="container-page pb-20 md:pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-14 text-center text-white">
          <h2 className="text-[28px] md:text-[36px] leading-tight font-extrabold mb-4">
            Ready to get started?
          </h2>
          <p className="text-[16.5px] leading-relaxed opacity-90 mb-8 max-w-xl mx-auto">
            Skip the form — open Ladder and post your first task.
          </p>
          <a
            href="https://ladderbd.vercel.app"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-terra px-6 py-3.5 font-bold text-[15px] shadow-xl hover:bg-white/95 transition"
          >
            Open Ladder →
          </a>
        </div>
      </section>
    </>
  )
}