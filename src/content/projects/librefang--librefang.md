---
repo: "librefang/librefang"
name: "librefang"
description: "LibreFang is an open-source agent operating system written in Rust. Live demo: https://flyio.librefang.ai"
url: "https://github.com/librefang/librefang"
homepage: "https://librefang.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["openclaw", "openfang", "zeroclaw"]
stars: 310
forks: 63
openIssues: 4
closedIssues: 2105
watchers: 7
contributors: 30
recentReleases: 7
createdAt: "2026-03-12T01:12:22Z"
lastCommitAt: "2026-06-23T23:27:40Z"
lastReleaseAt: "2026-04-01T23:59:08Z"
status: "thriving"
tags: ["funded", "release_machine", "community_hub"]
healthScore: 100
undervaluedScore: 33
maintainers: ["houko", "dependabot[bot]", "pavver"]
openGraphImageUrl: "https://opengraph.githubassets.com/63a60eb51d34fb5af77700a168fea3e1bf8f26ec64b03f8ac45d65d10bb0d84e/librefang/librefang"
fundingLinks: ["GITHUB:https://github.com/houko"]
discussionCount: 303
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

> LibreFang is a community fork of [`RightNow-AI/openfang`](https://github.com/RightNow-AI/openfang) with open governance and a merge-first PR policy. See [GOVERNANCE.md](GOVERNANCE.md) for details.

</p>

## Quick Start

```bash
# Install (Linux/macOS/WSL)
curl -fsSL https://librefang.ai/install.sh | sh

# Or install via Cargo
cargo install --git https://github.com/librefang/librefang librefang-cli

# Start — auto-initializes on first run, dashboard at http://localhost:4545
librefang start

# Or run the setup wizard manually for interactive…
