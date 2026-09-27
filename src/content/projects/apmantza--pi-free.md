---
repo: "apmantza/pi-free"
name: "pi-free"
description: "All-in-one free/freemium/paid model providers for Pi"
readmeQualityOk: true
url: "https://github.com/apmantza/pi-free"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 144
forks: 19
openIssues: 5
closedIssues: 78
watchers: 1
contributors: 10
recentReleases: 4
createdAt: "2026-03-18T19:53:32Z"
lastCommitAt: "2026-09-27T09:28:26Z"
lastReleaseAt: "2026-07-25T08:13:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 36
maintainers: ["apmantza", "dependabot[bot]", "esoterik-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0e34a749cab7cab9863ddf878186fc14ec7fde5083514a1ceae018c8468fd92/apmantza/pi-free"
---

# pi-free-providers

</p>

Free and paid AI model providers for [Pi](https://pi.dev). Access models from multiple providers in one install.

---

## What does pi-free do

**pi-free is a Pi extension that registers additional providers and applies free/all model filters.**

When you install pi-free, it:

1. Registers native providers such as Kilo, Cline, LLM7, FastRouter, Ollama Cloud, StepFun, and more.
2. Registers Qoder through Pi's native provider surface and supports Pi's built-in OpenCode, OpenCode Go, and OpenRouter integrations.
3. Uses Pi's native model and auth stores for all extension providers; Ollama Cloud and Qoder retain documented compatibility caches only for auxiliary behavior.
4. Applies the global free-only filter by default, while preserving provider-specific paid/trial behavior.
5. Provides per-provider toggle commands — `/toggle-{provider}` switches between the provider's free/basic view and its full catalog.
6. Supports OAuth and API-key authentication where a provider offers them.
7. Adds Coding Index scores to model names and can probe and hide unavailable models.
8. Provides `/pi-free-health` and `/free-startup` diagnostics without exposing credentials.…
