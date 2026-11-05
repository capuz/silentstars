---
repo: "czpython/druks"
name: "druks"
description: "Druks runs agent apps on your own infrastructure: durable runs that survive restarts, human approvals, and full history. Apps install as Python packages."
readmeQualityOk: true
url: "https://github.com/czpython/druks"
homepage: "https://druks.ai"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 24]
topics: ["agent-orchestration", "ai-agents", "dbos", "developer-tools", "durable-execution", "fastapi", "human-in-the-loop", "mcp", "postgresql", "python"]
stars: 20
forks: 4
openIssues: 37
closedIssues: 118
watchers: 3
contributors: 9
recentReleases: 8
createdAt: "2026-07-12T14:59:30Z"
lastCommitAt: "2026-11-05T14:05:33Z"
lastReleaseAt: "2026-10-12T15:58:32Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 52
maintainers: ["czpython", "dependabot[bot]", "p-r-a-v-i-n"]
openGraphImageUrl: "https://opengraph.githubassets.com/d63ac46fb9e3fff6d8c6be8ba1f25af5ba1990c3a9eab6a4d6f00271b3e75d6b/czpython/druks"
---

druks

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

The installer supports three deployment shapes backed by
[Drukbox](https://github.com/czpython/drukbox):

- **Docker:** `docker` (default) starts local sandbox containers on the host Docker daemon.
- **Remote:** `exe` starts exe.dev sandbox VMs over a tailnet.
- Each other provider…
