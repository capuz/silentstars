---
repo: "freitasjca/horse-provider-crosssocket"
name: "horse-provider-crosssocket"
description: "High-performance, security-hardened CrossSocket provider for the Horse web framework. Replaces the default Indy provider with IOCP/epoll async I/O, an object pool, enforced request limits, and OpenSSL 3.x native TLS."
readmeQualityOk: true
url: "https://github.com/freitasjca/horse-provider-crosssocket"
language: "Pascal"
languages: ["Pascal", "Batchfile"]
languagePcts: [65, 25]
topics: ["delphi", "free-pascal", "horse", "pascal"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-13T15:48:51Z"
lastCommitAt: "2026-09-24T08:41:02Z"
lastReleaseAt: "2026-06-22T18:35:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 40
maintainers: ["freitasjca"]
openGraphImageUrl: "https://opengraph.githubassets.com/760ea8b6e574d02143abef35ea3dafe105b76f7d930d6452f99a678094639945/freitasjca/horse-provider-crosssocket"
---

# Horse.Provider.CrossSocket

> High-performance, security-hardened [CrossSocket](https://github.com/winddriver/Delphi-Cross-Socket) provider for the [Horse](https://github.com/HashLoad/horse) web framework.

---

## Why?

Horse's default provider is built on [Indy](https://www.indyproject.org/), which uses a **one-thread-per-connection** model. Under load this means thread-pool exhaustion, high memory consumption, and known vulnerability to slow-HTTP (Slowloris) attacks.

This provider replaces the Indy transport layer with [Delphi-Cross-Socket](https://github.com/winddriver/Delphi-Cross-Socket), which uses **IOCP on Windows** and **epoll on Linux** — the same async I/O model used by nginx and Node.js. The Horse routing, middleware, and application code are **completely unchanged**.

| | Horse + Indy | Horse + CrossSocket |
|---|:---:|:---:|
| Concurrency model | 1 thread per connection | IOCP / epoll |
| Slowloris resistance | ✗ | ✓ |
| Object pool (zero alloc on hot path) | ✗ | ✓ |
| Zero-copy request body | ✗ | ✓ |
| Linux first-class support | ⚠ unstable | ✓ |
| OpenSSL 3.x native | ✗ | ✓ |
| gzip / deflate receive | manual | automatic |
| Enforced request size limits ¹ | ✗ |…
