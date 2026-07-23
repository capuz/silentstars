---
repo: "BrokkAi/bifrost"
name: "bifrost"
description: "Multi-language static analysis for agents, editors, and large repositories."
readmeQualityOk: true
url: "https://github.com/BrokkAi/bifrost"
homepage: "https://bifrost.brokk.ai/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai", "code-intelligence", "dev-tools", "llm", "lsp-server", "mcp-server", "static-analysis"]
stars: 9
forks: 3
openIssues: 43
closedIssues: 646
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-03-25T03:17:42Z"
lastCommitAt: "2026-07-23T06:15:37Z"
lastReleaseAt: "2026-05-26T22:31:32Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 99
undervaluedScore: 67
maintainers: ["jbellis", "DavidBakerEffendi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1191226856/1d312c97-bef3-4180-9238-f62385bf1faf"
---

<h1 align="center">Bifrost</h1>

  </a>
</p>

</p>

</p>

## Why Bifrost?

`bifrost` is Brokk's Rust-based static analysis toolbox for AI coding harnesses,
editors, and large repositories.

Bifrost gives every supported language a shared intermediate representation, so
the same structural query and navigation workflows work across a mixed-language
repository instead of stopping at language boundaries.

- **One multi-language IR.** Parse unbuilt or partially broken workspaces and
  normalize their source structure for cross-language analysis.
- **A real query language.** Use JSON CodeQuery or the Rune Query Language
  (RQL) to find language-neutral code shapes and traverse indexed declarations,
  references, calls, imports, and type relationships.
- **Built for agents and editors.** Expose structured MCP tools to coding
  agents, LSP features to editors, and the same analyzer through the CLI,
  Python, and Rust.
- **Designed for active repositories.** Snapshot isolation, incremental updates,
  content-based caching, and git/worktree awareness keep analysis responsive as
  a repository changes.

See [Choose Bifrost](https://bifrost.brokk.ai/choose-bifrost/) for the
right interface…
