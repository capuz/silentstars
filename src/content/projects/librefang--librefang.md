---
repo: "librefang/librefang"
name: "librefang"
description: "LibreFang is an open-source agent operating system written in Rust. Live demo: https://flyio.librefang.ai"
readmeQualityOk: true
url: "https://github.com/librefang/librefang"
homepage: "https://librefang.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["openclaw", "openfang", "zeroclaw"]
stars: 342
forks: 65
openIssues: 6
closedIssues: 2157
watchers: 7
contributors: 31
recentReleases: 0
createdAt: "2026-03-12T01:12:22Z"
lastCommitAt: "2026-07-19T06:12:26Z"
lastReleaseAt: "2026-04-01T23:59:08Z"
status: "thriving"
tags: ["needs_contributors", "funded", "community_hub"]
healthScore: 100
undervaluedScore: 29
maintainers: ["houko", "dependabot[bot]", "neo-wanderer"]
openGraphImageUrl: "https://opengraph.githubassets.com/554a73e31c1533220bf3ef3613ea1277d7198d3c9b7883a6f0db60dcbdbb30b8/librefang/librefang"
fundingLinks: ["GITHUB:https://github.com/houko"]
discussionCount: 309
---

</p>

<h1 align="center">LibreFang</h1>
<h3 align="center">Libre Agent Operating System — Free as in Freedom</h3>

  Open-source Agent OS built in Rust. 24 crates. 2,100+ tests. Zero clippy warnings.
</p>

</p>

</p>

</p>

---

## What is LibreFang?

LibreFang is an **Agent Operating System** — a full platform for running autonomous AI agents, built from scratch in Rust. Not a chatbot framework, not a Python wrapper.

Traditional agent frameworks wait for you to type something. LibreFang runs **agents that work for you** — on schedules, 24/7, monitoring targets, generating leads, managing social media, and reporting to your dashboard.

> LibreFang is a community fork of [`RightNow-AI/openfang`](https://github.com/RightNow-AI/openfang) with open governance and a merge-first PR policy. See [GOVERNANCE.md](https://github.com/librefang/librefang/blob/HEAD/GOVERNANCE.md) for details.

</p>

## Quick Start

```bash
# Install (Linux/macOS/WSL)
curl -fsSL https://librefang.ai/install.sh | sh

# Or install via Cargo
cargo install --git https://github.com/librefang/librefang librefang-cli

# Start — auto-initializes on first run, dashboard at http://localhost:4545
librefang start

# Or run…
