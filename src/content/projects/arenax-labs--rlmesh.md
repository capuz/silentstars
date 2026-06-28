---
repo: "ArenaX-Labs/rlmesh"
name: "rlmesh"
description: "Gymnasium-compatible framework for serving environments and evaluating models."
url: "https://github.com/ArenaX-Labs/rlmesh"
homepage: "https://rlmesh.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [62, 38]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-03-23T21:09:50Z"
lastCommitAt: "2026-06-28T01:43:39Z"
lastReleaseAt: "2026-06-17T16:55:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 41
maintainers: ["jblayone"]
openGraphImageUrl: "https://opengraph.githubassets.com/70e3a1e3b28b09f99c4b886346e66aa6837ffc1045759f05c7305095830d8bb3/ArenaX-Labs/rlmesh"
discussionCount: 0
---

# RLMesh

**Gymnasium-compatible infrastructure for model-environment evaluation.**

</div>

RLMesh connects models to environments for evaluation. The Python SDK serves Gymnasium-style environments and lets evaluators call `reset`, `step`, `render`, and `close` over local or remote transports. Rust crates provide the lower-level runtime, protocol, and packaging layers.

## Project Status

RLMesh is in the **0.1.0 release-candidate** phase: the `2026.06` workflow edition is still provisional and seals at the final 0.1.0. The PyPI and crates.io badges above show the latest published version.

RLMesh is released and pre-1.0 (`0.x`). The Python package is the supported surface; a minor release may change a stable API with a migration note, so pin a minor range for active projects. The `rlmesh` facade crate and the CLI commands are the Rust-side surfaces we aim to stabilize; the other crates are internal implementation detail with no stability promise. See the [compatibility](https://docs.rlmesh.dev/compatibility/) and [versioning](https://docs.rlmesh.dev/versioning/) policies.

RLMesh is built around a language-neutral model-environment boundary. Python and Rust are supported today.…
