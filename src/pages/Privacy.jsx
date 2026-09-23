import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-full bg-[#fdfaf6]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/80 via-cream to-cream" />
        <div className="container-page pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="max-w-3xl">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-4">
              Legal
            </div>
            <h1 className="text-[42px] md:text-[56px] leading-[1.1] font-extrabold tracking-tight text-ink mb-6">
              Privacy Policy
            </h1>
            <p className="text-[17px] md:text-[18px] leading-relaxed text-ink/65">
              Last updated: September 23, 2026
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-10">

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">1. Our Commitment</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Ladder takes your privacy seriously. This policy explains what information we collect, how we use it, and the controls you have. We do not sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">2. Information We Collect</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70 mb-4">We collect:</p>
              <ul className="space-y-2 list-disc pl-6 text-[15.5px] leading-relaxed text-ink/70">
                <li><b>Account information:</b> name, phone number, email, gender, date of birth.</li>
                <li><b>Location data:</b> GPS coordinates to match nearby tasks.</li>
                <li><b>Task data:</b> tasks posted, applications, chat messages, ratings.</li>
                <li><b>Device information:</b> basic technical data for security and performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-2 list-disc pl-6 text-[15.5px] leading-relaxed text-ink/70">
                <li>To connect Hirers and Workers nearby.</li>
                <li>To verify identity and build trust.</li>
                <li>To process applications and notifications.</li>
                <li>To improve the platform and prevent fraud.</li>
                <li>To respond to support requests.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">4. What We Do NOT Do</h2>
              <ul className="space-y-2 list-disc pl-6 text-[15.5px] leading-relaxed text-ink/70">
                <li>We do not sell your data to advertisers or third parties.</li>
                <li>We do not show your phone number to anyone except the assigned party of a task.</li>
                <li>We do not share your exact address publicly.</li>
                <li>We do not use your data for anything outside of Ladder's core service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">5. Contact Sharing</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Your phone number and address stay private until a task is assigned. Once assigned, only the Hirer and Worker see each other's contact information. This access ends when the task is completed or cancelled.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">6. Location Data</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                We use your GPS location only to calculate distance for nearby tasks. We never show your exact coordinates to other users — only approximate distance is visible.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">7. SOS Data</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                When you trigger SOS during an active task, your name, photo, area, and phone number are shared with nearby active users within 5 km — so they can help. This is by design and only during the emergency.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">8. Your Rights</h2>
              <ul className="space-y-2 list-disc pl-6 text-[15.5px] leading-relaxed text-ink/70">
                <li>You can edit your profile information at any time.</li>
                <li>You can delete your account permanently from Settings.</li>
                <li>You can request a copy of your data by contacting us.</li>
                <li>You can opt out of non-essential notifications.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">9. Children's Privacy</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Ladder is not intended for users under 18. We do not knowingly collect information from children.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">10. Changes to Privacy Policy</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                We may update this policy occasionally. Material changes will be communicated through the platform.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">11. Contact</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Questions about privacy? Contact us at <b>kiwtirr@gmail.com</b> or via <Link to="/contact" className="text-terra font-semibold hover:underline">our contact page</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-14 text-center text-white">
          <h2 className="text-[26px] md:text-[34px] leading-tight font-extrabold mb-4">
            See something unclear?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/terms" className="inline-flex items-center gap-2 rounded-xl bg-white text-terra px-6 py-3 font-bold text-[14px] shadow-xl hover:bg-white/95 transition">
              Read Terms of Service
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 text-white px-6 py-3 font-bold text-[14px] hover:bg-white/10 transition">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}