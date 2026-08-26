---
repo: "sihsalus/sihsalus-frontend"
name: "sihsalus-frontend"
description: "Turborepo-powered monorepo for the web frontend of SIH Salus Hospital Information System: an offline-first, FHIR-compliant frontend serving ~30,000 inhabitants across 112 native Amazonian communities along 500+ km of the Napo River (Peru).  Built on OpenMRS 3.x with the single-spa microfrontend architecture."
readmeQualityOk: true
url: "https://github.com/sihsalus/sihsalus-frontend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 13
recentReleases: 1
createdAt: "2026-03-13T23:35:12Z"
lastCommitAt: "2026-08-26T04:16:47Z"
lastReleaseAt: "2026-08-18T00:27:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 51
maintainers: ["Duvet05", "UltimateCosmic", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a075ef33eaf97f88580137197e42839b28b97039cc936b9015b09f69defaa05/sihsalus/sihsalus-frontend"
---

# SIH Salus Frontend

Turborepo-powered monorepo for the **SIH Salus Hospital Information System** — an offline-oriented, FHIR-aware and compliance-oriented frontend serving ~30,000 inhabitants across 112 native Amazonian communities along 500+ km of the Napo River (Peru).

Built on [OpenMRS 3.x](https://openmrs.org/) with the single-spa microfrontend architecture.

This repository was developed by the **Pontificia Universidad Catolica del Peru (PUCP)** through the **Grupo de Investigacion y Desarrollo de Ingenieria de Software (GIDIS)**.

Contact: `sihsalus@pucp.edu.pe`

Before proposing changes, read [CONTRIBUTING.md](https://github.com/sihsalus/sihsalus-frontend/blob/HEAD/CONTRIBUTING.md). Automated
coding agents must also follow [AGENTS.md](https://github.com/sihsalus/sihsalus-frontend/blob/HEAD/AGENTS.md).

## Prerequisites

- **Node.js** 24 LTS
- **Yarn** 4.13.0 (via Corepack: `corepack enable && corepack prepare yarn@4.13.0 --activate`)
- **Docker** (for containerized deployment)

## Quick Start

```bash
# 1. Clonar e instalar
git clone https://github.com/sihsalus/sihsalus-frontend.git
cd sihsalus-frontend
corepack enable          # activa la versión de Yarn incluida en…
