---
repo: "aayoawoyemi/Ori-Mnemos"
name: "Ori-Mnemos"
description: "Local-first persistent agentic memory powered by Recursive Memory Harness (RMH). Open source must win."
readmeQualityOk: true
url: "https://github.com/aayoawoyemi/Ori-Mnemos"
homepage: "https://orimnemos.com."
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent-memory", "ai-agent", "ai-memory", "knowledge-graph", "llm", "markdown", "mcp", "mcp-server", "model-context-protocol", "persistent-memory"]
stars: 324
forks: 31
openIssues: 1
closedIssues: 17
watchers: 5
contributors: 4
recentReleases: 3
createdAt: "2026-02-20T08:52:34Z"
lastCommitAt: "2026-09-19T08:13:36Z"
lastReleaseAt: "2026-09-16T18:27:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 32
maintainers: ["aayoawoyemi", "pktron", "maichler"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c1ef939e8db3fc5fd2480686684d6d48d50e9dba85a4a9fc8aa3e1a8dd377a7/aayoawoyemi/Ori-Mnemos"
discussionCount: 3
---

# Ori Mnemos

**Open-source persistent memory infrastructure for AI agents.**

Ori implements human cognition as mathematical models on a knowledge graph. Activation decay from ACT-R. Spreading activation along wiki-link edges. Hebbian co-occurrence from retrieval patterns. Reinforcement learning on retrieval itself. Recursive graph traversal with sub-question decomposition. The system learns what matters, forgets what doesn't, and optimizes its own retrieval pipeline.

Persistent memory across sessions, clients, and machines. Zero-infrastructure retrieval that [matches and in several cases strongly outperforms incumbents on benchmarks](#benchmarks) — and you own every byte of your data. Markdown on disk. Wiki-links as graph edges. Git as version control. No database lock-in, no cloud dependency, no vendor capture.

**v0.7.0** · [npm](https://www.npmjs.com/package/ori-memory) · [Paper](https://orimnemos.com/rmh) · Apache-2.0

---

## Benchmarks

### HotpotQA — Multi-Hop Retrieval

Head-to-head against [Mem0](https://github.com/mem0ai/mem0). Both systems indexed the
same documents and answered the same questions in the same run.

| Metric | Ori Mnemos | Mem0 1.0.6 | Δ |…
