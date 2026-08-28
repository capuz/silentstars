---
repo: "invergent-ai/surogates"
name: "surogates"
description: "Open platform for running Managed Agents at scale"
readmeQualityOk: true
url: "https://github.com/invergent-ai/surogates"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [79, 20]
stars: 24
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-09T10:41:06Z"
lastCommitAt: "2026-08-28T12:22:48Z"
lastReleaseAt: "2026-04-23T09:37:39Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 43
maintainers: ["flaviusburca", "madalintat", "luca-petre"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a1cb326dd7e24caa11498e20094b3551fb9f9b1199351791c5e51909ef65541/invergent-ai/surogates"
---

# Surogates

Surogates is an open platform for running managed agents at scale. It is built
around a durable session log, stateless agent workers, isolated execution
sandboxes, and user-facing channels such as web chat, Slack, Telegram, website
widgets, and programmatic API sessions.

The core idea is simple: keep the agent's reasoning loop, execution
environment, and user interface decoupled so each part can fail, scale, and be
governed independently.

Read the full [documentation](https://github.com/invergent-ai/surogates/blob/HEAD/docs/index.md).

## What Surogates Provides

### Managed Agent Runtime

- Durable sessions backed by a PostgreSQL append-only event log.
- Stateless workers that can replay session state and recover after crashes.
- A Redis-backed orchestrator that wakes sessions and distributes work.
- Per-session leases so only one worker runs a session at a time.
- Server-Sent Events for real-time web updates and replay from the event log.
- Background jobs for session cleanup, idle-session reset, scheduled work, and
  expert training export.

### Isolated Execution

- A clear brain/hands split: workers run the LLM loop; sandboxes run untrusted
  code and file…
