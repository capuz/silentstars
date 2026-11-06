---
repo: "PansaLegrand/dojo-video-engine"
name: "dojo-video-engine"
description: "Deterministic browser-native video engine: scene data, rendering, playback, and export. Editor and agent: dojo-video-harness."
readmeQualityOk: true
url: "https://github.com/PansaLegrand/dojo-video-engine"
homepage: "https://github.com/PansaLegrand/dojo-video-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["canvas", "mit-license", "typescript", "video-engine", "webcodecs"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-06-11T14:35:10Z"
lastCommitAt: "2026-11-06T13:20:38Z"
lastReleaseAt: "2026-11-06T03:33:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 51
maintainers: ["PansaLegrand"]
openGraphImageUrl: "https://opengraph.githubassets.com/29af02874e9a2a565b101924ffa7d83dea0b74cebfff3a87da65c62cc91fd07e/PansaLegrand/dojo-video-engine"
---

# Dojo Video Engine

A deterministic, browser-native video engine. Author structured scenes in
TypeScript or JSON, evaluate any frame, preview with Canvas2D, and export MP4
through WebCodecs and Mediabunny.

**Looking for the video editor or editing agent? Use
[Dojo Video Harness](https://github.com/PansaLegrand/dojo-video-harness).**
The harness owns the manual editor, chat, tools, skills, approvals, local project
persistence, and bring-your-own LLM/ASR keys. Further UI and agent development
belongs there. This repository owns the rendering engine and its headless APIs.

## Repository boundary

| Repository                                                               | Responsibility                                                             |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [dojo-video-engine](https://github.com/PansaLegrand/dojo-video-engine)   | Scene schema, authoring, commands, inspection, rendering, playback, export |
| [dojo-video-harness](https://github.com/PansaLegrand/dojo-video-harness) | Runnable local editor, editing agent, user decisions,…
