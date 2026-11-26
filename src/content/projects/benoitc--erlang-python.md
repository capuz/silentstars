---
repo: "benoitc/erlang-python"
name: "erlang-python"
description: "Execute Python from Erlang using dirty NIFs with GIL-aware execution, rate limiting, and free-threading support"
readmeQualityOk: true
url: "https://github.com/benoitc/erlang-python"
language: "Erlang"
languages: ["Erlang", "C"]
languagePcts: [46, 36]
topics: ["ai", "beam", "embeddings", "erlang", "free-threading", "interoperability", "machine-learning", "nif", "python", "elixir"]
stars: 110
forks: 6
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-14T10:22:09Z"
lastCommitAt: "2026-11-26T23:30:41Z"
lastReleaseAt: "2026-02-22T22:01:59Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 85
undervaluedScore: 36
maintainers: ["benoitc", "h0rv"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb944a19c73552229f8c95d1af9f2d2b8c307f47a28ba5e9c9a19669f4377463/benoitc/erlang-python"
fundingLinks: ["GITHUB:https://github.com/benoitc"]
---

# erlang_python

**Combine Python's ML/AI ecosystem with Erlang's concurrency.**

Run Python code from Erlang or Elixir with true parallelism, async/await support,
and seamless integration. Build AI-powered applications that scale.

## Overview

erlang_python embeds Python into the BEAM VM, letting you call Python functions,
evaluate expressions, and stream from generators - all without blocking Erlang
schedulers.

**Parallelism options:**
- **Worker mode** (default, recommended) - Works with any Python version. With free-threaded Python (3.13t+), provides true parallelism automatically.
- **OWN_GIL sub-interpreters** (Python 3.14+) - Each interpreter has its own GIL, true parallelism.
- **BEAM processes** - Fan out work across lightweight Erlang processes.
