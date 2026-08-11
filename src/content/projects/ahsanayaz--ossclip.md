---
repo: "AhsanAyaz/ossclip"
name: "ossclip"
description: "Local-first CLI video producer: cuts silence and fillers, word-timed captions, face-aware framing, and LLM-planned code-rendered graphics"
readmeQualityOk: true
url: "https://github.com/AhsanAyaz/ossclip"
homepage: "https://ahsanayaz.github.io/ossclip/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["captions", "cli", "llm", "remotion", "shorts", "video", "video-editing", "whisper"]
stars: 41
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-26T19:06:29Z"
lastCommitAt: "2026-08-11T04:49:37Z"
lastReleaseAt: "2026-08-07T10:46:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["AhsanAyaz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1313085544/c0c175d0-a552-47ab-ae55-0f78a361a982"
---

# ossclip

**A local-first CLI that turns a talking-head take into a finished short.** It cuts silence and filler words, writes word-timed kinetic captions, frames on the measured face, and has an LLM plan **code-rendered on-screen graphics** — title cards, stat cards, diagrams, terminal and chat mockups — from what was actually said. Transcription is local (whisper.cpp), rendering is local (Remotion); the only network calls are the LLM planning ones, on your own key or your existing Claude Code subscription. Vertical 9:16 by default, landscape 16:9 with `--aspect`.

The graphics layer is the part comparable tools don't have: nine Zod-typed scene components ([`packages/core/src/scene-registry.ts`](https://github.com/AhsanAyaz/ossclip/blob/HEAD/packages/core/src/scene-registry.ts)) each carry a `whenToUse` contract the LLM producer plans against, every planned scene validates against its schema before it renders, and a fit contract keeps every component inside the platform-safe area on real copy. Open-source alternatives stop at find → crop → caption; commercial tools gate the graphics layer behind paid tiers.

**Scope, honestly:** ossclip is at its best **polishing a take you have…
