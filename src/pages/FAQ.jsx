import { useState } from 'react'
import { whatsappURL, emailURL } from '../lib/config'

const FAQS = [
  {
    category: 'General',
    items: [
      { q: 'What is Ladder?', a: 'Ladder is a hyperlocal micro-task marketplace in Bangladesh. It connects people who need small everyday tasks done with nearby people willing to do them for payment.' },
      { q: 'Is Ladder free to use?', a: 'Yes. Signing up and posting tasks is free during our MVP. Payment happens directly between hirers and workers via cash or bKash.' },
      { q: 'Which areas do you cover?', a: 'We are live in Dhaka and expanding across Bangladesh. Tasks are matched by proximity — you will only see tasks within your chosen radius.' },
      { q: 'What kind of tasks can I post?', a: 'Small, everyday, real tasks — holding a queue, picking up medicine, tutoring, carrying items, and other misc tasks. Not freelancing work or long-term jobs.' },
      { q: 'How is Ladder different from Fiverr or Upwork?', a: 'Ladder is not freelancing. It is for small, local, in-person tasks between neighbors. No long-term contracts, no portfolios — just quick real-world help.' },
    ],
  },
  {
    category: 'For Hirers',
    items: [
      { q: 'How much does it cost to post a task?', a: 'Posting is free. You set the payment amount and pay the worker directly when the task is done.' },
      { q: 'How do I choose a worker?', a: 'Workers apply with a short message. You see their profile, rating, and completed task count. You pick who you trust.' },
      { q: 'Can I cancel a task?', a: 'Yes if no worker is assigned. Once a worker is assigned, cancelling lowers your reputation score and compensates the worker.' },
      { q: 'When is my phone number shared?', a: 'Your phone number and address stay private until you assign a worker. Only the assigned worker sees them.' },
      { q: 'Can I post tasks for someone else?', a: 'Yes. As long as the task takes place at a real location and does not violate our guidelines, you can post on behalf of a family member or friend.' },
    ],
  },
  {
    category: 'For Workers',
    items: [
      { q: 'How much can I earn?', a: 'Task payments range from ৳100 for quick errands to ৳800+ for tutoring. You choose which tasks to apply for.' },
      { q: 'When do I get paid?', a: 'Payment happens directly between you and the hirer after the task is completed — cash or bKash, as agreed upfront.' },
      { q: 'Do I need experience?', a: 'No. Ladder is for anyone with spare time. Your reputation builds with each completed task.' },
      { q: 'How do I get more tasks?', a: 'Complete tasks honestly, keep your rating high, and respond quickly to new opportunities in your area.' },
      { q: 'Can I decline a task after applying?', a: 'Yes. Applying is not a commitment. Only after the hirer assigns you does the task become your responsibility.' },
    ],
  },
  {
    category: 'Trust & Safety',
    items: [
      { q: 'How do you keep users safe?', a: 'We use ratings, reviews, privacy controls, an SOS button, and a report/block system. Report any concern and our team acts on it.' },
      { q: 'What if something goes wrong during a task?', a: 'Use the SOS button in-app or contact our team. We take every report seriously.' },
      { q: 'Can I block someone?', a: 'Yes. You can block any user to prevent future interactions.' },
      { q: 'What happens if a task is not completed?', a: 'Contact our team. We investigate every case and take action against users who repeatedly fail to complete assigned tasks.' },
    ],
  },
  {
    category: 'Account & Payment',
    items: [
      { q: 'How do I delete my account?', a: 'Go to Profile → Settings → Delete Account. All your data is permanently removed.' },
      { q: 'Does Ladder hold my money?', a: 'No. During our MVP, all payments happen directly between hirer and worker. We do not process or hold payments.' },
      { q: 'Is there a platform fee?', a: 'Not during our MVP. You only pay the agreed task amount directly to the worker.' },
      { q: 'Can I change my phone number?', a: 'Yes. Go to Profile → Edit Profile and update your details.' },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-linec bg-white overflow-hidden transition hover:border-terra/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-center gap-4 hover:bg-gray-50/50 transition"
      >
        <span className="flex-1 font-bold text-[15.5px] text-ink">{q}</span>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="#CC6B4A" strokeWidth="2.5" strokeLinecap="round"
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1 animate-fade-in">
          <p className="text-[14.5px] text-ink/65 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50/60 via-cream to-cream" />
        <div className="absolute top-20 -right-20 w-[420px] h-[420px] rounded-full bg-brand/10 blur-3xl -z-10" />

        <div className="container-page pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="max-w-3xl">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-terra mb-4">
              FAQ
            </div>
            <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold tracking-tight text-ink mb-6">
              Questions? We've got answers.
            </h1>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink/70 max-w-2xl">
              Everything you need to know about Ladder — for hirers, workers, and anyone curious.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="bg-white border-y border-linec">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-12">
            {FAQS.map((section, si) => (
              <div key={si}>
                <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-5 flex items-center gap-3">
                  <span className="w-1 h-6 bg-gradient-to-b from-brand to-terra rounded-full" />
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <FAQItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="container-page py-20 md:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-terra p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-6 right-8 text-[100px] leading-none">💬</div>
          </div>

          <div className="relative max-w-xl mx-auto">
            <h2 className="text-[28px] md:text-[38px] leading-tight font-extrabold mb-4">
              Still have questions?
            </h2>
            <p className="text-[16.5px] leading-relaxed opacity-90 mb-8">
              Reach out. We usually respond within a day.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {/* WhatsApp */}
              <a
                href={whatsappURL("Hi Ladder team, I have a question:")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-terra hover:bg-white/90 !text-[15px] !py-3 !px-6 shadow-xl"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp us
              </a>

              {/* Email */}
              <a
                href={emailURL('Ladder Question', 'Hi Ladder team,')}
                className="btn border-2 border-white/40 text-white hover:bg-white/10 !text-[15px] !py-3 !px-6"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Email us
              </a>
            </div>

            <p className="text-[13px] opacity-75 mt-6">
              Average response time: under 24 hours
            </p>
          </div>
        </div>
      </section>
    </>
  )
}