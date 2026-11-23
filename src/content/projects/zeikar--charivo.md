---
repo: "zeikar/charivo"
name: "charivo"
description: "Interactive Live2D AI characters — modular TypeScript framework for LLM, TTS, STT, and realtime voice."
readmeQualityOk: true
url: "https://github.com/zeikar/charivo"
homepage: "https://charivo.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai-waifu", "live2d", "live2d-web", "llm", "live2d-llm", "llm-live2d", "charivo", "live2d-framework", "openclaw", "openclaw-live2d"]
stars: 29
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-16T12:16:21Z"
lastCommitAt: "2026-11-23T13:33:04Z"
lastReleaseAt: "2026-04-01T12:31:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 57
maintainers: ["zeikar", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1057943388/00d1eb0d-2a03-43ca-ad27-1371925c4c5d"
discussionCount: 0
---

# Charivo

Build Live2D AI characters that talk, react, and look at you.

Charivo is a modular TypeScript framework for voice, expression, motion, gaze,
and real-time conversation. It separates orchestration, stateful managers,
browser-side clients, and server-side providers so you can swap pieces without
rewriting the whole stack.

## Live demos

- Playground (an Iki character in your browser, no API key or LLM) — https://zeikar.dev/charivo/playground/
- Live2D web app — https://charivo.vercel.app/
- Companion (Realtime voice + cross-session memory) — https://charivo-companion.vercel.app/

## Documentation

- [https://zeikar.dev/charivo/](https://zeikar.dev/charivo/)

## Built with Charivo

- LiveClaw (Electron desktop companion driven by a local OpenClaw agent) — https://github.com/zeikar/liveclaw

## Try it locally

Want to watch a full Live2D character talk before wiring your own app? The
[`examples/web`](https://github.com/zeikar/charivo/blob/HEAD/examples/web) demo bundles the Live2D models and every
modality. Clone the repo, add an OpenAI key (and a Gemini key for realtime
voice, which defaults to Gemini Live), and run:
