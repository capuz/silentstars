---
repo: "MarcelRoozekrans/roslyn-codelens-mcp"
name: "roslyn-codelens-mcp"
description: "Roslyn-based MCP server giving AI agents deep semantic understanding of .NET/C# codebases — 57 tools for navigation, call graphs, diagnostics & code fixes, code-quality auditing, test intelligence, DI graphs, and IL/external-assembly inspection."
readmeQualityOk: true
url: "https://github.com/MarcelRoozekrans/roslyn-codelens-mcp"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["claude-code", "code-analysis", "dotnet", "mcp", "roslyn", "ai-agents", "code-intelligence", "csharp", "dotnet-tool", "mcp-server"]
stars: 27
forks: 12
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-03-06T09:23:01Z"
lastCommitAt: "2026-07-11T05:58:28Z"
lastReleaseAt: "2026-03-07T21:40:36Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 46
maintainers: ["renovate[bot]", "MarcelRoozekrans", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59238aea9a2eaeb2a4a9fd63c583bf37071973cc5abfd97793afe0639dd921cf/MarcelRoozekrans/roslyn-codelens-mcp"
fundingLinks: ["GITHUB:https://github.com/MarcelRoozekrans"]
---

# Roslyn CodeLens MCP Server

A Roslyn-based MCP server that gives AI agents deep semantic understanding of .NET codebases — type hierarchies, call graphs, DI registrations, diagnostics, refactoring, and more.

</a>

---

## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/marcelroozekrans-roslyn-codelens-mcp).

## Features

- **find_implementations** — Find all classes/structs implementing an interface or extending a class
- **find_callers** — Find every call site for a method, property, or constructor
- **find_event_subscribers** — Every += / -= site for an event symbol, with resolved handler and subscribe/unsubscribe tag
- **find_tests_for_symbol** — List xUnit/NUnit/MSTest methods that exercise a production symbol; opt-in transitive walk through helpers
- **get_test_summary** — Per-project inventory of test methods with framework, attribute kind, data-row count, location, and production symbols referenced
- **find_uncovered_symbols** — Public methods and properties no test transitively reaches; sorted by cyclomatic complexity for prioritization
- **generate_test_skeleton** — Emit a compilable test-class skeleton (as text) for a…
