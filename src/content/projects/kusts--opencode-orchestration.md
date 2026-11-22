---
repo: "Kusts/opencode-orchestration"
name: "opencode-orchestration"
description: "Autonomous multi-agent orchestration for OpenCode: 19 specialized subagents, cheap/strong model pools, mandatory preflight enforcement, v3 routing scripts and a one-line installer with model overrides"
readmeQualityOk: true
url: "https://github.com/Kusts/opencode-orchestration"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [97]
stars: 5
forks: 2
openIssues: 94
closedIssues: 36
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-09-24T14:42:44Z"
lastCommitAt: "2026-11-22T11:49:40Z"
lastReleaseAt: "2026-10-19T16:20:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 85
undervaluedScore: 53
maintainers: ["Kusts"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a466ef85bf81925d62b13b08b83e109e39d2a73a8c710e5bdb4e8b1c01703da/Kusts/opencode-orchestration"
---

# opencode-orchestration

> Short intro in English: autonomous subagent orchestration for OpenCode.
> One Planner (`build`) plus 19 delegated workers, mandatory preflight
> and a `coder → tester → reviewer` cycle — packaged for install on any machine.

Orquestração autônoma de subagents para o OpenCode, empacotada para
instalação em qualquer máquina. O agente principal atua como Planner e
delega a workers especializados sem pedir permissão a cada passo.

## O que é

Um único Planner (`build`, herda o modelo da sessão) + 19 workers delegáveis
em pools cheap/strong, com preflight obrigatório de orquestração
(`SINGLE_WORKER`, `MULTI_WORKER`, `PERSISTENT_GOAL`, `DETERMINISTIC_FALLBACK` ou `BLOCKED` antes
da primeira ação), ciclo `coder → tester → reviewer` e um plugin de
enforcement que injeta o mandato de orquestração em toda sessão e grava
telemetria local sanitizada. Detalhes em [docs/ARCHITECTURE.md](https://github.com/Kusts/opencode-orchestration/blob/HEAD/docs/ARCHITECTURE.md).

Estado operacional e limites das certificações: [docs/OPERATIONAL-STATUS.md](https://github.com/Kusts/opencode-orchestration/blob/HEAD/docs/OPERATIONAL-STATUS.md).
