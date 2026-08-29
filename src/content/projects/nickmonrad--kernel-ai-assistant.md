---
repo: "NickMonrad/kernel-ai-assistant"
name: "kernel-ai-assistant"
description: "Jandal AI — Local-first Android AI assistant with on-device LLM inference, semantic memory, and extensible skill framework"
readmeQualityOk: true
url: "https://github.com/NickMonrad/kernel-ai-assistant"
language: "C"
languages: ["C", "Kotlin"]
languagePcts: [55, 35]
stars: 26
forks: 4
openIssues: 159
closedIssues: 698
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-04-07T23:21:59Z"
lastCommitAt: "2026-08-29T10:21:51Z"
lastReleaseAt: "2026-08-29T04:01:23Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 45
maintainers: ["lokhor", "NickMonrad"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1204339701/84023dad-8c30-4825-8c41-50939b2bf425"
---

# Jandal AI

*Play Store release in progress. Pre-release builds are available from [GitHub Releases](https://github.com/NickMonrad/kernel-ai-assistant/releases).*

Jandal AI is a local-first Android assistant. It combines on-device chat, long-term memory, deterministic Android actions, voice input/output, and native tool calling while keeping user data on the device by default.

## How it works

Jandal is built around a **Brain-Memory-Action** model:

- **Brain** - Gemma-4 E-2B / E-4B runs locally through Google AI Edge LiteRT / LiteRT-LM. A lightweight `QuickIntentRouter` handles deterministic fast paths for common device actions.
- **Memory** - local Room storage plus sqlite-vec / EmbeddingGemma support semantic recall, conversation history, core memories, and episodic summaries.
- **Action** - native Kotlin skills execute Android actions such as alarms, timers, lists, notes, weather, media controls, messages, email, calendar, navigation, Wikipedia, and unit/currency conversion.

## Current launch status

Launch readiness is tracked in GitHub rather than duplicated in this README:

- [#1014 - Jandal v0.1 Play Store release…
