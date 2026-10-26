---
repo: "open-covenant/covenant"
name: "covenant"
description: "A capability-based operating layer for long-running autonomous software engineering agents. Rust daemon, signed capabilities, append-only audit, drift-aware memory, fail-closed sandbox dispatch, commit-scoped provenance."
readmeQualityOk: true
url: "https://github.com/open-covenant/covenant"
homepage: "https://opencovenant.org"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [56, 33]
topics: ["agent-infrastructure", "agent-os", "ai-agents", "audit-log", "autonomous-agents", "capabilities", "llm", "mcp", "operating-system", "provenance"]
stars: 8
forks: 6
openIssues: 10
closedIssues: 4
watchers: 0
contributors: 11
recentReleases: 5
createdAt: "2026-04-24T10:40:48Z"
lastCommitAt: "2026-10-26T09:17:28Z"
lastReleaseAt: "2026-08-24T10:36:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 65
maintainers: ["mizuki0x", "iko-rane", "premiuslol"]
openGraphImageUrl: "https://opengraph.githubassets.com/8adb3f2b68e790882cd97cf960ae6c99c00c044703e2080e58eb5d884e235d3f/open-covenant/covenant"
discussionCount: 0
---

# Covenant

> Open infrastructure for agent-native computing.

Covenant sits below agent applications and above the host operating system. It owns the state, authority, and accountability concerns that recur across agent frameworks — scoped capabilities, durable memory, runtime isolation, append-only audit, and commit-scoped provenance — so individual frameworks can stop reinventing them.

**Status.** Local control plane is real and live-tested (50 Rust crates, ~284k lines, 3870 source-discovered Rust tests including 486 live boundary tests). Production-grade sandboxing for hostile agent code and networked multi-peer operation are roadmap; the Solana settlement program is deployed on mainnet (credits, staking, slashing, on-chain receipt anchoring), but its daemon-driven economic lifecycle is not yet production. See [BUILT.md](https://github.com/open-covenant/covenant/blob/HEAD/BUILT.md) for the explicit honesty boundary.

**Multi-chain reach.** The trust layer also projects onto Base mainnet as signed statements any EVM contract verifies with one `ecrecover` — ERC-8004 agent registration, a deployed bond-receipt verifier, a registered EAS reputation schema, and an ENS CCIP-Read…
