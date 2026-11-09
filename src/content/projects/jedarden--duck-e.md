---
repo: "jedarden/duck-e"
name: "duck-e"
description: "Voice rubber-duck debugging assistant: a FastAPI backend bridges the browser (WebRTC) to the OpenAI Realtime API, with server-side tools for web search, URL fetch, weather, and per-user memory."
readmeQualityOk: true
url: "https://github.com/jedarden/duck-e"
homepage: "https://jedarden.com/projects/ducke/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["ai", "developer-tools", "fastapi", "openai-realtime", "python", "rubber-duck-debugging", "voice-assistant", "webrtc"]
stars: 56
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-10T04:35:16Z"
lastCommitAt: "2026-11-09T00:52:45Z"
lastReleaseAt: "2026-01-19T02:05:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 51
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e52870b732990ec2fb8d151187a201a174a818e8e37f8e656e467f7e1bab0bf/jedarden/duck-e"
---

# DUCK-E

**DUCK-E** (Digitally Unified Conversational Knowledge Engine) is a browser-based voice assistant for rubber-duck debugging: you explain a problem out loud and it answers, asks questions, and can look things up. It is a FastAPI service that brokers a WebRTC session between the browser and the OpenAI Realtime API, plus a small set of server-side tools (weather, web search, URL fetch, per-user memory, voice switching). The backend is a custom `RealtimeSession` class; an earlier AG2/AutoGen dependency was removed and only the `ag2.init` client message name remains for compatibility.

**Live demo:** [ducke-demo.ardenone.com](https://ducke-demo.ardenone.com)

## How it works

```
Browser (WebRTC) → WebSocket → FastAPI → OpenAI Realtime API
                                              (gpt-realtime-2)
```

1. Your browser captures audio via the MediaDevices API and opens a WebRTC peer connection.
2. The FastAPI backend requests an ephemeral key from OpenAI — your real API key never touches the browser.
3. Speech is transcribed by OpenAI Whisper-1; the Realtime API handles both understanding and voice response natively.
4. When DUCK-E needs external data (weather, web search),…
