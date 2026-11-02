---
repo: "scidonia/leanin"
name: "leanin"
description: "A Tokio-inspired concurrency library and work-stealing scheduler for Lean 4, with machine-checked proofs."
readmeQualityOk: true
url: "https://github.com/scidonia/leanin"
language: "Lean"
languages: ["Lean", "Shell"]
languagePcts: [73, 23]
stars: 32
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-08T09:39:19Z"
lastCommitAt: "2026-10-31T00:06:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["GavinMendelGleason", "paulbutcher", "carlohamalainen"]
openGraphImageUrl: "https://opengraph.githubassets.com/d75ae35ef41001ccbea84195b61b02a70e3081814333d88461b4d1dc18d06757/scidonia/leanin"
---

# `LeanIn`

LeanIn is a concurrency runtime with a work-stealing scheduler for **Lean 4**. The basic thrust is that we can use
techniques found in tokio and node to get a runtime for concurrency that is on par with other highly concurrent
languages but which lives in a proof assistant. The basic trick is to use **data, not closures** — i.e.
defunctionalisation rather than vanilla `do`.

The library is the concurrency toolkit: `import LeanIn` brings in the runtime, scheduler, task and async
interfaces, data structures and their model. The HTTP/1.1 protocol and serving layer live in `LeanIn.Http`, part
of the same library; LeanIO consumes that serving layer as its native backend. Requests to
`/bench`, both sides pinned to distinct P-cores:

| shape | server | C=1 | C=8 | C=32 |
|---|---|---|---|---|
| depth 1 | Node 22 | 64 100 | 140 011 | 144 473 |
| depth 1 | **leanin** | **62 568** | **147 791** | **126 481** |
| depth 1 | shipped `Std.Http.Server` | 5 323 | 5 584 | 7 626 |
| pipe 16 | Node 22 | 164 090 | 168 179 | 177 930 |
| pipe 16 | **leanin** | **424 573** | **512 451** | **411 417** |
| pipe 16 | shipped `Std.Http.Server` | 7 472 | 11 436 | 12 462 |
| churn | Node 22 | 26…
