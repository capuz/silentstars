---
repo: "tumblehead/TumblePipe"
name: "TumblePipe"
description: "A small studio pipeline for animation and VFX projects in Houdini"
readmeQualityOk: true
url: "https://github.com/tumblehead/TumblePipe"
homepage: "https://tumbletrove.com/packages/tumblehead/tumblepipe"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [68, 29]
stars: 31
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-04-28T13:26:11Z"
lastCommitAt: "2026-11-10T14:49:09Z"
lastReleaseAt: "2026-04-23T13:35:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e5a6d42e24c8f4c6a44ceeaf4b8997f45423444d24417f6f1b426fdddafb9f7b/tumblehead/TumblePipe"
---

# TumblePipe

A small studio pipeline for animation and VFX projects in Houdini, developed
for the [*Turbulence*](https://www.sidefx.com/tech-demos/turbulence/) short
film at [Tumblehead](https://tumblehead.com).

**Full documentation:** [tumblepipe.readthedocs.io](https://tumblepipe.readthedocs.io) —
getting started, the Asset Browser, the pipeline nodes, configuration, the
render farm, and troubleshooting. The same pages ship inside the package and
open offline from **TumbleTrove ▸ Documentation ▸ TumblePipe** in Houdini.

## Install

Pick one:

- **[TumbleTrove Desktop](https://tumbletrove.com/desktop)** — browse,
  install, and update Houdini packages from a GUI. No command line required.
- **[HPM](https://hpm.readthedocs.io)** — the Houdini Package Manager:
  ```bash
  hpm add tumblepipe --git https://github.com/tumblehead/TumblePipe
  ```
- **Manual** — grab an archive from
  [Releases](https://github.com/tumblehead/TumblePipe/releases).

Render-farm workers need a matching Houdini install — it provides everything the
farm uses (`husk`, the USD resolver, `iconvert`, and the bundled `hoiiotool`/
`hffmpeg` for image and video processing). See the
[installation…
