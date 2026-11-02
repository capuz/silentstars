---
repo: "giienew/9router-pro"
name: "9router-pro"
description: "9Router — Pro edition of 9Router with Prompt Injection (system prompt or chat script per global / API key / model), per-key token quotas, accent themes and an optimized dashboard."
readmeQualityOk: true
url: "https://github.com/giienew/9router-pro"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["9router", "ai-gateway", "llm-router", "nextjs", "openai-compatible", "prompt-injection", "self-hosted", "system-prompt"]
stars: 83
forks: 15
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 360
recentReleases: 10
createdAt: "2026-10-20T23:31:31Z"
lastCommitAt: "2026-11-02T13:34:48Z"
lastReleaseAt: "2026-10-23T16:46:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 35
maintainers: ["giienew"]
openGraphImageUrl: "https://opengraph.githubassets.com/42176cf10ac5ac10a43ecf880bc3cd31f921ee0a2047c7ac66e3c342ed1a454c/giienew/9router-pro"
---

# 9Router Pro

  **A Pro edition of 9Router with Prompt Injection: one injection per target — global, per API key, per model — as a system prompt or a scripted chat.**

  By **Gienetic** — [GitHub](https://github.com/giienew) · [Telegram](https://t.me/gienetic)

  Based on [9Router](https://github.com/decolua/9router) by decolua (MIT). Everything below the Pro section is the original project documentation.

## ✨ What's Pro

- **Prompt Injection** (dashboard page) — one injection per target, zero learning curve:
  - **Global** — injected into every chat request
  - **Per user** — one per API key: a persona for whoever holds the key
  - **Per model** — one per model, matched by the name clients call (combo, alias, or `provider/model`)
- **Two modes per injection** — a *single system prompt* (prepend or append), or a *chat script*: user/bot turns, as long as you like, inserted as a conversation that already happened. Fake history primes far harder than a system prompt alone.
- **Stacking** — a request receives at most three injections, ordered global → user → model. Injection happens after format translation through the router's own wire-aware injector (OpenAI, Claude, Gemini,…
