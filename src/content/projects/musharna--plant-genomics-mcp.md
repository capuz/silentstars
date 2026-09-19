---
repo: "musharna/plant-genomics-mcp"
name: "plant-genomics-mcp"
description: "Plant genomics MCP server — 50 tools across 23 backends (Ensembl Plants, Phytozome, UniProt, AlphaFold DB, PDBe, InterPro, JASPAR, PANTHER, OrthoDB, AraGWAS, NCBI BLAST, Gramene, KEGG, STRING-DB, ATTED-II, BAR, …) + cross-source synthesis. stdio + Streamable-HTTP."
readmeQualityOk: true
url: "https://github.com/musharna/plant-genomics-mcp"
homepage: "https://musharna.github.io/projects/MCPServers/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bioinformatics", "ensembl-plants", "genomics", "kegg", "llm-tools", "mcp", "model-context-protocol", "plant-genomics", "python", "uniprot"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-05-22T21:18:06Z"
lastCommitAt: "2026-09-19T01:38:20Z"
lastReleaseAt: "2026-07-25T07:48:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 60
maintainers: ["musharna", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1247056415/68580715-5339-40e3-9a61-00284b1bfe43"
discussionCount: 0
---

# 🌱 plant-genomics-mcp

> **50 tools** for plant-genomics locus lookup over the Model Context Protocol —
> 28 single-locus + 1 motif lookup + 1 region query + 1 variant annotator + 1 gene-set enrichment + 1 BLAST search + 12 parallel-batch + 5 cross-source synthesis variants.
> Free, public sources: Ensembl Plants, Phytozome BioMart, UniProtKB,
> Europe PMC, QuickGO, Planteome, PlantCyc/PMN, g:Profiler, NCBI BLAST,
> Gramene, JASPAR, KEGG, STRING-DB, ATTED-II, ThaleMine, and BAR (Bio-Analytic Resource for
> Plant Biology).

</p>

## 📦 Install

```bash
# Zero-install — uv fetches and runs it on demand
claude mcp add plant-genomics --scope local -- uvx plant-genomics-mcp
```

<details>
<summary>Other install paths (pipx, Docker, from source)</summary>

```bash
# pipx — installs the CLI onto your PATH
pipx install plant-genomics-mcp
claude mcp add plant-genomics --scope local -- plant-genomics-mcp

# GHCR Docker image
docker pull ghcr.io/musharna/plant-genomics-mcp:latest
claude mcp add plant-genomics --scope local -- \
  docker run --rm -i ghcr.io/musharna/plant-genomics-mcp:latest

# From source
git clone https://github.com/musharna/plant-genomics-mcp.git
cd plant-genomics-mcp…
