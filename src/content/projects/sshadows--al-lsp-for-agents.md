---
repo: "SShadowS/al-lsp-for-agents"
name: "al-lsp-for-agents"
description: "AL LSP marketplace for Claude Code"
readmeQualityOk: true
url: "https://github.com/SShadowS/al-lsp-for-agents"
homepage: "https://blog.sshadows.dk"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [49, 30]
stars: 45
forks: 6
openIssues: 3
closedIssues: 16
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2026-01-09T13:01:35Z"
lastCommitAt: "2026-09-20T08:47:11Z"
lastReleaseAt: "2026-03-16T11:21:54Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 45
maintainers: ["SShadowS", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b3be007f5aa064ef7c0377e47b7734d46f8b7adf25ddeecf40881981a53801a/SShadowS/al-lsp-for-agents"
---

# AL LSP for Agents

AL Language Server wrappers for AI-powered Business Central development. Works with Claude Code, OpenCode, and VS Code (GitHub Copilot agent mode).

## Available Wrappers

| Wrapper | Platform | Description |
|---------|----------|-------------|
| `al-language-server-go-windows` | Windows | **Recommended** - Go wrapper with Code Lens & Call Hierarchy |
| `al-language-server-go-linux` | Linux | **Recommended** - Go wrapper with Code Lens & Call Hierarchy |
| `al-language-server-go-darwin` | macOS | **Recommended** - Go wrapper with Code Lens & Call Hierarchy |
| `al-language-server-python` | Cross-platform | *Deprecated* - Basic LSP features only |

> **Migration Note:** If you're using the Python wrapper, switch to the Go wrapper for your platform to get Code Lens (reference counts) and Call Hierarchy features.

## Features

- **Hover** - Type information and documentation
- **Go to Definition** - Jump to symbol definitions (tables, codeunits, enums, procedures)
- **Document Symbols** - List all symbols in a file
- **Find References** - Find all references to a symbol
- **Call Hierarchy** - Find incoming and outgoing calls for procedures
- **Symbol Relations**…
