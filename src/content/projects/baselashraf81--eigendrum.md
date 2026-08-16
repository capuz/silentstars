---
repo: "BaselAshraf81/eigendrum"
name: "eigendrum"
description: "Interactive visualization and audio exploration of drum eigenmodes. Created by Basel Ashraf."
readmeQualityOk: true
url: "https://github.com/BaselAshraf81/eigendrum"
homepage: "https://eigendrum.com"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [66, 24]
topics: ["eigen", "javascript", "web-audio"]
stars: 113
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-08-01T21:43:39Z"
lastCommitAt: "2026-08-16T04:08:04Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 29
maintainers: ["BaselAshraf81", "vercel[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8b90b39fdbecca2f832c9e78842b1198393175da51d5438d64f2a7a4b9f118e/BaselAshraf81/eigendrum"
---

# Eigendrum: everything is a drum

**Draw a shape. Hear the sound it would actually make.**

Eigendrum treats whatever you draw as an ideal drumhead clamped at its rim, solves
the Laplacian eigenvalue problem on that exact region using real finite elements,
and synthesises the frequencies it finds. Nothing is sampled and no overtone is
faked: draw a circle and the overtones come out as ratios of Bessel function
zeros, because that's what a circular drum actually does.

Then it lets you hit it. Strike different places and the timbre changes, because
striking a spot drives each mode in proportion to how much that mode moves
there. Hit a line where a mode stands still and you cannot excite it at all.

You can also watch it: the real vibration modes ripple across the shape, with pale
channels along the curves where the surface never moves. Those are nodal lines, the
mathematical ancestors of the sand figures Ernst Chladni was drawing in 1787.

</p>

**Live at [eigendrum.com](https://eigendrum.com).**

No dependencies, no build step, no backend. Clone it and open `index.html`, or:

```bash
npm run serve     # http://localhost:8080
npm test          # 57 tests, including the accuracy…
