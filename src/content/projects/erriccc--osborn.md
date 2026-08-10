---
repo: "Erriccc/osborn"
name: "osborn"
description: "Voice-enabled AI coding assistant with LiveKit + Claude Code"
readmeQualityOk: true
url: "https://github.com/Erriccc/osborn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-03T10:54:30Z"
lastCommitAt: "2026-08-10T05:04:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 55
maintainers: ["Erriccc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b33aa6ad6cc7619d825691c4800c947be02179bdf6cd68e0e877c98c9f510cbc/Erriccc/osborn"
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
