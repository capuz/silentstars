---
repo: "EPFL-ENAC/co2-calculator"
name: "co2-calculator"
description: "CO₂ Calculator |  technical doc https://epfl-enac.github.io/co2-calculator/"
readmeQualityOk: true
url: "https://github.com/EPFL-ENAC/co2-calculator"
homepage: "https://co2-calculator.epfl.ch"
language: "Python"
languages: ["Python"]
languagePcts: [68]
stars: 6
forks: 0
openIssues: 47
closedIssues: 1059
watchers: 1
contributors: 26
recentReleases: 0
createdAt: "2025-10-03T13:57:38Z"
lastCommitAt: "2026-11-23T10:30:20Z"
lastReleaseAt: "2026-05-04T08:44:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 81
maintainers: ["guilbep", "ymarcon", "BenBotros"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7cd99d30a4bc1e19fa343366db3e18250a307b7627ca33f519712edfdd9bada/EPFL-ENAC/co2-calculator"
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
