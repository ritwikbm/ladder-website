import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { APP_URL } from '../lib/config'

export default function About() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/80 via-cream to-cream" />
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] rounded-full bg-brand/10 blur-3xl -z-10" />

        <div className="container-page pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            <div>
              <div className="text-[56px] md:text-[84px] leading-none font-extrabold tracking-tight text-terra mb-2">
                ladder.
              </div>

              <h1 className="text-[52px] md:text-[80px] leading-[1.02] font-extrabold tracking-tight mb-6">
                <span className="bg-gradient-to-br from-brand to-terra bg-clip-text text-transparent">
                  Just Ladder It.
                </span>
              </h1>

              <p className="text-[17px] md:text-[20px] leading-relaxed text-ink/70 max-w-2xl">
                Ladder is a hyperlocal micro-task marketplace built in Bangladesh. We connect people who need small everyday tasks done with nearby people willing to help — safely, fairly, on your terms.
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/ladderbg.jpg"
                  alt="A hand reaching up a ladder"
                  className="w-full h-auto"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                  }}
                />
              </div>

              <div className="mt-2 bg-white rounded-2xl border border-linec px-4 py-2.5 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-ink uppercase tracking-wide">
                    One rung at a time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-24">
                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
                  Our Mission
                </div>
                <div className="text-[80px] md:text-[100px] leading-none font-serif text-brand/30">
                  01
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-[26px] md:text-[34px] leading-tight font-bold text-ink mb-6">
                To make it effortless to find trusted help close to where it's needed — and to turn idle time into safe, reliable income, right where you live.
              </h2>
              <p className="text-[16.5px] leading-relaxed text-ink/65 mb-6">
                We believe small tasks deserve the same care as big ones. A hospital serial held, a medicine picked up, a parcel moved — these aren't grand problems, but they're real, they're daily, and they matter.
              </p>
              <p className="text-[16.5px] leading-relaxed text-ink/65">
                Ladder exists so that no one has to face these small tasks alone, and so that anyone with spare time can turn it into honest income — locally, safely, and on their own schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VISION ===================== */}
      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-8 order-2 md:order-1">
            <h2 className="text-[26px] md:text-[34px] leading-tight font-bold text-ink mb-6">
              Ensuring no task goes unhandled, and turning every spare moment into a rung you can climb.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-ink/65 mb-6">
              We imagine a Bangladesh where asking for help nearby is as easy as asking a neighbor — where trust is built through real interactions, and where every small task completed lifts someone one step higher.
            </p>
            <p className="text-[16.5px] leading-relaxed text-ink/65">
              That's the Ladder. One rung at a time, one task at a time, one neighborhood at a time.
            </p>
          </div>

          <div className="md:col-span-4 order-1 md:order-2">
            <div className="md:sticky md:top-24 md:text-right">
              <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
                Our Vision
              </div>
              <div className="text-[80px] md:text-[100px] leading-none font-serif text-brand/30">
                02
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
              What we stand for
            </div>
            <h2 className="text-[32px] md:text-[42px] leading-tight font-bold text-ink">
              Four values. One Ladder.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'map-pin', title: 'Hyperlocal by design', desc: 'We connect people in the same neighborhood — not across cities, not across borders. Real, local, nearby.' },
              { icon: 'handshake', title: 'Trust before scale', desc: 'We choose quality over quantity. Every task has a real person behind it — and every person deserves trust.' },
              { icon: 'lock', title: 'Privacy first', desc: 'Phone numbers and addresses stay private until the moment they need to be shared. Never before.' },
              { icon: 'ladder', title: 'Progress you can feel', desc: 'Every completed task = +1 rung. Small steps, real momentum, a reputation you actually build.' },
            ].map((value, i) => (
              <div key={i} className="rounded-2xl border border-linec bg-cream p-7 transition-all duration-300 hover:border-terra/40 hover:shadow-lg hover:shadow-black/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-4">
                  <Icon name={value.icon} className="text-terra" />
                </div>
                <h3 className="text-[18px] font-bold text-ink mb-2">{value.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ink/65">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STORY (single paragraph) ===================== */}
      <section className="container-page py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-3">
              Why we built Ladder
            </div>
            <h2 className="text-[30px] md:text-[40px] leading-tight font-bold text-ink mb-6">
              A simple idea, born from a real need.
            </h2>
            <p className="text-[16.5px] leading-relaxed text-ink/65 mb-8">
              Ladder started with a simple question: why is it so hard to find someone you can trust for the small things? And why is it so hard to find honest work that fits into the time you actually have? All around Bangladesh, people need small things done. And all around us, people have time, ability, and a little room to do them. Ladder brings those two sides together.
            </p>
          </div>

          <div>
            <p className="text-[16.5px] leading-relaxed text-ink/65 mb-6">
              Because here, every task means progress. You progress — progress towards something. Complete a task, and you climb one rung. And when you hire someone, you are not just getting something done — you help them progress. Progress towards something.
            </p>
            <p className="text-[16.5px] leading-relaxed text-ink/65 mb-6">
              One small task. One honest opportunity. One rung at a time. Because progress does not always happen in giant leaps. Sometimes, it happens when one person helps another move forward.
            </p>
            <p className="text-[17px] md:text-[19px] leading-relaxed font-bold text-ink">
              That is Ladder. <span className="bg-gradient-to-br from-brand to-terra bg-clip-text text-transparent">Just Ladder It.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="container-page py-20 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 text-[120px] leading-none">🪜</div>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[46px] leading-tight font-extrabold mb-5">
              Join the climb.
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