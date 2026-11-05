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
contributors: 21
recentReleases: 10
createdAt: "2026-03-12T19:20:37Z"
lastCommitAt: "2026-11-05T14:05:07Z"
lastReleaseAt: "2026-08-12T13:42:09Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 57
maintainers: ["CarlosBonetti", "NewtonSander", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7730f90ec3fb38e7e6e2f9a066fca594a458c7b37f8810255e4d5cba2072ab8/agencyenterprise/GlossoGen"
---

# GlossoGen

**[Documentation](https://agencyenterprise.github.io/GlossoGen/)** ·
[Quickstart](https://agencyenterprise.github.io/GlossoGen/latest/quickstart/) ·
[Scenarios](https://agencyenterprise.github.io/GlossoGen/latest/scenarios/) ·
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

glossogen needs Python 3.14 and is not on PyPI, so pin a tag from
[the releases…
