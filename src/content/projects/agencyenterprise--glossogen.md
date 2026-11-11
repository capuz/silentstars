---
repo: "agencyenterprise/GlossoGen"
name: "GlossoGen"
description: "A platform for running controlled experiments on teams of LLM agents: multi-agent simulations, an event-sourced run log, swap and fork interventions, and post-hoc evaluation metrics."
readmeQualityOk: true
url: "https://github.com/agencyenterprise/GlossoGen"
homepage: "https://agencyenterprise.github.io/GlossoGen/"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["agents", "ai-safety", "emergent-communication", "evaluation", "fastapi", "llm", "multi-agent", "python", "research", "simulation"]
stars: 28
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2026-03-12T19:20:37Z"
lastCommitAt: "2026-11-11T19:43:47Z"
lastReleaseAt: "2026-08-12T13:42:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 51
maintainers: ["CarlosBonetti", "github-actions[bot]", "NewtonSander"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1aba59cf8440fdb689a4b4f4b8d3a79073db2d1629962e97ec405a6f31fceb7/agencyenterprise/GlossoGen"
---

# GlossoGen

**[Documentation](https://agencyenterprise.github.io/GlossoGen/)** ·
[Quickstart](https://agencyenterprise.github.io/GlossoGen/latest/quickstart/) ·
[Scenarios](https://agencyenterprise.github.io/GlossoGen/latest/scenarios/) ·
[Paper](https://arxiv.org/abs/2609.01491) ·
[Live demo](https://emergentcomms.ai/demo)

A platform for running controlled experiments on teams of LLM agents. A scenario
puts several agents in a simulated task with their own roles, channels and tools;
the platform plays it out in rounds, records every message, tool call and model
response, and scores the run with the metrics you pick. The scenarios shipped
here study communication under pressure: no agent holds enough information to
succeed alone, and in most of them every character sent costs against a
per-round budget. Under that pressure agents compress, abbreviate, and invent
shorthand.

Everything else lives in the
**[documentation](https://agencyenterprise.github.io/GlossoGen/)**: installing,
running and evaluating simulations, the web UI, the fork and swap flows, and how
to ship scenarios and metrics in a package of your own.

## Install

glossogen needs Python 3.14 and is not on PyPI, so…
