# Portfolio review and iPhone issue

Reviewed React entry, Navbar, Hero, all sections, Tailwind CSS, Vite config, package manifest, public assets, and HTML.

## Changes
- Removed overlapping temporary iOS diagnostic CSS overrides.
- Preserved the full navbar, sections, project data and visual design.
- Added opt-in iPhone overlay inspector. Open the deployed site with `?inspect=1` and take a screenshot of the mint debug panel while the black rectangle is visible. Normal visitors see no panel.

## Important
The black rectangle is not reproducibly diagnosed by source inspection alone. The screenshot suggests an obscuring paint/layer, but the offending element is not established. This package is a clean baseline with a targeted diagnostic, not a verified iOS fix.

## Install and test
`npm ci` then `npm run build`. Push changes to your GitHub main branch to deploy. Test iPhone Safari, including `?inspect=1`.
