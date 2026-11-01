---
repo: "ersinkoc/AI-Video-Factory"
name: "AI-Video-Factory"
description: "AI video factory: from one topic to a finished, multilingual YouTube video. Claude agents write, plan, draw and review; a Studio keeps the human in charge."
readmeQualityOk: true
url: "https://github.com/ersinkoc/AI-Video-Factory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-video", "animation", "claude", "remotion", "typescript", "video-generation", "youtube"]
stars: 79
forks: 11
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2026-10-29T22:27:41Z"
lastCommitAt: "2026-11-01T10:43:49Z"
lastReleaseAt: "2026-10-31T22:39:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 32
maintainers: ["ersinkoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3d71a3b9368071adcced6bc89b0d4364cae841aa853d335487eb1832d775d70/ersinkoc/AI-Video-Factory"
---

# AI Video Factory

**English** · [Türkçe](https://github.com/ersinkoc/AI-Video-Factory/blob/HEAD/README-TR.md)

An AI video factory that produces multilingual, animation-heavy YouTube videos from a single topic. Claude agents write the story and script, plan the shots, design the vector art and review their own output. Paid media APIs generate voice, images and video clips, and Remotion renders the final cut. A web Studio shows what is happening at every step and lets a human make the final call.

Architecture, provider choices and the roadmap are in [docs/PROJE_PLANI.md](https://github.com/ersinkoc/AI-Video-Factory/blob/HEAD/docs/PROJE_PLANI.md) (Turkish). Release history: [CHANGELOG.md](https://github.com/ersinkoc/AI-Video-Factory/blob/HEAD/CHANGELOG.md).

## Features

- **Topic to finished video.** The pipeline runs these stages: style → story → script → *approval* → cast → concept → *approval* → voice → shots → keyframes → clips → timeline → render → review. Every stage is idempotent and saves after each sub-step, so a failed run resumes where it stopped.
- **Four motion modes:**
  - `vector`: Claude-drawn SVG characters on a rig, animated in code. This is the cheapest mode.…
