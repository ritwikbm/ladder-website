import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { APP_URL } from '../lib/config'

const ExampleTask = ({ icon, title, category, price, location, time, duration, applicants }) => (
  <div className="card-ladder">
    <div className="flex items-start justify-between mb-3">
      <span className="badge-amber text-[10.5px] uppercase tracking-wide">{category}</span>
      <span className="text-[11.5px] text-ink/50 font-medium">{applicants} applied</span>
    </div>
    <div className="flex items-start gap-3 mb-4">
      <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
        <Icon name={icon} className="text-ink/60" />
      </div>
      <h3 className="text-[15.5px] font-bold text-ink leading-snug pt-1.5">{title}</h3>
    </div>
    <div className="flex items-center gap-3 text-[12.5px] text-ink/55 mb-4">
      <span className="inline-flex items-center gap-1">
        <Icon name="map-pin" className="w-3.5 h-3.5 text-ink/40" />
        {location}
      </span>
      <span className="text-ink/25">·</span>
      <span className="inline-flex items-center gap-1">
        <Icon name="clock" className="w-3.5 h-3.5 text-ink/40" />
        {time}
      </span>
      <span className="text-ink/25">·</span>
      <span>{duration}</span>
    </div>
    <div className="flex items-center justify-between pt-3 border-t border-linec">
      <span className="text-[20px] font-bold text-terra">৳{price}</span>
      <span className="text-[12px] font-bold text-terra uppercase tracking-wide">View →</span>
    </div>
  </div>
)

export default function ForHirers() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/60 via-cream to-cream" />
        <div className="container-page pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 badge-amber mb-5">
              <span>For Hirers</span>
            </div>
            <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold tracking-tight text-ink mb-6">
              Need something done? Post it. Get it handled today.
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink/70 max-w-2xl mb-8">
              From holding a hospital serial to picking up medicine — Ladder connects you with trusted people nearby who can help, today.
            </p>
            <a href={APP_URL} className="btn-primary !text-[16px] !py-3.5 !px-6">
              Post a task →
            </a>
          </div>
        </div>
      </section>

      {/* WHY LADDER */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl mb-12">
            <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink mb-5">
              Why hirers choose Ladder
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'map-pin', title: 'Nearby help', desc: 'Workers are within your area. Real, local people who can arrive quickly.' },
              { icon: 'handshake', title: 'You choose', desc: 'Review every applicant before assigning. Ratings, history, and a short message.' },
              { icon: 'lock', title: 'Privacy first', desc: 'Your phone and address stay private until you assign a worker.' },
              { icon: 'zap', title: 'Fast posting', desc: 'Describe the task, set the price, pick a time. Done in under a minute.' },
              { icon: 'wallet', title: 'Direct payment', desc: 'Pay workers directly via cash or bKash. No platform fees for MVP.' },
              { icon: 'star', title: 'Trust system', desc: 'Rate and review after completion. Build a network of reliable workers.' },
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

      {/* EXAMPLE TASKS */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
            Real examples
          </div>
          <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink mb-5">
            Tasks posted on Ladder today.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <ExampleTask
            icon="ticket"
            category="Queue & Serial"
            title="Hold my serial at Popular Diagnostic"
            price="250"
            location="Mirpur 10"
            time="Today · 5:30 PM"
            duration="~2 hours"
            applicants={3}
          />
          <ExampleTask
            icon="pill"
            category="Errands"
            title="Pick up medicine from Lazz Pharma"
            price="120"
            location="Dhanmondi"
            time="Tomorrow · 10:00 AM"
            duration="~30 min"
            applicants={1}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink mb-10 text-center">
              Common questions
            </h2>
            <div className="space-y-4">
              {[
                { q: 'How much does it cost?', a: 'For our MVP, Ladder does not charge any platform fee. You pay the worker directly via cash or bKash at the agreed price.' },
                { q: 'How do I choose a worker?', a: 'Workers apply to your task with a short message. You see their profile, rating, and completed task count. You pick who you trust.' },
                { q: 'What if I need to cancel?', a: 'If no worker is assigned yet, you can cancel freely. Once a worker is assigned, cancelling affects your reputation score.' },
                { q: 'When is my phone number shared?', a: 'Your phone number and exact address stay private until you assign a worker. Only the assigned worker sees your contact.' },
                { q: 'How do I know the worker is trustworthy?', a: 'Every worker has a rating, review history, and completed task count visible before you assign them.' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-linec bg-cream p-5">
                  <h3 className="font-bold text-[15.5px] text-ink mb-2">{item.q}</h3>
                  <p className="text-[14.5px] text-ink/65 leading-relaxed">{item.a}</p>
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
            What do you need done today?
          </h2>
          <p className="text-[16.5px] leading-relaxed opacity-90 mb-8 max-w-xl mx-auto">
            Post it on Ladder. Get help from someone nearby.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={APP_URL} className="btn bg-white text-terra hover:bg-white/90 !text-[15px] !py-3 !px-6 shadow-xl">
              Post a task →
            </a>
            <Link to="/for-workers" className="btn border-2 border-white/40 text-white hover:bg-white/10 !text-[15px] !py-3 !px-6">
              I want to work instead
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}