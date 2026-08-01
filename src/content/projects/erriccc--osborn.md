---
repo: "Erriccc/osborn"
name: "osborn"
description: "Voice-enabled AI coding assistant with LiveKit + Claude Code"
readmeQualityOk: true
url: "https://github.com/Erriccc/osborn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-03T10:54:30Z"
lastCommitAt: "2026-08-01T06:15:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 54
maintainers: ["Erriccc"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bebbea72544fd12c8ee078c70c1f13e3f7d8ee61280eda58c2be01c74a30e48/Erriccc/osborn"
---

# Osborn - Voice AI Research & Development Assistant

Voice-enabled research and coding assistant powered by LiveKit + Claude Agent SDK. Talk to your code, research deeply, and build plans before executing.

## Features

- **Voice Interface**: Real-time voice conversation using LiveKit Agents 1.2.x
- **Three Voice Modes**:
  - **Pipeline (default)**: STT (Deepgram Flux semantic turn detection) → ClaudeLLM (persistent session) wrapped by `PipelineDirectLLM` + parallel Gemini Flash AFC observer → TTS. Interruption context is enriched into the next user message.
  - **Direct**: STT → ClaudeLLM → TTS, no parallel observer.
  - **Realtime**: OpenAI Realtime / Gemini Live native speech-to-speech, with the model acting as a thin teleprompter calling `ask_fast_brain` for every turn.
- **Persistent Session**: Single Claude subprocess per voice session — no JSONL replay after first message. Uses `query()` with an `AsyncIterable<SDKUserMessage>` `MessageChannel` and a long-lived background consumer.
- **Multi-Agent Orchestration**: Sonnet orchestrator delegates to three named sub-agents — **researcher** (Sonnet, read-only investigation), **reasoner** (Opus, deep analysis and planning),…
