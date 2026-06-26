---
repo: "coproduct-opensource/nucleus"
name: "nucleus"
description: "Enforced permissions for AI agents - policy + enforcement in one stack"
url: "https://github.com/coproduct-opensource/nucleus"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["agent-security", "ai-security", "formal-verification", "github-actions", "lattice", "mcp-security", "rust", "security-scanner"]
stars: 16
forks: 2
openIssues: 25
closedIssues: 634
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-01-31T05:22:42Z"
lastCommitAt: "2026-06-26T21:30:44Z"
lastReleaseAt: "2026-03-07T22:14:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["brandon-coproduct", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b41e90b0afb7a93efa9d1988a4c66c59445d98d9889a37dd0a4349ab343f1c/coproduct-opensource/nucleus"
---

# Nucleus

### Don't trust the agent. Verify it.

*Signed identity, declared guarantees, receipts anyone can check.*

**Nucleus is a vendor-agnostic secure runtime for AI agents: it enforces what an agent may do, proves the enforcement boundary is sound, attests how every result was produced, and federates identity and trust — without a single long-lived secret.**

> **Assume the agent is compromised. Constrain what it can do anyway. Prove the constraints hold.**

At its core is a small, dependency-free information-flow algebra. Two primitives — `join` and `flows_to` — enforce information-flow control under four algebraic laws. Once untrusted web content enters a session, it cannot silently reach a privileged sink like `git push`. That property is [machine-checked](FORMAL_METHODS.md), not hoped.

This is the **[lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)** — private data + untrusted content + an exfiltration sink — made safe by **non-interference**: attacker-tainted data cannot reach a consequential action, so a compromised agent cannot be turned into a *confused deputy*. We don't *detect* the prompt injection; we make its consequence impossible —…
