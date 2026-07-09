---
repo: "OppaAI/Aiko-chan"
name: "Aiko-chan"
description: "My AI Anime Waifu"
readmeQualityOk: true
url: "https://github.com/OppaAI/Aiko-chan"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-05-28T01:03:45Z"
lastCommitAt: "2026-07-09T20:45:07Z"
lastReleaseAt: "2026-06-02T00:28:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 56
maintainers: ["OppaAI"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a72cc606764c27177e30892a272dba4600f121a677b6f29a6dab99f1fa4b673/OppaAI/Aiko-chan"
---

# Aiko-chan 愛子ちゃん

> A local-first AI companion with a curses TUI, optional browser WebUI + VRM avatar, persistent memory, web search, microphone input, and MioTTS voice output.
> Optimised for constrained hardware — runs on a Jetson Orin Nano with 8GB unified RAM.

**Author:** [OppaAI](https://github.com/OppaAI) · Beautiful British Columbia, Canada
 

 

---

## Status
Phase 2 voice is implemented, and Phase 2.5 agentic workflows are now active. The default launch path is still the curses TUI; the browser WebUI/VRM frontend is available with `--webui` and includes a WebSocket bridge for chat, vitals, voice status, expression, viseme, and browser microphone events.

ASR and TTS run through the local machine by default. WebUI microphone streaming exists in the frontend/backend bridge, but full remote voice-device polish is still experimental.

> Known Issues:
> - TTS via MioTTS sometimes cannot inference proper voice output due to memory constraint (MioTTS and embedding models are still tuned for Jetson memory pressure; Harrier replaced BGE for better semantic separation at 640d)
> - Time latency between ASR voice input ends to beginning of TTS voice output are still over 5 sec for…
