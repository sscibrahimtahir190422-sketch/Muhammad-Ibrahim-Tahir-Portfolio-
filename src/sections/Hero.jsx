import { useEffect, useRef } from 'react';

import {
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Github,
  Sparkles,
  Code2,
} from 'lucide-react';

import { profile } from '../data/portfolio';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !window.matchMedia('(max-width: 767px)').matches) return;
    let frame1 = 0;
    let frame2 = 0;
    const repaint = () => {
      hero.style.setProperty('opacity', '0.999');
      frame1 = requestAnimationFrame(() => {
        frame2 = requestAnimationFrame(() => {
          hero.style.removeProperty('opacity');
        });
      });
    };
    repaint();
    window.addEventListener('pageshow', repaint);
    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
      hero.style.removeProperty('opacity');
      window.removeEventListener('pageshow', repaint);
    };
  }, []);
  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-new relative isolate overflow-hidden bg-[#0d1215] text-ivory"
    >
      {/* Background grid */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 hidden opacity-30 lg:block"
        aria-hidden="true"
      />

      {/* Desktop background glow */}
      <div
        className="pointer-events-none absolute -right-32 top-0 hidden h-[600px] w-[600px] rounded-full bg-mint/10 blur-[110px] lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-12 pt-12 sm:px-6 md:px-12 md:pt-20 lg:pb-20 lg:pt-28">
        <div className="relative z-10">
          {/* Availability and location */}
          <div className="mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em] text-mint sm:text-[11px] sm:tracking-[.17em]">
              <span className="availability-dot h-2 w-2 shrink-0 rounded-full bg-mint" />
              Flutter developer · Mobile engineer
            </span>

            <span className="text-[10px] uppercase tracking-[.14em] text-white/75 sm:text-xs sm:tracking-[.2em]">
              Based in Pakistan · Working worldwide
            </span>
          </div>

          {/* Main heading */}
          <div className="relative">
            <p className="mb-4 font-display text-lg font-semibold text-white/75 sm:text-xl md:text-2xl">
              Hello, world. I'm
            </p>

            <h1 className="hero-name relative z-10 font-display font-bold uppercase leading-[.9] tracking-[-.075em] sm:leading-[.84] sm:tracking-[-.085em]">
              <span className="block">
                MUHAMMAD
              </span>

              <span className="block text-mint">
                IBRAHIM
              </span>

              <span className="block text-yellow">
                TAHIR
                <span className="text-pink">.</span>
              </span>
            </h1>

            {/* Desktop-only DigiKhata phone mockup */}
            <div
              className="hero-phone absolute right-[4%] top-[2%] hidden rotate-[11deg] lg:block"
              aria-label="DigiKhata application screenshot"
            >
              <div className="relative">
                <div className="phone-glow absolute -inset-10 rounded-full bg-mint/30 blur-[75px]" />

                <div className="relative h-[420px] w-[215px] overflow-hidden rounded-[2.5rem] border-[9px] border-[#30363a] bg-white shadow-[0_45px_100px_rgba(0,0,0,.65)] xl:h-[500px] xl:w-[250px]">
                  <img
                    src={`${import.meta.env.BASE_URL}projects/digikhata-dashboard-360.webp`}
                    width="360"
                    height="807"
                    alt="Real DigiKhata dashboard built with Flutter"
                    className="h-full w-full object-fill"
                    fetchPriority="high"
                  />
                </div>

                <div className="absolute -left-32 top-16 -rotate-[14deg] rounded-2xl border border-ink bg-yellow px-5 py-4 font-display text-lg font-bold text-ink shadow-2xl">
                  <Code2 className="mb-2" />
                  FLUTTER
                  <br />
                  ENGINEER
                </div>

                <div className="absolute -right-16 bottom-16 -rotate-[12deg] rounded-2xl border border-ink bg-pink px-5 py-3 font-display text-base font-bold text-ink shadow-2xl">
                  <Sparkles size={18} />
                  REAL APPS.
                  <br />
                  REAL IMPACT.
                </div>
              </div>
            </div>
          </div>

          {/* Description and buttons */}
          <div className="mt-9 flex flex-col gap-8 sm:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                I craft mobile experiences that look exceptional,
                solve real problems, with thoughtful UI and
                dependable backend integrations.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="pill-cta inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-4 text-sm font-bold text-ink transition hover:brightness-110 sm:px-7 sm:text-base"
                >
                  Explore my work
                  <ArrowUpRight size={19} />
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}Muhammad-Ibrahim-Tahir-Resume.pdf`}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-4 text-sm font-bold text-white transition hover:border-yellow hover:text-yellow sm:px-7 sm:text-base"
                >
                  <Download size={18} />
                  Resume
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 p-4 text-white transition hover:border-mint hover:text-mint"
                >
                  <Github size={19} />
                </a>
              </div>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-white/75 transition hover:text-mint"
            >
              Scroll to discover
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Technology marquee */}
      <div
        className="marquee-wrap relative overflow-hidden border-y border-white/15 bg-mint py-4 text-ink"
        aria-label="Technology stack"
      >
        <div className="marquee-track flex w-max gap-10 font-display text-sm font-bold uppercase tracking-[.16em]">
          {Array.from({ length: 4 }, (_, i) => (
            <span
              key={i}
              className="flex items-center gap-10"
            >
              FLUTTER <span>✳</span>
              DART <span>✳</span>
              SUPABASE <span>✳</span>
              GETX <span>✳</span>
              CLEAN ARCHITECTURE <span>✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
