---
repo: "OppaAI/Aiko-chan"
name: "Aiko-chan"
description: "My AI Anime Waifu"
readmeQualityOk: true
url: "https://github.com/OppaAI/Aiko-chan"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 34
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-05-28T01:03:45Z"
lastCommitAt: "2026-08-15T04:04:47Z"
lastReleaseAt: "2026-07-15T00:54:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 41
maintainers: ["OppaAI", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef25e9c83cf621b71de0d9c6441225abaa7ae6f275dc8f676bbee8b9144002a8/OppaAI/Aiko-chan"
discussionCount: 0
---

# Aiko-chan アイコちゃん

> A local-first AI companion with a browser WebUI + VRM avatar, optional simple CLI, persistent memory, web search, microphone input, and MioTTS voice output.
> Optimised for constrained hardware — runs on a Jetson Orin Nano with 8GB unified RAM.

**Author:** [OppaAI](https://github.com/OppaAI) · Beautiful British Columbia, Canada

---

## Status

Phase 2 voice is implemented, and Phase 2.5 agentic workflows are now active. The default launch path is the browser WebUI/VRM frontend, including a WebSocket bridge for chat, vitals, voice status, expression, viseme, and browser microphone events. `--cli` remains available for simple local testing.

ASR and TTS run through the local machine by default. WebUI microphone streaming exists in the frontend/backend bridge, but full remote voice-device polish is still experimental.

> **Known Issues:**
> - TTS via MioTTS sometimes cannot inference proper voice output due to memory constraint (MioTTS and embedding models are still tuned for Jetson memory pressure; Harrier replaced BGE for better semantic separation at 640d)
> - Time latency between ASR voice input ends to beginning of TTS voice output are still over 5 sec…
