---
repo: "alexei-led/pi-model-router"
name: "pi-model-router"
description: "Independent Pi extension for four-tier model routing with optional privacy-gated Jev advice, deterministic baselines, budget controls, and safe fallbacks."
readmeQualityOk: true
url: "https://github.com/alexei-led/pi-model-router"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "developer-tools", "extension", "llm", "model-router", "model-routing", "npm-package", "pi", "pi-coding-agent", "typescript"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-17T07:54:20Z"
lastCommitAt: "2026-11-11T11:19:07Z"
lastReleaseAt: "2026-09-22T10:07:12Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 47
maintainers: ["alexei-led", "yeliu84"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ff22a09ea2d8f8cc99524c7ea58eb90bf7fb0f92d349caa8fe820375d84f5a6/alexei-led/pi-model-router"
---

# pi-model-router

**Stop changing models by hand.**

Keep one profile in [Pi](https://github.com/earendil-works/pi/tree/main/packages/coding-agent).
`pi-model-router` can select a different model and reasoning effort as the task changes, including between tool-loop requests.
Optional advice uses any text-capable classifier registered in Pi. The router uses Pi’s typed classifier API and requires explicit per-profile approval for the exact model.

## Why use it?

- **Fewer manual changes.** One profile can combine fast, low-cost routes with stronger models.
- **Control over cost and quality.** You choose the models, effort levels, fallback order, and baseline. You can pin a route at any time.
- **Routing modes.** `cost`, `balanced` or `quality` chooses a preferred model/effort pair, per profile, project or session. OpenAI defaults use Luna, Terra and Sol; custom routes keep deterministic transforms. [Choose a mode](https://github.com/alexei-led/pi-model-router/blob/HEAD/docs/routing-modes.md).
- **Built-in activity routes.** Recognized OpenAI and Claude profiles get defaults for code, debug, explore, plan, review, ops and docs. Tune one cell or opt out. [Defaults and…
