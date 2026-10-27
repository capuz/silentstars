---
repo: "re-cinq/lore"
name: "lore"
description: "the software agent factory"
readmeQualityOk: true
url: "https://github.com/re-cinq/lore"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 10
forks: 1
openIssues: 679
closedIssues: 1156
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-27T08:39:16Z"
lastCommitAt: "2026-10-27T09:16:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 49
maintainers: ["gedaiu", "lore-agent[bot]", "muemich"]
openGraphImageUrl: "https://opengraph.githubassets.com/344f3c7612cb9a415e4879acef077f2dc51f9fc09bd47186cf954417f320cda1/re-cinq/lore"
---

Shared context infrastructure for Claude Code.<br/>
  Org awareness + agent memory + task pipeline in one platform.

---

## What is Lore?

Lore is the shared context layer that makes Claude Code organization-aware. Developers open Claude Code and it already knows: org-wide conventions, team-specific patterns, architectural decisions, and current task state — without any manual context loading.

Beyond context, Lore is an **agent operating system**. It runs background agents that onboard repos, detect documentation gaps, check for spec drift, and review PRs — all producing pull requests that humans review and merge.

## Repository layout

```
apps/        services      lore-api · stations · mcp-server · web-ui
             images/tools  lore-code-trace (Go binary) · vscode-extension
libs/        shared libraries           shared (@re-cinq/lore-shared) · assembly-lines (@re-cinq/lore-assembly-lines) · server-core (@re-cinq/lore-server-core)
infra/       deploy & runtime           terraform (the `lore-platform` umbrella chart) · compose.yaml · chart-ci-values
specs/       speckit specs (spec/plan/tasks/contracts) — first-class, links into code
adrs/        architecture decision…
