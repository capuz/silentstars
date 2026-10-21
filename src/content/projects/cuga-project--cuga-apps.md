---
repo: "cuga-project/cuga-apps"
name: "cuga-apps"
description: "A showcase of conversational and pipeline apps built on CUGA — a planner / executor agent runtime. Each app is a single-file FastAPI server wrapping a CugaAgent with a tool list and a system prompt; the right-hand panel of every app shows live structured state pushed from the agent."
readmeQualityOk: true
url: "https://github.com/cuga-project/cuga-apps"
homepage: "https://huggingface.co/spaces/ibm-research/cuga-apps"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 42
forks: 25
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-04-29T09:00:14Z"
lastCommitAt: "2026-10-21T17:31:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 71
undervaluedScore: 42
maintainers: ["anupamamurthi", "Harmedox", "axie22"]
openGraphImageUrl: "https://opengraph.githubassets.com/77624b0a85b091db82cb9f785535803c15f6a2c7461499df8c532dc3cb2a5f7a/cuga-project/cuga-apps"
---

# cuga-apps

**Real agentic apps built using [CUGA](https://cuga.dev).**

The model is rarely the hard part of an agent. The work is wiring up tools,
holding state together across a long task, adding guardrails, and growing from
one agent to several without a rewrite. **CUGA** — the **C**onfigurable
**G**eneralist **A**gent, an open-source harness from IBM Research
(`pip install cuga`) — handles that plumbing, so the part you write shrinks to
**a tool list and a system prompt**. It plans before it acts, executes with a mix
of tool calls and generated code, holds intermediate state across a long run, and
self-corrects — the machinery behind **#1 on [AppWorld](https://appworld.dev/)
and [WebArena](https://webarena.dev/)**.

**cuga-apps** is what that feels like in practice: **35 apps** in
[`cuga-apps/apps/`](https://github.com/cuga-project/cuga-apps/blob/HEAD/cuga-apps/apps/) (**21 in the polished showcase set**), each a
single-file FastAPI server wrapping one `CugaAgent` with a tool list and a system
prompt. The right-hand panel of every app shows live structured state the agent
pushes as it works. If you've written a FastAPI route, you can read every line.

> **Heads up — the real…
