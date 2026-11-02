---
repo: "Elevarq/Signals"
name: "Signals"
description: "Read-only PostgreSQL diagnostic collector. No AI, no cloud, no write operations. Collects statistics from pg_stat views and packages them as portable snapshots."
readmeQualityOk: true
url: "https://github.com/Elevarq/Signals"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["database", "dba", "diagnostics", "golang", "monitoring", "observability", "pg-stat-statements", "postgres", "postgresql"]
stars: 5
forks: 1
openIssues: 18
closedIssues: 306
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-27T22:37:34Z"
lastCommitAt: "2026-11-02T15:17:31Z"
lastReleaseAt: "2026-07-19T15:36:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 58
maintainers: ["fheikens", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af5cda742024abe569638bbe3774ae293b8f4ca601558524536acd4caa38202e/Elevarq/Signals"
---

# Elevarq Signals

Elevarq Signals is a read-only PostgreSQL diagnostic collector. It runs on
your infrastructure, collects statistics from your databases, and
packages them as portable snapshots. No data leaves your machine. No AI.
No cloud. Just structured evidence from the views PostgreSQL already
exposes.

From [Elevarq](https://elevarq.com) — PostgreSQL tools for engineering teams.

> **Read-only by design** — three independent enforcement layers prevent
> any write operations. Unsafe roles (superuser, replication) are blocked
> before collection starts.
> [Every SQL query is in the source.](https://github.com/Elevarq/Signals/blob/HEAD/internal/pgqueries/catalog.go)
>
> **No cloud, no phone-home** — all data stays on your machine. No
> telemetry, no analytics, no external network calls.
>
> **No AI inside** — Elevarq Signals is a pure data collector. No language
> models, no scoring, no recommendations. What you collect is what you get.
>
> **Built for restricted environments** — runs airgapped, as a non-root
> container, with no internet dependency. Suitable for networks where
> third-party monitoring agents are not permitted.

---

## Try it in 2 minutes

```bash
git clone…
