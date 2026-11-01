---
repo: "InfernetProtocol/infernet-protocol"
name: "infernet-protocol"
description: "Infernet: A Peer-to-Peer Distributed GPU Inference Protocol"
readmeQualityOk: true
url: "https://github.com/InfernetProtocol/infernet-protocol"
homepage: "https://infernetprotocol.com"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [65, 29]
topics: ["ai", "gpu", "llm", "p2p"]
stars: 31
forks: 3
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-03-26T08:51:56Z"
lastCommitAt: "2026-11-01T10:43:45Z"
lastReleaseAt: "2026-04-30T13:09:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["ralyodio", "sh1pt-actions-fleet[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba14d937c887b028f6191c77a8227fe5ca0a3aa6effc5c47c6d02376662899ac/InfernetProtocol/infernet-protocol"
---

# Infernet Protocol

A decentralized GPU compute marketplace for **inference and distributed training**, running as a workload plugin on top of [**c0mpute**](https://c0mpute.com). Rent a GPU anywhere, install c0mpute, add the infernet plugin, start earning crypto. The control plane is a Next.js dashboard; GPU nodes authenticate with **Nostr-signed HTTP requests** — they never hold a database credential, run as an unprivileged user, and can operate outbound-only. Scales horizontally — every new provider on the network is real, additional capacity.

**Infernet runs on c0mpute.** The peer discovery + auction substrate (libp2p Kad-DHT + gossipsub) lives in c0mpute, shared with other workload plugins (transcode, etc.). Infernet contributes the AI-specific layer: federated inference (llama.cpp RPC), the chat / completions API, the routing logic, and the Nostr-keyed identity model.

**What we are, what we aren't.** Infernet is the economic substrate for inference jobs that don't need NVLink — single-GPU inference (7B–70B), embarrassingly parallel batch (embeddings, image grids, sweeps), LoRA fine-tunes, and async / federated distributed training (DiLoCo-style). We don't try to match…
