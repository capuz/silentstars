---
repo: "navapbc/rebar"
name: "rebar"
description: "Rebar can block work until an AI plan review passes, require signed completion verification before close, and reconcile its event-sourced ticket record with Jira across CLI, Python, and MCP. GitHub is a read-only mirror. Code review runs in Gerrit."
readmeQualityOk: true
url: "https://github.com/navapbc/rebar"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-06-08T16:14:51Z"
lastCommitAt: "2026-11-13T03:42:13Z"
lastReleaseAt: "2026-07-16T03:07:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["RebarBotNava"]
openGraphImageUrl: "https://opengraph.githubassets.com/d01f143608dd5e8f1b1bcab16396a05d844e593d9b3325c5007686a167af6307/navapbc/rebar"
---

# rebar

**An event-sourced, git-backed ticket store + Jira reconciler built for agent
swarms — one store, exposed as a Python library, a **CLI**, and an **MCP** server.**

- **Three surfaces, one store** — drive rebar as a **CLI** (`rebar`), a Python
  library (`import rebar`), or an **MCP** server (`rebar-mcp`).
- **The tracker lives in the repo** — tickets are an append-only event log on a
  `tickets` git branch; no database, no daemon, and it travels with every clone.
- **Built for parallel agents** — atomic claims, convergent merges, and provenance
  links let many agents and sessions write at once without lost work.
- **Optional LLM gates** — review a ticket's *plan* before work, its *completion*
  before close, and its *code* before it merges.
- **Bidirectional Jira sync** — a level-triggered reconciler keeps tickets and Jira
  in step, so teammates stay in the loop.
- **Dogfooded through two independent gates** — every change to rebar's own `main`
  must pass an LLM code review **and** CI, on Gerrit, before it lands.

## Install

```bash
pipx install nava-rebar          # the `rebar` CLI (add [mcp] / [agents] for those extras)
brew install navapbc/rebar/rebar # or via…
