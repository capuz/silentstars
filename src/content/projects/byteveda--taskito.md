---
repo: "ByteVeda/taskito"
name: "taskito"
description: "Rust based python task worker"
url: "https://github.com/ByteVeda/taskito"
homepage: "http://docs.byteveda.org/taskito/"
language: "Python"
languages: ["Python", "Rust", "TypeScript"]
languagePcts: [39, 32, 21]
stars: 11
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T16:20:39Z"
lastCommitAt: "2026-06-28T03:09:36Z"
lastReleaseAt: "2026-03-21T18:59:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["pratyush618", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e964dbd6112025f08b43e6872daa409259b3fe926e44f83f210182d5b844836/ByteVeda/taskito"
---

# taskito

A Rust-powered task queue with native SDKs. One engine — no broker required, just SQLite, Postgres, or Redis.

</div>

Most task queues need a separate broker (Redis, RabbitMQ) even for single-machine workloads.
taskito embeds storage, scheduling, and worker management into one install with no external
services. The engine is a single Rust core — a Tokio async scheduler, an OS-thread worker pool,
and Diesel over SQLite in WAL mode — exposed to each language through a thin native SDK.

## SDKs

| Language | Install | Package | Docs |
|----------|---------|---------|------|
| **Python** | `pip install taskito` | [PyPI](https://pypi.org/project/taskito/) · [`sdks/python`](sdks/python) | [Python docs](https://docs.byteveda.org/taskito) |
| **Node.js** | `npm install @byteveda/taskito` | [npm](https://www.npmjs.com/package/@byteveda/taskito) · [`sdks/node`](sdks/node) | [Node docs](https://docs.byteveda.org/taskito/node) |

Each SDK is self-contained — see its README for install, quickstart, and the full API.

## Architecture

One Rust core (`crates/`), one thin SDK shell per language (`sdks/`). The DB is the source of
truth; the GIL/event loop is held only during task…
