# Phase 2: Performance and accessibility updates

This project was optimized from the supplied source archive.

- Preserved the working iPhone Safari navbar `z-0` stacking fix and all hero/mobile CSS rules.
- Added optimized WebP preview assets (`-360.webp` for mobile phone mockups, `-720.webp` for Votonomy previews). Full-resolution images remain available in both galleries.
- Set intrinsic dimensions for phone screenshot previews to reduce layout uncertainty.
- Improved low-contrast text utility classes in Hero, Navbar, and Sections.
- Preserved existing SEO, Google verification, sitemap, and Open Graph image.
- Did not modify Framer Motion behavior or restructure app navigation.

## Deploy

```powershell
npm.cmd install
npm.cmd run build
git add .
git commit -m "Optimize image previews and accessibility"
git push origin main
```

## Verify

Test the mobile menu and scrolling on a real iPhone Safari after deployment, then re-run PageSpeed Insights. Lighthouse scores vary between runs and are not guaranteed.
