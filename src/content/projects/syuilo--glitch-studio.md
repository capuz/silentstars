---
repo: "syuilo/glitch-studio"
name: "glitch-studio"
description: "🤯 A̴ g̸l̶i̴t̵c̷h̵ d̶e̶d̴i̷c̶a̵t̴e̴d̴ i̷m̶a̶g̸e̵ e̷d̶i̵t̶i̷n̸g̴ s̵o̴f̶t̷w̸a̶r̸e̶"
originalDescription: "🤯 A̴ g̸l̶i̴t̵c̷h̵ d̶e̶d̴i̷c̶a̵t̴e̴d̴ i̷m̶a̶g̸e̵ e̷d̶i̵t̶i̷n̸g̴ s̵o̴f̶t̷w̸a̶r̸e̶"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/syuilo/glitch-studio"
homepage: "http://syuilo.dev/glitch-studio/docs"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [41, 41]
stars: 14
forks: 1
openIssues: 68
closedIssues: 73
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2024-05-10T04:19:15Z"
lastCommitAt: "2026-10-29T14:07:06Z"
lastReleaseAt: "2026-10-21T05:00:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 87
undervaluedScore: 73
maintainers: ["syuilo", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5a05ce04922b649ac45d0eb834bf8858c380ea0e21dd3333cf4e2ea698e1cc5/syuilo/glitch-studio"
---

# Glitch Studio (⚠️Under Development!!!)

[Open the app](https://syuilo.dev/glitch-studio/) · [User guide](https://syuilo.dev/glitch-studio/docs/)

Glitch Studio is an integrated image and video editing environment that can be used for real-time image and video processing, editing, and creation, as well as a shader playground.

- All image processing is performed on the GPU, so it is highly efficient
- In principle resolution-independent, so it renders consistent results with the same appearance at any resolution
- In principle fps-independent, so the speed of motion stays the same at any frame rate and results are consistent
- In principle aspect-ratio-independent, so it renders without distortion at any aspect ratio and results are consistent
- In principle deterministic, so the same parameters produce the same results regardless of environment
- In principle alpha-aware, so images containing transparency information can be rendered
- Parameters can be evaluated in various ways. Expressions can be interpreted as [AiScript](https://aiscript-dev.github.io/ja/)
- The UI thread, audio processing thread, and image processing thread are separated, so it takes advantage of multiple…
