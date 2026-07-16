---
repo: "Chenruishuo/posterly"
name: "posterly"
description: "Build academic conference posters as a single HTML/CSS file, rendered to print-ready PDF via headless Chromium. A coding-agent skill."
readmeQualityOk: true
url: "https://github.com/Chenruishuo/posterly"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 281
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T12:43:31Z"
lastCommitAt: "2026-07-15T14:33:07Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 23
maintainers: ["Chenruishuo", "Dominic789654"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fd07a54a37177e1546521712fe652d8a4ae84cb348879e062c2fbfcf92bcbf6/Chenruishuo/posterly"
---

<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/posterly-logo-dark.png">
  </picture>
</h1>

</p>

**This is a coding-agent skill, not a hosted service.** Clone, install, and either invoke `/posterly` from your agent or call the CLIs directly. There is no cloud, no signup, no telemetry.

> [!NOTE]
> **Built with Claude, works with Codex too.** posterly is developed primarily with Claude (Opus 4.7 / 4.8), but in testing Codex (GPT-5.5) drives it just as well — and any coding agent with skill support should be fine. Hit a snag? A ⭐ and an issue are always welcome!

A poster in `posterly` is **one HTML file** styled for an exact print canvas. The skill ships three neutral templates, four sanity-check CLIs, and a render pipeline that produces a PDF at exact ICML / NeurIPS / ICLR / CVPR dimensions. Inside your agent, `/posterly` walks you through venue lookup → template pick → content fill → render — see `SKILL.md` for the full workflow it follows.

---

## Showcase

Three real conference posters — built with `posterly` from **publicly-available papers** (the authors' own) and shipped here as worked examples. Every one passes `preflight`,…
