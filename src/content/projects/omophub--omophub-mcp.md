---
repo: "OMOPHub/omophub-mcp"
name: "omophub-mcp"
description: "MCP server for OHDSI OMOP medical vocabularies. Search, map, and navigate 11M+ concepts (SNOMED, ICD-10, RxNorm, LOINC) from any AI agent."
readmeQualityOk: true
url: "https://github.com/OMOPHub/omophub-mcp"
homepage: "https://omophub.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agent", "clinical-data", "concept-mapping", "healthcare", "icd10", "llm-tools", "loinc", "mcp", "mcp-server", "medical-vocabularies"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-07-09T12:41:46Z"
lastCommitAt: "2026-11-24T14:04:25Z"
lastReleaseAt: "2026-06-01T11:50:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 56
maintainers: ["alex-omophub", "konstjar"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdbe2cfd61ecdb6ce216c8e0c1daf8264f74d1ae07cb5dcccd49aa675796c672/OMOPHub/omophub-mcp"
---

Search, map, and navigate 11M+ OMOP concepts: SNOMED CT, ICD-10, RxNorm, LOINC, and more. Directly from Claude, Cursor, VS Code, or any MCP-compatible client.

---

## Why OMOPHub MCP?

Working with medical vocabularies today means downloading multi-gigabyte CSV files, loading them into a local database, and writing SQL to find what you need. Every time.

**OMOPHub MCP Server gives your AI assistant instant access to the entire OHDSI ATHENA vocabulary**. No database setup, no CSV wrangling, no context switching. Just ask.

```
You: "Map ICD-10 code E11.9 to SNOMED"

Claude: Found it - E11.9 (Type 2 diabetes mellitus without complications)
        maps to SNOMED concept 201826 (Type 2 diabetes mellitus)
        via standard 'Maps to' relationship.
```
