---
repo: "dkorunic/astro-recommender"
name: "astro-recommender"
description: "What to image tonight: ranks deep sky targets and comets for your location, weather, Moon and telescope"
readmeQualityOk: true
url: "https://github.com/dkorunic/astro-recommender"
homepage: "https://astrorecommender.org/"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["astronomy", "astrophotography", "astrophysics", "deep-sky", "nebulas", "celestron-origin", "cli", "comets", "galaxies", "go"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-05T05:38:54Z"
lastCommitAt: "2026-10-13T10:58:01Z"
lastReleaseAt: "2026-10-12T13:12:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["dkorunic"]
openGraphImageUrl: "https://opengraph.githubassets.com/77334c4cff9d003bf1869e46b20dd864d28933dbebcaad7d1dd40999aa7c6c8c/dkorunic/astro-recommender"
---

# astro-recommender

A single-binary Go CLI that tells you what to image **tonight** from a given location. It ranks deep sky objects and bright comets over the whole astronomical night, from dusk to dawn (Sun below −18°), by how long each one stands high enough, far enough from the Moon and above your local horizon, and by how good the sky is while it does: the hourly cloud, transparency, dew and wind forecast, scattered moonlight, light pollution and atmospheric extinction all weigh in, minute by minute. The catalogues (about 33,000 entries in 27 lists, some 24,000 distinct objects) and the time-zone data are built in, no API keys are needed, and the astronomy is hand-rolled and checked against IAU SOFA. It also runs [in the browser](https://astrorecommender.org/), nothing to install.

It started as a port of the deep sky part of [uptonight](https://github.com/mawinkler/uptonight) and adds, among other things:

- **framing** for the **Celestron Origin** smart telescope (`-origin`) or any telescope and camera (`-fov`/`-scale`, or `-focal` with `-sensor`/`-pixel`): only objects that fit the frame and are large enough in pixels, scored by how well they fill it
- a sky-brightness…
