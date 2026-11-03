---
repo: "pvliesdonk/markdown-vault-mcp"
name: "markdown-vault-mcp"
description: "Generic markdown vault MCP with hybrid search"
readmeQualityOk: true
url: "https://github.com/pvliesdonk/markdown-vault-mcp"
homepage: "https://pvliesdonk.github.io/markdown-vault-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["embeddings", "fastmcp", "fts5", "knowledge-base", "markdown", "mcp", "mcp-server", "model-context-protocol", "obsidian", "search"]
stars: 37
forks: 16
openIssues: 153
closedIssues: 776
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2026-03-07T12:08:22Z"
lastCommitAt: "2026-11-03T19:05:08Z"
lastReleaseAt: "2026-03-13T15:54:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 50
maintainers: ["pvliesdonk", "salmonumbrella", "tstotzer"]
openGraphImageUrl: "https://opengraph.githubassets.com/928691da0bfd14914d1f7deef86acb9b495cc35e6f04af41b04581b860d6d0ab/pvliesdonk/markdown-vault-mcp"
---

# Markdown Vault MCP

Generic markdown vault MCP with hybrid search

**[Documentation](https://pvliesdonk.github.io/markdown-vault-mcp/)** | **[Config wizard](https://pvliesdonk.github.io/markdown-vault-mcp/latest/reference/configuration-generator/)** | **[PyPI](https://pypi.org/project/markdown-vault-mcp/)** | **[Docker](https://github.com/pvliesdonk/markdown-vault-mcp/pkgs/container/markdown-vault-mcp)**

Give Claude, or any MCP client, a folder of Markdown notes to search, read and write. An Obsidian vault works as it is.

- **Hybrid search.** Keyword search with SQLite FTS5 and, once an embedding provider is configured, search by meaning, fused by Reciprocal Rank Fusion, with the vectors kept in SQLite, files or PostgreSQL. Results are short snippets; `read` fetches the whole section. See [Embeddings](https://github.com/pvliesdonk/markdown-vault-mcp/blob/HEAD/docs/use/embeddings.md) and [Choosing an embedding store](https://github.com/pvliesdonk/markdown-vault-mcp/blob/HEAD/docs/use/embedding-stores.md).
- **Hosted CLI reads.** Search a running vault with `markdown-vault-mcp search "term" --server https://vault.example/mcp`; read notes, list metadata, collect context, traverse…
