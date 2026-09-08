---
repo: "cajasmota/grafel"
name: "grafel"
description: "Multi-repo code knowledge graphs for AI agents. Cross-repo linking, infrastructure topology, watcher-driven freshness."
readmeQualityOk: true
url: "https://github.com/cajasmota/grafel"
language: "Go"
languages: ["Go", "C"]
languagePcts: [53, 44]
stars: 13
forks: 4
openIssues: 201
closedIssues: 3405
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-05-08T16:35:54Z"
lastCommitAt: "2026-09-08T08:16:02Z"
lastReleaseAt: "2026-06-25T11:05:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["cajasmota", "arthurgeron"]
openGraphImageUrl: "https://opengraph.githubassets.com/25d502127733f7bfe68c30d677bb0d4c1d4140b710c888c205569d58a6672a7d/cajasmota/grafel"
---

# grafel

> ## Map your codebase, navigate any part.
>
> *Where grep gets lost, the Grafel shows the way.*

**No cloud indexing, no account, no data sent anywhere.** Everything runs locally — the daemon indexes on your machine and never phones home.

**grafel** is a local code-knowledge-graph daemon that gives AI agents structural navigation across one or many repos — call graphs, cross-repo traces, HTTP surface maps, process flows — via 22 MCP tools.

**A companion to `grep`, not a replacement:** `grep` finds text, grafel maps structure. Its value is **navigation** — where `X` is defined, who calls `Y`, how a request flows end-to-end, the blast radius of a change — the questions grep can't answer. (Fewer file reads also means fewer tokens — a side effect, not the point.)

---

## grep finds text. grafel finds the answer.

Three questions an AI agent actually gets asked — and where plain `grep` leaves it stranded (fictional projects; grafel works the same on yours):

**1. "Where does `amountDue` on the invoice report come from — end to end?"**
- **grep** matches `amountDue` in a React component, a controller, maybe a SQL string — but can't connect them or say which column backs…
