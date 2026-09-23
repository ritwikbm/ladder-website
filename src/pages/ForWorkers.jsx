import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { APP_URL } from '../lib/config'

export default function ForWorkers() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/60 via-cream to-cream" />
        <div className="container-page pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 badge-terra mb-5">
              <span>For Workers</span>
            </div>
            <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold tracking-tight text-ink mb-6">
              Turn your spare time into real earnings.
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink/70 max-w-2xl mb-8">
              Browse small tasks posted in your area. Apply with a short message. Get assigned. Complete. Earn. Build your reputation — one rung at a time.
            </p>
            <a href={APP_URL} className="btn-primary !text-[16px] !py-3.5 !px-6">
              Start earning →
            </a>
          </div>
        </div>
      </section>

      {/* WHY WORK */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink mb-5">
              Why work on Ladder
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'smartphone', title: 'Apply from anywhere', desc: 'Browse tasks in your area on your phone. Apply in seconds.' },
              { icon: 'target', title: 'You apply, they choose', desc: 'No race to click first. Hirers review all applicants fairly.' },
              { icon: 'wallet', title: 'Direct payment', desc: 'Get paid in cash or bKash directly by the hirer. No delays.' },
              { icon: 'star', title: 'Build reputation', desc: 'Every completed task adds to your rating and history.' },
              { icon: 'ladder', title: 'Climb the Ladder', desc: 'Earn points, unlock milestones, become a trusted name in your area.' },
              { icon: 'shield', title: 'Safety tools', desc: 'SOS button, ratings, and report tools keep you protected.' },
            ].map((item, i) => (
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

      {/* WAYS TO EARN */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
            Ways to earn
          </div>
          <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink mb-5">
            Small tasks. Real money.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: 'ticket', title: 'Queue & Serial', price: '৳150–৳400', desc: 'Hold a spot at hospitals, banks, offices.' },
            { icon: 'pill', title: 'Errands', price: '৳100–৳300', desc: 'Pick up medicine, food, or documents.' },
            { icon: 'book', title: 'Tutoring', price: '৳400–৳800', desc: 'An hour of subject help for a student nearby.' },
            { icon: 'package', title: 'Carrying', price: '৳200–৳500', desc: 'Move or carry items within the area.' },
          ].map((cat, i) => (
            <div key={i} className="card-ladder text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <Icon name={cat.icon} className="text-ink/60" />
              </div>
              <h3 className="text-[15.5px] font-bold text-ink mb-1">{cat.title}</h3>
              <div className="text-[14px] font-bold text-terra mb-2">{cat.price}</div>
              <p className="text-[13px] text-ink/60 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink mb-5">
              How to start earning today
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', title: 'Sign up', desc: 'Create your free account with phone or email. Takes 30 seconds.' },
              { n: '02', title: 'Set your area', desc: 'Turn on location so we can show you tasks posted near you.' },
              { n: '03', title: 'Apply to tasks', desc: 'Browse, filter, and send short applications. Hirers choose who they trust.' },
            ].map(step => (
              <div key={step.n} className="card-ladder">
                <div className="w-12 h-12 rounded-xl bg-gray-100 text-ink/60 font-bold text-[16px] flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="text-[18px] font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ink/65">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How much can I earn?', a: 'Task payments range from ৳100 for quick errands to ৳800+ for tutoring sessions. You choose which tasks to apply for.' },
              { q: 'When do I get paid?', a: 'Payment happens directly between you and the hirer after the task is completed — cash or bKash, as agreed.' },
              { q: 'Do I need experience?', a: 'No. Ladder is for everyone with spare time. Build your reputation one task at a time.' },
              { q: 'What if something goes wrong?', a: 'Every active task has an SOS button. You can also report users or tasks to our team at any time.' },
              { q: 'Is my phone number public?', a: 'No. Your phone number stays private and is only shared with the hirer after you are assigned to their task.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-linec bg-cream p-5">
                <h3 className="font-bold text-[15.5px] text-ink mb-2">{item.q}</h3>
                <p className="text-[14.5px] text-ink/65 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-14 text-center text-white">
          <h2 className="text-[28px] md:text-[38px] leading-tight font-extrabold mb-4">
            Your next rung could be waiting.
          </h2>
          <p className="text-[16.5px] leading-relaxed opacity-90 mb-8 max-w-xl mx-auto">
            Sign up in seconds. Start earning from your spare time.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={APP_URL} className="btn bg-white text-terra hover:bg-white/90 !text-[15px] !py-3 !px-6 shadow-xl">
              Start earning →
            </a>
            <Link to="/for-hirers" className="btn border-2 border-white/40 text-white hover:bg-white/10 !text-[15px] !py-3 !px-6">
              I need help instead
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}