---
repo: "czpython/druks"
name: "druks"
description: "Autonomous software delivery on your own Claude/Codex subscriptions — durable runs, human gates, sandboxed agents. Druks is the self-hosted home for durable agent apps."
readmeQualityOk: true
url: "https://github.com/czpython/druks"
homepage: "https://druks.ai"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 24]
topics: ["agent-orchestration", "ai-agents", "dbos", "developer-tools", "durable-execution", "fastapi", "human-in-the-loop", "mcp", "postgresql", "python"]
stars: 11
forks: 1
openIssues: 8
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 6
createdAt: "2026-07-12T14:59:30Z"
lastCommitAt: "2026-09-10T08:20:42Z"
lastReleaseAt: "2026-09-05T17:59:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 51
maintainers: ["czpython", "dependabot[bot]", "druks-operator[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfc69ab38182c74d711796a2a7d5bbde9e59cbb8e0c4cc45e82c884a748c6365/czpython/druks"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/czpython/druks/main/docs/assets/logo/web/DruksLogo_White.svg" />
  </picture>
</p>

# Druks

> [!WARNING]
> Druks is under active development. Breaking changes and rough edges can occur
> before version 1.0. `main` and `latest` contain edge builds. They are not
> stable releases.

Druks is a self-hosted **home for durable agent apps**. It runs agents through
connected harnesses. The included Software Factory app automates software
delivery from a ticket to a reviewed pull request.

An ordinary agent script loses its place when the process dies. A Druks
workflow records the result of each completed durable operation in Postgres.
After a restart or deploy, Druks replays the workflow and reuses those recorded
results instead of repeating completed work. If the process stops *inside* an
operation, that operation can run again. Thus, side effects still require
idempotency. [Durability and recovery](https://docs.druks.ai/concepts#durability-and-recovery)
explains this boundary.

## Install

The installer supports three deployment shapes backed by…
