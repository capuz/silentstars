---
repo: "Augustas11/macprovider"
name: "macprovider"
description: "Mac Provider — pooled MLX inference network for Apple Silicon Macs"
readmeQualityOk: true
url: "https://github.com/Augustas11/macprovider"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [49, 33]
stars: 6
forks: 0
openIssues: 9
closedIssues: 125
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-05-28T10:10:37Z"
lastCommitAt: "2026-07-29T06:14:49Z"
lastReleaseAt: "2026-06-24T18:40:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["Augustas11"]
openGraphImageUrl: "https://opengraph.githubassets.com/818e4192aebb7d14838a22f9daceddfcebf856612e9ac964acd348d8790200b7/Augustas11/macprovider"
---

</p>

</p>

</p>

<br/>

# MacProvider

**Make any Apple Silicon Mac a remote-addressable MLX inference endpoint.** Built on `mlx-lm`. OpenAI-compatible API — streaming, multi-turn tool calling, JSON-schema structured output, sticky conversations with KV-cache reuse. Every response carries a signed receipt binding the prompt, output, provider key, catalog-resolved model hash, and timestamp; the open-source [macprovider-verify](https://github.com/Augustas11/macprovider/blob/HEAD/phase7-verify/README.md) CLI verifies that a provider signing key signed that tuple. The receipt does not prove model honesty, hardware attestation, or detection of a provider falsifying its own model-hash measurement.

A lot of the most interesting LLM applications — long-running personal agents, privacy-sensitive tooling, dev workflows that hammer a model thousands of times a day — don't really belong in a cloud datacenter. But the moment you want your Mac's MLX endpoint to be reachable from somewhere that isn't localhost, you fall off a cliff: auth, tunneling, multi-tenant routing, billing, observability, none of it exists out of the box. MacProvider is a thin layer over `mlx-lm` that fills that gap.

|…
