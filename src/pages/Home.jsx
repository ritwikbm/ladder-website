import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { APP_URL } from '../lib/config'

const TaskCard = ({ icon, title, category, price, location, time, applicants }) => (
  <div className="group bg-white rounded-2xl border border-linec p-5 transition-all duration-300 hover:border-terra/40 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5">
    <div className="flex items-start justify-between mb-3">
      <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-[10.5px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
        {category}
      </span>
      <span className="text-[11.5px] text-ink/45 font-medium">
        {applicants} applied
      </span>
    </div>

    <div className="flex items-start gap-3 mb-4">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center shrink-0 group-hover:from-amber-100 group-hover:to-orange-100 transition">
        <Icon name={icon} className="text-terra" />
      </div>
      <h3 className="text-[15.5px] font-bold text-ink leading-snug pt-1.5">
        {title}
      </h3>
    </div>

    <div className="flex items-center gap-2.5 text-[12.5px] text-ink/55 mb-4">
      <span className="inline-flex items-center gap-1">
        <Icon name="map-pin" className="w-3.5 h-3.5 text-ink/40" />
        {location}
      </span>
      <span className="text-ink/25">·</span>
      <span className="inline-flex items-center gap-1">
        <Icon name="clock" className="w-3.5 h-3.5 text-ink/40" />
        {time}
      </span>
    </div>

    <div className="flex items-center justify-between pt-3 border-t border-linec">
      <span className="text-[20px] font-bold text-terra">৳{price}</span>
      <span className="text-[11.5px] font-bold text-terra uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        View
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </div>
)

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/80 via-cream to-cream" />
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full bg-brand/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-terra/8 blur-3xl -z-10" />

        <div className="container-page pt-12 pb-16 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* ============= LEFT: Copy ============= */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-linec bg-white/80 backdrop-blur-sm px-3.5 py-1.5 text-[12.5px] font-semibold text-ink/70 mb-6 md:mb-7">
                🇧🇩 <span>Made in Bangladesh</span>
              </div>

              <h1 className="text-[44px] md:text-[60px] leading-[1.04] font-extrabold tracking-tight text-ink mb-5 md:mb-6">
                Every task
                <br />
                tells a{' '}
                <span className="bg-gradient-to-br from-brand to-terra bg-clip-text text-transparent">
                  story.
                </span>
              </h1>

              <p className="text-[16px] md:text-[18.5px] leading-relaxed text-ink/70 mb-7 md:mb-8 max-w-lg mx-auto md:mx-0">
                Today, someone needs a hospital serial held. Tomorrow, someone needs medicine picked up. Ladder is where those small tasks find nearby hands — and where every completed task becomes a rung someone can climb.
              </p>

              {/* CTAs — mobile: 1 button + text link, desktop: 2 buttons */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-3 mb-6">
                <a
                  href={APP_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-7 py-4 md:py-3.5 font-semibold text-[15.5px] md:text-[15px] shadow-lg shadow-brand/25 hover:bg-amber-500 transition active:scale-[0.98] w-full md:w-auto"
                >
                  Open Ladder
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>

                <Link
                  to="/how-it-works"
                  className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white text-ink border border-linec px-6 py-3.5 font-semibold text-[15px] hover:border-terra transition active:scale-[0.98]"
                >
                  How it works
                </Link>

                <Link
                  to="/how-it-works"
                  className="md:hidden inline-flex items-center justify-center gap-1.5 text-[14.5px] font-semibold text-terra hover:text-amber-600 transition"
                >
                  See how it works
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-[13px] text-ink/55">
                <span className="inline-flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free to join
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Available in Dhaka
                </span>
              </div>
            </div>

            {/* ============= RIGHT: Task cards (hidden on small mobile) ============= */}
            <div className="hidden md:block relative">
              <div className="relative z-10">
                <TaskCard
                  icon="ticket"
                  category="Queue & Serial"
                  title="Hold my serial at Popular Diagnostic"
                  price="250"
                  location="Mirpur 10"
                  time="Today · 5:30 PM"
                  applicants={3}
                />
              </div>

              <div className="relative z-0 -mt-4 ml-12 md:ml-20 scale-95 opacity-80">
                <TaskCard
                  icon="pill"
                  category="Errands"
                  title="Pick up medicine from Lazz Pharma"
                  price="120"
                  location="Dhanmondi"
                  time="Tomorrow · 10:00 AM"
                  applicants={1}
                />
              </div>

              <div className="relative z-0 -mt-4 ml-24 md:ml-40 scale-90 opacity-60">
                <TaskCard
                  icon="book"
                  category="Tutoring"
                  title="Math tutoring for Class 9"
                  price="600"
                  location="Online"
                  time="Sunday · 6:00 PM"
                  applicants={5}
                />
              </div>
            </div>
          </div>

          {/* Mobile: Single hero task card preview */}
          <div className="mt-12 md:hidden">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-terra/70 mb-4 text-center">
              Live tasks near you
            </div>
            <TaskCard
              icon="ticket"
              category="Queue & Serial"
              title="Hold my serial at Popular Diagnostic"
              price="250"
              location="Mirpur 10"
              time="Today · 5:30 PM"
              applicants={3}
            />
          </div>
        </div>
      </section>

      {/* ===================== STORY LOOP ===================== */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
              The Ladder loop
            </div>
            <h2 className="text-[30px] md:text-[40px] leading-tight font-bold text-ink">
              Post. Apply. Assign. Complete.
              <br />
              <span className="text-ink/50">Then climb one rung.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Post', d: 'Describe the task, set a time and a fair price in BDT.' },
              { n: '02', t: 'Apply', d: 'People nearby send a short message. No race to click first.' },
              { n: '03', t: 'Assign', d: 'You review applicants and choose who you trust.' },
              { n: '04', t: 'Complete', d: 'Task done, pay directly, review each other — and +1 rung.' },
            ].map((step, i) => (
              <div key={step.n} className="relative">
                <div className="rounded-2xl border border-linec bg-cream p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 text-terra font-bold text-[14px] flex items-center justify-center mb-4">
                    {step.n}
                  </div>
                  <h3 className="text-[17px] font-bold text-ink mb-2">{step.t}</h3>
                  <p className="text-[14px] text-ink/60 leading-relaxed">{step.d}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-linec items-center justify-center z-10">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#CC6B4A" strokeWidth="3" strokeLinecap="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHAT PEOPLE POST ===================== */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
            What people post
          </div>
          <h2 className="text-[30px] md:text-[40px] leading-tight font-bold text-ink mb-4">
            Small tasks. Real needs. Near you.
          </h2>
          <p className="text-[16px] text-ink/65 leading-relaxed">
            From a hospital serial to a quick errand — here are the kinds of tasks that appear on Ladder every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <TaskCard
            icon="ticket"
            category="Queue & Serial"
            title="Hold my serial at Popular Diagnostic"
            price="250"
            location="Mirpur 10"
            time="Today · 5:30 PM"
            applicants={3}
          />
          <TaskCard
            icon="pill"
            category="Errands"
            title="Pick up medicine from Lazz Pharma"
            price="120"
            location="Dhanmondi"
            time="Tomorrow · 10:00 AM"
            applicants={1}
          />
          <TaskCard
            icon="book"
            category="Tutoring"
            title="Math tutoring for Class 9"
            price="600"
            location="Online"
            time="Sunday · 6:00 PM"
            applicants={5}
          />
          <TaskCard
            icon="package"
            category="Carrying"
            title="Carry boxes to a new apartment"
            price="450"
            location="Mohammadpur"
            time="Saturday · 9:00 AM"
            applicants={2}
          />
        </div>
      </section>

      {/* ===================== EDITORIAL STORY ===================== */}
      <section className="relative overflow-hidden bg-white border-y border-linec">
        <div className="container-page py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">

            {/* LEFT: Big editorial portrait */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 opacity-40 blur-2xl" />

              <div className="relative">
                <div className="rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
                  <div className="rounded-[32px] overflow-hidden border-[10px] border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]">
                    <div className="aspect-[4/5]">
                      <img
                        src="/sabrina.jpg"
                        alt="Sabrina A. — Hirer on Ladder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl border border-linec px-4 py-3 shadow-xl rotate-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10.5px] font-bold text-ink uppercase tracking-wide">
                        Verified
                      </div>
                      <div className="text-[9px] text-ink/50">
                        Hirer · Dhaka
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Editorial quote + story */}
            <div className="md:col-span-7">
              <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-6">
                A story from Dhaka
              </div>

              <blockquote className="mb-8">
                <div className="text-[52px] md:text-[64px] leading-[0.9] font-serif text-terra/30 mb-2">
                  "
                </div>
                <p className="text-[28px] md:text-[36px] leading-[1.25] font-bold text-ink tracking-tight">
                  I couldn't hold the serial myself — and Ladder found someone who could.
                </p>
              </blockquote>

              <div className="pl-6 border-l-2 border-terra/30 mb-8">
                <p className="text-[16.5px] leading-relaxed text-ink/65 mb-4">
                  My mother had a morning appointment at Popular Diagnostic. My office hours overlapped, and the serial line opened at 6 AM. I posted the task at midnight — by morning, three people had applied.
                </p>
                <p className="text-[16.5px] leading-relaxed text-ink/65">
                  Rafi, who lives two blocks away, was there at 6:15. The task was done before I even reached the hospital. That's Ladder — small, real, nearby.
                </p>
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-10 bg-terra/40" />
                <div>
                  <div className="text-[15px] font-bold text-ink">Sabrina A.</div>
                  <div className="text-[12.5px] text-ink/50">Hirer · Dhanmondi</div>
                </div>
              </div>

              <div className="rounded-2xl border border-linec bg-cream p-5 max-w-md">
                <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-linec">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-terra flex items-center justify-center text-white font-bold text-[12px]">
                    R
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-ink">Rafi Hossain</div>
                    <div className="text-[11px] text-ink/50">★ 4.9 · Worker</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white border border-linec rounded-2xl rounded-bl-sm px-3 py-2 text-[12.5px] max-w-[90%]">
                    Hi! I live nearby. I can reach Popular by 6:10 AM.
                  </div>
                  <div className="bg-brand text-white rounded-2xl rounded-br-sm px-3 py-2 text-[12.5px] max-w-[90%] ml-auto">
                    Perfect. I'll share my mother's details.
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-linec flex items-center justify-between">
                  <span className="text-[10.5px] text-ink/40 font-semibold uppercase tracking-wider">
                    Task completed
                  </span>
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-[10.5px] font-bold px-2.5 py-1 rounded-full">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    +1 Rung
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST ===================== */}
      <section className="container-page py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
              Trust & Safety
            </div>
            <h2 className="text-[30px] md:text-[40px] leading-tight font-bold text-ink mb-6">
              Built for real people, meeting in real life.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-ink/65 mb-8">
              Ladder connects people who may meet offline. So we take trust seriously — with transparent ratings, real reviews, task history, and an SOS button for emergencies. Personal details stay private until they need to be shared.
            </p>

            <ul className="space-y-4">
              {[
                'Two-way ratings and honest reviews',
                'Phone and address stay private until assignment',
                'SOS emergency button during active tasks',
                'Report and block tools for every user',
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

            <Link to="/safety" className="inline-flex items-center gap-2 rounded-xl bg-white text-ink border border-linec px-5 py-3 font-semibold text-[14px] hover:border-terra transition mt-8">
              Read safety guide
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-amber-50/60 to-orange-50/60 border border-linec p-8">
              <div className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-terra flex items-center justify-center text-white font-bold text-[16px]">R</div>
                  <div className="flex-1">
                    <div className="font-bold text-[14px] text-ink">Rafi Hossain</div>
                    <div className="text-[12px] text-ink/50">★ 4.9 · 23 tasks</div>
                  </div>
                  <div className="badge-amber text-[10.5px]">Verified</div>
                </div>
                <p className="text-[13.5px] text-ink/70 leading-relaxed italic">
                  "Arrived on time and completed the task exactly as requested."
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-terra flex items-center justify-center text-white font-bold text-[16px]">A</div>
                  <div className="flex-1">
                    <div className="font-bold text-[14px] text-ink">Anjan Saha</div>
                    <div className="text-[12px] text-ink/50">★ 5.0 · 11 tasks</div>
                  </div>
                  <div className="badge-amber text-[10.5px]">Verified</div>
                </div>
                <p className="text-[13.5px] text-ink/70 leading-relaxed italic">
                  "Held my serial for 3 hours, kept me updated the whole time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="container-page py-20 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 text-[120px] leading-none">🪜</div>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[46px] leading-tight font-extrabold mb-5">
              What's your story?
            </h2>
            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90 mb-9">
              Whether you need a hand or have a moment to spare — the next rung is yours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={APP_URL} className="inline-flex items-center gap-2 rounded-xl bg-white text-terra px-6 py-3.5 font-bold text-[15px] shadow-xl hover:bg-white/95 transition">
                Open Ladder →
              </a>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 text-white px-6 py-3.5 font-bold text-[15px] hover:bg-white/10 transition">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}