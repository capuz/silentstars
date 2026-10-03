---
repo: "turing-db/turingdb"
name: "turingdb"
description: "TuringDB high performance in-memory column-oriented graph database engine"
readmeQualityOk: true
url: "https://github.com/turing-db/turingdb"
homepage: "https://turingdb.ai"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["cpp", "database", "databases", "graph", "graph-algorithms", "graphs", "graph-database"]
stars: 183
forks: 16
openIssues: 4
closedIssues: 109
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2025-08-01T21:25:42Z"
lastCommitAt: "2026-10-03T22:03:29Z"
lastReleaseAt: "2026-04-17T20:18:32Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 44
maintainers: ["rjb32", "cyrusknopf", "sulaimansuhas"]
openGraphImageUrl: "https://opengraph.githubassets.com/15f5370d031df4405acbf7ad87aa26236a455f4e0c69aedee4406631f7eb2bc3/turing-db/turingdb"
---

---

## What is TuringDB?

TuringDB is a high-performance, in-memory, column-oriented graph database engine, built in C++ for analytical, AI-driven, and read-intensive workloads.

With version-controlled storage, zero-locking execution, and integrated vector search for GraphRAG and embeddings, it gives you low-latency queries, snapshot isolation, and seamless integration with modern AI pipelines.

It is designed around three properties: fast multi-hop traversals, native Git-style versioning, and minimal memory footprint.

## Quickstart

Get from zero to your first query in under a minute.

### 1. Install

```bash
pip install turingdb
```

```bash
# uv (create a project first, then turingdb is on your $PATH)
uv add turingdb
```

```bash
# curl install script
curl https://install.turingdb.ai | bash
```

```bash
# Docker (other methods are preferred, Docker has some performance overhead)
docker run -it turingdbai/turingdb:nightly turingdb
```

```bash
# nix, available on the nixpkgs unstable channel (x86 Linux and AArch64 macOS)
nix run nixpkgs/nixos-unstable#turingdb
```

### 2. Run your first query, no server needed

TuringDB runs **in-process**, right inside your Python program,…
