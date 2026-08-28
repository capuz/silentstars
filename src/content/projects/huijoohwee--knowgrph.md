---
repo: "huijoohwee/knowgrph"
name: "knowgrph"
description: "agentic canvas for rich media content and game generation"
readmeQualityOk: true
url: "https://github.com/huijoohwee/knowgrph"
homepage: "https://airvio.co"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["canvas", "image-to-video", "json-to-markdown", "knowledge-graph", "markdown-to-json", "mermaid-converter", "text-to-image", "text-to-video", "gamification-platform"]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-12T23:59:47Z"
lastCommitAt: "2026-08-28T14:19:21Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 91
maintainers: ["huijoohwee"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c64d2a02bb1572a9cff15ffc0cb54c3418b314a86a87ddf14f01a9c1536ab5/huijoohwee/knowgrph"
---

# Reference implementation: AgenticGraph

**The frontmatter is the program. Git is the audit trail. Projections do not replace the source.**

AgenticGraph is a markdown file that runs. Its YAML frontmatter is a typed widget graph — nodes are **widgets** (input, compute, rich-media panels), edges are typed **sockets** — and that same file is the thing an LLM/MCP agent (or a human) can **run, gate, persist, and replay**. The Git-backed `.md` file is the authored graph, audit trail, and runnable program. Browser stores, shared indexes, media objects, and collaboration rooms support that source without becoming a hidden replacement for it.

The same file is three things at once:

- a **human-readable Markdown doc** (read it in any editor or on the web),
- a **typed widget graph** (`kgc-computing-flow/v1` frontmatter — nodes, edges, sockets, run actions), and
- a **runnable agent program** (compute nodes, approval gates, budget meters, and media outputs that an LLM/MCP agent can execute end to end).

AgenticGraph is provider-neutral and project-agnostic: it operates on a brief, canvas graph, tool schema, or media provider without making that adapter the source owner. The narrower claim…
