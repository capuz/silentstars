---
repo: "rodaddy/open-brain"
name: "open-brain"
description: "Local-first search engine for your docs, knowledge bases, and notes. BM25 + vector + HyDE search over 30K+ markdown documents"
readmeQualityOk: true
url: "https://github.com/rodaddy/open-brain"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [73, 24]
topics: ["bm25", "knowledge-base", "local-first", "markdown", "personal-knowledge-management", "search-engine", "semantic-search", "typescript", "vector-search"]
stars: 5
forks: 1
openIssues: 50
closedIssues: 242
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-03-15T01:07:48Z"
lastCommitAt: "2026-08-08T04:35:30Z"
lastReleaseAt: "2026-07-18T02:26:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 59
maintainers: ["rodaddy"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb3a7b8b76b77d4d6184ade7c3478a2abf8648d6dc0e511f7eef060304898ad1/rodaddy/open-brain"
---

# Open Brain

MCP server providing a unified semantic brain over PostgreSQL + pgvector.

Full documentation lives in [`docs/README.md`](https://github.com/rodaddy/open-brain/blob/HEAD/docs/README.md), alongside
[`docs/CONTRIBUTING.md`](https://github.com/rodaddy/open-brain/blob/HEAD/docs/CONTRIBUTING.md),
[`docs/GLOSSARY.md`](https://github.com/rodaddy/open-brain/blob/HEAD/docs/GLOSSARY.md), and
[`docs/LEARNINGS.md`](https://github.com/rodaddy/open-brain/blob/HEAD/docs/LEARNINGS.md).

## Grading candidates (the review page, #394)

The distiller writes proposals to `candidate_memory`; nothing in that table is
durable memory until a human grades it. This page is where that happens.

```bash
# Load the database credentials for the local dogfood clone.
set -a; . /Volumes/ThunderBolt/open-brain-local/local-clone.env; set +a

bun scripts/grading-server-run.ts
```

It prints the URL and the size of the queue, then serves on
**http://127.0.0.1:3417/**. Open that in a browser.

| Flag | Env | Default | What it does |
|---|---|---|---|
| `--port` | `GRADING_PORT` | `3417` | Listen port. |
| `--namespace` | `OB_GRADING_NAMESPACE` | `rico` | Which namespace's candidates to grade. Every read…
