---
repo: "block/schemabot"
name: "schemabot"
description: "Define your database schema in code and apply changes safely through pull requests or the CLI"
readmeQualityOk: true
url: "https://github.com/block/schemabot"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 33
forks: 13
openIssues: 7
closedIssues: 15
watchers: 2
contributors: 22
recentReleases: 0
createdAt: "2026-04-07T22:08:33Z"
lastCommitAt: "2026-11-26T22:43:42Z"
lastReleaseAt: "2026-05-26T20:46:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["aparajon", "Kiran01bm", "JashLal"]
openGraphImageUrl: "https://opengraph.githubassets.com/d659404b9d746cde8e50784077e76c1b451d0adf6029d40777a02c052db9c253/block/schemabot"
discussionCount: 0
---

---

SchemaBot is declarative and GitOps-driven: SQL files in your repository provide a shared source of truth across environments. It compares those files with the live database, shows the exact change, and applies it through pull requests or a CLI.

## The PR workflow

[Walk through the illustrated PR workflow](https://github.com/block/schemabot/blob/HEAD/docs/pre-merge-workflow.md#the-pr-workflow-step-by-step)

## From your terminal

**Plan and apply a change.** Review the SQL, apply the change, and follow it to completion.

**Know your database fleet.** Explore live schemas, spot lint issues, and follow changes through their logs.

**Freeze an environment.** For a code freeze or an incident, hold new schema changes until you lift the freeze.

[Get started with the CLI](https://github.com/block/schemabot/blob/HEAD/docs/cli.md) · [Explore your database fleet](https://github.com/block/schemabot/blob/HEAD/docs/schema-intelligence.md) · [Freeze an environment](https://github.com/block/schemabot/blob/HEAD/docs/freeze.md)

Block runs SchemaBot for the majority of its production schema changes, including MySQL tables spanning terabytes and Vitess databases with hundreds of shards.
