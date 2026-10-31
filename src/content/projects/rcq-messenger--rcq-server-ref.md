---
repo: "rcq-messenger/rcq-server-ref"
name: "rcq-server-ref"
description: "FastAPI + Postgres + Redis backend reference for the RCQ messenger. AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/rcq-messenger/rcq-server-ref"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["e2ee", "fastapi", "federation", "messenger", "privacy", "python", "self-hosted"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-05-27T23:00:25Z"
lastCommitAt: "2026-10-31T18:14:35Z"
lastReleaseAt: "2026-09-29T23:57:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 45
maintainers: ["johnsmithberlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3b3c51094bd28895b831148fada72be9b5464974ea9f3f892f0e1f5c65f18bf/rcq-messenger/rcq-server-ref"
---

# RCQ — backend reference server

FastAPI + Postgres + Redis backend that powers the [RCQ messenger][ios].
Open-sourced so users behind censorship or hostile network conditions
can run their own instance instead of trusting `api.rcq.app`.

[ios]: https://github.com/rcq-messenger/rcq-ios

## Status

**Live in production.** This is the same code that runs
`api.rcq.app`, which serves real users today across a federated network
of islands, with iOS, Android, web and desktop clients. It is released
open source (AGPL-3.0) as the reference implementation, so anyone can run
their own island. The protocol and features keep evolving, and the
*self-hosted* path is the newer surface (fewer operators have run it than
the flagship). The included
`docker-compose.yml` covers TLS (Caddy + Let's Encrypt, or the island's own
pinned certificate when no authority will issue to you:
[`docs/tls-without-a-ca.md`](https://github.com/rcq-messenger/rcq-server-ref/blob/HEAD/docs/tls-without-a-ca.md)) and APNs setup
is documented in [`docs/apns.md`](https://github.com/rcq-messenger/rcq-server-ref/blob/HEAD/docs/apns.md). Open items: a wider
testing pass on the self-hosted path, and the non-Docker relay…
