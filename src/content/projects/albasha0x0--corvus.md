---
repo: "Albasha0x0/Corvus"
name: "Corvus"
description: "Reverse-engineering MCP server for AI agents: .NET and native PE/ELF/Mach-O analysis, decompilation, cross-references and patching. IDA and Ghidra optional."
readmeQualityOk: true
url: "https://github.com/Albasha0x0/Corvus"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["ai-agents", "binary-analysis", "claude-code", "decompiler", "disassembler", "dotnet", "ghidra", "ida-pro", "il2cpp", "mcp"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-08T02:03:00Z"
lastCommitAt: "2026-10-22T08:45:56Z"
lastReleaseAt: "2026-10-15T08:17:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["Albasha0x0"]
openGraphImageUrl: "https://opengraph.githubassets.com/b39b03dcf14e954e40f46c55aeafaea6139ede6f66af9f81b74b42f0161df0bf/Albasha0x0/Corvus"
---

# Corvus

**Reverse engineering for AI agents.** Corvus is an MCP server that lets your agent read, trace, compare and patch
compiled programs: .NET assemblies and native PE, ELF and Mach-O binaries. One self-contained binary, no runtime to
install, nothing uploaded; by default nothing it reads is executed.

> [!NOTE]
> Corvus is under active development. Tools, parameters and output can change between releases; breaking changes are
> listed in the [release notes](https://github.com/Albasha0x0/Corvus/blob/HEAD/docs/release-notes.md). Bug reports and feedback are welcome in
> [issues](https://github.com/Albasha0x0/Corvus/issues). If Corvus is useful to you, a star helps other people find it.

[Quick start](#quick-start) · [How it works](#how-it-works) · [What you can analyze](#what-you-can-analyze) ·
[Showcases](#showcases) · [Why Corvus](#why-corvus) · [Documentation](#documentation)

## Quick start

**Windows** (PowerShell):

```powershell
irm https://raw.githubusercontent.com/Albasha0x0/Corvus/main/install.ps1 | iex
```

**Linux / macOS:**

```sh
curl -fsSL https://raw.githubusercontent.com/Albasha0x0/Corvus/main/install.sh | sh
```

The installer verifies the download against…
