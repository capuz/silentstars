---
repo: "xlmnxp/ixui"
name: "ixui"
description: "Incus UI, but with a Proxmox soul and an ESXi skeleton."
readmeQualityOk: true
url: "https://github.com/xlmnxp/ixui"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [78, 22]
topics: ["incus", "ui", "web"]
stars: 38
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-08-08T22:11:54Z"
lastCommitAt: "2026-11-16T11:53:13Z"
lastReleaseAt: "2026-11-16T11:53:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 39
maintainers: ["xlmnxp", "github-actions[bot]", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/b699e701ebaf4bb97b1c19c6e9602ef0c659ed13426e034780b77f1d536398bc/xlmnxp/ixui"
---

# IXUI — a web interface for Incus

> [!WARNING]
> **Pre-alpha.** IXUI is early software — expect missing features, rough edges and
> breaking changes. Do not point it at a production cluster you are not prepared
> to re-create.

IXUI is a web UI for [Incus](https://linuxcontainers.org/incus/): a single-page
React app that talks straight to incusd over its REST API and event stream. It is
built on a hand-written component system — no component library, no CSS
framework beyond Tailwind utilities — so the whole surface is ours to shape.

*Screenshots use demo data.*

## Why another UI

- **Cluster-first.** The sidebar is a real tree: cluster members, their instances,
  the project selector and the system/monitoring pages — not a flat table bolted
  onto a cluster API.
- **Fast to operate.** Bulk start/stop/restart/freeze/snapshot/delete, per-instance
  context menus, a command palette and keyboard-navigable dialogs.
- **Honest state.** Operations show live progress (download percentage, unpack
  stage), the task bar keeps running work visible, and editors warn before you
  throw away unsaved changes.
- **Light and dark, remembered.** System/dark/light theme, remembered split…
