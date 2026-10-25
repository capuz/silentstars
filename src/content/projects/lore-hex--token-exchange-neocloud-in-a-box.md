---
repo: "Lore-Hex/token-exchange-neocloud-in-a-box"
name: "token-exchange-neocloud-in-a-box"
description: "Open-source confidential GPU inference cloud in a box: Intel TDX + NVIDIA confidential-computing nodes for DeepSeek-V4.1-Flash and GLM-5.3, verifiable and listed on TrustedRouter"
readmeQualityOk: true
url: "https://github.com/Lore-Hex/token-exchange-neocloud-in-a-box"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 51
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-19T00:33:08Z"
lastCommitAt: "2026-10-25T02:46:57Z"
lastReleaseAt: "2026-10-21T17:49:08Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 27
maintainers: ["jperla"]
openGraphImageUrl: "https://opengraph.githubassets.com/05ae6d5adaf8ca9a53f9095ebc778368524e80a06d2134b9bb7fa4bf1c64535c/Lore-Hex/token-exchange-neocloud-in-a-box"
---

# token-exchange-neocloud-in-a-box

Open-source software to run a small **confidential GPU inference cloud**: an
8-GPU server whose model runs inside an Intel TDX confidential VM, with the GPUs
in NVIDIA confidential-computing mode, served from an OpenAI-compatible endpoint
whose TLS key is bound to hardware attestation. Nodes can be verified by anyone
and listed on [TrustedRouter](https://trustedrouter.com/providers/marketplace),
and their tokens can be traded on the NY Token Exchange.

The first two nodes are planned to serve
[DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
and [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) on HGX 8×B200 servers.

**Read [PLAN.md](https://github.com/Lore-Hex/token-exchange-neocloud-in-a-box/blob/HEAD/PLAN.md)** for sizing, the order of work and the phases.
Agents working in this repo read [AGENTS.md](https://github.com/Lore-Hex/token-exchange-neocloud-in-a-box/blob/HEAD/AGENTS.md) first.

## Serve Models, Not a Billing System

This is a provider-neutral toolkit. Bring your own hardware, model and endpoint;
sell inference through TrustedRouter. Keep your operator identity, credentials
and deployment…
