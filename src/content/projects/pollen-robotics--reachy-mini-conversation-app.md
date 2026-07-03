---
repo: "pollen-robotics/reachy_mini_conversation_app"
name: "reachy_mini_conversation_app"
description: "Talk with Reachy Mini!"
url: "https://github.com/pollen-robotics/reachy_mini_conversation_app"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 264
forks: 183
openIssues: 44
closedIssues: 119
watchers: 6
contributors: 21
recentReleases: 3
createdAt: "2025-09-01T12:10:14Z"
lastCommitAt: "2026-07-03T12:21:24Z"
lastReleaseAt: "2026-05-05T14:44:25Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 92
undervaluedScore: 41
maintainers: ["andimarafioti", "alozowski", "scienceetonnante"]
openGraphImageUrl: "https://opengraph.githubassets.com/05563a66e84fcd0c087bd4db91ff6ba5c044efa49e5a7902d9cbce7b2461af59/pollen-robotics/reachy_mini_conversation_app"
---

---
title: Reachy Mini Conversation App
emoji: 🎤
colorFrom: red
colorTo: blue
sdk: static
pinned: false
short_description: Talk with Reachy Mini!
suggested_storage: large
tags:
 - reachy_mini
 - reachy_mini_python_app
---

# Reachy Mini conversation app

Conversational app for the Reachy Mini robot combining realtime voice backends and choreographed motion libraries.

## Table of contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the app](#running-the-app)
- [LLM tools](#llm-tools-exposed-to-the-assistant)
- [Advanced features](#advanced-features)
- [Contributing](#contributing)
- [License](#license)

## Overview
- Real-time audio conversation loop for low-latency streaming, powered by the **Hugging Face** realtime backend using the built-in Hugging Face server or your own local endpoint.
- Vision is handled by the realtime backend when the `camera` tool is used.
- Layered motion system queues primary moves (dances, emotions, goto poses, breathing) while blending speech-reactive wobble.
- Async tool dispatch integrates robot motion and camera capture. An optional web UI (`--ui`) provides…
