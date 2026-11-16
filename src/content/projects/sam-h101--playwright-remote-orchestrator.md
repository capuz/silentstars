---
repo: "Sam-H101/playwright-remote-orchestrator"
name: "playwright-remote-orchestrator"
description: "Playwright Remote Orchestrator "
readmeQualityOk: true
url: "https://github.com/Sam-H101/playwright-remote-orchestrator"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [59, 24]
topics: ["playwright", "python3", "webtests"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2022-10-25T22:18:39Z"
lastCommitAt: "2026-11-16T04:22:08Z"
lastReleaseAt: "2026-11-11T17:51:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 76
maintainers: ["Sam-H101", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8db143652a97c09e2d858d82dea2934080988743e260771efbc70f3a761cf3a6/Sam-H101/playwright-remote-orchestrator"
discussionCount: 0
---

# playwright-remote-orchestrator

A Playwright grid. Checks connect to one hub, which hands each one a free browser slot on any number of runner hosts: Linux containers, Windows machines, anything that runs Node. Checks live in one place; the browsers run wherever you have capacity.

Runner hosts register themselves with the hub and dial **out** to it, so the only port you open is the hub's, on the orchestrator host. Runner hosts open no inbound ports.

**Documentation: <https://playwright-remote-orchestration.sdevwork.com>** (source in [`docs/`](https://github.com/Sam-H101/playwright-remote-orchestrator/blob/HEAD/docs/index.md)).

## Architecture

```
  example_playwright (main.py + pytest)            grid_ui :4444 (127.0.0.1 only)
  and any other Playwright test                            |
     |                                                     v
     | ws://hub:4500/connect        +-------------------------------------------+
     v                              |                   mysql                   |
  +--------------------------+      |    nodes, slots, slot health, claims      |
  |  hub  (gateway/hub.js)   |----->+-------------------------------------------+…
