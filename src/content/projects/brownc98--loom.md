---
repo: "BrownC98/loom"
name: "loom"
description: "Lightweight node-graph orchestration runtime for multi-agent development"
readmeQualityOk: true
url: "https://github.com/BrownC98/loom"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [58, 31]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-18T07:31:08Z"
lastCommitAt: "2026-10-27T12:34:57Z"
lastReleaseAt: "2026-10-21T01:30:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["BrownC98"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d3085267eeb9b5ef4505cb4fd2ea63d7837dad26392d897b3129f636a5a0115/BrownC98/loom"
---

Each agent is a node card with its real terminal. Parents spawn children, children report back, and each message shows on the edge between them.

## Features

| Feature | What it does |
|---|---|
| **Live terminals as nodes** | Each agent runs in a real TUI. Click a card to type into it. Double-click to enlarge it. |
| **Mix agent CLIs** | Different agents work in one tree. Each card head shows the CLI and the model. |
| **Small messaging CLI** | Agents use `loom spawn`, `send`, `wait` and `done` to split work and report results. |
| **Worktree groups** | Nodes are grouped by git worktree. `--worktree <branch>` makes a new group. |
| **Commit graph and event console** | See the commits of all branches and each message between nodes. |

## How agents talk

An agent runs these commands in its own terminal. loom gives each node its address and token.

```sh
loom spawn tests --role 워커 --file brief.md     # make a child in this worktree
loom note tests "Please stand by for review."    # queue a message
loom wait                                        # wait for the next message
loom done "Added one toggle() test"              # report to the parent
```

## Built-in skills

loom ships…
