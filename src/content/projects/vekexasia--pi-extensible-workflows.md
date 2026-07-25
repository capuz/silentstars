---
repo: "vekexasia/pi-extensible-workflows"
name: "pi-extensible-workflows"
description: "Deterministic multi-agent workflow orchestration for Pi"
readmeQualityOk: true
url: "https://github.com/vekexasia/pi-extensible-workflows"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 13
closedIssues: 119
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-12T20:45:52Z"
lastCommitAt: "2026-07-25T06:01:22Z"
lastReleaseAt: "2026-07-23T05:35:13Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 78
undervaluedScore: 61
maintainers: ["vekexasia"]
openGraphImageUrl: "https://opengraph.githubassets.com/caf82d84eca8a57241840156b0ce97fbc772eaf3a7e367d889ec3c733ebc0265/vekexasia/pi-extensible-workflows"
---

# pi-extensible-workflows

> There are many workflow extensions but this one is **Yours.**

Turn multi-agent tasks into deterministic jobs that fan out in parallel, pause for approval, and resume without rerunning completed work.

[Documentation](https://vekexasia.github.io/pi-extensible-workflows/) | [Developer guide](https://vekexasia.github.io/pi-extensible-workflows/developers.html) | [Agent guide](https://vekexasia.github.io/pi-extensible-workflows/agents.html) | [Extension authoring](https://vekexasia.github.io/pi-extensible-workflows/extensions.html)

Requires Node.js 22.19 or newer. This is a trusted Pi extension with the same filesystem and process access as Pi.

## Install

```sh
pi install npm:pi-extensible-workflows
```

For source installs and local development, see the [installation guide](https://vekexasia.github.io/pi-extensible-workflows/developers.html#installation).

## Capabilities

The main Pi agent acts as the orchestrator: it writes workflow scripts on the fly for each task. Pi extensions can add reusable functions and variables to those scripts; every registered function is also directly runnable as a top-level workflow.

Inline workflow launches require a…
