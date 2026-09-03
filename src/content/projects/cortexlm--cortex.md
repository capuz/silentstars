---
repo: "CortexLM/cortex"
name: "cortex"
description: "[🧠] Cortex is a Bittensor subnet enabling decentralized collaborative AI research through multiple challenges, each focused on a specific objective where miners compete and contribute innovative code."
readmeQualityOk: true
url: "https://github.com/CortexLM/cortex"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 160
forks: 19
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 7
recentReleases: 4
createdAt: "2025-04-26T00:53:36Z"
lastCommitAt: "2026-09-03T08:13:19Z"
lastReleaseAt: "2026-08-07T13:46:53Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 44
maintainers: ["echobt", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f6a1b50be1fb0647671153cc4cdf6dd9e794acb5b2d4ac65bf6d2112481b0b7/CortexLM/cortex"
---

# Cortex

**Bittensor subnet control plane (Rust).**

</div>

Cortex is the control plane for a Bittensor subnet with several challenges.
The master host runs every challenge service and the gateway. Miners submit an
artifact over HTTP and pay Lium. The gateway seals an epoch weight bundle.
Validators pull that bundle, verify it, and `set_weights` on-chain. They do
not run evals.

| Challenge | id | What miners improve | Default emission |
|-----------|-----|---------------------|------------------|
| **Relearn** | `relearn` | Post-train `Qwen/Qwen3.8-27B` (native VLM) | 4000 bps |
| **Relearn Image** | `relearn-image` | Fine-tune `nvidia/Cosmos3-Super-Text2Image`, judged by Q-Judger | 1500 bps |
| **Relearn Agent** | `relearn-agent` | Post-train the same checkpoint into a tool-using agent, scored on replayed tool traces | 1500 bps |
| **Bounty** | `bounty` | File real bug reports against the subnet | 3000 bps |

Encoder-attach Multimodal (`relearn-mm`) is **off**: no trust-root row, no
emission.

Every Relearn challenge promotes champion-versus-challenger on a private
holdout, so winning the published split is not enough. Relearn Image is judged
only by **Q-Judger**…
