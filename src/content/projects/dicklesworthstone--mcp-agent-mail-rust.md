---
repo: "Dicklesworthstone/mcp_agent_mail_rust"
name: "mcp_agent_mail_rust"
description: "Rust MCP server for multi-agent coordination: 34 tools, Git-backed archive, SQLite indexing, advisory file locks, and an interactive TUI console"
url: "https://github.com/Dicklesworthstone/mcp_agent_mail_rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["ai-agents", "coordination", "mcp", "rust", "tui"]
stars: 96
forks: 24
openIssues: 4
closedIssues: 159
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-05T05:33:42Z"
lastCommitAt: "2026-06-27T00:47:18Z"
lastReleaseAt: "2026-03-21T20:13:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 34
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1150296802/667b4968-9fe2-47a8-9e40-2d9a34c1a2f8"
---

# MCP Agent Mail (Rust)

</div>

</div>

> "It's like Gmail for your coding agents!"

A mail-like coordination layer for AI coding agents, exposed as an MCP server with 37 tools and 25 resources, Git-backed archive, SQLite indexing, an interactive 16-screen TUI, a server-rendered web UI, and an agent-first robot CLI. The Rust rewrite of the [original Python project](https://github.com/Dicklesworthstone/mcp_agent_mail) (1,700+ stars).

**Supported agents:** [Claude Code](https://claude.ai/code), [Codex CLI](https://github.com/openai/codex), [Gemini CLI](https://github.com/google-gemini/gemini-cli), [GitHub Copilot CLI](https://docs.github.com/en/copilot), and any MCP-compatible client.

Watch the [23-minute walkthrough](https://youtu.be/68VVcqMEDrs) to see seven AI coding agents send over 1,000 messages to each other while implementing a development plan over two days.

<h3>Quick Install</h3>

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/mcp_agent_mail_rust/main/install.sh?$(date +%s)" | bash
```

<p><em>Works on Linux and macOS (x86_64 and aarch64). Auto-detects your platform, downloads the right binary, and auto-configures detected Codex CLI installs…
