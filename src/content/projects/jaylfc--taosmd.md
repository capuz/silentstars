---
repo: "jaylfc/taosmd"
name: "taosmd"
description: "Local-first AI memory — runs offline on any machine with 8 GB+ RAM (SBC, mini PC, laptop, workstation). Zero-loss verbatim archive, knowledge graph, hybrid retrieval. Framework-agnostic, no cloud."
readmeQualityOk: true
url: "https://github.com/jaylfc/taosmd"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-memory", "arm", "edge-ai", "embedding", "framework-agnostic", "knowledge-graph", "local-first", "longmemeval", "onnx", "orange-pi"]
stars: 84
forks: 5
openIssues: 28
closedIssues: 60
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-13T00:33:00Z"
lastCommitAt: "2026-11-09T00:52:47Z"
lastReleaseAt: "2026-06-22T23:13:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 32
maintainers: ["jaylfc", "kocaemre"]
openGraphImageUrl: "https://opengraph.githubassets.com/be6a21415be482082fd0090512467a3a0130357ac1a18ecbbdf1383253d7ecb2/jaylfc/taosmd"
fundingLinks: ["GITHUB:https://github.com/jaylfc", "BUY_ME_A_COFFEE:https://buymeacoffee.com/jaylfc"]
---

# taOSmd

**Framework-agnostic AI memory system. Provable, auditable memory. 97.0% Recall@5 on LongMemEval-S.**

Provable Memory: a zero-loss archive that is never overwritten, plus a verifier that checks every extracted fact against its source and leaves out what it can't support.

Most memory systems pull facts out of your conversations and throw the source away. So when a fact is wrong, nothing flags it, and when it gets overwritten, the old version is gone without a trace. taOSmd works the other way around. Everything lands first in an append-only archive that is never edited or deleted, and the memory you search is derived from that archive, never written over it. Because the source stays, taOSmd checks each extracted fact against the exact text it came from, tells you the share it cannot support, and keeps the unsupported ones out of recall. On our own data that unsupported-fact rate was 18.8 percent, a number systems that discard the source cannot even measure.

Recall@5 means the correct evidence session lands in the top-5 retrieved, the same retrieval metric MemPalace (96.6%) and agentmemory (95.2%) publish, measured the same way for a like-for-like comparison. The…
