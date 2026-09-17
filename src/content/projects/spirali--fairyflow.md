---
repo: "spirali/fairyflow"
name: "fairyflow"
description: "Python-driven tool for creating animated slides and general-purpose animations"
readmeQualityOk: true
url: "https://github.com/spirali/fairyflow"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [50, 29]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-21T18:41:53Z"
lastCommitAt: "2026-09-17T08:51:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 40
maintainers: ["spirali"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e6f4b5adefe095ad7884e81ea6a958664b06d40fd9d6947f7f41a632b2333d2/spirali/fairyflow"
---

# FairyFlow — animated slides & animations in Python

</p>

</p>

---

**FairyFlow** is a Python-driven tool for creating animated slides and general-purpose animations. You write plain Python, and FairyFlow evaluates it live in an interactive environment that keeps your code, scene tree, and rendered result in sync.

</p>

## Key features

- **Python-first authoring** — animations are plain `.py` scripts; no DSL to learn
- **Live interactive environment** — edit code, press Ctrl+Enter, see the result instantly
- **Easy scene exploration** — code editor connects code, the scene tree, and elements in rendered image
- **Vector scene graph** — scenes are stored as vector graphics and rasterized at the last moment, so any output resolution is lossless
- **Presentation cues** — `cue()` pauses the player for click-to-advance presentations
- **Multiple export formats** — standalone `.ffpkg` player package, MP4 video, and multi-page PDF
- **Performant backend** — Backend is implemented in Rust

## Documentation

**<https://spirali.github.io/fairyflow/>**

## Quick start

```bash
pip install fairyflow

fairyflow init my_project
fairyflow open my_project
```

`fairyflow open` starts a local…
