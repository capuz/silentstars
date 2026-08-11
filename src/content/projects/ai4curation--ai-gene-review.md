---
repo: "ai4curation/ai-gene-review"
name: "ai-gene-review"
description: "Demonstration of AI review of existing functional annotations"
readmeQualityOk: true
url: "https://github.com/ai4curation/ai-gene-review"
homepage: "https://ai4curation.github.io/ai-gene-review"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
topics: ["ai4curation", "monarchinitiative", "agentic-ai", "claude-code", "functional-annotation", "geneontology"]
stars: 24
forks: 4
openIssues: 176
closedIssues: 33
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-08-27T01:27:09Z"
lastCommitAt: "2026-08-11T04:50:26Z"
lastReleaseAt: "2025-09-15T16:30:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 52
maintainers: ["cmungall", "ai4c-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e42532ad64fa4c324109176f95a35e8a3bd637981c14dda6e061380885ea3cea/ai4curation/ai-gene-review"
---

# AI Gene Review

AI-assisted tool for reviewing and curating gene annotations with **community feedback integration**. This project provides a structured workflow for validating existing Gene Ontology (GO) annotations using AI-driven analysis combined with literature research, bioinformatics evidence, and crowdsourced expert feedback.

## Overview

The AI Gene Review tool helps researchers and curators:
- **Review existing GO annotations** using strict, defined criteria
- **Synthesize high-quality annotations** from multiple evidence sources
- **Fetch and organize** gene data from UniProt and GOA databases
- **Validate annotation files** against LinkML schemas
- **Manage references** and supporting literature
- **Collect community feedback** through integrated voting and evaluation systems

## Quick Start

### Installation

1. Install [uv](https://docs.astral.sh/uv/) for dependency management
2. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/cmungall/ai-gene-review.git
   cd ai-gene-review
   uv sync --group dev
   ```

### Basic Usage

**Fetch gene data:**
```bash
uv run ai-gene-review fetch-gene human TP53
```

**Validate a gene review…
