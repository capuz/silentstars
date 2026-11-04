---
repo: "andreab67/hermes-memory-pgvector"
name: "hermes-memory-pgvector"
description: "Postgres + pgvector memory provider plugin for hermes-agent. Multi-agent storage layer with per-minion themes, async writer, no LLM in the memory hot path."
readmeQualityOk: true
url: "https://github.com/andreab67/hermes-memory-pgvector"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["hermes-agent", "llm-memory", "memory-provider", "multi-agent", "pgvector", "postgres", "python", "semantic-search"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-05-20T23:04:23Z"
lastCommitAt: "2026-11-04T02:58:00Z"
lastReleaseAt: "2026-09-17T15:14:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 56
maintainers: ["andreab67", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/186268c902a0981f1b24c7a1c80c499debf098a3cf5d2b557b3a612ea6fbfcd0/andreab67/hermes-memory-pgvector"
discussionCount: 1
---

# hermes-memory-pgvector

Current version: **1.0.2**.

**Postgres + pgvector memory provider for [hermes-agent](https://github.com/NousResearch/hermes-agent).** A shared memory substrate for a fleet of cooperating hermes-agent minions — built on Postgres and a single embedding endpoint you probably already run, with no LLM in the memory hot path.

```text
each minion → X-Hermes-Session-Key: <theme>
            → hermes-agent gateway
            → pgvector plugin
                ├── memory_entries  (mirrors built-in MEMORY.md / USER.md per theme)
                └── conversations   (every substantive turn, semantically searchable)
```

## Why it exists

Existing memory providers each solve a piece of the problem; the gap for **fleet deployments** is wide:

- **Built-in `memory` tool** persists to per-host `MEMORY.md` / `USER.md`. Two minions on the same host stomp on each other; minions on different hosts have no shared substrate.
- **Honcho** offers cross-session user modelling but requires a full external service, an LLM in the memory hot path for its deriver + dialectic loops, and its own ontology layered on top of the built-in tool. In high-concurrency fleet use it produces…
