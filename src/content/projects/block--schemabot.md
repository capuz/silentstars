---
repo: "block/schemabot"
name: "schemabot"
description: "GitOps for database schemas"
readmeQualityOk: true
url: "https://github.com/block/schemabot"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 30
forks: 6
openIssues: 8
closedIssues: 11
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2026-04-07T22:08:33Z"
lastCommitAt: "2026-09-05T07:49:55Z"
lastReleaseAt: "2026-05-26T20:46:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 37
maintainers: ["aparajon", "Kiran01bm"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1a8a2fc72d880b2e0979dee1b213a488158156db484df221065581d95e38ae3/block/schemabot"
discussionCount: 0
---

# <a href="./assets/schemabot-avatar.svg"><img src="./assets/schemabot-avatar.svg" alt="SchemaBot" style="height: 1em; max-width: 100%;"></a> SchemaBot

GitOps for database schemas. Define your desired schema in SQL files, open a PR, and SchemaBot plans and executes your schema changes safely.

These badges are about capability. **GA** means the engine can change a large table online and gives an operator a real lever over a change that is already running; **early alpha** means it cannot yet. [docs/engines.md](https://github.com/block/schemabot/blob/HEAD/docs/engines.md) defines both and is the capability matrix: how each engine executes a change, which control operations it supports, and how it manages load. A narrower engine is not a looser one, which is [docs/invariants.md](https://github.com/block/schemabot/blob/HEAD/docs/invariants.md)'s subject: the runtime safety guarantees that hold whichever engine runs the change.

## Schema Changes via Pull Request

Open a PR with schema changes and SchemaBot handles the rest — plan, apply, and verify across environments:

## Interactive CLI

SchemaBot provides a fully interactive CLI for planning, applying, and monitoring schema…
