---
repo: "MadQ/RoslynMcp"
name: "RoslynMcp"
description: "Roslyn-powered MCP server for C# code intelligence"
readmeQualityOk: true
url: "https://github.com/MadQ/RoslynMcp"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["ai", "ai-coding-assistant", "code-intelligence", "csharp", "dotnet", "mcp", "roslyn"]
stars: 23
forks: 6
openIssues: 32
closedIssues: 248
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-22T04:33:41Z"
lastCommitAt: "2026-11-15T08:25:25Z"
lastReleaseAt: "2026-07-18T06:45:10Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["quinten-martens", "MadQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/e52cd1c6857b61d5c08362c46318feed604422339607d37a39353e3cb9f4a2eb/MadQ/RoslynMcp"
discussionCount: 9
---

# RoslynMcp

**Give your AI agent a C# compiler instead of grep.**
([first battle-test results: 38-69% token savings, bugs found, lessons learned](https://github.com/MadQ/RoslynMcp/blob/HEAD/docs/battle-test-results.md) · [shared workspace architecture](https://github.com/MadQ/RoslynMcp/blob/HEAD/docs/plans/multi-instance-architecture.md) · [help wanted](#help-wanted))

RoslynMcp is a [Model Context Protocol](https://modelcontextprotocol.io/) server that gives AI coding agents real Roslyn compiler semantics: type resolution, cross-file references, semantic rename, diagnostics, and 49 MCP tools (48 public + 1 debug-only). Not string matching. Not regex. Actual compiler-level understanding of your C# code.

```
Agent: "Rename OrderStatus.Pending to OrderStatus.AwaitingApproval"

Without RoslynMcp:  grep + find-and-replace across 50 files. Hope nothing else is named "Pending."
With RoslynMcp:     roslyn_preview_rename -> reviews diff across 3 projects -> roslyn_apply_rename. Done.
```

Works with any MCP-compatible client: Claude Code, GitHub Copilot, Claude Desktop, Cline, Cursor, Windsurf, Roo Code, Continue, and more.

> **Security Note:** RoslynMcp runs with your user…
