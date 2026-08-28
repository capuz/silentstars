---
repo: "EPFL-ENAC/co2-calculator"
name: "co2-calculator"
description: "200 - Calculator Co2 – https://epfl-enac.github.io/co2-calculator/. https://co2-calculator-dev.epfl.ch/docs/"
readmeQualityOk: true
url: "https://github.com/EPFL-ENAC/co2-calculator"
homepage: "https://co2-calculator-dev.epfl.ch"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [52, 36]
stars: 6
forks: 1
openIssues: 121
closedIssues: 788
watchers: 1
contributors: 24
recentReleases: 0
createdAt: "2025-10-03T13:57:38Z"
lastCommitAt: "2026-08-28T14:38:13Z"
lastReleaseAt: "2026-05-04T08:44:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 74
maintainers: ["guilbep", "BenBotros", "ymarcon"]
openGraphImageUrl: "https://opengraph.githubassets.com/72751ce8b2917216da3972066c82e489303a91b09d85047609dd294fe71b1de8/EPFL-ENAC/co2-calculator"
discussionCount: 1
---

# CO₂ Calculator

The CO₂ Calculator allows to assess the carbon footprint of a unit, in accordance with the Greenhouse Gas Protocol ([GHG Protocol](https://ghgprotocol.org/corporate-standard)), the international standard for calculating greenhouse gas emissions. Originally developed as a tool for EPFL, the calculator is an open-source project intended for broad adoption. It enables users to assess their environmental impact by entering relevant data across multiple sections.

**Project Status:** Under active development (v0.x.x internal/non-public releases)

**Access the platform:** See [Environments](https://github.com/EPFL-ENAC/co2-calculator/blob/HEAD/docs/src/architecture/05-environments.md)
for the dev / stage / pre-production URLs and deployment topology.

> **Note:** Pre-production serves internal releases (v0.x.x) until the final
> v1.0.0 public release. The production environment activates with v1.0.0.

## 🚀 Quick Start

### Prerequisites

- **Make** (build automation)
- **Node.js** v24+ with npm
- **Python** 3.14+ with **uv** (install: `brew install uv`)
- **Docker** (for database)

### 1. Install dependencies

```bash
# Install all dependencies, set up git hooks, and…
