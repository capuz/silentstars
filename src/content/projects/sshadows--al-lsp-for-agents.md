---
repo: "SShadowS/al-lsp-for-agents"
name: "al-lsp-for-agents"
description: "AL LSP marketplace for Claude Code"
readmeQualityOk: true
url: "https://github.com/SShadowS/al-lsp-for-agents"
homepage: "https://blog.sshadows.dk"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [49, 32]
stars: 46
forks: 7
openIssues: 3
closedIssues: 16
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2026-01-09T13:01:35Z"
lastCommitAt: "2026-10-30T11:03:03Z"
lastReleaseAt: "2026-03-16T11:21:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 48
maintainers: ["github-actions[bot]", "SShadowS"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d8ae4f48867851881b0df3d2b2a225969bb3f753801f763fdd946dd3dcc8d93/SShadowS/al-lsp-for-agents"
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
