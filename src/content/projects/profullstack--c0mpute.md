---
repo: "profullstack/c0mpute"
name: "c0mpute"
description: "Open compute network: run a node with one command and help pool 100,000 CPUs/GPUs for open-weight AI. Inference, transcoding, storage. CLI-first, MIT."
readmeQualityOk: true
url: "https://github.com/profullstack/c0mpute"
homepage: "https://c0mpute.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [76, 20]
topics: ["dht", "p2p-network", "compute", "ai", "decentralized-compute", "depin", "distributed-computing", "gpu", "gpu-computing", "homelab"]
stars: 12
forks: 4
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-03T13:15:36Z"
lastCommitAt: "2026-11-14T09:47:37Z"
lastReleaseAt: "2026-07-19T07:55:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["ralyodio"]
openGraphImageUrl: "https://opengraph.githubassets.com/23a0df2a31f089abdb1d91dd2e045f2fd4b3df42640c7e2d50e6bcc883715b80/profullstack/c0mpute"
---

# c0mpute

> Decentralized compute network. CLI-first. Five modules out of the box:
> **transcode** (FFmpeg), **tts** (Piper / Kokoro / Pocket), **stt** (faster-whisper),
> **coinpay** (DID + escrow), and **infernet** (AI inference).

## Run a node

```sh
curl -fsSL https://c0mpute.com/install.sh | sh
```

That is the whole setup. The installer puts `c0mpute`, `infernet` and `coinpay` in
`~/.c0mpute/bin`, checks each release binary's minisign signature, and starts the worker
for you as **your user, not root** (a systemd user service where it can, a background
daemon otherwise; `--system-service` for a root-managed system service). Check it with `c0mpute worker status`, then run
`c0mpute bench` once so your node gets a score on the
[node board](https://c0mpute.com/nodes).

- **Runs on:** Linux (x86_64, arm64) and macOS (Intel, Apple Silicon); Windows inside WSL2.
  Any CPU works; NVIDIA, AMD and Apple GPUs are detected and advertised.
- **Network:** outbound internet is enough to join. No account, no port forwarding.
- **What it does:** serves AI inference (through [Infernet](https://infernetprotocol.com)),
  FFmpeg transcoding and storage jobs from the network.
- **What you get:**…
