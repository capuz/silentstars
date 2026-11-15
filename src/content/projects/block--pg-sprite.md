---
repo: "block/pg-sprite"
name: "pg-sprite"
description: "Online schema change engine for PostgreSQL"
readmeQualityOk: true
url: "https://github.com/block/pg-sprite"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 12
forks: 1
openIssues: 4
closedIssues: 0
watchers: 2
contributors: 15
recentReleases: 10
createdAt: "2026-08-03T03:42:08Z"
lastCommitAt: "2026-11-15T08:18:25Z"
lastReleaseAt: "2026-11-12T08:45:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 41
maintainers: ["Kiran01bm", "aparajon", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d04f5be43d4079034c1ad1a66afe3882c6e39cdcddb3d459e76f294cf25624ad/block/pg-sprite"
---

# pg-sprite

> [!WARNING]
> **Early release — not production-ready.** This project is under active
> development. Tagged releases exist, but pre-1.0 there are no stability
> guarantees and no support. Interfaces, behavior, on-disk/database artifacts,
> and the CLI surface may all change between releases. Do **not** run this
> against any database you care about.

An online schema-change engine for **PostgreSQL** (community, RDS, and
Aurora; 14+): a decoupled **planner → router → executor** design where the
planner classifies each change, the router picks a strategy, and
interchangeable executors carry it out — the cheap native PostgreSQL idiom
when one exists (`CONCURRENTLY`, `NOT VALID` + `VALIDATE`, fast default,
`USING INDEX`), and a log-based, checksum-gated, resumable copy-and-swap for
genuine table rewrites — a general `ALTER COLUMN TYPE` runs through it today.

The planner is PostgreSQL's missing `ALGORITHM=` / `LOCK=` declaration: MySQL
lets authors assert a cost bracket and a concurrency impact and fails closed
when either can't be honored — PostgreSQL silently runs whichever cost
applies. pg-sprite proves both dimensions before execution, routes each
change to the safest…
