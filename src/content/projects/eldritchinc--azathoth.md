---
repo: "EldritchInc/azathoth"
name: "azathoth"
description: "the azathoth ai framework"
readmeQualityOk: true
url: "https://github.com/EldritchInc/azathoth"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-01T20:42:05Z"
lastCommitAt: "2026-10-27T12:40:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 74
maintainers: ["OMontano"]
openGraphImageUrl: "https://opengraph.githubassets.com/16f279159d1ecd42f02f0b88aa7b98860fb9716909685a90202509c157f2c628/EldritchInc/azathoth"
fundingLinks: ["PATREON:https://patreon.com/ErisDiscordiaM"]
---

# Azathoth

> Empirical optimization for context-aware AI workflows.

Azathoth is an open-source engine for building LLM workflows by composing
them rather than coding them, and then improving them with measured
evidence rather than intuition.

You describe a workflow as a JSON document:

- prompt steps that state model requirements instead of naming models;
- tool steps;
- child workflows and loops;
- the dependencies, conditions and failure policies between them.

Azathoth runs it and benchmarks it. It searches for the models that pass your
benchmark at the latency and cost you target. It deploys only what you
deliberately promote.

```text
define ──► run ──► benchmark ──► optimize ──► promote ──► invoke production
```

## Workflows Are Composed, Not Coded

Most LLM workflows are programs: prompts in source files, models as
constants, control flow as code. Every change, whether a new model, a
reworded prompt or an extra review step, goes through engineering.

Azathoth makes building a workflow a composition activity. That moves LLM
workflows out of engineering and into the hands of the teams who run and own
them:

- **platform and DevOps teams** operate workflows like…
