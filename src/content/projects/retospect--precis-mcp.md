---
repo: "retospect/precis-mcp"
name: "precis-mcp"
description: "MCP server giving LLM agents a seven-verb API over papers, documents, code, state, patents, and cached web/Wolfram/YouTube tool calls"
readmeQualityOk: true
url: "https://github.com/retospect/precis-mcp"
homepage: "https://pypi.org/project/precis-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["llm", "markdown", "mcp", "mcp-server", "model-context-protocol", "python", "ai-agent", "claude", "context-management", "cursor"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-03-11T19:45:33Z"
lastCommitAt: "2026-10-15T08:32:06Z"
lastReleaseAt: "2026-09-20T15:27:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 60
maintainers: ["retospect", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/03299632febe8b0e09371ae8510cdcc4887bcd98242fec7e6e94de2abad77c04/retospect/precis-mcp"
---

# precis-mcp

A [Model Context Protocol](https://modelcontextprotocol.io/) server that
gives language-model agents a small, uniform API for reading, writing,
and searching across papers, documents, personal state, code, and
cached tool calls. Small-model-friendly (7B-class agents are the design
target); stores content in PostgreSQL with `pgvector`, with a web
interface ([see how it works](https://github.com/retospect/precis-mcp/blob/HEAD/guide/README.md)).

## See it

A two-minute tour, section by section, lives right here in the repo at
**[guide/README.md](https://github.com/retospect/precis-mcp/blob/HEAD/guide/README.md)**. A narrated version (audio) lives at
**[retospect.github.io/precis-mcp](https://retospect.github.io/precis-mcp/)**
once Pages is enabled. Video: coming.

**Set it up:** single machine —
[`docs/setup-single-machine.md`](https://github.com/retospect/precis-mcp/blob/HEAD/docs/setup-single-machine.md) ·
cluster (multi-host, ansible) — [`deploy/README.md`](https://github.com/retospect/precis-mcp/blob/HEAD/deploy/README.md).

> **Status.** Actively developed on the v8 line. There is no
> CHANGELOG — `git log` is the change story. The kinds catalogue
> below is a…
