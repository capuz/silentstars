---
repo: "nambok/mentedb"
name: "mentedb"
description: "A cognition aware database engine for AI agent memory. Purpose built in Rust with WAL, HNSW, knowledge graphs, and speculative context pre assembly. Not a wrapper, a ground up storage engine that thinks."
readmeQualityOk: true
url: "https://github.com/nambok/mentedb"
homepage: "https://mentedb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["agent-memory", "ai", "ai-agents", "cognitive-architecture", "context-window", "database", "knowledge-graph", "langchain", "llm", "memory"]
stars: 112
forks: 7
openIssues: 1
closedIssues: 26
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-04T05:50:14Z"
lastCommitAt: "2026-07-28T14:56:36Z"
lastReleaseAt: "2026-04-07T05:05:33Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 34
maintainers: ["nambok", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6f5d755eb79675ae2b64bf69c2204e2a6bfcce90d0261fb5e276f18105350d3/nambok/mentedb"
discussionCount: 1
---

# MenteDB

> ⚠️ **Beta** — MenteDB is under active development. APIs may change between minor versions.

**The Mind Database for AI Agents**

MenteDB is a purpose built database engine for AI agent memory. Not a wrapper around existing databases, but a ground up Rust storage engine that understands how AI/LLMs consume data.

> *mente* (Spanish): mind, intellect

## Two ways to run it

|  |  |
|---|---|
| **[Cloud](https://github.com/nambok/mentedb/blob/HEAD/docs/CLOUD.md)** | Managed. Get an API key, set `MENTEDB_API_KEY`, connect. The overnight maintenance runs for you. |
| **[Self-host](https://github.com/nambok/mentedb/blob/HEAD/docs/SELF_HOSTING.md)** | Run the engine yourself with `cargo install mentedb-server` or Docker. Nightly maintenance is built in. |

Building your own agent? **[Build an agent](https://github.com/nambok/mentedb/blob/HEAD/docs/BUILD_AN_AGENT.md)** has a
runnable example for every combination of cloud or self-hosted and Python, Node,
or Rust.

**Cloud in 30 seconds** ([full guide](https://github.com/nambok/mentedb/blob/HEAD/docs/CLOUD.md)):

```bash
export MENTEDB_API_KEY=mdb_your_key        # from app.mentedb.com -> API Keys
npx mentedb-mcp@latest setup…
