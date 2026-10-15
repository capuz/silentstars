---
repo: "xieyuschen/gopls-mcp"
name: "gopls-mcp"
description: "MCP server for golang projects development: Expand AI Code Agent ability boundary to have a semantic understanding and determinisic information for golang projects."
readmeQualityOk: true
url: "https://github.com/xieyuschen/gopls-mcp"
homepage: "https://gopls-mcp.org"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["ai-agent", "claude-code", "go", "golang", "mcp-server", "codex", "gemini", "static-analysis"]
stars: 59
forks: 6
openIssues: 3
closedIssues: 10
watchers: 1
contributors: 49
recentReleases: 0
createdAt: "2026-01-31T15:38:54Z"
lastCommitAt: "2026-10-15T08:32:25Z"
lastReleaseAt: "2026-06-29T07:30:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 18
maintainers: ["adonovan", "xieyuschen", "madelinekalil"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1146733643/01839ea8-177e-484b-9e34-bbc809659888"
---

# gopls-mcp

Give your AI Agent the compiler's brain, not a text searcher.

Documentation: https://gopls-mcp.org

gopls-mcp delivers type-checker-level semantic analysis directly to your LLM.
Unlike text search, it resolves Go's type system — interface satisfaction, cross-package identity, and shadowed scopes — with the same precision as the compiler.

Where it pays off most is on **semantic tasks**: finding all concrete types that implement an interface, tracing call hierarchies, and mapping package dependencies. A [benchmark](https://github.com/xieyuschen/gopls-mcp/blob/HEAD/benchmark/) over 11 tasks shows gopls-mcp uses 2–4× fewer tool calls and finishes faster than grep-based navigation on those tasks. For simple same-file lookups, plain bash/grep remains equally effective and carries less overhead.

## Install

### Claude Code (plugin — recommended)

```
/plugin marketplace add https://github.com/xieyuschen/gopls-mcp.git
/plugin install gopls-mcp
```

The plugin automatically installs the binary and injects the routing skill — no manual setup required.

### Codex (plugin — recommended)

```bash
codex plugin marketplace add https://github.com/xieyuschen/gopls-mcp.git
codex…
