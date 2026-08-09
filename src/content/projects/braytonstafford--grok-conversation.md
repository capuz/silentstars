---
repo: "braytonstafford/grok_conversation"
name: "grok_conversation"
description: "Home Assistant Conversation agent using xAI Grok LLM"
readmeQualityOk: true
url: "https://github.com/braytonstafford/grok_conversation"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["grok", "hacs", "hacs-integration", "home-assistant", "xai"]
stars: 39
forks: 5
openIssues: 0
closedIssues: 22
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2025-01-27T00:02:17Z"
lastCommitAt: "2026-08-09T04:46:37Z"
lastReleaseAt: "2025-03-06T00:36:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 35
maintainers: ["braytonstafford"]
openGraphImageUrl: "https://opengraph.githubassets.com/154bd11898a9dd51b0807db915e609200be660ad6f5cf8623243f9abe4cb8513/braytonstafford/grok_conversation"
---

# xAI Grok Conversation

**Home Assistant conversation agent + cloud Voice TTS/STT powered by xAI Grok.**

One HACS install → **Conversation agent**, **Speech-to-text**, and **Text-to-speech** engines that use your existing xAI API key.

---

## What's included

| Engine | Where it appears | API |
| --- | --- | --- |
| **Conversation** | Voice assistants → Conversation agent → **Grok** | Chat / tools / live search |
| **Speech-to-text** | Voice assistants → Speech-to-text → **xAI Grok** | `POST https://api.x.ai/v1/stt` |
| **Text-to-speech** | Voice assistants → Text-to-speech → **xAI Grok** | `POST https://api.x.ai/v1/tts` |

Replace Piper / speech-to-phrase with Grok cloud quality while keeping your Satellite1 (or any Assist pipeline) wake word local.

---

## Features

| Feature | Description |
| --- | --- |
| **Assist / LLM tools** | Control exposed HA entities via the standard LLM HASS API |
| **xAI TTS** | 25+ expressive voices (Eve, Ara, Rex, Luna, …), speed, languages |
| **xAI STT** | Multilingual transcription (25+ languages), PCM/WAV from Assist satellites |
| **Voice API check** | Probes the key for Voice access at setup; warns if chat-only |
| **Interaction modes** |…
