---
repo: "ChiefGyk3D/scrum-around-and-find-out"
name: "scrum-around-and-find-out"
description: "Board as code for GitHub Projects, a bring-your-own-App Action that keeps it current, and a playbook for running Claude, Codex and Copilot as one team."
readmeQualityOk: true
url: "https://github.com/ChiefGyk3D/scrum-around-and-find-out"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 32
forks: 3
openIssues: 86
closedIssues: 41
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-10-07T17:59:41Z"
lastCommitAt: "2026-10-30T10:23:35Z"
lastReleaseAt: "2026-10-11T14:57:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 39
maintainers: ["ChiefGyk3D", "dependabot[bot]", "fusionx212"]
openGraphImageUrl: "https://opengraph.githubassets.com/10dedd902d9a24c57011480d4c2bbb314054db55fa7f2192d0dff9ff75ca4f14/ChiefGyk3D/scrum-around-and-find-out"
---

# Scrum Around and Find Out

> **The hard rule: no hidden work.** Every unit of work, human or agent, has an issue (or a Jira key) and a board card
> before work starts, and every pull request links its issue (`Refs #n` or `Closes #n`). Work without a card is a defect
> of the process. `safo hooks guard`, `safo audit`, `reconcile` and `sync` enforce it; see
> [docs/no-hidden-work.md](https://github.com/ChiefGyk3D/scrum-around-and-find-out/blob/HEAD/docs/no-hidden-work.md).

SAFO is three things, built for one maintainer running a team of AI agents across a dozen repositories:

1. **A GitHub Project defined as code.** `board.yaml` names the fields, options, iterations and views. An Action and a
   command line (`safo`) apply it and keep the board current, in the modes listed under [What it does](#what-it-does).
2. **Agent routing.** `agents.yaml` records which agent should get which kind of work, from one maintainer's
   measurements: Claude Code (Sonnet, Haiku, Opus), OpenAI Codex, the GitHub Copilot coding agent and a local Ollama
   model. Commands read local usage meters and recommend an agent. They dispatch nothing.
3. **A playbook and a lessons wiki.** Why the team is run…
