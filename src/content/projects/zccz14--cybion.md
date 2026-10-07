---
repo: "zccz14/cybion"
name: "cybion"
description: "Agent Harness for Multi Tenant"
readmeQualityOk: true
url: "https://github.com/zccz14/cybion"
homepage: "https://cybion.ntnl.io"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [60, 38]
topics: ["ai", "ai-agent", "harness", "openai"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-01T20:41:23Z"
lastCommitAt: "2026-10-07T10:30:29Z"
lastReleaseAt: "2026-08-15T01:36:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 63
maintainers: ["zccz14"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3f95e6273b4706a667851958f09dd126715ef5bc9ab73de5ea9396dfe3c21c2/zccz14/cybion"
---

# Cybion

Cybion is the hosted AI execution service at
[`cybion.ntnl.io`](https://cybion.ntnl.io). Each signed-in Auth Mini user owns
isolated conversation threads, integrations, API keys, and paired Workers.

Each user is stored in one SQLite database:

```text
~/.cybion/users/<auth-mini-user-id>.sqlite3
```

The databases use WAL mode, foreign keys, and owner-only file permissions.

Administrator metadata is stored separately in `~/.cybion/default.sqlite3`.
Its `app_meta` table contains the single `root_user_id` key used to expose the
administrator navigation and system resource monitor. On a fresh installation,
the first authenticated browser session initializes that key atomically.

## Product boundary

- Auth is fixed to `https://auth.ntnl.io`. The browser obtains one token for
  `cybion.ntnl.io`, `linkit.ntnl.io`, `openai.ntnl.io`, `ctx.ntnl.io`, and
  `normai.ntnl.io`; each service checks its own audience. The Auth Mini
  provider deletes a session whose token does not cover every audience and
  re-logs in — a login mints audiences once and refresh keeps them — so the
  flow re-mints a complete session before the automatic NormAI connect runs.
- Controller restarts…
