---
repo: "KestrelSovereignAI/kestrel-sovereign"
name: "kestrel-sovereign"
description: "Constitutional AI Agent Framework with cryptographic identity (DIDs)"
readmeQualityOk: true
url: "https://github.com/KestrelSovereignAI/kestrel-sovereign"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 8
forks: 2
openIssues: 193
closedIssues: 1560
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-01T22:36:34Z"
lastCommitAt: "2026-10-03T09:23:25Z"
lastReleaseAt: "2026-05-08T18:18:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 61
maintainers: ["UncleSaurus", "kestrel-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad1456b67548967a93f4dbf29bab6cb5c90aa51789e35df4688bdb6d4cd0884e/KestrelSovereignAI/kestrel-sovereign"
discussionCount: 18
---

# Kestrel: Sovereign AI Agent Framework

> Build AI agents that nobody can take away from their users — not you, not the cloud, not the next pivot.

Kestrel is a pre-1.0 framework for creating autonomous AI agents with cryptographic identity, privacy-aware memory, and constitutional governance. An agent's identity, keys, and local data remain under its operator's control; persistence, cloud routing, response auditing, and specialized integrations are explicit configuration or feature choices. See [Feature maturity](#-feature-maturity) for the current boundaries.

### Three Pillars

| Pillar | What it means |
|--------|--------------|
| **Portable DID identity** | Cryptographic identity the operator controls. Exportable, self-hostable, cloud-optional — the agent is not bound to a model provider. |
| **Privacy-aware memory** | Local-first search, knowledge graph retrieval, and RAG when the selected privacy mode permits persistence. `EPHEMERAL` conversations are intentionally not retained. Conversation history, file blobs, identity private keys, and agent-resource bodies encrypt at rest when `KESTREL_DATA_KEY` is set; saved-item and RAG document-chunk bodies remain plaintext columns…
