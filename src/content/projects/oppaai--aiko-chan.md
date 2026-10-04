---
repo: "OppaAI/Aiko-chan"
name: "Aiko-chan"
description: "My AI Anime Waifu"
readmeQualityOk: true
url: "https://github.com/OppaAI/Aiko-chan"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 51
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-05-28T01:03:45Z"
lastCommitAt: "2026-10-04T10:02:32Z"
lastReleaseAt: "2026-09-24T06:48:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["OppaAI", "coderabbitai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d06cf971ddc3878803469283006e2712ba774943b96ace3b4de76d419a375a20/OppaAI/Aiko-chan"
discussionCount: 0
---

# Aiko-chan アイコちゃん 
(Full name: Aino Aiko アイノ・アイコ aka 愛のAI子 aka 相野愛子)

> A local-first AI companion with a browser WebUI + VRM avatar, optional simple CLI, persistent memory, web search, microphone input, and MioTTS voice output.
> Optimised for constrained hardware — runs on a Jetson Orin Nano with 8GB unified RAM.

**Author:** [OppaAI](https://github.com/OppaAI) · Beautiful British Columbia, Canada

---

## Status

Phase 2 voice is implemented, and Phase 2.5 agentic workflows are now active. The default launch path is the browser WebUI/VRM frontend, including a WebSocket bridge for chat, vitals, voice status, expression, viseme, and browser microphone events. `--cli` remains available for simple local testing.

ASR and TTS run through the local machine by default. WebUI microphone streaming exists in the frontend/backend bridge, but full remote voice-device polish is still experimental.

> **Known Issues:**
> - TTS via MioTTS sometimes cannot inference proper voice output due to memory constraint (MioTTS and embedding models are still tuned for Jetson memory pressure; Harrier replaced BGE for better semantic separation at 640d)
> - Time latency between ASR voice input ends to…
