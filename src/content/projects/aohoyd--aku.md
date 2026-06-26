---
repo: "aohoyd/aku"
name: "aku"
description: "Terminal UI for Kubernetes clusters built with Bubble Tea. Resource browsing, YAML/describe views, live log streaming, split panes, exec, debug containers, port forwarding, Helm management, and vim-style navigation."
url: "https://github.com/aohoyd/aku"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["bubbletea", "cli", "devops", "go", "helm", "k8s", "kubectl", "kubernetes", "terminal", "tui"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2023-11-15T09:48:51Z"
lastCommitAt: "2026-06-26T06:45:43Z"
lastReleaseAt: "2026-04-12T19:08:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 70
maintainers: ["aohoyd"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7dfaf5ec0b1433a76cb2d4c4314609e436ae106580c0f072f7ebf4878cfef5e/aohoyd/aku"
---

# aku

</p>

**A**nother **K**8s **U**I

A terminal UI for managing Kubernetes clusters, built with [Bubble Tea](https://github.com/charmbracelet/bubbletea).

</p>

## Features

**Resource browsing**
- Automatic discovery of any CRD or API resource not covered by built-in plugins
- Disambiguation of same-name resources across API groups (e.g. `certificates [cert-manager.io/v1]`)
- Helm release management with values editing, rollback, and chart switching
- Drill-down navigation between related resources (deployment → replicaset → pods → containers)

**Views**
- YAML view with syntax highlighting (managedFields stripped)
- Helm release values view: user-supplied (`v`) or full coalesced (`V`) in the YAML panel
- Describe view with events and environment variable resolution
- Live log streaming with time range presets, container selection, and autoscroll
- Log syntax highlighting (JSON, log levels, IPs, URLs, UUIDs, timestamps, paths, key=value)
- Split panes with independent namespace, filter, and cursor per pane (new splits are inserted adjacent to the focused pane, not appended)
- Vertical and horizontal layout orientation (toggle with `%` or `--layout` flag)
- Zoom the focused…
