---
repo: "malamalca/BIMrender"
name: "BIMrender"
description: "AI Rendering For Archicad"
readmeQualityOk: true
url: "https://github.com/malamalca/BIMrender"
language: "C++"
languages: ["C++", "HTML"]
languagePcts: [64, 27]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T14:22:09Z"
lastCommitAt: "2026-07-05T06:31:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 18
maintainers: ["malamalca"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf549d2f6e26dedb61c7fd4fb53796cdfe3cc9a472ca0ddafb0ee47e1f44fd13/malamalca/BIMrender"
---

# BIMrender

AI rendering add-on for Archicad. Captures the current 3D view and edits it with
an image model, with optional region (marquee) edits.

Backends:
- **Google Gemini** (`generateContent`) — multi-image; supports reference
  "attachment" images; soft region marker.
- **Flux** (Black Forest Labs) — Kontext for whole-image edits, **Fill** endpoint
  for precise masked region edits.
- **Local** — self-hosted SD WebUI (AUTOMATIC1111 / Forge) `img2img` / inpaint.

The provider, keys and model are configured from the palette's ⚙ settings.

## Build (Windows)

```
build.bat
```
or via CMake presets (`ac29-INT`, …). The add-on name is taken from the folder
name, so the output is `BIMrender.apx`.

## Docs

See [Docs/NanoBanana-Upload-Processing.md](https://github.com/malamalca/BIMrender/blob/HEAD/Docs/NanoBanana-Upload-Processing.md)
for how the pipeline works, [Docs/Local-A1111-Setup.md](https://github.com/malamalca/BIMrender/blob/HEAD/Docs/Local-A1111-Setup.md)
for the local server, and [Docs/ideas.md](https://github.com/malamalca/BIMrender/blob/HEAD/Docs/ideas.md) for the backlog.
