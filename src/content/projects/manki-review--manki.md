---
repo: "manki-review/manki"
name: "manki"
description: "Multi-stage, multi-agent AI code review for GitHub — self-hosted, provider-neutral. A planner picks the team, agents review in parallel, a judge filters the noise."
readmeQualityOk: true
url: "https://github.com/manki-review/manki"
homepage: "http://manki.dustinface.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-code-review", "anthropic", "automation", "ci-cd", "claude", "code-review", "developer-tools", "github-action", "github-app", "llm"]
stars: 5
forks: 0
openIssues: 20
closedIssues: 667
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-24T04:23:47Z"
lastCommitAt: "2026-11-09T03:30:46Z"
lastReleaseAt: "2026-03-24T06:45:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 65
maintainers: ["xdustinface"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ef324ca824f0f02d1002de9c516082c91d99829254574e1ff5fb9fc57b8d04b/manki-review/manki"
---

Manki sizes each review to the nature of the change: one reader for a change where no defect could hide, two readers on different models for one that could reach your users. Dedup drops repeats from prior reviews, a judge filters noise and classifies what remains, and manki learns your team's conventions over time.

## Why Manki

- **Multi-stage pipeline** — a planner triages the change, finders review in parallel, dedup catches repeats from prior reviews, a judge filters noise and classifies findings by severity
- **Two models where it matters** — changes that could reach a user get a second finder on another model that searches from the code around the change, so the two readers miss different things
- **Smart verdicts** — blocks PRs on real issues, approves over style nitpicks; auto-approves when all blocking threads resolve
- **Multi-provider** — Anthropic, OpenAI, and Gemini, mix-and-match per stage via `.manki.yml`
- **Self-learning memory** — `/manki remember` teaches conventions, `/manki dismiss` suppresses false positives, patterns stick across PRs
- **Conversational** — reply to any review comment to discuss, or use `@manki explain`/`forget` inline
- **Self-hosted GitHub…
