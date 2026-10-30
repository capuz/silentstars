---
repo: "RuslanGabbasov/temporality"
name: "temporality"
description: "Temporality is an open runtime and control plane for agentic systems: it runs long-running tasks, keeps an evidentiary history of actions, keeps permissions and oversight under control, and turns verified experience into knowledge and skills that work on subsequent tasks."
originalDescription: "Temporality — открытая среда исполнения и контур управления для агентских систем: выполняет долгие задачи, ведёт доказательную историю действий, держит под контролем права и надзор — и превращает проверенный опыт в знания и навыки, которые работают на следующих задачах."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/RuslanGabbasov/temporality"
homepage: "https://temporality.ext.io/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [60, 32]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-14T12:44:29Z"
lastCommitAt: "2026-10-30T10:22:42Z"
lastReleaseAt: "2026-10-19T05:59:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["RuslanGabbasov"]
openGraphImageUrl: "https://opengraph.githubassets.com/46565ef8b00464f0540662a0e3aad7e7603867bd81191c8faa74c5d6e6d3d124/RuslanGabbasov/temporality"
---

# Temporality

**Russian** · [English](https://github.com/RuslanGabbasov/temporality/blob/HEAD/README.en.md) · [Documentation](https://ruslangabbasov.github.io/temporality/docs/) · [Harness operations](https://ruslangabbasov.github.io/temporality/docs/operations.html)

Temporality is a runtime and control plane for AI agents: long-running tasks on Temporal, a complete execution trace, permissions and approvals, and the accumulation of experience that returns to subsequent runs.

```text
Agent Kernel ──events──▶ Journal ──projection──▶ Knowledge / Hints
     ▲                      │                         │
     └──────── hints ◀──────┴──── Experience Timeline ┘
```

## Quick start

Only Docker (BuildKit) is required. No .env files or keys are needed at startup. The model, first agent, and sandbox are configured in the onboarding wizard the first time you open the interface.

```sh
mkdir temporality && cd temporality
curl -o docker-compose.yml https://raw.githubusercontent.com/RuslanGabbasov/temporality/main/docker-compose.yml
docker compose up -d
```

Open `http://localhost:3000`. The wizard guides you through: first project → administrator → model provider (key + automatic…
