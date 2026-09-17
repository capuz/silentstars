---
repo: "SynapseLayer/synapse-layer"
name: "synapse-layer"
description: "MCP-native infrastructure for persistent AI agent memory with encrypted storage, semantic retrieval and cross-agent continuity."
readmeQualityOk: true
url: "https://github.com/SynapseLayer/synapse-layer"
homepage: "https://synapselayer.org"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["ai-agents", "encrypted-memory", "mcp", "memory", "cross-agent-memory", "persistent-memory", "trust-quotient", "agent-infrastructure", "context-engineering", "developer-tools"]
stars: 13
forks: 4
openIssues: 3
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-02T03:11:39Z"
lastCommitAt: "2026-09-17T08:52:28Z"
lastReleaseAt: "2026-05-28T18:11:16Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 52
maintainers: ["SynapseLayer"]
openGraphImageUrl: "https://opengraph.githubassets.com/459589064223d3eeea8089eb19f79175b84c4b2f0e291ef5a9336bcde85c1b45/SynapseLayer/synapse-layer"
fundingLinks: ["CUSTOM:https://synapselayer.org"]
---

# 🧠 Synapse Layer

### RAG retrieves. Synapse remembers.

**Persistent memory infrastructure for AI agents — AES-256-GCM encrypted at rest, semantic search, MCP-native.**

Synapse Layer is open-source persistent memory infrastructure for AI agents and assistants. Memories are encrypted at rest with AES-256-GCM, indexed via pgvector HNSW for semantic recall, and exposed through MCP JSON-RPC for native integration with Claude, GPT, Gemini, and any MCP-compatible client. Apache 2.0 licensed.

[Website](https://synapselayer.org) · [Docs](https://forge.synapselayer.org/docs) · [PyPI](https://pypi.org/project/synapse-layer/) · [Forge](https://forge.synapselayer.org)

</div>

---

## ⚡ 30-Second Quickstart

Get your Connect Token at [forge.synapselayer.org](https://forge.synapselayer.org) → Connect, then install into any MCP client:

```bash
curl -fsSL https://forge.synapselayer.org/install/smithery | bash
```

On the [Forge dashboard](https://forge.synapselayer.org/dashboard/connect) the **Smithery** card already copies the command with your token embedded (`… | bash -s -- sk_connect_…`) — a single paste in your terminal is enough.

Or use the Python SDK:

```python
from synapse_layer…
