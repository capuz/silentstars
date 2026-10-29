---
repo: "jason-easyazz/zoe-ai-assistant"
name: "zoe-ai-assistant"
description: "Self-hosted, privacy-first AI home companion with voice, touch and long-term memory."
readmeQualityOk: true
url: "https://github.com/jason-easyazz/zoe-ai-assistant"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-assistant", "fastapi", "home-assistant", "home-automation", "jetson", "llama-cpp", "local-llm", "privacy", "self-hosted", "voice-assistant"]
stars: 6
forks: 1
openIssues: 6
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-08-07T00:49:19Z"
lastCommitAt: "2026-10-29T10:36:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 73
maintainers: ["jason-easyazz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18266c95c89cf4fd59f5c493af04fd6204f3697b462f89f6e453df898251ffae/jason-easyazz/zoe-ai-assistant"
---

# Zoe AI Assistant

Privacy-first, self-hosted AI companion for the home. Zoe is a voice-and-touch
assistant that runs on your own hardware: a local LLM, local speech, a memory
that is measured rather than assumed, and a smart-home and life-hub layer on top.
No cloud account is required for the core experience.

The goal (see [docs/VISION.md](https://github.com/jason-easyazz/zoe-ai-assistant/blob/HEAD/docs/VISION.md)) is a warm, always-there
companion that actually knows you: it remembers the thread of your life, says
*why* it said something, forgets what you ask it to forget, and knows when to
stay quiet. Every claim below that a shipped feature does something is backed by
a record in `docs/` and, where it can be, by a benchmark in `scripts/perf/`.

> **Heads up: this is a real, hardware-specific deployment, not a one-command
> demo.** Zoe is developed and run on an **NVIDIA Jetson Orin** (aarch64 + CUDA)
> with a locally-built `llama.cpp`. It will run on other Linux hosts, but the
> LLM and voice steps assume Jetson/CUDA and will need adjustment elsewhere
> (see [HARDWARE_COMPATIBILITY.md](https://github.com/jason-easyazz/zoe-ai-assistant/blob/HEAD/HARDWARE_COMPATIBILITY.md)).…
