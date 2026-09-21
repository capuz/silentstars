---
repo: "VuDZ/RoslynMcpServer"
name: "RoslynMcpServer"
description: "Roslyn-powered C# MCP server for AI agents. Enables semantic code analysis, precise diagnostics, and safe refactoring without full rebuilds."
readmeQualityOk: true
url: "https://github.com/VuDZ/RoslynMcpServer"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["ai-agent", "csharp", "cursor", "dotnet", "llm", "mcp", "mcp-server", "refactoring", "roslyn"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-10T16:26:05Z"
lastCommitAt: "2026-09-21T09:11:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 45
maintainers: ["VuDZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb894aa97796d132935dcda7743d1baf694a9d0a799c809f2d3be853c3c49930/VuDZ/RoslynMcpServer"
---

# RoslynMcpServer

[🇷🇺 Читать на русском (Russian Version)](#russian-version)

RoslynMcpServer gives an AI coding agent compiler-aware tools for C# solutions: semantic navigation, diagnostics and code fixes, refactoring, dependency inspection, and bounded `dotnet` build/test/run output.

Unlike a filesystem MCP, it loads `.sln`, `.slnx`, or `.csproj` through Roslyn/MSBuild. The agent can resolve symbols and project context instead of inferring them from text alone.

## MCP and agent: the 60-second model

- **MCP client** — Cursor, OpenCode, or another compatible host. It starts the server and exposes its tools to the model.
- **AI agent** — the model plus the client's orchestration. It decides which tool to call; it is not part of this repository.
- **RoslynMcpServer** — a local stdio process. It exposes tools but has no chat UI and does not act autonomously.
- **`AGENTS.md`** — repository policy for the agent. MCP configuration makes tools available; this file tells the agent when to use them.

Typical flow:

`developer request → agent → MCP tool call → Roslyn/MSBuild/ILSpy/dotnet → compact result → agent`

The server is C#-focused. It can read non-C# files and execute selected…
