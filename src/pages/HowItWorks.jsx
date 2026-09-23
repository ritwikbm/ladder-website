import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { APP_URL } from '../lib/config'

export default function HowItWorks() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/60 via-cream to-cream" />
        <div className="container-page pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-4">
              How It Works
            </div>
            <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold tracking-tight text-ink mb-6">
              Two sides. One simple flow.
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink/70 max-w-2xl">
              Ladder connects people who need small tasks done with nearby people who can help. Whether you're posting or applying, it takes under a minute to start.
            </p>
          </div>
        </div>
      </section>

      {/* FOR HIRERS */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 badge-amber mb-4">
              <span>For Hirers</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] leading-tight font-bold text-ink mb-4">
              Need something done? Post it.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-ink/65">
              From holding a hospital serial to picking up medicine — Ladder makes it easy to find someone nearby who can help, today.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', title: 'Post your task', desc: 'Describe what you need, when it should happen, and how much you want to pay in BDT. Add the location so nearby people see it.', points: ['Task title and description', 'Date, time, and duration', 'Payment in BDT', 'Optional photo or requirements'] },
              { n: '02', title: 'Review applicants', desc: 'People nearby apply with a short message. You see their ratings, completed task count, and profile before you choose.', points: ['Application message from worker', 'Profile, rating, and history', 'Choose the person you trust', 'Message them before assigning'] },
              { n: '03', title: 'Get it done', desc: 'Once assigned, contact details are shared. Your worker completes the task, you pay directly, then both of you review each other.', points: ['Contact shared after assignment', 'Complete the task together', 'Pay directly (cash / bKash)', 'Leave a rating and review'] },
            ].map(step => (
              <div key={step.n} className="card-ladder">
                <div className="w-12 h-12 rounded-xl bg-gray-100 text-ink/60 font-bold text-[16px] flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="text-[18px] font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ink/65 mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13.5px] text-ink/60">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-terra" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={APP_URL} className="btn-primary">Post a task →</a>
          </div>
        </div>
      </section>

      {/* FOR WORKERS */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 badge-terra mb-4">
            <span>For Workers</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] leading-tight font-bold text-ink mb-4">
            Want to earn nearby? Apply.
          </h2>
          <p className="text-[16.5px] leading-relaxed text-ink/65">
            Turn your spare time into real earnings. Browse small tasks in your area, apply with a short message, and get paid directly when you complete them.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: '01', title: 'Discover nearby tasks', desc: 'Browse tasks posted by people in your area. Filter by category, distance, and payment.', points: ['Location-based task feed', 'Distance and time shown', 'Payment amount clear upfront', 'New tasks every day'] },
            { n: '02', title: 'Apply with a message', desc: 'Send a short application. Tell the hirer why you are a good fit — location, timing, or relevant experience.', points: ['One-line application message', 'Your profile and rating shown', 'Hirer reviews all applicants', 'No first-come-first-served race'] },
            { n: '03', title: 'Complete & earn', desc: 'Get assigned, complete the task, get paid directly. Every completed task builds your reputation on the Ladder.', points: ['Direct payment (cash / bKash)', 'Ratings and reviews', 'Points and milestones', 'Repeat hirers build up'] },
          ].map(step => (
            <div key={step.n} className="card-ladder">
              <div className="w-12 h-12 rounded-xl bg-gray-100 text-ink/60 font-bold text-[16px] flex items-center justify-center mb-4">
                {step.n}
              </div>
              <h3 className="text-[18px] font-bold text-ink mb-2">{step.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink/65 mb-4">{step.desc}</p>
              <ul className="space-y-2">
                {step.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13.5px] text-ink/60">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-terra" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={APP_URL} className="btn-primary">Start earning →</a>
        </div>
      </section>

      {/* WHAT LADDER IS NOT */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] md:text-[36px] leading-tight font-bold text-ink mb-6 text-center">
              What Ladder is not
            </h2>
            <p className="text-[16px] leading-relaxed text-ink/65 text-center mb-10 max-w-2xl mx-auto">
              Ladder is for real, small, everyday tasks between people nearby. It is not a freelancing platform, a job board, or a social network.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { x: 'Not a freelancing platform', d: 'This is not Fiverr or Upwork. No long-term contracts, no complex gigs.' },
                { x: 'Not a job board', d: 'No permanent positions. No resumes. No LinkedIn-style profiles.' },
                { x: 'Not a race to click', d: 'Hirers choose. First applicant is not automatically assigned.' },
                { x: 'Not a social network', d: 'No feed, no followers, no DMs outside of active tasks.' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-linec bg-cream p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-[12px] font-bold">×</span>
                    <span className="font-bold text-[14.5px] text-ink">{item.x}</span>
                  </div>
                  <p className="text-[13.5px] text-ink/60 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-14 text-center text-white">
          <h2 className="text-[28px] md:text-[38px] leading-tight font-extrabold mb-4">
            Ready to climb?
          </h2>
          <p className="text-[16.5px] leading-relaxed opacity-90 mb-8 max-w-xl mx-auto">
            Your next rung could be waiting right now.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={APP_URL} className="btn bg-white text-terra hover:bg-white/90 !text-[15px] !py-3 !px-6 shadow-xl">
              Open Ladder →
            </a>
            <Link to="/for-workers" className="btn border-2 border-white/40 text-white hover:bg-white/10 !text-[15px] !py-3 !px-6">
              I want to work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}