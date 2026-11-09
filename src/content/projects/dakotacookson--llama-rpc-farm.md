---
repo: "dakotacookson/Llama-RPC-Farm"
name: "Llama-RPC-Farm"
description: "Web UI to pool your home machines into one llama.cpp cluster: multi-machine RPC GPU pooling + on-demand multi-model serving via llama-swap"
readmeQualityOk: true
url: "https://github.com/dakotacookson/Llama-RPC-Farm"
homepage: "https://github.com/dakotacookson/Llama-RPC-Farm/blob/main/README.md"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["gpu", "inference", "llama-swap", "llamacpp", "llm", "multi-node", "rpc"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-31T21:21:12Z"
lastCommitAt: "2026-11-09T00:53:34Z"
lastReleaseAt: "2026-11-08T22:31:08Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["dakotacookson", "joshuamsalazar", "mcalisir"]
openGraphImageUrl: "https://opengraph.githubassets.com/72ef667a5749e4ceeb9bec065a373392aff586fcbeb2cc11a69a29fa7a9f8f16/dakotacookson/Llama-RPC-Farm"
---

# Llama RPC Farm

**True llama.cpp, over your whole house.** One dashboard that spans real
multi-machine llama.cpp RPC clusters — your desktops' GPUs pooled across
boxes — and on-demand multi-model serving through llama-swap. Any mix of
Linux, Windows, and macOS machines — see the hardware table. Any client
that speaks OpenAI.

Real llama.cpp means real features: full CUDA, tensor-split across GPUs,
spec decoding, KV-cache options, 128k+ contexts — the raw llama-server
features, wired together across machines for you, instead of hand-rolled
startup scripts.

**Your existing configs and scripts stay untouched.** The farm keeps its own
state under this folder (or the platform data dir for packaged builds);
engine/agent installs go to standard user locations such as
`~/.local/bin`, systemd user units, and the swap host's
`~/.config/llama-swap/`.

## What it does

- **Pool machines into one cluster** — pick which GPUs (and RAM) each box
  shares; peers run RPC servers started through the peer agent.

  

- **Serve many models on demand** — llama-swap starts and stops each model's
  llama-server the moment a client asks, and frees the GPUs when it's done.
  Group models with the…
