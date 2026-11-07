---
repo: "GiulioDER/RE-call"
name: "RE-call"
description: "Memory that abstains instead of guessing: agent memory on your own Postgres with a verdict, confidence and provenance on every hit, and a calibrated refusal when nothing clears the threshold."
readmeQualityOk: true
url: "https://github.com/GiulioDER/RE-call"
homepage: "https://giulioder.github.io/RE-call/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["embeddings", "hybrid-search", "information-retrieval", "llm", "llm-agents", "mcp", "model-context-protocol", "pgvector", "postgresql", "python"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 34
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-07-07T14:10:16Z"
lastCommitAt: "2026-11-07T16:12:09Z"
lastReleaseAt: "2026-08-10T15:53:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 65
maintainers: ["GiulioDER", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1292421895/4048ea30-ab56-48d6-9881-17bbf6c99dd8"
discussionCount: 1
---

RE-call is agent memory in a local SQLite file or your own PostgreSQL with pgvector. Each result carries a verdict,
  confidence, and provenance, while unsupported questions are refused instead of answered by the
  nearest match.

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

## What is RE-call

RE-call is agent memory in a local SQLite file or your own PostgreSQL database. It indexes source
documents and keeps validity, lineage, confidence, and provenance attached to every result.

Vector search returns nearby text. RE-call also checks whether that text is current, supported, and
trustworthy enough for the query. A superseded claim is marked `superseded`; a result that does not
clear the calibrated trust gate becomes `ABSTAIN` with a reason. Declared supersession makes the current memory win
over stale but similar memory.

The default path uses local embeddings plus hybrid dense and keyword retrieval. PostgreSQL uses
its full text search; Lite uses SQLite `FTS5`. It needs no memory-layer LLM call. Additional retrieval,
reasoning, and structured-fact modules are optional.

For the agent reading this, [RE-call for…
