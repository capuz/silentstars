---
repo: "Zizka-ai/ZizkaDB"
name: "ZizkaDB"
description: "Operational database for AI agents , causal lineage (why()), semantic memory, live dashboards, MCP + Python/TypeScript SDK. Self-host or use db.zizka.ai."
url: "https://github.com/Zizka-ai/ZizkaDB"
homepage: "https://db.zizka.ai"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [58, 37]
topics: ["causal-inference", "mcp", "python-sdk", "self-hosted-agent", "vector-database", "agentic-database", "causal-lineage-tracking-for-ai-agent", "database-for-ai-agents", "data-analysis", "data-engineering"]
stars: 17
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 2
createdAt: "2026-05-10T01:21:37Z"
lastCommitAt: "2026-07-01T07:06:07Z"
lastReleaseAt: "2026-06-08T14:55:49Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 53
maintainers: ["saadwashmen", "Zizka-ai", "saadamjad"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1234280457/e968b764-3afe-42f3-9a86-4816a3aaf79b"
discussionCount: 1
---

# ZizkaDB

**The operational database for AI agents.**

[Try it live](https://db.zizka.ai) · [Documentation](https://db.zizka.ai/docs) · [Wiki](https://github.com/Zizka-ai/ZizkaDB/wiki) · [Architecture](https://db.zizka.ai/trust) · [Contributing](CONTRIBUTING.md) · [Development](#development)

</div>

When an agent misbehaves in production, you need more than scattered traces and a vector index. **ZizkaDB** is one store for **causal lineage** (`why()`), **time-travel state** (`at()`), **semantic search**, and **fleet dashboards** — open source, self-hostable, and model-agnostic.

Log every decision with `parent_id`, walk backward to the root cause in one call, and ship the same SDK to managed cloud or your own Docker stack.

  </a>
</p>

</p>

---

## Online viewer

**[db.zizka.ai](https://db.zizka.ai)** — managed cloud with signup, API keys (`zizkadb_live_...`), live dashboard (auto-refreshes every 30s), and billing. No credit card for the free tier.

</p>

---

## `why()` — causal chain in the terminal

Self-host locally, then run the demo script. The SDK prints a tree from any `event_id` back to the root.

</p>

```bash
bash scripts/setup-local.sh
pip install zizkadb-sdk
python…
