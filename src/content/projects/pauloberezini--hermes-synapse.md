---
repo: "pauloberezini/hermes-synapse"
name: "hermes-synapse"
description: "Visual multi-agent orchestrator with a drag-and-drop DAG canvas, dynamic LLM planning loops, permission-based tool execution, and local Qdrant RAG."
readmeQualityOk: true
url: "https://github.com/pauloberezini/hermes-synapse"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [57, 37]
stars: 26
forks: 3
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-07-03T11:49:53Z"
lastCommitAt: "2026-10-09T18:56:42Z"
lastReleaseAt: "2026-10-09T17:32:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 47
maintainers: ["pauloberezini"]
openGraphImageUrl: "https://opengraph.githubassets.com/617b64710750c0f17185b0642fa9dadcc2b69c550df96de2aa36b893bdba930c/pauloberezini/hermes-synapse"
---

# 🏛️ Hermes

### The Visual, Hierarchical AI Agent Framework

**Build networks of AI agents that plan dynamically, coordinate via DAG, and never spin out of control.**

```bash
git clone https://github.com/pauloberezini/hermes-synapse && cd hermes-synapse
cp .env.example .env  # add your LLM API key
docker compose up -d
# Open → http://localhost:9119
```

---

## ✨ Why Hermes?

Most multi-agent frameworks are either **too rigid** (n8n: hardwired workflows) or **too chaotic** (AutoGen: agents talking in circles forever).

**Hermes sits in the middle:** a visual drag-and-drop canvas where you wire up AI agents in a strict **Directed Acyclic Graph (DAG)**. No infinite loops. No hardcoded pipelines. Just agents that actually coordinate.

| | Hermes | n8n / Make | Flowise / LangFlow | AutoGen / CrewAI |
|---|---|---|---|---|
| **Execution** | 🧠 Non-deterministic (AI plans dynamically) | 🔧 Deterministic (hardcoded steps) | 🔗 Visual LLM chains | 💬 Conversational loops |
| **UI** | 🎨 SVG canvas + isolated agent chats | Node editor | Visual chain designer | CLI / API only |
| **Hierarchy** | ✅ Strict DAG (cycle-safe) | ↪ Linear / conditional | Data-flow graphs | ⚠️ Free loops (cycle…
