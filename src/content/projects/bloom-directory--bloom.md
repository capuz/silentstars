---
repo: "bloom-directory/bloom"
name: "bloom"
description: "Agent-native finance starts with your filesystem."
readmeQualityOk: true
url: "https://github.com/bloom-directory/bloom"
homepage: "https://bloom.directory"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["agent-skills", "ai-agents", "claude-code-plugin", "codex-plugin", "gemini-cli-extension"]
stars: 26
forks: 5
openIssues: 63
closedIssues: 76
watchers: 0
contributors: 7
recentReleases: 5
createdAt: "2026-05-09T10:29:01Z"
lastCommitAt: "2026-11-05T14:04:41Z"
lastReleaseAt: "2026-10-01T18:58:14Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 48
maintainers: ["0xdewy", "GavinPacini", "josh-richardson"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1233765261/193f606d-899e-4687-bb88-882e68ad3fc0"
---

·
  ·
  ·

Bloom is an **agentic EVM and Solana wallet mounted as a virtual filesystem**.
Reads are blockchain queries, writes are transaction intents, and the
primary interface is an ordinary directory your agent can inspect with
normal filesystem tools (`ls`, `cat`, `echo`). Depending on OS and
permissions, mount it at `~/bloom`, `/bloom`, or `/Volumes/bloom`.
`bloom vfs` exposes the same paths as a developer/fallback interface
when mounting is unavailable.

Bloom is **experimental, unaudited alpha software**. Do not treat it as a
production wallet, do not use it with funds you cannot afford to lose, and
review every generated transaction plan before signing. Default public
network broadcasts are blocked, but reads, simulations, local devnet flows,
and any explicitly enabled broadcast paths should still be treated as
high-risk until the code has been independently audited.

The shortest agent setup path is:

> Tell your agent: **"Read https://bloom.directory/SKILL.md and set up Bloom."**

To install the agent skill from this repository, use
`npx skills add bloom-directory/bloom --skill bloom`. This installs guidance,
not the Bloom software. The…
