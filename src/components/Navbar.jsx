
import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import {
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['FYP · Votonomy', '#votonomy'],
  ['Toolkit', '#toolkit'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101419] text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-10"
      >
        {/* Brand logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Muhammad Ibrahim Tahir — Home"
          className="group flex shrink-0 flex-col leading-none"
        >
          <span className="mb-1 font-display text-[10px] font-bold uppercase tracking-[.3em] text-mint sm:text-xs">
            MUHAMMAD
          </span>

          <span className="font-display text-base font-bold uppercase tracking-[-.04em] text-white group-hover:text-mint sm:text-xl">
            IBRAHIM TAHIR
            <span className="text-yellow">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-white/65 transition hover:text-mint"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop contact button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-bold text-ink transition hover:bg-yellow lg:inline-flex"
        >
          Let's talk
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-mint lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation drawer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={
              reduced
                ? false
                : { opacity: 0, height: 0 }
            }
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={
              reduced
                ? { opacity: 0, height: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{
              duration: reduced ? 0 : 0.25,
              ease: 'easeInOut',
            }}
            className="overflow-hidden border-t border-white/10 bg-[#101419] lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {links.map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="flex justify-between rounded-xl px-3 py-3 font-display text-lg font-bold transition hover:bg-white/5 hover:text-mint"
                >
                  {label}

                  <span className="text-sm text-white/40">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
