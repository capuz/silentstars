---
repo: "pvliesdonk/markdown-vault-mcp"
name: "markdown-vault-mcp"
description: "Generic markdown vault MCP with hybrid search"
readmeQualityOk: true
url: "https://github.com/pvliesdonk/markdown-vault-mcp"
homepage: "https://pvliesdonk.github.io/markdown-vault-mcp/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["embeddings", "fastmcp", "fts5", "knowledge-base", "markdown", "mcp", "mcp-server", "model-context-protocol", "obsidian", "search"]
stars: 34
forks: 13
openIssues: 140
closedIssues: 726
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-03-07T12:08:22Z"
lastCommitAt: "2026-10-17T07:58:30Z"
lastReleaseAt: "2026-03-13T15:54:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 49
maintainers: ["pvliesdonk", "mikebronner", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddf7506de2b153c7011d4218dbdbdfa94659e938b9c5e1dc1927d9d233d50ecf/pvliesdonk/markdown-vault-mcp"
---

# Markdown Vault MCP

Generic markdown vault MCP with hybrid search

**[Documentation](https://pvliesdonk.github.io/markdown-vault-mcp/)** | **[Config wizard](https://pvliesdonk.github.io/markdown-vault-mcp/latest/reference/configuration-generator/)** | **[PyPI](https://pypi.org/project/markdown-vault-mcp/)** | **[Docker](https://github.com/pvliesdonk/markdown-vault-mcp/pkgs/container/markdown-vault-mcp)**

Give Claude, or any MCP client, a folder of Markdown notes to search, read and write. An Obsidian vault works as it is.

- **Hybrid search.** Keyword search with SQLite FTS5 and, once an embedding provider is configured, search by meaning, fused by Reciprocal Rank Fusion. Results are short snippets; `read` fetches the whole section. See [Embeddings](https://github.com/pvliesdonk/markdown-vault-mcp/blob/HEAD/docs/use/embeddings.md).
- **Frontmatter as data.** YAML frontmatter fields become search filters, and long notes are split at their headings.
- **Careful writes.** The write tools (`write`, `edit`, `append`, `delete`, `rename`, `move_folder`, `fetch`, `git_sync`, the `okf_*` tools, `create_upload_link`) are on by default and hidden when `MARKDOWN_VAULT_MCP_READ_ONLY=true`.…
