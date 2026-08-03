---
repo: "Gusto/baerly-storage"
name: "baerly-storage"
description: "Document database with no database server. Tiny, LLM-friendly TypeScript API; DB engine runs to completion in each JS request handler; state lives in S3/R2."
readmeQualityOk: true
url: "https://github.com/Gusto/baerly-storage"
homepage: "https://medium.com/gusto-engineering/storage-is-the-missing-piece-for-agent-built-software-ede96ac7ac27"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["append-only-log", "backend-as-a-service", "cloudflare-workers", "content-addressable-storage", "database", "document-database", "edge-computing", "multi-tenant", "nosql", "object-storage"]
stars: 21
forks: 2
openIssues: 8
closedIssues: 9
watchers: 0
contributors: 1191
recentReleases: 4
createdAt: "2026-05-08T18:06:52Z"
lastCommitAt: "2026-08-03T06:44:15Z"
lastReleaseAt: "2026-07-16T00:53:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["baer", "dependabot[bot]", "alexwilczewski"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/3697270?s=400&v=4"
discussionCount: 0
---

# baerly-storage

**A database with no server. No daemon. No database runtime. Just your app and a bucket.**

A document database that lives _in_ an S3/R2 bucket you already own. No new vendor to clear, nothing resident to keep running, and an API small enough for an open-weights LLM to zero-shot.

```text
before: client → app handler → database server  (a server)
after:  client → app handler → S3/R2 bucket     (just storage)
```

The trick is to cram the entire database execution layer inside an HTTP
request. There is no server, daemon, or coordinator: each read or
write runs as library code inside your request handler, the bucket
holds the data, and the protocol supplies the commit rules.

The load-bearing operation is narrow — one conditional create of the next
log object commits a write. When the request ends, baerly-storage is gone. Poof!

- **An API small enough to hold in your context.** No DDL, no raw SQL —
  8 verbs and a ~12k-token surface you can hand to an LLM or a
  non-engineer and walk away.
- **Idle rounds to zero.** No database process to keep warm, and no
  per-app database floor across a fleet of small internal tools.
- **No data hostage.** `baerly export…
