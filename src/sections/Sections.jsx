import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Mail, Download, Linkedin, X, ChevronLeft, ChevronRight, BriefcaseBusiness, GraduationCap, MapPin, Smartphone, Layers3, Wrench, Images, ShieldCheck, Blocks, Bot, ChartNoAxesCombined, Vote, UsersRound, LockKeyhole, Sparkles, ArrowRight } from 'lucide-react';
import { profile, projects, skills } from '../data/portfolio';
export function About(){const reduced=useReducedMotion();return <section id="about" className="relative overflow-hidden bg-pink px-6 py-24 text-ink md:px-10 lg:py-32"><div aria-hidden="true" className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[55px] border-white/30"/><div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20"><motion.div initial={reduced?false:{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><p className="eyebrow">01 / Behind the code</p><h2 className="section-title">CURIOUS<br/>BY NATURE<span className="text-white">.</span><br/>BUILDER<br/>BY CHOICE<span className="text-white">.</span></h2></motion.div><motion.div initial={reduced?false:{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="flex flex-col justify-center"><p className="font-display text-2xl font-bold leading-snug md:text-3xl">I turn complex workflows into mobile experiences people can actually enjoy using.</p><p className="mt-6 text-lg leading-relaxed text-ink/70">I'm Muhammad Ibrahim Tahir, a Flutter developer based in Islamabad, Pakistan. I work across mobile UI, application architecture, and backend integrations — from secure healthcare workflows to everyday business tools.</p><p className="mt-4 leading-relaxed text-ink/70">My approach is simple: understand the problem, design with intention, and build software that lasts.</p><div className="mt-8 flex flex-wrap gap-3"><span className="chip">Flutter-first</span><span className="chip">Product-minded</span><span className="chip">Architecture-focused</span></div><a href="#experience" className="mt-10 inline-flex items-center gap-2 self-start border-b-2 border-ink pb-2 font-bold hover:gap-4">More about my journey <ArrowUpRight size={18}/></a></motion.div></div></section>}
const projectDetails = {DigiKhata:{challenge:'Shopkeepers need a clear picture of customer credit, repayments, and stock without juggling paper records.',build:'Designed Flutter screens around customer ledgers, transactions, inventory and reports, backed by shop-scoped Supabase data.'},'Shifa Care':{challenge:'Appointment booking and live queues can become confusing for patients and clinical staff.',build:'Built a mobile experience for doctor discovery, appointments and queue visibility using Flutter and backend-connected workflows.'},Bloggers:{challenge:'Reading and publishing posts should feel natural on a mobile device.',build:'Created Flutter interfaces for browsing, composing and reading articles.'},'COVID-19 Tracker':{challenge:'Country-level health statistics can be difficult to navigate quickly.',build:'Organized API-powered global and country data into searchable mobile dashboards.'}};
const themes = {
  emerald: { panel: 'bg-[#d8f6e9]', accent: 'text-[#116b53]', label: 'bg-[#116b53] text-white' },
  blue: { panel: 'bg-[#dcefff]', accent: 'text-[#1265a5]', label: 'bg-[#1265a5] text-white' },
  orange: { panel: 'bg-[#fff0da]', accent: 'text-[#b55b16]', label: 'bg-[#b55b16] text-white' },
  teal: { panel: 'bg-[#d9f2ef]', accent: 'text-[#166e6b]', label: 'bg-[#166e6b] text-white' },
};

// Serve compact previews in cards; full-resolution originals remain available in galleries.
function previewImage(src) {
  if (src.includes('/votonomy/nlp-assistant.webp')) return src;
  return src.replace(/\.webp$/, (src.includes('/votonomy/') ? '-720' : '-360') + '.webp');
}

function Phone({ src, alt, className = '', priority = false }) {
  return (
    <div className={`overflow-hidden rounded-[1.7rem] border-[6px] border-[#1c242b] bg-[#1c242b] shadow-[0_22px_50px_rgba(0,0,0,.24)] sm:rounded-[2rem] sm:border-[7px] ${className}`}>
      <img src={previewImage(src)} alt={alt} width="360" height="807" loading={priority ? 'eager' : 'lazy'} decoding="async" className="block h-full w-full object-contain bg-white" />
    </div>
  );
}

function ProjectVisual({ project, index, compact = false }) {
  const theme = themes[project.theme];
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${theme.panel} ${compact ? 'h-[330px] sm:h-[370px]' : 'h-[390px] sm:h-[480px] lg:h-[530px]'}`}>
      <span className={`absolute left-5 top-5 z-20 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide ${theme.label}`}>
        {String(index + 1).padStart(2, '0')} / MOBILE APP
      </span>
      <div aria-hidden="true" className="absolute -right-16 -top-16 h-60 w-60 rounded-full border-[35px] border-white/35" />
      <div aria-hidden="true" className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border-[45px] border-white/30" />
      <div className={`relative flex h-full w-full items-center justify-center ${compact ? 'gap-0 px-5 pt-14' : 'gap-0 px-7 pt-16'}`}>
        <Phone src={project.images[1]} alt={`${project.name} secondary application screen`} className={`relative z-0 shrink-0 -rotate-[11deg] ${compact ? 'h-[225px] w-[115px] translate-x-5 translate-y-4 sm:h-[255px] sm:w-[128px]' : 'h-[270px] w-[137px] translate-x-6 translate-y-5 sm:h-[340px] sm:w-[172px] lg:h-[380px] lg:w-[190px]'}`} />
        <Phone src={project.images[0]} alt={`${project.name} main application screen`} priority={index===0} className={`relative z-10 shrink-0 rotate-[5deg] ${compact ? 'h-[260px] w-[132px] -translate-x-2 sm:h-[305px] sm:w-[155px]' : 'h-[310px] w-[158px] -translate-x-2 sm:h-[405px] sm:w-[205px] lg:h-[450px] lg:w-[225px]'}`} />
      </div>
    </div>
  );
}

function ProjectCard({ project, index, compact = false, onOpen }) {
  const theme = themes[project.theme];
  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.2) }}
      className={`project-card-advanced group min-w-0 overflow-hidden rounded-[2rem] border-2 border-ink/10 bg-white shadow-[6px_6px_0_#101419] ${compact ? '' : 'lg:grid lg:grid-cols-[1.05fr_.95fr]'}`}
    >
      <ProjectVisual project={project} index={index} compact={compact} />
      <div className={`flex flex-col justify-center ${compact ? 'p-6 sm:p-8' : 'p-7 sm:p-10 lg:p-12'}`}>
        <p className={`mb-3 text-xs font-bold uppercase tracking-[.15em] ${theme.accent}`}>{project.type}</p>
        <h3 className={`font-display font-bold tracking-tight ${compact ? 'text-3xl' : 'text-4xl sm:text-5xl'}`}>{project.name}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-ink/65">{project.description}</p>
        <div className="mt-5 grid gap-3 border-l-2 border-ink/15 pl-4 text-sm leading-relaxed"><p><strong className="block text-xs uppercase tracking-widest text-ink/70">The challenge</strong>{projectDetails[project.name]?.challenge}</p><p><strong className="block text-xs uppercase tracking-widest text-ink/70">What I built</strong>{projectDetails[project.name]?.build}</p></div><div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => <span key={t} className="rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold">{t}</span>)}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#2c3d40] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
            <Github size={17} /> View source <ArrowUpRight size={16} />
          </a>
          <button type="button" onClick={()=>onOpen(project,0)} className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-3 text-sm font-bold transition hover:bg-mint"><Images size={16}/> Explore screens ({project.images.length})</button>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-3 border-t border-ink/10 pt-6">
          {project.images.slice(0, 3).map((src, i) => (
            <button type="button" key={src} onClick={() => onOpen(project, i)} aria-label={`View ${project.name} screenshot ${i + 1} in gallery`} className="flex h-28 items-center justify-center overflow-hidden rounded-xl bg-ink/5 p-2 transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:h-36">
              <img src={previewImage(src)} alt={`${project.name} screen ${i + 1}`} width="360" height="807" loading="lazy" decoding="async" className="h-full w-auto rounded-md object-contain" />
            </button>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Work() {
  const [viewer,setViewer]=useState(null);
  const lastTrigger=useRef(null);
  const reduced=useReducedMotion();
  const openViewer=(project,index)=>{lastTrigger.current=document.activeElement;setViewer({project,index});};
  const move=(step)=>setViewer(current=>current?{...current,index:(current.index+step+current.project.images.length)%current.project.images.length}:null);
  useEffect(()=>{if(!viewer){lastTrigger.current?.focus?.();return;}const previous=document.body.style.overflow;document.body.style.overflow='hidden';const handler=(event)=>{if(event.key==='Escape')setViewer(null);if(event.key==='ArrowRight')move(1);if(event.key==='ArrowLeft')move(-1)};window.addEventListener('keydown',handler);return()=>{window.removeEventListener('keydown',handler);document.body.style.overflow=previous;}},[viewer]);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  return (
    <section id="work" className="bg-ivory px-6 py-24 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">02 / Selected work</p>
        <h2 className="section-title mb-5">PROJECTS<span className="text-[#D65C8B]">.</span></h2>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-ink/75">Four Flutter applications, from everyday business tools to healthcare and content experiences.</p>
        <div className="grid gap-10">
          {featured.map((project, index) => <ProjectCard key={project.name} project={project} index={index} onOpen={openViewer} />)}
        </div>
        <div className="mb-8 mt-20 flex items-end justify-between gap-4">
          <div><p className="eyebrow">More experiments</p><h3 className="font-display text-3xl font-bold sm:text-5xl">MORE BUILDS<span className="text-[#D65C8B]">.</span></h3></div>
          <span className="hidden text-sm text-ink/70 sm:block">03 / 04</span>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {more.map((project, index) => <ProjectCard key={project.name} project={project} index={index + featured.length} compact onOpen={openViewer} />)}
        </div>
      </div>
      <AnimatePresence>{viewer&&<motion.div role="dialog" aria-modal="true" aria-label={`${viewer.project.name} screenshot gallery`} initial={reduced?false:{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080b0e]/95 p-4 text-white" onClick={()=>setViewer(null)}><div className="relative flex h-full max-h-[900px] w-full max-w-5xl flex-col items-center justify-center gap-4" onClick={e=>e.stopPropagation()}><div className="flex w-full items-center justify-between gap-4"><div><p className="font-display text-lg font-bold">{viewer.project.name}</p><p className="text-sm text-white/75">Screen {viewer.index+1} of {viewer.project.images.length}</p></div><button autoFocus aria-label="Close gallery" onClick={()=>setViewer(null)} className="rounded-full border border-white/30 p-3 hover:bg-white/10"><X/></button></div><img src={viewer.project.images[viewer.index]} alt={`${viewer.project.name} screenshot ${viewer.index+1}`} className="min-h-0 max-h-[75vh] max-w-full flex-1 rounded-2xl object-contain"/><div className="flex items-center gap-5"><button aria-label="Previous screenshot" onClick={()=>move(-1)} className="rounded-full border border-white/30 p-3 hover:bg-white/10"><ChevronLeft/></button><span className="text-sm text-white/70">{viewer.index+1} / {viewer.project.images.length}</span><button aria-label="Next screenshot" onClick={()=>move(1)} className="rounded-full border border-white/30 p-3 hover:bg-white/10"><ChevronRight/></button></div></div></motion.div>}</AnimatePresence>
    </section>
  );
}

export function Experience(){const reduced=useReducedMotion();return <section id="experience" className="bg-ink px-6 py-24 text-ivory md:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow text-mint">04 / The journey</p><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><h2 className="section-title">REAL WORK.<br/><span className="text-mint">REAL IMPACT.</span></h2><p className="mt-7 max-w-sm text-white/75">Engineering mobile experiences, collaborating with teams, and solving practical problems.</p></div><div className="space-y-4">{[{date:'JUL 2026 — PRESENT',role:'Flutter Developer',place:'Shifa International Hospital · Islamabad',desc:'Building Flutter-powered employee workflows and mobile interfaces with backend integrations, state management, and responsive components.'},{date:'NOV — DEC 2024',role:'Data Analyst',place:'Freelance · Remote',desc:'Data analysis work that strengthened my analytical and problem-solving perspective.'},{date:'NOV 2023 — MAR 2024',role:'Business Development & Lead Generation',place:'Freelance · Remote',desc:'Client engagement experience that shaped my communication and product-oriented thinking.'}].map((job,i)=><motion.article key={job.role} initial={reduced?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6 sm:p-8"><p className="mb-3 text-xs font-bold tracking-[.18em] text-mint">{job.date}</p><h3 className="font-display text-2xl font-bold">{job.role}</h3><p className="mt-2 text-sm font-semibold text-yellow">{job.place}</p><p className="mt-4 leading-relaxed text-white/75">{job.desc}</p></motion.article>)}</div></div></div></section>}
export function Toolkit(){const groups=[{title:'Mobile engineering',items:['Flutter','Dart','Responsive UI','State Management','GetX','Provider']},{title:'Architecture & backend',items:['MVVM','Repository Pattern','Supabase','PostgreSQL','REST APIs','SQL']},{title:'Developer tools',items:['Git','GitHub','JSON','Python','Flask','PDF Generation']}];return <section id="toolkit" className="bg-yellow px-6 py-24 text-ink md:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><p className="eyebrow">05 / My toolkit</p><h2 className="section-title mb-8">TOOLS OF<br/>THE TRADE<span className="text-white">.</span></h2><p className="mb-12 max-w-xl text-lg text-ink/70">A practical toolkit for taking an idea from interface to production-minded implementation.</p><div className="grid gap-5 lg:grid-cols-3">{groups.map((group,i)=><div key={group.title} className="skill-card-advanced rounded-[2rem] border-2 border-ink bg-ivory p-7 shadow-[6px_6px_0_#101419]"><p className="mb-6 text-xs font-bold tracking-[.2em] text-ink/70">0{i+1} / EXPERTISE</p><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-mint border border-ink/15">{i===0?<Smartphone size={28}/>:i===1?<Layers3 size={28}/>:<Wrench size={28}/>}</div><h3 className="mb-8 font-display text-2xl font-bold">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="rounded-full border border-ink/20 bg-white px-4 py-2 text-sm font-semibold">{item}</span>)}</div></div>)}</div></div></section>}

export function Votonomy(){
  const reduced=useReducedMotion();
  const [active,setActive]=useState(0);
  const [lightbox,setLightbox]=useState(false);
  const gallery=[
    {src:`${import.meta.env.BASE_URL}projects/votonomy/admin-dashboard.webp`,title:'Admin command center',caption:'Election overview and management metrics'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/blockchain-dashboard.webp`,title:'Blockchain integration',caption:'Blockchain-linked election records and activity'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/ai-fraud-detection.webp`,title:'AI fraud detection',caption:'Administrative fraud detection dashboard'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/sentiment-analytics.webp`,title:'Sentiment analytics',caption:'Election sentiment analysis dashboard'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/candidate-management.webp`,title:'Candidate management',caption:'Candidate administration interface'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/voter-management.webp`,title:'Voter management',caption:'Voter records and requests'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/cast-vote.webp`,title:'Vote casting',caption:'Voter-facing ballot interface'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/voter-registration.webp`,title:'Voter registration',caption:'Voter enrollment flow'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/nlp-assistant.webp`,title:'NLP assistant',caption:'In-app conversational support'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/homepage.webp`,title:'Votonomy homepage',caption:'Public-facing landing page'},
    {src:`${import.meta.env.BASE_URL}projects/votonomy/authentication.webp`,title:'Voter authentication',caption:'Secure sign-in screen'},
  ];
  const move=(step)=>setActive(i=>(i+step+gallery.length)%gallery.length);
  useEffect(()=>{if(!lightbox)return;const onKey=e=>{if(e.key==='Escape')setLightbox(false);if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)};window.addEventListener('keydown',onKey);const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',onKey);document.body.style.overflow=previous}},[lightbox]);
  const features=[
    {icon:ShieldCheck,title:'Voter authentication',description:'Identity and access workflows for election participation.'},
    {icon:Blocks,title:'Blockchain integration',description:'Blockchain-linked election activity and record views.'},
    {icon:ChartNoAxesCombined,title:'Election analytics',description:'Administrative dashboards and sentiment insights.'},
    {icon:UsersRound,title:'Election administration',description:'Candidate, voter, and complaint management interfaces.'},
    {icon:Bot,title:'NLP assistant',description:'Conversational guidance within the voting experience.'},
    {icon:Vote,title:'Ballot experience',description:'Voter registration, ballot selection and vote casting.'},
  ];
  return <section id="votonomy" className="relative overflow-hidden bg-[#111a23] px-6 py-24 text-white md:px-10 lg:py-32">
    <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[100px]"/>
    <div className="relative mx-auto max-w-7xl">
      <div className="mb-8 flex flex-wrap items-center gap-3"><span className="rounded-full border border-mint/40 bg-mint/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-mint">03 / Featured · Final-Year Project</span><span className="text-xs font-bold uppercase tracking-[.17em] text-white/75">BS Computer Science · 2022–2026</span></div>
      <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
        <motion.div initial={reduced?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[.2em] text-mint"><Sparkles size={18}/> The capstone · 2026</p>
          <h2 className="font-display text-[clamp(3.8rem,8vw,8rem)] font-bold uppercase leading-[.9] tracking-[-.085em]">VOTO<span className="text-mint">NOMY</span><span className="text-yellow">.</span></h2>
          <p className="mt-7 font-display text-2xl font-bold leading-snug sm:text-3xl">Where AI meets blockchain-powered voting.</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">An AI and blockchain-based e-voting platform designed to make elections more transparent, accessible, and easier to manage. The project brings together voter authentication, Solana blockchain integration, AI-assisted anomaly detection, election analytics, candidate management, and an NLP chatbot in one web application.</p>
          <div className="mt-6 flex flex-wrap gap-2">{['Solana','Python / Flask','AI anomaly detection','NLP chatbot','E-voting'].map(tag=><span key={tag} className="rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/85">{tag}</span>)}</div>
          <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/15 pt-6"><div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-mint">My engineering focus</p><p className="mt-2 text-sm leading-relaxed text-white/75">Backend APIs, blockchain integration and AI-driven monitoring</p></div><div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-mint">Project scope</p><p className="mt-2 text-sm leading-relaxed text-white/75">Admin workflows, voter experience, analytics and NLP assistance</p></div></div>
          <div className="mt-9 flex flex-wrap gap-3"><a href="https://github.com/sscibrahimtahir190422-sketch/Votonomy-Ai-and-Blockchain-Based-Voting-System-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3.5 font-bold text-ink transition hover:-translate-y-1 hover:bg-yellow"><Github size={18}/> Explore source <ArrowUpRight size={18}/></a><a href="#votonomy-gallery" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-bold text-white transition hover:border-mint hover:text-mint"><Images size={18}/> View real screens</a></div>
        </motion.div>
        <motion.div initial={reduced?false:{opacity:0,y:30,scale:.97}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true}} transition={{duration:.65}} className="relative">
          <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-mint/15"/>
          <button type="button" onClick={()=>{setActive(0);setLightbox(true)}} className="group relative block w-full overflow-hidden rounded-[1.5rem] border border-white/25 bg-white text-left shadow-[0_30px_85px_rgba(0,0,0,.45)]" aria-label="Open Votonomy admin dashboard screenshot">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-[#eaf0ed] px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[#ff7474]"/><span className="h-2.5 w-2.5 rounded-full bg-[#ffd46c]"/><span className="h-2.5 w-2.5 rounded-full bg-[#61c68a]"/><span className="ml-3 truncate text-xs font-bold text-slate-600">Votonomy · Admin dashboard</span></div>
            <img src={`${import.meta.env.BASE_URL}projects/votonomy/admin-dashboard-720.webp`} width="720" height="342" alt="Actual Votonomy admin dashboard screenshot" loading="lazy" className="aspect-[16/9] w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"/>
            <div className="absolute bottom-4 right-4 rounded-full bg-ink/90 px-4 py-2 text-xs font-bold text-white backdrop-blur">View full screen ↗</div>
          </button>
          <div className="absolute -bottom-6 left-4 rounded-xl border border-[#111a23] bg-yellow px-5 py-3 font-display text-sm font-bold text-ink shadow-xl sm:left-[-18px]">REAL FYP SCREENSHOTS ↗</div>
        </motion.div>
      </div>
      <div id="votonomy-gallery" className="mt-28 scroll-mt-28 border-t border-white/15 pt-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow text-mint">Product walkthrough · Actual application</p><h3 className="font-display text-4xl font-bold uppercase tracking-[-.055em] sm:text-6xl">INSIDE <span className="text-mint">VOTONOMY.</span></h3></div><p className="max-w-sm text-sm leading-relaxed text-white/75">Real screens from the final-year project, including the administrator and voter experiences. Select any screen to explore the system.</p></div>
        <div className="grid gap-5 lg:grid-cols-[1.65fr_.8fr]">
          <button type="button" onClick={()=>setLightbox(true)} className="group overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#24342c] text-left transition hover:border-mint/60" aria-label={`Expand ${gallery[active].title}`}>
            <img src={previewImage(gallery[active].src)} alt={`Actual Votonomy screen: ${gallery[active].title}`} width="720" height="342" decoding="async" loading="lazy" className="aspect-[16/9] w-full object-contain transition duration-500 group-hover:scale-[1.01]"/>
            <div className="flex items-center justify-between gap-3 border-t border-white/15 bg-[#1d2924] px-5 py-4"><div><p className="font-display text-lg font-bold">{gallery[active].title}</p><p className="mt-1 text-xs text-white/75">{gallery[active].caption}</p></div><Images size={20} className="text-mint"/></div>
          </button>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">{gallery.map((item,i)=><button key={item.src} type="button" onClick={()=>setActive(i)} aria-pressed={active===i} className={`group overflow-hidden rounded-xl border text-left transition ${active===i?'border-mint bg-mint/10 ring-2 ring-mint/30':'border-white/15 bg-white/5 hover:border-mint/50'}`}><img loading="lazy" decoding="async" width="720" height="342" src={previewImage(item.src)} alt="" className="aspect-[16/9] w-full object-cover object-top"/><span className="block truncate px-3 py-2 text-xs font-semibold text-white/90">{item.title}</span></button>)}</div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4"><p className="text-xs font-semibold uppercase tracking-widest text-white/75">{String(active+1).padStart(2,'0')} / {String(gallery.length).padStart(2,'0')} · Screenshots from the actual FYP</p><div className="flex gap-2"><button type="button" onClick={()=>move(-1)} aria-label="Previous screenshot" className="rounded-full border border-white/30 p-3 hover:border-mint hover:text-mint"><ChevronLeft/></button><button type="button" onClick={()=>move(1)} aria-label="Next screenshot" className="rounded-full border border-white/30 p-3 hover:border-mint hover:text-mint"><ChevronRight/></button><button type="button" onClick={()=>setLightbox(true)} className="rounded-full bg-mint px-5 py-3 text-sm font-bold text-ink hover:bg-yellow">Full gallery ↗</button></div></div>
      </div>
      <div className="mt-24 border-t border-white/15 pt-12"><p className="eyebrow text-mint">What we built</p><h3 className="mb-9 font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">MORE THAN A <span className="text-yellow">BALLOT.</span></h3><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({icon:Icon,title,description},i)=><motion.article key={title} initial={reduced?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.045}} className="rounded-2xl border border-white/15 bg-white/[.05] p-6 transition hover:-translate-y-1 hover:border-mint/50"><Icon className="mb-6 text-mint" size={28}/><h4 className="font-display text-xl font-bold">{title}</h4><p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p></motion.article>)}</div></div>
      <p className="mt-8 text-xs leading-relaxed text-white/65">Votonomy is presented as an academic final-year project. Security and tamper-resistance are design objectives, not claims of independent certification.</p>
    </div>
    <AnimatePresence>{lightbox&&<motion.div role="dialog" aria-modal="true" aria-label="Votonomy screenshot viewer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080d11]/95 p-4 backdrop-blur-xl" onClick={()=>setLightbox(false)}><div className="flex w-full max-w-6xl items-center justify-between gap-3 pb-4"><div><p className="font-display text-lg font-bold sm:text-2xl">{gallery[active].title}</p><p className="text-sm text-white/75">{active+1} of {gallery.length} · Real Votonomy application screenshot</p></div><button type="button" onClick={()=>setLightbox(false)} aria-label="Close screenshot viewer" className="rounded-full border border-white/30 p-3 hover:border-mint"><X/></button></div><img src={gallery[active].src} alt={`Full screenshot: ${gallery[active].title}`} className="max-h-[72vh] w-full max-w-6xl rounded-lg object-contain" onClick={e=>e.stopPropagation()}/><div className="mt-5 flex gap-3"><button type="button" onClick={e=>{e.stopPropagation();move(-1)}} aria-label="Previous screenshot" className="rounded-full border border-white/30 p-3 hover:border-mint"><ChevronLeft/></button><button type="button" onClick={e=>{e.stopPropagation();move(1)}} aria-label="Next screenshot" className="rounded-full border border-white/30 p-3 hover:border-mint"><ChevronRight/></button></div></motion.div>}</AnimatePresence>
  </section>;
}

export function Education(){return <section id="education" className="bg-ivory px-6 py-24 text-ink md:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div><p className="eyebrow">06 / Foundation</p><h2 className="section-title">ALWAYS<br/>LEARNING<span className="text-[#D65C8B]">.</span></h2><p className="mt-7 max-w-lg text-lg text-ink/65">Curiosity fuels the work. Computer science gave me the foundation; building real applications keeps me learning.</p></div><div className="rounded-[2rem] border-2 border-ink bg-pink p-8 shadow-[8px_8px_0_#101419] sm:p-12"><GraduationCap size={46} strokeWidth={1.5}/><p className="mt-10 text-xs font-bold uppercase tracking-[.2em]">2022 — 2026</p><h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Bachelor of Science<br/>in Computer Science</h3><p className="mt-5 text-lg font-semibold">The University of Haripur</p><p className="mt-1 text-ink/65">Pakistan</p><div className="mt-8 border-t border-ink/20 pt-6"><p className="text-xs font-bold uppercase tracking-widest">Final-year project</p><h4 className="mt-2 font-display text-xl font-bold">Votonomy</h4><p className="mt-1 text-sm leading-relaxed text-ink/70">An AI and blockchain-based e-voting platform with voter authentication, live analytics, candidate management and an NLP chatbot.</p></div></div></div></section>}
export function Contact(){return <footer id="contact" className="relative overflow-hidden bg-ink px-6 py-24 text-ivory md:px-10 lg:py-32"><div aria-hidden="true" className="absolute -right-36 bottom-0 h-96 w-96 rounded-full bg-mint/10 blur-3xl"/><div className="relative mx-auto max-w-7xl"><p className="eyebrow text-mint">07 / Let's connect</p><h2 className="section-title max-w-5xl">HAVE AN IDEA?<br/><span className="text-mint">LET'S MAKE</span><br/><span className="text-yellow">IT REAL.</span></h2><p className="mt-8 max-w-xl text-lg text-white/65">Open to meaningful Flutter opportunities, collaborations, and conversations about building better mobile products.</p><div className="mt-10 flex flex-wrap gap-3"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3.5 font-bold text-ink transition hover:bg-yellow"><Mail size={18}/>Email me</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-bold hover:border-mint"><Linkedin size={18}/>LinkedIn</a><a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-bold hover:border-mint"><Github size={18}/>GitHub</a><a href={`${import.meta.env.BASE_URL}Muhammad-Ibrahim-Tahir-Resume.pdf`} download className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-bold hover:border-mint"><Download size={18}/>Resume</a></div><div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-7 text-sm text-white/70"><span>© {new Date().getFullYear()} {profile.name}</span><span className="flex items-center gap-2"><MapPin size={15}/> Islamabad, Pakistan</span><a href="#home" className="hover:text-mint">Back to top ↑</a></div></div></footer>}
