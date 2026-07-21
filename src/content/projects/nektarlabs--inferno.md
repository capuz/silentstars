---
repo: "nektarlabs/inferno"
name: "inferno"
description: "Inferno aims to be a super lightweight, highly efficient Rust inference engine for running GLM-5.2 Q2 on Apple Silicon with Metal, targeting machines such as a MacBook Pro with 64 GB of unified memory."
readmeQualityOk: true
url: "https://github.com/nektarlabs/inferno"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 30
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-02T07:29:47Z"
lastCommitAt: "2026-07-21T06:13:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 26
maintainers: ["allemanfredi"]
openGraphImageUrl: "https://opengraph.githubassets.com/41e1fe6313f371121bd91ba45f639fa14ece7b39664a4b5d79d5b230ffae4a38/nektarlabs/inferno"
---

# Inferno

</p>

Inferno is a lightweight Rust inference engine built specifically for running
GLM-5.2 Q2 on Apple Silicon through native Metal kernels. Its primary target is
a MacBook Pro with 64 GB of unified memory.

The name reflects the engineering challenge: the model is much larger than the
available memory, so useful local inference requires careful coordination of
Metal, unified memory, and SSD streaming. Inferno stays deliberately narrow. It
supports one model layout and optimizes that path instead of becoming a general
inference framework.

> [!WARNING]
> Inferno is experimental and under active development. It is not production
> ready, and correctness, stability, long-context behavior, and performance are
> still being validated.

## Current Scope

- Apple Silicon and Metal only.
- `GLM-5.2-UD-Q2_K_RoutedQ2K.gguf` only.
- Exact top-8 routed-expert execution.
- Native Metal execution with no CPU compute fallback.
- Interactive chat and one-shot generation.
- SSD-streamed routed experts and compressed KV history.
- Greedy decoding.
- Experimental MTP speculative decoding, disabled by default because it is
  currently slower than ordinary decode on the 64 GB target.…
