---
repo: "manki-review/manki"
name: "manki"
description: "Multi-stage, multi-agent AI code review for GitHub — self-hosted, provider-neutral. A planner picks the team, agents review in parallel, a judge filters the noise."
readmeQualityOk: true
url: "https://github.com/manki-review/manki"
homepage: "http://manki.dustinface.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-code-review", "anthropic", "automation", "ci-cd", "claude", "code-review", "developer-tools", "github-action", "github-app", "llm"]
stars: 5
forks: 0
openIssues: 34
closedIssues: 606
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-24T04:23:47Z"
lastCommitAt: "2026-11-07T13:55:29Z"
lastReleaseAt: "2026-03-24T06:45:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 64
maintainers: ["xdustinface"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae209cbeed3476b4548bcbb945d871eb0b4a9ee70fdf051483cfcd90919790f4/manki-review/manki"
---

Manki sizes each review to the nature of the change: one reader for a change where no defect could hide, two readers on different models for one that could reach your users. Dedup drops repeats from prior reviews, a judge filters noise and classifies what remains, and manki learns your team's conventions over time.

## Why Manki

- **Multi-stage pipeline** — a planner triages the change, finders review in parallel, dedup catches repeats from prior reviews, a judge filters noise and classifies findings by severity
- **Two models where it matters** — changes that could reach a user get a second finder on another model with the same prompt, so the two readers miss different things
- **Smart verdicts** — blocks PRs on real issues, approves over style nitpicks; auto-approves when all blocking threads resolve
- **Multi-provider** — Anthropic, OpenAI, and Gemini, mix-and-match per stage via `.manki.yml`
- **Self-learning memory** — `/manki remember` teaches conventions, `/manki dismiss` suppresses false positives, patterns stick across PRs
- **Conversational** — reply to any review comment to discuss, or use `@manki explain`/`forget` inline
- **Self-hosted GitHub Action** — your API key,…
