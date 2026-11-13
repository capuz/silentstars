---
repo: "madgodinc/mgi-mind"
name: "mgi-mind"
description: "Long-term memory for AI assistants, local. Rust + Qdrant + ONNX, served over MCP. Hybrid search with reranking."
readmeQualityOk: true
url: "https://github.com/madgodinc/mgi-mind"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai", "ai-memory", "embeddings", "knowledge-graph", "mcp", "model-context-protocol", "onnx", "open-source", "qdrant", "rag"]
stars: 10
forks: 5
openIssues: 7
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-02T12:45:01Z"
lastCommitAt: "2026-11-13T05:40:43Z"
lastReleaseAt: "2026-06-03T22:51:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 38
maintainers: ["madgodinc"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1257181125/720305c8-d67b-4dea-869a-25596b82dd27"
discussionCount: 1
---

# MGI-Mind

**[English](https://github.com/madgodinc/mgi-mind/blob/HEAD/README.md)** | **[Русский](https://github.com/madgodinc/mgi-mind/blob/HEAD/README.ru.md)** | **[中文](https://github.com/madgodinc/mgi-mind/blob/HEAD/README.zh.md)**

**[Latest release: v2.10.0](https://github.com/madgodinc/mgi-mind/releases/tag/v2.10.0)** · **[CHANGELOG](https://github.com/madgodinc/mgi-mind/blob/HEAD/CHANGELOG.md)** · **[Discussions](https://github.com/madgodinc/mgi-mind/discussions)** · **[Issues](https://github.com/madgodinc/mgi-mind/issues)** · **[Contributing](https://github.com/madgodinc/mgi-mind/blob/HEAD/CONTRIBUTING.md)**

Local long-term memory for AI assistants. One Rust binary, a local Qdrant
vector database, local ONNX models. Speaks MCP, so Claude Code and other
assistants read and write memory on their own. Also a normal CLI.

The same exchange inside an assistant:

```
You:  what was the deploy server again?

Assistant (calls mind_search "deploy server"):
  -> "Deploy server is 10.0.0.5:8080, SSH as deploy@, key in vault"  (source: infra.md)

You:  right, thanks
```

Nothing leaves the box. Embeddings, search, reranking and the vault are
all local. No cloud account, no API key,…
