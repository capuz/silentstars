---
repo: "Govorunb/gary"
name: "gary"
description: "Backend implementation for the Neuro-sama SDK"
readmeQualityOk: true
url: "https://github.com/Govorunb/gary"
homepage: "https://github.com/VedalAI/neuro-sdk"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [64, 28]
stars: 13
forks: 4
openIssues: 18
closedIssues: 43
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-11T12:55:44Z"
lastCommitAt: "2026-11-09T07:14:01Z"
lastReleaseAt: "2026-07-25T22:54:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 89
undervaluedScore: 69
maintainers: ["Govorunb"]
openGraphImageUrl: "https://opengraph.githubassets.com/d89aae4f0040741c961eb433ea74ecedd063ceb0d113f4212003e5bc959acc4f/Govorunb/gary"
---

# Gaming Gary

A feature-rich app that helps you develop and test game integrations for the [Neuro-sama SDK](https://github.com/VedalAI/neuro-sdk). It's similar to [Tony](https://github.com/Pasu4/neuro-api-tony) and [Jippity](https://github.com/EnterpriseScratchDev/neuro-api-jippity), but aims to be a generalist testing app (able to do "everything" to some degree).

## Features

A wide range of tools and environments to test your game integration, in one app.
- A random generator (like [Randy](https://github.com/VedalAI/neuro-sdk/blob/main/Randy/README.md)) to automatically choose actions, for primitive or "hands-off" testing
- Tony-like manual action sending, with an option to send raw WebSocket messages for low-level testing (e.g. SDK compliance)
- For advanced testing (closest to "production"), use a real LLM through OpenAI-compatible inference providers:
    - Local models can be used through local server hosts like [LMStudio](https://lmstudio.ai) or [Ollama](https://ollama.com)
    - [OpenRouter](https://openrouter.ai) is the recommended way to test, as you can easily use virtually *any* model.
    - You can add any other custom remote OpenAI-compatible service, but not all…
