import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-linec bg-white mt-24">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-[14px] text-ink/60 leading-relaxed max-w-sm">
              Hyperlocal micro-task marketplace in Bangladesh. Post small tasks, get help from nearby people, or earn from your spare time.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[13px] text-ink/50">
              <span>Made in Bangladesh 🇧🇩</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-ink/40 mb-3">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/how-it-works" className="text-[14px] text-ink/70 hover:text-terra">How It Works</Link></li>
              <li><Link to="/for-hirers" className="text-[14px] text-ink/70 hover:text-terra">For Hirers</Link></li>
              <li><Link to="/for-workers" className="text-[14px] text-ink/70 hover:text-terra">For Workers</Link></li>
              <li><Link to="/safety" className="text-[14px] text-ink/70 hover:text-terra">Safety</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-ink/40 mb-3">
              Company
            </h4>
            <ul className="space-y-2.5">
          <li><Link to="/about" className="text-[14px] text-ink/70 hover:text-terra">About</Link></li>
              <li><Link to="/faq" className="text-[14px] text-ink/70 hover:text-terra">FAQ</Link></li>
              <li><Link to="/contact" className="text-[14px] text-ink/70 hover:text-terra">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-linec flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-ink/50">
            © {new Date().getFullYear()} Ladder. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/terms" className="text-[12.5px] text-ink/50 hover:text-terra">Terms</Link>
            <Link to="/privacy" className="text-[12.5px] text-ink/50 hover:text-terra">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}