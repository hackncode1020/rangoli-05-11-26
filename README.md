# Diwali rangoli that draws itself (p5.js)

Day 10 of 100 by @hack.n.code: a symmetric rangoli that grows ring by ring
in Diwali colours. Dots come first, then the petals, then the diyas, and
the glowing HAPPY DIWALI text lands at the end.

## Run it

Open `index.html` in a browser. p5.js loads from a CDN, so no install is needed.

## Files

- `index.html`: loads p5.js and the sketch
- `sketch.js`: the whole animation (about 70 lines)

## How it works

- `setup()` lays out 9 rings of dots. Ring k has `8 * (k + 2)` dots, so every ring keeps 8-fold symmetry.
- `draw()` runs at 60 fps. Each dot grows in at its own start frame.
- `petals()` draws teardrop petals between neighbouring rings, one ring at a time.
- `diyas()` places 12 small lamps on the outer circle, with a flickering flame.
- `title()` fades in the glow text.

Tweak `COLS`, the ring count, or the frame offsets to make your own version.
