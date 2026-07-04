---
repo: "Augustas11/macprovider"
name: "macprovider"
description: "Mac Provider — pooled MLX inference network for Apple Silicon Macs"
url: "https://github.com/Augustas11/macprovider"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [64, 25]
stars: 5
forks: 0
openIssues: 5
closedIssues: 53
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-05-28T10:10:37Z"
lastCommitAt: "2026-07-04T06:11:52Z"
lastReleaseAt: "2026-06-24T18:40:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 62
maintainers: ["Augustas11", "dependabot[bot]", "antfleet-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/d21a992944f45f26d2665f41244129e13359787c8ca516147741b23d21a89f4c/Augustas11/macprovider"
---

</p>

</p>

</p>

<br/>

# MacProvider

**Make any Apple Silicon Mac a remote-addressable MLX inference endpoint.** Built on `mlx-lm`. OpenAI-compatible API — streaming, multi-turn tool calling, JSON-schema structured output, sticky conversations with KV-cache reuse. Every response carries a signed receipt binding (prompt, output, provider, and — with v0.3 receipts — the verified model hash) verifiable with the open-source [macprovider-verify](phase7-verify/README.md) CLI. Verifiable inference, without a datacenter.

A lot of the most interesting LLM applications — long-running personal agents, privacy-sensitive tooling, dev workflows that hammer a model thousands of times a day — don't really belong in a cloud datacenter. But the moment you want your Mac's MLX endpoint to be reachable from somewhere that isn't localhost, you fall off a cliff: auth, tunneling, multi-tenant routing, billing, observability, none of it exists out of the box. MacProvider is a thin layer over `mlx-lm` that fills that gap.

| For Providers | For Buyers |
|---|---|
| Run MLX models locally on any M1+ Mac | OpenAI-compatible `/v1/chat/completions` endpoint |
| Outbound WebSocket only — no port-forwarding…
