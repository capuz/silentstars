---
repo: "kearril/RimSearcher"
name: "RimSearcher"
description: "A Model Context Protocol (MCP) server for fast searching and retrieval of RimWorld source code."
originalDescription: "A Model Context Protocol (MCP) server for fast searching and retrieval of RimWorld source code."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kearril/RimSearcher"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "dotnet", "mcp", "mcp-server", "rimworld", "rimworld-modding"]
stars: 28
forks: 4
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T12:57:18Z"
lastCommitAt: "2026-07-28T14:58:46Z"
lastReleaseAt: "2026-03-05T06:51:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 56
undervaluedScore: 8
maintainers: ["kearril"]
openGraphImageUrl: "https://opengraph.githubassets.com/378ec964342c81b73c9c172ba338c088ecc46faa99c6491ede8326ff80f28f81/kearril/RimSearcher"
---

# RimSearcher

A service for searching and analyzing RimWorld source code based on MCP. It builds a queryable index from local RimWorld C# / XML data, allowing AI assistants to locate, track, read, and interpret logic in the actual source code, reducing "hallucination-style responses".

Utilizes Roslyn + XML inheritance parsing, supporting high-concurrency read-only queries.
> MCP Protocol Version: `2025-11-25`

---

## 1. Core Features

### Precise C# Parsing (Roslyn)
- Single-pass parsing extracts type inheritance and member indices (methods/properties/fields/events)
- Supports class outlines, member body extraction, and inheritance chain tracking
- Supports method, property, constructor, indexer, and operator-level reading

### XML Def Inheritance Merging
- Recursively parses `ParentName` links
- Merges parent and child nodes and handles list containers/override logic
- Outputs directly readable "final Def results"

### C# and XML Semantic Bridging
- Automatically extracts associated C# types from Def (e.g., thingClass / compClass / workerClass)
- Displays Def information and associated code paths simultaneously in `inspect`

### Query Performance Optimization
- Pre-built index…
