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
openIssues: 68
closedIssues: 763
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-24T04:23:47Z"
lastCommitAt: "2026-11-12T04:53:25Z"
lastReleaseAt: "2026-03-24T06:45:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 64
maintainers: ["xdustinface"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e32e6ca2f7a6b92cf40451e88f3df3fa808ebe3108d5ba8159220e357271f5d/manki-review/manki"
---

Manki sizes each review to the nature of the change, and you decide who reviews what. By default a change where no defect could hide gets one quick check, and one that could reach your users gets two finders on different models. In `.manki.yml` you can set up your own review groups, each reader with its own model, effort and focus, and route kinds of changes to them. Dedup drops repeats from prior reviews, a judge filters noise and classifies what remains, and manki learns your team's conventions over time.

## Why Manki

- **Multi-stage pipeline**: a planner triages the change, finders review in parallel, dedup catches repeats from prior reviews, a judge filters noise and classifies findings by severity
- **You decide who reviews what**: a review group lists the readers for a kind of change, each with its own model, effort and focus, and you route changes to groups by path or by the planner's triage. By default a change that could reach a user gets a second finder on another model with the same checklist, so the two models miss different things
- **Smart verdicts**: blocks PRs on real issues, approves over optional notes, and auto-approves when all blocking threads resolve
-…
