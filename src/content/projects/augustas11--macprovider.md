---
repo: "Augustas11/macprovider"
name: "macprovider"
description: "Mac Provider — pooled MLX inference network for Apple Silicon Macs"
readmeQualityOk: true
url: "https://github.com/Augustas11/macprovider"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [51, 31]
stars: 9
forks: 2
openIssues: 14
closedIssues: 188
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-05-28T10:10:37Z"
lastCommitAt: "2026-08-23T04:10:28Z"
lastReleaseAt: "2026-06-24T18:40:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["Augustas11", "antfleet-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/45999c98b19b8e8cb8314d8fac54da8193e27ffa6bf6d7866f23da71bdbb1528/Augustas11/macprovider"
---

</p>

</p>

</p>

<br/>

# MacProvider

**Make any Apple Silicon Mac a remote-addressable MLX inference endpoint.** Built on `mlx-lm`. OpenAI-compatible API — streaming, multi-turn tool calling, JSON-schema structured output, sticky conversations with KV-cache reuse. Every response carries a signed receipt binding the prompt, output, provider key, catalog-resolved model hash, and timestamp; the open-source [macprovider-verify](https://github.com/Augustas11/macprovider/blob/HEAD/phase7-verify/README.md) CLI verifies that a provider signing key signed that tuple. The receipt does not prove model honesty, hardware attestation, or detection of a provider falsifying its own model-hash measurement.

A lot of the most interesting LLM applications — long-running personal agents, privacy-sensitive tooling, dev workflows that hammer a model thousands of times a day — don't really belong in a cloud datacenter. But the moment you want your Mac's MLX endpoint to be reachable from somewhere that isn't localhost, you fall off a cliff: auth, tunneling, multi-tenant routing, billing, observability, none of it exists out of the box. MacProvider is a thin layer over `mlx-lm` that fills that gap.

|…
