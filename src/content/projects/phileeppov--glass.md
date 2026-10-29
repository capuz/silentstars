---
repo: "phileeppov/glass"
name: "glass"
description: "Turns a logo into a glass app icon that responds to sound and touch. PNG or 1080p video. WebGL 1, one shader, no libraries."
readmeQualityOk: true
url: "https://github.com/phileeppov/glass"
homepage: "https://phileeppov.com/glass"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [72, 20]
topics: ["app-icon", "glass", "sdf", "shader", "webgl"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-24T18:54:23Z"
lastCommitAt: "2026-10-29T10:30:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["phileeppov"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6923ac9f51f16ad41c4df53e191f0d2367edb7983591ed5bd774a37b5de83d3/phileeppov/glass"
---

# Glass

Play your logo like a handpan. Each tap rings a note, and music moves the glass on the beat.

Try it at [phileeppov.com/glass](https://phileeppov.com/glass). Upload an SVG, PNG or JPG, paste from Figma, or type a word or an emoji, then pick one of five presets or roll a random look. Out comes an icon: a PNG up to 2048 px or a 1080p video, with sound if it's on.

The glass is a single fragment shader and the sound is Web Audio, with the lofi loop and the notes synthesized in the browser. Your logo stays on your device. I designed it and built it with Claude Code.

## Run it

No build step. Serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. On Windows the command is `python`. Opened straight from disk, the page shows no glass: most browsers block ES modules on `file://`.

This repo sends nothing anywhere. On phileeppov.com a small script counts events like `png` or `sound:mic`, never a logo or a file.

MIT for the code. The Onest font in `fonts/` is under the [SIL Open Font License](https://github.com/phileeppov/glass/blob/HEAD/fonts/OFL-Onest.txt).
