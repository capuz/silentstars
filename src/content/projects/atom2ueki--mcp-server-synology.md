---
repo: "atom2ueki/mcp-server-synology"
name: "mcp-server-synology"
description: "💾 Model Context Protocol (MCP) server for Synology NAS - Enables AI assistants (Claude, Cursor, Continue) to manage files, downloads, and system operations through secure API integration. Features Docker deployment, auto-authentication, and comprehensive file system tools."
readmeQualityOk: true
url: "https://github.com/atom2ueki/mcp-server-synology"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["mcp", "mcp-server", "synology"]
stars: 257
forks: 55
openIssues: 0
closedIssues: 28
watchers: 5
contributors: 15
recentReleases: 1
createdAt: "2025-05-31T09:13:49Z"
lastCommitAt: "2026-11-20T12:19:49Z"
lastReleaseAt: "2026-09-22T13:27:32Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 42
maintainers: ["atom2ueki", "barbecuesteve", "rubicon"]
openGraphImageUrl: "https://opengraph.githubassets.com/bef60172926905bd8e099cd720fa5487f2fbcbb20a7a63f466b91e3f5044f988/atom2ueki/mcp-server-synology"
---

# 💾 Synology MCP Server

A Model Context Protocol (MCP) server for Synology NAS devices. Enables AI assistants to manage files and downloads through secure authentication and session management.

**🌟 NEW: Unified server supports both Claude/Cursor (stdio) and Xiaozhi (WebSocket) simultaneously!**

## 📦 Install from PyPI

No need to clone the repository — install the package directly from PyPI:

```bash
# With pip
pip install mcp-server-synology

# Or with pipx (isolated environment)
pipx install mcp-server-synology

# Or with uv
uv tool install mcp-server-synology
```

This installs two equivalent commands: `synology-mcp` and `mcp-server-synology`.

For MCP clients, `uvx` is the simplest option — it downloads and caches the package automatically, no manual install or local clone required:

```json
{
  "mcpServers": {
    "synology": {
      "command": "uvx",
      "args": ["mcp-server-synology"]
    }
  }
}
```

Configuration lives outside the package, so it works the same as a source checkout: create `~/.config/synology-mcp/settings.json` as described in [Configuration Options](#️-configuration-options).
