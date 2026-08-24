---
repo: "theatrus/psf-guard"
name: "psf-guard"
description: "Astrophotography asset management and automation"
readmeQualityOk: true
url: "https://github.com/theatrus/psf-guard"
homepage: "https://psf-guard.com/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [64, 31]
stars: 101
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2025-08-27T03:34:33Z"
lastCommitAt: "2026-08-24T04:22:07Z"
lastReleaseAt: "2026-07-19T09:31:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 50
maintainers: ["theatrus", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb9d2f9ab2a288aba1ddb21bfe1d8f755925067ae230dc875fbe7f24410e49e7/theatrus/psf-guard"
---

# 🛡️ PSF Guard

**An astrophotography image catalog, grader, and quality workbench.**

Create a catalog from folders of FITS files, or open an existing
[N.I.N.A.](https://nighttime-imaging.eu/) Target Scheduler database. PSF Guard
groups frames by target, session, and filter; lets you inspect and grade them;
finds quality problems; builds stack previews; and exports clean data for
processing. Your image files stay where they are.

> **Like Lightroom Classic, but for astrophotography data:** PSF Guard catalogs
> files in place instead of moving them into a managed library. It reads FITS
> metadata and stores its image map, plans, and grades in a catalog based on the
> Target Scheduler database structure. Target Scheduler integration is
> optional.

**[⬇️ Download](https://github.com/theatrus/psf-guard/releases/latest)**
· **[📖 Documentation](https://psf-guard.atpn.co/docs/)**
· **[🐛 Report an issue](https://github.com/theatrus/psf-guard/issues)**

## 🧭 Choose a workflow

| | Start here when… | What to do |
|:--:|---|---|
| 📥 | **You have FITS folders** | Build a catalog from the folders. Header import runs first; quality analysis can run later. |
| 🗃️ | **You have a Target…
