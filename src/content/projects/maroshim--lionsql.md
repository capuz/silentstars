---
repo: "MaroShim/LionSQL"
name: "LionSQL"
description: "Single-binary, high-concurrency OLTP database server supporting T-SQL and stored procedures"
readmeQualityOk: true
url: "https://github.com/MaroShim/LionSQL"
homepage: "https://LionSQL.com"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["database", "high-concurrency", "oltp", "pgwire", "pocketbase", "server", "single-binary", "stored-procedure", "supabase", "t-sql"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-09-22T01:25:25Z"
lastCommitAt: "2026-11-09T03:30:23Z"
lastReleaseAt: "2026-11-09T01:01:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e9a12d8111eadda9d598d60ee744757d8a9926887014482c22e5ea51f5ec8fb9/MaroShim/LionSQL"
discussionCount: 0
---

# LionSQL

Single-binary, high-concurrency OLTP database server supporting T-SQL and stored procedures

(한국어 문서는 [README.ko.md](https://github.com/MaroShim/LionSQL/blob/HEAD/README.ko.md), 호환성 사양은 [COMPATIBILITY.ko.md](https://github.com/MaroShim/LionSQL/blob/HEAD/COMPATIBILITY.ko.md)를 참조하세요.)

---

## Overview

LionSQL is a high-performance, embedded OLTP database engine that natively compiles and executes Microsoft SQL Server T-SQL & stored procedures and complex business logic on a sub-microsecond VDBE bytecode virtual machine, while simultaneously offering broad compatibility with PostgreSQL SQL dialects and the standard PGWire v3 protocol. It comes fully equipped with a built-in web management studio for real-time telemetry and schema administration, an embedded static SPA web server (`--app`) to host frontend web applications with zero CORS without Nginx, and an integrated goroutine connection pooler capable of handling tens of thousands of concurrent connections—eliminating the need for additional software to achieve a complete full-stack database and web hosting environment. Packaging this complete enterprise feature set into a single, ultra-compact static binary under…
