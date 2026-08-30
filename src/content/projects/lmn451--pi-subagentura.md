---
repo: "lmn451/pi-subagentura"
name: "pi-subagentura"
description: "Orchestrator, reusable multi-agent workflows and observable, attachable sub-agents for the Pi coding agent."
readmeQualityOk: true
url: "https://github.com/lmn451/pi-subagentura"
homepage: "https://subagentura.tech"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent-workflows", "multi-agent", "orchestration", "pi", "pi-coding-agent", "subagents", "tmux", "zellij"]
stars: 9
forks: 5
openIssues: 9
closedIssues: 6
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-04-26T16:11:27Z"
lastCommitAt: "2026-08-30T09:25:14Z"
lastReleaseAt: "2026-08-28T14:09:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 84
undervaluedScore: 61
maintainers: ["lmn451"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e444a82b90d88702733e9ddb64cf02845c2facd925d78b2cb25b7758f02256b/lmn451/pi-subagentura"
---

# pi-subagentura

> **Docs ownership:** this repository is the source of truth for `docs/`.
> [`pi-docs`](https://github.com/lmn451/pi-docs) is the separately published doc
> injector that can index these files; it does not manage or sync them.

Give the parent Pi agent one task and let it build the team. pi-subagentura adds
reusable multi-agent workflows, lightweight background delegation, and real
child Pi sessions you can watch, attach to, and continue in tmux or Zellij.

For routing-first delegation, start Pi with `--orchestratorv2`. The prompt
guides the parent to route clear work to attachable interactive subagents, ask
for clarification when a request is ambiguous or a narrow request has no matching
child, and leave specialist repository work to those children. Compatibility
workflow and in-process tools remain registered.

For reusable workflows, start Pi with the bundled orchestration guidance and
describe the outcome you want. The parent can turn that request into a saved
workflow, run its agents in the background, and keep their intermediate results
out of the parent context.

## Installation

See…
