---
repo: "datacite/akita"
name: "akita"
description: "DataCite Commons"
readmeQualityOk: true
url: "https://github.com/datacite/akita"
homepage: "https://commons.datacite.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 6
forks: 3
openIssues: 3
closedIssues: 156
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2020-05-04T19:07:29Z"
lastCommitAt: "2026-11-20T11:12:30Z"
lastReleaseAt: "2022-01-20T21:21:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 82
maintainers: ["jrhoads", "dependabot[bot]", "bklaing2"]
openGraphImageUrl: "https://opengraph.githubassets.com/8119010688f47890ca5c8ed1c50e356c38aed08d11b0b7d3cbcf7c03fb92a452/datacite/akita"
---

# Akita

## Introduction

Akita is the web frontend for **[DataCite Commons](https://commons.datacite.org)**, a discovery service that connects research outputs, people, and organizations. It provides a unified search interface to explore the research landscape using persistent identifiers (PIDs).

Key features include:
*   **Works Search**: Discover research outputs (datasets, software, text, etc.) via DOIs.
*   **People Search**: Find researchers and their contributions via ORCID IDs.
*   **Organization Search**: Explore research institutions and their outputs via ROR IDs.
*   **Repository Search**: Find data repositories via DataCite Client IDs and re3data IDs.
*   **Visualization**: View connections and statistics related to research entities.

## Tech Stack

*   **Frontend:** [Next.js](https://nextjs.org/) (React framework), [@tanstack/react-query](https://tanstack.com/query) (data fetching), [React Bootstrap](https://react-bootstrap.github.io/) (UI components).
*   **Backend:** [Flask](https://flask.palletsprojects.com/) (Python microframework) for specific API endpoints.
*   **Testing:** [Cypress](https://www.cypress.io/) (End-to-End testing).
