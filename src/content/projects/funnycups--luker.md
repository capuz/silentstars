---
repo: "funnycups/Luker"
name: "Luker"
description: "LLM Frontend for Power Users. Better SillyTavern."
readmeQualityOk: true
url: "https://github.com/funnycups/Luker"
homepage: "https://luker.cups.moe/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
stars: 417
forks: 35
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 338
recentReleases: 0
createdAt: "2026-02-08T05:15:05Z"
lastCommitAt: "2026-08-23T03:44:14Z"
lastReleaseAt: "2026-02-20T17:44:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 27
maintainers: ["funnycups", "KronosXup", "Illustar0"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7d8e5958e54acaac0fa3ffc1e910f691fb347dfd87d4dcbb794a817e687b566/funnycups/Luker"
---

# Luker

Luker is a SillyTavern fork focused on cleaner API behavior, stronger extension hooks, and production-grade generation lifecycle handling.

## Why Luker

- Reliable generation lifecycle: backend-owned generation jobs keep running and persisting even if the frontend disconnects/reloads, and active output can be recovered after reconnect.
- Incremental persistence: chat/message and settings changes are patch-first instead of repeated full-save payloads.
- Better plugin ergonomics: prompt-preset-aware message assembly, world-info simulation/finalization hooks, and chat-bound plugin state helpers.
- Built-in advanced plugins: `Orchestrator` (multi-agent planning) and `Memory` (graph memory + recall).

## Developer Quick Start (Plugins)

Use `getContext()` as the primary integration surface.

- Authoring guide:
  - `docs/luker-plugin-authoring-guide.md`

- Persistence helpers:
  - `appendChatMessages(messages)`
  - `patchChatMessages(operations)`
  - `saveChatMetadata(withMetadata?)`
  - `getChatStateBatch(namespaces, options?)`
  - `getChatState(namespace, options?)`
  - `patchChatState(namespace, operations, options?)`
  - `updateChatState(namespace, updater, options?)`
  -…
