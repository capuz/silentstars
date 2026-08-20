---
repo: "atqamz/hand"
name: "hand"
description: "You lead. `hand` runs the crew."
readmeQualityOk: true
url: "https://github.com/atqamz/hand"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 11
forks: 0
openIssues: 6
closedIssues: 130
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-24T13:59:50Z"
lastCommitAt: "2026-08-20T04:09:27Z"
lastReleaseAt: "2026-08-13T04:09:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["atqamz", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0cf84da2d592a48c2875a982a17d2a4e3fffb0a252ccdc6ca60f8c2a40d247d4/atqamz/hand"
---

# Secondhand

**You lead. `hand` runs the crew.**

Secondhand turns one coding-agent session into a supervisor for a fleet of coding agents.

You talk to one agent. It plans the work, writes briefs, dispatches workers into isolated git worktrees, watches them, steers them when needed, and brings the results back to you.

`hand` is the CLI underneath that workflow. It owns lifecycle, state, isolation, and process supervision so the supervising agent can focus on judgment and coordination.

The canonical cross-cutting terms for this workflow are defined in [Hand orchestration vocabulary](https://github.com/atqamz/hand/blob/HEAD/docs/vocabulary.md).

```mermaid
flowchart LR
    user["You"] --> supervisor["Supervising agent"]
    supervisor --> hand["hand"]
    hand --> shipTask["Task: ship"]
    hand --> scoutTask["Task: scout"]
    shipTask --> worker1["Worker"]
    scoutTask --> worker2["Worker"]
    worker1 --> pr1["PR / branch"]
    worker2 --> report["Report"]
    pr1 --> supervisor
    report --> supervisor
```

Secondhand was inspired by [firstmate](https://github.com/kunchenguid/firstmate), rebuilding the same agent-fleet idea as a focused Go CLI.

## Why Secondhand?

Coding…
