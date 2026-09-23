import { Link } from 'react-router-dom'

export default function Terms() {
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
              Terms of Service
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
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">1. Acceptance of Terms</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                By accessing or using Ladder ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Platform. Ladder is a hyperlocal micro-task marketplace that connects people who need small tasks done ("Hirers") with nearby people willing to complete them ("Workers").
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">2. Eligibility</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                You must be at least 18 years old to use Ladder, or have the consent of a legal guardian. You must provide accurate information during registration and maintain the security of your account.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">3. Nature of the Platform</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70 mb-4">
                Ladder is a discovery and connection platform. We are not a party to any agreement between Hirers and Workers. All payment, service delivery, and dispute resolution between the two parties is their own responsibility.
              </p>
              <ul className="space-y-2 list-disc pl-6 text-[15.5px] leading-relaxed text-ink/70">
                <li>Payments are made directly between Hirers and Workers (cash or bKash).</li>
                <li>Ladder does not process, hold, or guarantee any payment.</li>
                <li>Ladder does not guarantee task completion, quality, or timeliness.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">4. User Responsibilities</h2>
              <ul className="space-y-2 list-disc pl-6 text-[15.5px] leading-relaxed text-ink/70">
                <li>Post only legal, honest, and reasonable tasks.</li>
                <li>Do not use Ladder for any illegal, harmful, or abusive activity.</li>
                <li>Respect the privacy of other users — do not share their information.</li>
                <li>Do not harass, threaten, or discriminate against any user.</li>
                <li>Use the SOS button only for genuine emergencies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">5. Prohibited Content</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Tasks involving drugs, weapons, harassment, illegal goods, or any activity prohibited by Bangladeshi law are strictly forbidden. Ladder reserves the right to remove any task or account that violates these terms, with or without notice.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">6. Ratings and Reviews</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                After a task is completed, both parties may rate each other. Ratings must be honest and based on real interactions. Fraudulent, retaliatory, or malicious ratings may result in suspension.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">7. Cancellations</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Hirers may cancel a task before a Worker is assigned. After assignment, cancellation affects the Hirer's reputation and compensates the Worker with points, as described in the Ladder product.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">8. Account Suspension</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Ladder may suspend or terminate any account that violates these terms, receives repeated reports, or is found misusing the platform. Suspended users may contact support to appeal.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">9. Changes to Terms</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                We may update these terms from time to time. Continued use of Ladder after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-4">10. Contact</h2>
              <p className="text-[15.5px] leading-relaxed text-ink/70">
                Questions about these terms? Contact us at <b>kiwtirr@gmail.com</b> or via <Link to="/contact" className="text-terra font-semibold hover:underline">our contact page</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-14 text-center text-white">
          <h2 className="text-[26px] md:text-[34px] leading-tight font-extrabold mb-4">
            Questions? Let's talk.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/privacy" className="inline-flex items-center gap-2 rounded-xl bg-white text-terra px-6 py-3 font-bold text-[14px] shadow-xl hover:bg-white/95 transition">
              Read Privacy Policy
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