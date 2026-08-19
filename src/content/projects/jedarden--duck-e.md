---
repo: "jedarden/duck-e"
name: "duck-e"
description: "🦆 DUCK-E: The Duck That Talks Back - An AI-powered voice assistant that revolutionizes rubber duck debugging by actively engaging in your debugging process. Built with OpenAI Realtime API, FastAPI, and AutoGen framework for intelligent, real-time voice conversations about your code."
readmeQualityOk: true
url: "https://github.com/jedarden/duck-e"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 52
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-10T04:35:16Z"
lastCommitAt: "2026-08-19T04:09:04Z"
lastReleaseAt: "2026-01-19T02:05:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 41
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/85e8b49549b13ef6e98d3e985b4fa97f844e05613a511dcc4fc28bddbcc09674/jedarden/duck-e"
---

# DUCK-E: The Duck That Talks Back

**DUCK-E** (Digitally Unified Conversational Knowledge Engine) is an AI-powered voice assistant inspired by rubber duck debugging. Instead of explaining your problem to a silent rubber duck, DUCK-E listens and talks back — asking questions, offering suggestions, and searching the web in real time.

## How it works

```
Browser (WebRTC) → WebSocket → FastAPI → OpenAI Realtime API
                                              (gpt-realtime-2)
```

1. Your browser captures audio via the MediaDevices API and opens a WebRTC peer connection.
2. The FastAPI backend requests an ephemeral key from OpenAI — your real API key never touches the browser.
3. Speech is transcribed by OpenAI Whisper-1; the Realtime API handles both understanding and voice response natively.
4. When DUCK-E needs external data (weather, web search), it calls the appropriate tool on the server and folds the result into its reply.

## Features

### Voice I/O
- Low-latency, full-duplex voice conversation via the OpenAI Realtime API
- 11 built-in voices — changeable mid-session without reconnecting
- Interruption-friendly: DUCK-E handles natural conversation flow

### Tools
| Tool |…
