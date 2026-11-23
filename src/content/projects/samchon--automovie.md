---
repo: "samchon/automovie"
name: "automovie"
description: "LLM-authored 3D models and motion via function calling. AI directs, the engine films deterministically. The structured-output alternative to diffusion video."
readmeQualityOk: true
url: "https://github.com/samchon/automovie"
homepage: "https://samchon.github.io/automovie/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 17
forks: 3
openIssues: 194
closedIssues: 2399
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-06-01T05:12:59Z"
lastCommitAt: "2026-11-23T09:19:21Z"
lastReleaseAt: "2026-11-19T19:36:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 57
maintainers: ["samchon"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3153af0cc7390eeac3b3b264138d1ed2892e64f10e89400cd95d16e54de9d47/samchon/automovie"
---

# AutoMovie

Your coding agent writes a film's screenplay and programs its staging, motion and camera; AutoMovie computes that code into the same frames every time, as a motion hint for video diffusion or as a film rendered directly.

- **Made for the motion hint.** Every part serves one output: the best hint a video diffusion model can be given of who is where, what they do, what they touch and when.
- **Simple rendering, precise motion.** People are a polygon man and sets are coarse meshes on purpose; the accuracy goes into the performance, its contacts and its timing.
- **Everything is code.** The agent writes the screenplay as text and the film as TypeScript against typed packages, so a motion is a module: tested once, accepted on stills, reused by any scene and any body.
- **The same frames every time.** The engine computes each frame from the code and a seed, so a defect is found on a still, corrected at its cause and recomputed, never regenerated.
- **No LLM and no server inside.** You bring the coding agent, the image or video models a production uses, and the machine that renders.
