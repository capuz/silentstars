---
repo: "Layr-Labs/d-inference"
name: "d-inference"
description: "Private Inference Network on Idle Macs"
url: "https://github.com/Layr-Labs/d-inference"
homepage: "https://darkbloom.dev"
language: "Go"
languages: ["Go", "Swift"]
languagePcts: [47, 36]
stars: 218
forks: 42
openIssues: 74
closedIssues: 27
watchers: 5
contributors: 13
recentReleases: 10
createdAt: "2026-03-15T02:33:31Z"
lastCommitAt: "2026-06-23T23:18:34Z"
lastReleaseAt: "2026-04-06T20:23:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 29
maintainers: ["Gajesh2007", "anupsv", "ethenotethan"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a36a8a097e33fc1312eeb54ea1c0920c62131aa068b34f6ff79d8e2c585b188/Layr-Labs/d-inference"
---

# Darkbloom

> **Public Alpha** — Darkbloom is a decentralized private-inference network for Apple Silicon. Expect rough edges, breaking changes, and downtime. During the alpha, providers keep **100% of revenue** (0% platform fee).

Darkbloom turns idle Macs into a private, OpenAI-compatible inference cloud.

Today, AI compute reaches you through a stack of markups — chipmaker to hyperscaler to API vendor. Meanwhile, over 100 million Apple Silicon Macs sit mostly idle, each with up to 512 GB of unified memory and up to 819 GB/s of bandwidth — enough to run frontier-scale models at interactive speeds. Darkbloom connects that idle capacity directly to demand, and pays the people who own the machines.

The hard part is privacy. The person running a provider node has root and physical custody of the machine doing your inference — yet they must **not** be able to read your prompts or the model's responses. Darkbloom closes every software path to that plaintext:

- **No observation surface.** Inference runs **in-process** via MLX — no subprocess, no local server, no IPC to tap.
- **Locked-down process.** Debuggers are denied at the kernel level (`PT_DENY_ATTACH`); memory-reading APIs…
