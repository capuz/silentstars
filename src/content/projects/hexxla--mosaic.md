---
repo: "hexxla/mosaic"
name: "mosaic"
description: "MCP server for agent memory over HexxlaDB—ring retrieval, embeddings + lexical search, seams, facets, YAML persistence policy, localhost HTTP transport."
readmeQualityOk: true
url: "https://github.com/hexxla/mosaic"
language: "Go"
languages: ["Go"]
languagePcts: [88]
topics: ["agent-memory", "agents", "context-engineering", "embedded-database", "embeddings", "go", "golang", "llm", "local-first", "mcp"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-29T03:41:36Z"
lastCommitAt: "2026-08-27T14:18:45Z"
lastReleaseAt: "2026-05-05T01:16:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 54
undervaluedScore: 14
maintainers: ["sploitzberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d4bb76fda9c0076c45597f1e9b971e54f779a7b31de8b49e9b0fbcd1bb128f1/hexxla/mosaic"
---

# Mosaic

**Local MCP server for structured agent memory — hex lattice, hybrid retrieval, governed writes, and budgeted context — backed by [HexxlaDB](https://github.com/hexxla/hexxladb).**

</div>

---

## Why Mosaic

Mosaic keeps agent memory **on infrastructure you operate**: [MCP](https://modelcontextprotocol.io/) on **localhost**, optional **encryption at rest**, and code you can **inspect and extend**. Retention guidance and delete permission follow **policy you define**, so context is not outsourced by default.

Agents fail in production when recalled facts drift or sessions read as unrelated reruns. Mosaic gives memory that **accumulates cleanly across sessions**, so the assistant can anchor on durable state instead of re-deriving intent from prompts alone.

It is backed by **[HexxlaDB](https://github.com/hexxla/hexxladb)**: a **hex lattice** lays out related cells for **spatial, bounded expansion** from a seed; **hybrid retrieval** combines similarity with structured constraints; callers can record conflicting updates as explicit **seams** rather than losing the disagreement in embedding space. Operators describe behaviour in **YAML**; callers receive **budgeted context**…
