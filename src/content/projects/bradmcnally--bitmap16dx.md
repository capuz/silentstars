---
repo: "bradmcnally/bitmap16dx"
name: "bitmap16dx"
description: "A tiny pixel art sketchbook for the M5Stack Cardputer Zero/ADV."
readmeQualityOk: true
url: "https://github.com/bradmcnally/bitmap16dx"
language: "C++"
languages: ["C++"]
languagePcts: [77]
topics: ["cardputer", "pixel-art", "m5stack", "cardputer-adv", "cardputer-zero"]
stars: 38
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-31T20:32:32Z"
lastCommitAt: "2026-11-22T02:03:54Z"
lastReleaseAt: "2026-11-20T06:25:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 38
maintainers: ["bradmcnally"]
openGraphImageUrl: "https://opengraph.githubassets.com/74e8014ea80ef1d62305ccf7e2369c501c7104518e1fd1ed7aed7c3fc7259186/bradmcnally/bitmap16dx"
---

# BitMap16 DX

BitMap16 DX is a tiny pixel-art sketchbook for Cardputer ADV and Cardputer Zero,
channeling the vibe of 2000s handheld game consoles. Steam coming soon.

**[ADV](https://github.com/bradmcnally/bitmap16dx/blob/HEAD/platform_adv/README.md) · [Zero](https://github.com/bradmcnally/bitmap16dx/blob/HEAD/platform_zero/README.md) · [Steam — coming soon](https://github.com/bradmcnally/bitmap16dx/blob/HEAD/platform_steamdeck/README.md)**

## Features

- 8×8, 16×16, and 32×32 canvas modes
- Draw, Erase, Fill, Erase Fill, and Move tools
- Canvas zoom and pixel-accurate minimap (ADV/Zero)
- Undo and redo with 16 steps of session history; opening or creating a sketch clears history
- Save, open, duplicate, preview, and delete sketches
- Built-in 16, 8, and 4-color palettes
  - Palette swapping preserves indexed artwork when moving between smaller
    and larger palettes
  - Import Lospec `.hex` palettes containing any number of colors from 4 through 16
  - Zero and Steam Deck: browse a daily Lospec feed or import by name/URL
  - Color filters group palettes into 4, 5–8, and 9–16 colors
  - StampS3A LED displays currently selected color (ADV)
- Export PNG artwork at 128×128 or its…
