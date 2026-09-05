---
repo: "atvirokodosprendimai/agentsmemory"
name: "agentsmemory"
description: "Place where AI Agent memories matters"
readmeQualityOk: true
url: "https://github.com/atvirokodosprendimai/agentsmemory"
homepage: "https://aiagentmemory.dev"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["agent", "ai", "coding", "llm", "long-term-memory", "memory", "rag", "golang", "self-hosted", "single-binary"]
stars: 5
forks: 1
openIssues: 19
closedIssues: 43
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-26T11:24:05Z"
lastCommitAt: "2026-09-05T07:47:50Z"
lastReleaseAt: "2026-07-01T23:51:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 66
maintainers: ["Ryouku", "blinkinglight"]
openGraphImageUrl: "https://opengraph.githubassets.com/a36368a66981de7bb5cef9aa7d4aa49e1d0dcfd1cd1fc453771a00652312f4ba/atvirokodosprendimai/agentsmemory"
discussionCount: 6
---

# agentsmemory

> A multi-tenant **memory palace** for AI agents — served as a remote **MCP** server, backed by **Ollama** and a swappable vector index (**Qdrant** for the SaaS, an **embedded** one for self-hosted).

`agentsmemory` is the Go SaaS rewrite of the original Python [`mempalace`](#provenance):
a semantic, long-term memory store that humans and AI agents read from and write
to. Where the Python tool was a single local user with no auth, this is built for
**teams**: each agent connects to a network MCP endpoint with a bearer token,
operates inside its team's isolated workspace, and can pull **centralised,
versioned skills** the team keeps up to date.

> **Status: early skeleton.** The tenancy, auth, skill registry, storage clients
> and MCP transport are wired and verified end-to-end, and the **core memory
> loop** (file a drawer → recall it semantically) now works end-to-end against
> Ollama + the vector store. Today the server exposes **41 MCP
> tools**, the same 41 whether hosted or self-hosted — the WRITE/FILE + SEARCH/RECALL families, the agent `diary`, the `am_mine`
> pipeline (text → chunked drawers + closet index), **hybrid** search (vector +
> BM25 + closet…
