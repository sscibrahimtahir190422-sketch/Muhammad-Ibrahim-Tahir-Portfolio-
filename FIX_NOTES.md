# iPhone repaint experiment (not verified on device)

Restores charcoal Hero background and original portfolio layout; removes inspector; tests a two-frame repaint on mobile on initial mount and pageshow, based on the observation that opening the menu repaints the black tile. This is experimental and not a confirmed root-cause fix. No desktop style changes intended.

Run npm install and npm run build locally. Compare initial iPhone load without opening the menu. If still present, revert this experiment; remote Safari Web Inspector layers/compositing diagnostics are needed.
