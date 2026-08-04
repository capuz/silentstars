---
repo: "medizininformatik-initiative/aether"
name: "aether"
description: "FDPG DUP Pipeline coordination cli tool"
readmeQualityOk: true
url: "https://github.com/medizininformatik-initiative/aether"
homepage: "https://medizininformatik-initiative.github.io/aether/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 6
closedIssues: 136
watchers: 0
contributors: 19
recentReleases: 1
createdAt: "2025-11-04T11:16:17Z"
lastCommitAt: "2026-08-04T06:11:37Z"
lastReleaseAt: "2026-05-15T11:31:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["renovate[bot]", "trobanga"]
openGraphImageUrl: "https://opengraph.githubassets.com/fee8b5fd45392b75ddce0e90d728dbe2328f4ff4fce6cd5910e861eea2464552/medizininformatik-initiative/aether"
---

</p>

# Aether

A command-line tool for processing FHIR healthcare data through configurable pipeline steps.

Aether is a Go command-line tool that orchestrates a configurable FHIR data pipeline for the [Medizininformatik-Initiative](https://www.medizininformatik-initiative.de/) (MII). It chains steps such as TORCH/CRTDL import, DIMP pseudonymization, bundle splitting, flattening to CSV, and send — with `wait` checkpoints for manual inspection and zstd compression between stages. Aether is built for data stewards and integration engineers who move MII FHIR data between research and clinical systems.

## What Does Aether Do?

Aether helps you:
1. **Extract** patient data from a TORCH server using CRTDL query files
2. **Pseudonymize** the data using a DIMP service to protect patient privacy
3. **Flatten** FHIR data to CSV using SQL-on-FHIR ViewDefinitions
4. **Send** processed data to FHIR servers or DSF transfer systems

## Installation

For Linux and macOS:

```bash
curl -sSfL https://raw.githubusercontent.com/medizininformatik-initiative/aether/main/install.sh | sh
sudo mv aether /usr/local/bin/
```

For manual installation or Windows, download the [latest…
