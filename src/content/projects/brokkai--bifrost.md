---
repo: "BrokkAi/bifrost"
name: "bifrost"
description: "Multi-language static analysis for agents, editors, and large repositories."
readmeQualityOk: true
url: "https://github.com/BrokkAi/bifrost"
homepage: "https://brokkai.github.io/bifrost/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["ai", "code-intelligence", "dev-tools", "llm", "lsp-server", "mcp-server", "static-analysis"]
stars: 6
forks: 3
openIssues: 59
closedIssues: 482
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-03-25T03:17:42Z"
lastCommitAt: "2026-07-18T05:45:22Z"
lastReleaseAt: "2026-05-26T22:31:32Z"
status: "thriving"
tags: ["needs_contributors", "release_machine"]
healthScore: 98
undervaluedScore: 73
maintainers: ["jbellis", "DavidBakerEffendi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1191226856/18f914c1-29b8-4a85-80c6-1e5630c4f1cd"
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

See [Choose Bifrost](https://brokkai.github.io/bifrost/choose-bifrost/) for the
right…
