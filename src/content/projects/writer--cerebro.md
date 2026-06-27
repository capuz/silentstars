---
repo: "writer/cerebro"
name: "cerebro"
description: "Operations data platform for cloud, SaaS, identity, workflow, finding, compliance, and graph signals."
url: "https://github.com/writer/cerebro"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["aws", "cloud-security", "compliance", "devsecops", "gcp", "go", "iam", "kubernetes", "security"]
stars: 11
forks: 2
openIssues: 59
closedIssues: 190
watchers: 0
contributors: 9
recentReleases: 6
createdAt: "2026-03-05T16:42:32Z"
lastCommitAt: "2026-06-27T00:34:27Z"
lastReleaseAt: "2026-05-09T05:55:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 56
maintainers: ["jonathanhaaswriter", "devin-ai-integration[bot]", "factory-droid[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c5ede9e67cd9b535c2444c98265f59c8805314adcdbfe74702e8dd051369c67/writer/cerebro"
---

# Cerebro

**Operations data platform for cloud, SaaS, identity, workflow, finding, compliance, and graph signals.**

Cerebro ingests operational and security signals, turns them into source runtime events, claims, findings, reports, workflow events, compliance evidence, and graph context, then exposes that substrate through a Go CLI, JSON HTTP, Connect RPC, SDK helpers, and MCP.

## Start Here

```bash
git clone https://github.com/writer/cerebro.git
cd cerebro

make doctor
make serve-dev
```

By default, the local server listens on `:8080`.

```bash
curl -sS http://127.0.0.1:8080/health
curl -sS http://127.0.0.1:8080/sources
```

Run focused tests while iterating, then use CI-parity validation before broad PRs:

```bash
make test
make verify
```

For a durable local stack with NATS JetStream, Postgres, Neo4j, and the local bearer key `local-dev-key`:

```bash
docker compose up --build
```

## What Is In This Repo

- A Go bootstrap service built around `net/http`, Connect RPC, and `cmd/cerebro`.
- Built-in source integrations for cloud, SaaS, identity, endpoint, vulnerability, compliance, and workflow signals.
- Source runtime sync, append-log replay, claim/finding/report…
