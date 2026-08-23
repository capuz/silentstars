---
repo: "gabrielmaialva33/winx-code-agent"
name: "winx-code-agent"
description: "🦀 A high-performance code agent written in Rust, combining the best features of WCGW for maximum efficiency and semantic capabilities. "
readmeQualityOk: true
url: "https://github.com/gabrielmaialva33/winx-code-agent"
homepage: "https://crates.io/crates/winx-code-agent"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["autonomous", "code-agent", "computer", "control", "execution", "mcp", "rust", "shell", "wcgw", "serena"]
stars: 33
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-04-17T04:07:28Z"
lastCommitAt: "2026-08-23T04:10:22Z"
lastReleaseAt: "2026-05-23T16:52:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["gabrielmaialva33"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fe0cf1ff39d5e614b8698d2b27d3cd7ccd3e4208decb945c9bd4445e504e5b1/gabrielmaialva33/winx-code-agent"
---

# 🪄 Winx
  ### *The High-Performance, Remote-First MCP Runtime for AI Coding Agents*

  **Durable PTY Sessions • Streamable HTTP • Guarded File Operations • Blazing Fast Rust 🦀**

  </p>

    <em>"Give remote and local LLMs durable, authenticated hands on your development machine."</em>
  </p>

  </p>

    <b>English</b> • <a href="README.pt.md">Português</a> • <a href="README.zh.md">中文</a>
  </p>
</div>

Winx is a **remote-first MCP runtime** for agents that need a real shell, guarded file-editing primitives, repository-aware
code navigation, and sessions that survive dropped connections. Its primary deployment path is a hardened
**Streamable HTTP** endpoint for ChatGPT and other cloud or networked MCP clients; stdio remains fully supported for
Claude Code, Codex CLI, Cursor, VS Code, and other local clients.

On Unix, Winx separates the MCP adapter from the processes that own each PTY. `winxd` manages the control plane and one
`winx-guardian` per logical session keeps the shell alive across HTTP disconnects, client restarts, and adapter upgrades.
It started as a Rust port of [WCGW](https://github.com/rusiaaman/wcgw), but it is not a Python wrapper: `cd` persists,
`Ctrl+C`…
