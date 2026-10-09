---
repo: "saltnpepper97/halley"
name: "halley"
description: "Spatial Wayland compositor built around infinite workspace navigation"
readmeQualityOk: true
url: "https://github.com/saltnpepper97/halley"
homepage: "https://saltnpepper97.github.io/halley-site/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 178
forks: 11
openIssues: 4
closedIssues: 51
watchers: 5
contributors: 3
recentReleases: 3
createdAt: "2026-03-06T06:30:05Z"
lastCommitAt: "2026-10-09T10:51:25Z"
lastReleaseAt: "2026-08-27T05:34:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 98
undervaluedScore: 37
maintainers: ["saltnpepper97"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2e3f0151e897ad7d1880f021b7af7aef439e258df7e7288bd88ad77b636bd65/saltnpepper97/halley"
discussionCount: 1
---

---

> **Windows as nodes. Windows as clusters. Windows as your command center.**

Halley is a spatial Wayland compositor built for multi-monitor desktops. Each
display has an independent infinite Field: a camera over freely overlapping
windows, collapsed node landmarks, and clusters assembled around the work you
actually want to keep together. Windows can decay when they leave your active
area, return through history-aware navigation, or remain pinned as durable
landmarks.

Halley 0.6 is a ground-up compositor rewrite. It keeps the Field, nodes,
clusters, decay, Trail, Bearings, Apogee, Lift, and native capture experience,
but rebuilds their foundations around Smithay's GLES renderer, damage-aware
presentation, native embedded XWayland, and a typed public API.

---

## Start here: the normal Field loop

Halley is Field-first. Applications open onto the Field, you position them as
you work, and you clean up when the visible Field becomes cluttered. The whole
daily workflow is one loop:

> Launch freely → position and overlap naturally → arrange when the visible
> Field becomes messy → collapse work intentionally → retrieve it spatially →
> use clusters later only when deliberately…
