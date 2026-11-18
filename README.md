# Muhammad Ibrahim Tahir — Portfolio

Recruiter-focused personal portfolio built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide icons. Includes five project showcases (four Flutter applications and Votonomy final-year capstone), 11 authentic Votonomy screenshots, project galleries, professional experience, skills, education, contact links and a PDF resume.

## Start locally

```powershell
cd ibrahim-portfolio
npm.cmd install
npm.cmd run dev
```

Open the URL printed by Vite (usually http://localhost:5173). For production:

```powershell
npm.cmd run build
npm.cmd run preview
```

Deploy the `dist/` directory to a static host. Configure SPA fallback if your host requires it. The default asset base is `/`. For GitHub Pages subpath hosting, set `VITE_BASE_PATH=/your-repository-name/` before running `npm.cmd run build`.

## Recruiter review checklist

- Check homepage, About, Projects, Votonomy FYP, Experience, Toolkit, Education and Contact on desktop and mobile.
- Open all four Flutter screenshot galleries and the 11-image Votonomy gallery; try keyboard Escape and arrow keys.
- Test each GitHub and LinkedIn link and email action; download and inspect the resume.
- Verify job dates, project descriptions and skills against your latest CV before publishing.
- Do not publish private keys, tokens or credentials. No credentials are needed for this static portfolio.

## Source / claims

Votonomy screenshots are supplied by the portfolio owner. Security, blockchain and AI features are described as project implementations/design goals, not independent certification or measured performance claims.

## Files

- `src/sections/Sections.jsx` — case studies and content
- `src/sections/Hero.jsx` — opening experience
- `src/data/portfolio.js` — profile and Flutter projects
- `public/projects/` — authentic screenshots
- `public/Muhammad-Ibrahim-Tahir-Resume.pdf` — resume
