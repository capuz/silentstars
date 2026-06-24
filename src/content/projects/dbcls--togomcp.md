---
repo: "dbcls/togomcp"
name: "togomcp"
description: "MCP server for the RDF Portal (Public version)"
url: "https://github.com/dbcls/togomcp"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [77, 22]
stars: 9
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2025-12-15T18:36:15Z"
lastCommitAt: "2026-06-24T00:21:31Z"
lastReleaseAt: "2026-05-07T12:56:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 60
maintainers: ["arkinjo"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac2291e00c8adf9f3fc9782262587849eb945d771eebb476a37704fa96156eca/dbcls/togomcp"
---

# TogoMCP: MCP Server for the RDF Portal

![Python >=3.11](https://img.shields.io/badge/python-%3E%3D3.11-blue)
![License: MIT](https://img.shields.io/badge/license-MIT-green)

An [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server that gives AI assistants (Claude, etc.) access to biological and biomedical RDF databases via SPARQL at the [RDF Portal](https://rdfportal.org/), as well as selected REST APIs (NCBI E-utilities, UniProt, ChEMBL, PDB, Reactome, Rhea, MeSH, and more).

## Quick Start: Remote Server (No Installation)

You can use the hosted TogoMCP server directly — no local setup needed.  
See **https://togomcp.rdfportal.org/** for connection instructions.

---

## Local Installation

### Prerequisites
- Python >= 3.11
- [uv](https://docs.astral.sh/uv/) package manager

### 1. Install `uv`
```bash
# macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows (PowerShell)
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### 2. Clone and install
```bash
git clone https://github.com/dbcls/togomcp.git
cd togomcp
uv sync
```

### 3. Set NCBI API Key (required for NCBI tools)
[Obtain your NCBI API…
