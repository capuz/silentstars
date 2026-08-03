---
repo: "tamerh/biobtree"
name: "biobtree"
description: "BioBTree v2: An MCP-enabled biomedical graph database unifying 70+ datasets."
readmeQualityOk: true
url: "https://github.com/tamerh/biobtree"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [54, 45]
topics: ["bioinformatics", "genomics"]
stars: 19
forks: 3
openIssues: 1
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-01-14T11:04:23Z"
lastCommitAt: "2026-08-03T06:42:34Z"
lastReleaseAt: "2019-11-29T17:23:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 66
maintainers: ["tamerh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bcfc708d2f006e29bdd1b2ad38e48bfef0d307370322709f2dc69ccef646c29/tamerh/biobtree"
---

# 🧬 BioBTree v2

****A unified biomedical graph database that integrates 80+ primary data sources — genes, proteins, compounds, diseases, pathways, and clinical data — into a single queryable graph with billions of cross-reference edges. Its native MCP server gives LLMs direct access to structured, authoritative biomedical data, complementing their reasoning with reliable identifiers and up-to-date database content.****

```
BRCA1 >> ensembl >> uniprot >> pdb[resolution<2.0]
```

This finds BRCA1 in Ensembl, maps to UniProt proteins, and returns high-resolution PDB structures — crossing three databases in a single line.

🌐 **Website:** [sugi.bio/biobtree](https://sugi.bio/biobtree/)

    
## 🔗 Try It

The fastest way to experience BioBTree v2 is through MCP. We recommend **Claude CLI** (tested extensively), though **Codex CLI** and **Gemini CLI** also work:

```json
{
  "mcpServers": {
    "biobtree": {
      "type": "http",
      "url": "https://sugi.bio/biobtree/mcp"
    }
  }
}
```

Once connected, just ask questions in natural language — the AI will query BioBTree automatically:

> 💊 *"What tissues express SCN9A most highly? Are there safety concerns for a Nav1.7…
