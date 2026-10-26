---
repo: "laadtushar/edytlab"
name: "edytlab"
description: "Describe it. Get pro-grade audio edits."
readmeQualityOk: true
url: "https://github.com/laadtushar/edytlab"
homepage: "https://edytlab.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [62, 31]
topics: ["agentic", "agentic-ai", "agentic-workflow", "agentic-workflows", "audacity", "audacity-pro", "audacity-setup", "audio", "audio-plugin", "audio-processing"]
stars: 6
forks: 1
openIssues: 34
closedIssues: 190
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-05T15:36:28Z"
lastCommitAt: "2026-10-26T09:17:09Z"
lastReleaseAt: "2026-05-12T00:21:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 58
maintainers: ["laadtushar"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf68071bcfc59266f0ac1422364200eb2212221aa0c392568cfa929202c1b33a/laadtushar/edytlab"
---

# edytlab

**Talk to Claude. Get pro-grade audio edits.**

A Tauri 2 desktop audio editor where producers, podcasters, and DJs edit audio by chatting with an AI agent. Load two tracks, ask it to bring one to the other's tempo and blend them with a crossfade, and export a WAV. Refine the result through conversation, with an audible A/B at each step.

**What it does not do yet.** Stem separation is wired in as a tool, but its model inference is not shipped: `separate_stems` returns an error today ([#385](https://github.com/laadtushar/edytlab/issues/385)). Transcription runs on this computer from v0.8.0, once you download the speech model in Settings ([#383](https://github.com/laadtushar/edytlab/issues/383), [#384](https://github.com/laadtushar/edytlab/issues/384)). It edits files: no MIDI, no instruments, no plugin hosting. The installers are unsigned ([#386](https://github.com/laadtushar/edytlab/issues/386)).

Local-first, multi-provider, pure-Rust DSP. Builds for macOS (universal), Windows and Linux.

## Website and docs

- Website: <https://edytlab.com> (source in `/website`)
- Design spec:…
