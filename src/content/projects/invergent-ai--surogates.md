---
repo: "invergent-ai/surogates"
name: "surogates"
description: "Open platform for running Managed Agents at scale"
url: "https://github.com/invergent-ai/surogates"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 21
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-09T10:41:06Z"
lastCommitAt: "2026-07-04T19:20:50Z"
lastReleaseAt: "2026-04-23T09:37:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 46
maintainers: ["flaviusburca"]
openGraphImageUrl: "https://opengraph.githubassets.com/88043d1f1ff3cbbc7c4dd54a259abd35408eaf05638d7aa09d87842c9989e20a/invergent-ai/surogates"
---

# Surogates

Surogates is an open platform for running managed agents at scale. It is built
around a durable session log, stateless agent workers, isolated execution
sandboxes, and user-facing channels such as web chat, Slack, Telegram, website
widgets, and programmatic API sessions.

The core idea is simple: keep the agent's reasoning loop, execution
environment, and user interface decoupled so each part can fail, scale, and be
governed independently.

Read the full [documentation](docs/index.md).

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
  code and file operations.
- Development sandboxes via local processes…
