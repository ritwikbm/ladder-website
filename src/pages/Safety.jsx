import Icon from '../components/Icon'
import { SAFETY_EMAIL } from '../lib/config'

const SAFETY_FEATURES = [
  { icon: 'star', title: 'Two-way ratings', desc: 'After every task, both sides rate each other. Reputation is built on real interactions.' },
  { icon: 'alert', title: 'SOS button', desc: 'During an active task, either party can trigger SOS. Nearby users and our team are alerted instantly.' },
  { icon: 'lock', title: 'Privacy controls', desc: 'Phone numbers and exact addresses stay private until assignment. No public exposure.' },
  { icon: 'flag', title: 'Report & block', desc: 'Report any user or task that violates guidelines. Block users you don\'t want to interact with.' },
  { icon: 'clipboard', title: 'Task history', desc: 'Every user has a public record of completed tasks, ratings, and reviews.' },
  { icon: 'check-circle', title: 'Verified profiles', desc: 'Basic profile verification helps keep fake accounts out.' },
]

export default function Safety() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/60 via-cream to-cream" />
        <div className="container-page pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-4">
              Trust & Safety
            </div>
            <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold tracking-tight text-ink mb-6">
              Built for real people, meeting in real life.
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink/70 max-w-2xl">
              Ladder connects people who may meet offline. We take that seriously. Here's how we protect both hirers and workers.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SAFETY FEATURES */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            {SAFETY_FEATURES.map((item, i) => (
              <div key={i} className="card-ladder">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-ink/60" />
                </div>
                <h3 className="text-[17px] font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ink/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR HIRERS / WORKERS */}
      <section className="container-page py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="inline-flex items-center gap-2 badge-amber mb-5">
              <span>For Hirers</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] leading-tight font-bold text-ink mb-6">
              Your safety, our priority
            </h2>
            <ul className="space-y-4">
              {[
                'Review every applicant — rating, history, and profile — before assigning.',
                'Your phone number and address stay private until you choose a worker.',
                'Chat only unlocks after assignment — no unsolicited messages.',
                'Rate honestly. Bad experiences help others avoid them.',
                'Use SOS during any active task if you feel unsafe.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-ink/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 badge-terra mb-5">
              <span>For Workers</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] leading-tight font-bold text-ink mb-6">
              Work with confidence
            </h2>
            <ul className="space-y-4">
              {[
                'Only apply to tasks you are comfortable with. You choose.',
                'Your phone number stays private until you are assigned.',
                'Meet in public places for first-time tasks when possible.',
                'Payment is direct — cash or bKash — agreed upfront.',
                'Report any hirer who behaves inappropriately. We take action.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-ink/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] md:text-[36px] leading-tight font-bold text-ink mb-8 text-center">
              Community guidelines
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Be honest', desc: 'Describe tasks accurately. Rate fairly. Don\'t misrepresent yourself.' },
                { title: 'Be respectful', desc: 'Treat everyone with respect regardless of gender, background, or role.' },
                { title: 'No illegal tasks', desc: 'Tasks involving drugs, weapons, harassment, or anything illegal are not allowed.' },
                { title: 'No scams', desc: 'Fraudulent tasks or fake payments result in immediate suspension.' },
                { title: 'Respect privacy', desc: 'Do not share phone numbers, addresses, or personal details outside the platform.' },
                { title: 'Use SOS responsibly', desc: 'SOS is for real emergencies only. False SOS alerts lead to suspension.' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-linec bg-cream p-5">
                  <h3 className="font-bold text-[15.5px] text-ink mb-2">{item.title}</h3>
                  <p className="text-[14.5px] text-ink/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container-page py-20 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-14 text-center text-white">
          <h2 className="text-[28px] md:text-[38px] leading-tight font-extrabold mb-4">
            Something feels wrong?
          </h2>
          <p className="text-[16.5px] leading-relaxed opacity-90 mb-8 max-w-xl mx-auto">
            Report it. Every report is reviewed by our team.
          </p>
          <a
            href={`mailto:${SAFETY_EMAIL}?subject=${encodeURIComponent('Safety concern')}`}
            className="btn bg-white text-terra hover:bg-white/90 !text-[15px] !py-3 !px-6 shadow-xl"
          >
            Contact safety team
          </a>
        </div>
      </section>
    </>
  )
}