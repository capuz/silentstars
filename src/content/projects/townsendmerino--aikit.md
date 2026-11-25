---
repo: "townsendmerino/aikit"
name: "aikit"
description: "Portable Go AI building blocks — pure-Go, no-cgo packages (topk, ann, bm25, embed, encoder, chunk) extracted from townsendmerino/ken's code-search pipeline. Importable by any Go project."
readmeQualityOk: true
url: "https://github.com/townsendmerino/aikit"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-31T04:19:55Z"
lastCommitAt: "2026-11-25T03:17:07Z"
lastReleaseAt: "2026-06-12T22:12:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 54
maintainers: ["townsendmerino"]
openGraphImageUrl: "https://opengraph.githubassets.com/713985c87a227eeb23dc3ba66e4654b0e5f6a4111d751833d92e902057edcaf3/townsendmerino/aikit"
---

# aikit — a pure-Go retrieval toolkit

Composable building blocks for code/document retrieval and reranking, in **pure
Go with no cgo** in the core (stdlib + `golang.org/x/text` and `golang.org/x/sys` only). Chunk text,
embed it, search it lexically and semantically, fuse the rankings, and rerank
with a transformer reranking model — each package is small, independently
importable, and parity-tested against a Python reference.

The dependency DAG is shallow, and a test pins it
([`docs/architecture.md` § Package DAG](https://github.com/townsendmerino/aikit/blob/HEAD/docs/architecture.md#package-dag)): `topk`, `fuse`, `chunk` and `mmap`
import no other aikit package, the indexes and kernels sit one or two imports above them, and nothing is more
than three deep. `encoder` requires `embed` + `linalg` (+ `sparse` for the SPLADE expansion head). The one heavier dependency — `gotreesitter` (pure-Go, but a
large embedded-grammar payload) — is quarantined in the separate
`chunk/treesitter` submodule, so importing the core never pulls it in.
