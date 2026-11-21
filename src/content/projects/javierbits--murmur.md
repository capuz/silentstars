---
repo: "javierbits/murmur"
name: "murmur"
description: "A simple, local Speech-to-Text app for MacOS using whisper."
readmeQualityOk: true
url: "https://github.com/javierbits/murmur"
homepage: "https://jvr0x.com/murmur/"
language: "Swift"
languages: ["Swift"]
languagePcts: [76]
topics: ["ai", "llm", "speech-recognition", "speech-to-text"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-09T11:07:23Z"
lastCommitAt: "2026-11-21T13:30:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 27
maintainers: ["javierbits"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d39339e059abf1161178919e5ee016f1464fc1c2d210133c4b1b3ada725e335/javierbits/murmur"
---

# Murmur

**Project page:** <https://javierbits.com/murmur/>

Local-first, hold-to-talk voice dictation for macOS. Hold a hotkey, speak, release —
your speech is transcribed and inserted at the cursor in any app. Similar in spirit to
Wispr Flow, but open and self-hosted: the speech-to-text and optional LLM cleanup run
locally by default, and both endpoints are configurable so you can move processing to
another machine (e.g. an NVIDIA DGX Spark) by changing a URL.

## Status

Early development. See [`PLANNING.md`](https://github.com/javierbits/murmur/blob/HEAD/PLANNING.md) and
[`docs/superpowers/specs/2026-06-01-murmur-design.md`](https://github.com/javierbits/murmur/blob/HEAD/docs/superpowers/specs/2026-06-01-murmur-design.md).

## How it works

1. Hold the hotkey (default: **Right Option ⌥**) and speak — or, in **toggle mode**,
   tap once to start and tap again to finish (comfortable for long notes).
2. On release/stop, Murmur sends the recorded audio to the speech-to-text engine and
   (optionally) runs an LLM cleanup pass.
3. The text is inserted at your cursor in the frontmost app.
