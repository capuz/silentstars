---
repo: "lxfight-s-Astrbot-Plugins/astrbot_plugin_livingmemory"
name: "astrbot_plugin_livingmemory"
description: "一个拥有动态生命周期的智能长期记忆插件。"
url: "https://github.com/lxfight-s-Astrbot-Plugins/astrbot_plugin_livingmemory"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 261
forks: 43
openIssues: 25
closedIssues: 90
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2025-07-12T07:42:07Z"
lastCommitAt: "2026-06-25T01:39:04Z"
lastReleaseAt: "2025-10-30T02:38:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 36
maintainers: ["lxfight", "irmia2026", "Sisyphbaous-DT-Project"]
openGraphImageUrl: "https://opengraph.githubassets.com/31dc8c06616f70a39fcd0bf665bba8a31a0b3ad449eb193764da542fdd96b891/lxfight-s-Astrbot-Plugins/astrbot_plugin_livingmemory"
---

[中文](README_zh.md) | [English](README.md) | [Русский](README_ru.md)

</div>

# LivingMemory - Intelligent Long-Term Memory Plugin with Dynamic Lifecycle

</p>

  ·
</p>

---

## Core Features

- **Hybrid Retrieval**: Combines BM25 sparse retrieval and Faiss vector retrieval with RRF fusion.
- **Dual-Route Four-Mode Retrieval**: Maintains both document and graph routes, each supporting keyword and vector retrieval before unified ranking.
- **Intelligent Summarization**: Uses an LLM to summarize conversation history into structured memories.
- **Dual-Channel Summarization**: Stores `canonical_summary` and `persona_summary` separately for retrieval and prompt injection.
- **Session Isolation**: Supports persona-level and session-level memory isolation.
- **Agent Memory Tools**: Exposes `recall_long_term_memory` and `memorize_long_term_memory` so agents can actively recall or write long-term memories when needed.
- **Auto-Forgetting**: Cleans up stale memories based on time and importance.
- **Memory Atomization**: Each key fact becomes an independent retrieval unit with its own TTL, decay curve, and lifecycle management.
- **Time-Aware Graph**: Edge confidence updates dynamically via…
