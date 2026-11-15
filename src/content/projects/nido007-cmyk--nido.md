---
repo: "Nido007-cmyk/Nido"
name: "Nido"
description: "NIDO — your agent, your world. Privacy-first AI assistant for Android that runs 100% offline: on-device LLMs (Qwen, Phi, Gemma, LFM · 0.4–5 GB), encrypted memory, and end-to-end encrypted P2P over Bluetooth & Wi-Fi. No cloud, no accounts."
readmeQualityOk: true
url: "https://github.com/Nido007-cmyk/Nido"
homepage: "https://github.com/Nido007-cmyk/Nido/releases"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["ai", "android", "bluetooth", "encrypted-storage", "expo", "llm", "offline-first", "on-device-ai", "p2p", "privacy"]
stars: 9
forks: 3
openIssues: 14
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-05T01:46:23Z"
lastCommitAt: "2026-11-15T11:22:43Z"
lastReleaseAt: "2026-10-12T00:54:25Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 79
undervaluedScore: 52
maintainers: ["Nido007-cmyk", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0856ddac1b76c09f25e248bfaa73507df89b821282621d93268e2a8b530b76fc/Nido007-cmyk/Nido"
---

> **Language:** English · [Español](https://github.com/Nido007-cmyk/Nido/blob/HEAD/README.es.md)

A private AI assistant that runs entirely on your Android phone.</p>

## What NIDO is

NIDO is a personal assistant that thinks on your phone, not on someone else's
server. The language model, your memory and your documents all stay on the
device, encrypted. There are no accounts, no cloud and no analytics.

> **Alpha software.** NIDO is an early alpha for testing and feedback. It has
> not had an independent security audit. Do not rely on it for high-stakes
> secrets yet. See [known limitations](https://github.com/Nido007-cmyk/Nido/blob/HEAD/docs/ALPHA_RELEASE_NOTES.md#known-limitations).

## What it does today

- **Chats offline** with a small language model that runs on the phone
  (llama.cpp through `llama.rn`).
- **Remembers for you**: facts, notes and reminders, stored in a database
  encrypted with SQLCipher. The key lives in the Android Keystore.
  Birthdays you tell it get a reminder every year. An 8:00 daily summary is
  available if you turn it on (it's off by default). You can ask in Spanish,
  English or Portuguese about something you saved in another of the three,
  and…
