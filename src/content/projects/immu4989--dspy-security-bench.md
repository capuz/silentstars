---
repo: "immu4989/dspy-security-bench"
name: "dspy-security-bench"
description: "Privacy-first security and mission-assurance lab for AI agents: TraceProof, authorization twins, MCP/OTel evidence, CI gates, and OSCAL exports."
readmeQualityOk: true
url: "https://github.com/immu4989/dspy-security-bench"
homepage: "https://immu4989.github.io/dspy-security-bench/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["agentdojo", "agentic-ai", "dspy", "llm-security", "prompt-injection", "github-actions", "ai-agent-security", "ai-evaluation", "authorization", "federal-ai"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-16T16:18:16Z"
lastCommitAt: "2026-08-27T14:30:27Z"
lastReleaseAt: "2026-08-13T04:31:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 72
undervaluedScore: 61
maintainers: ["immu4989"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1271403121/f5b69c4c-bb9d-47a1-bf56-67682e65c345"
---

# DSPy Security Bench

### Measure whether tool-using AI is robust, grounded, controlled, and authorized

An open **Mission Assurance Commons** for your own agent: privacy-bounded
operational traces, reproducible security twins, multi-agent authorization
paths, continuous evidence, signed data-only mission protocols, measured
mission economics, bounded authorization-race checking, and reviewable OSCAL
assessment inputs.

</a>

### [Explore the interactive leaderboard →](https://immu4989.github.io/dspy-security-bench/)

</div>

---

## On main: CausalProof — from runtime structure to proof-ready schedules

**A trace can show relationships. It cannot silently decide which relationships
are proof.** CausalProof reads only structural OTLP fields and creates a
provenance ledger that keeps observed parents, owner assertions, undirected span
links, and non-proving timing candidates separate. Only observed parent edges
and explicit assertions enter the generated ScheduleProof graph.

```bash
pip install "dspy-security-bench @ git+https://github.com/immu4989/dspy-security-bench@main"
dspy-security-bench causal demo --out-dir artifacts/causalproof
dspy-security-bench causal run trace.json…
