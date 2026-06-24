---
repo: "microsoft/CAIRA"
name: "CAIRA"
description: "Composable AI Reference Architectures (CAIRA)"
url: "https://github.com/microsoft/CAIRA"
homepage: "https://microsoft.github.io/CAIRA/"
language: "TypeScript"
languages: ["TypeScript", "C#"]
languagePcts: [69, 23]
stars: 222
forks: 54
openIssues: 1
closedIssues: 178
watchers: 4
contributors: 80
recentReleases: 0
createdAt: "2025-07-29T20:24:27Z"
lastCommitAt: "2026-06-24T23:39:16Z"
lastReleaseAt: "2026-02-17T18:28:45Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 31
maintainers: ["dependabot[bot]", "PabloZaiden", "courtzc"]
openGraphImageUrl: "https://opengraph.githubassets.com/a715e3c1610660a07e25ce432166ea160a6f051709173f49905f374deccd1aa6/microsoft/CAIRA"
discussionCount: 3
---

# CAIRA

CAIRA (Composable AI Reference Architectures) is a small reference library for agents building Azure AI solutions. The primary entrypoint is the CAIRA skill: install the skill, let your coding agent inspect this repository, and have it copy or adapt only the reference pieces that fit your scenario.

Each directory under `reference-architectures/` is an independent reference component that should be easy to read, validate, copy, and modify.

## Quickstart

Install the skill from your project directory:

```bash
bunx skills add github.com/microsoft/CAIRA/skills
```

or:

```bash
npx skills add github.com/microsoft/CAIRA/skills
```

Then ask your agent to use CAIRA for your scenario, for example:

```text
Create an agentic monitoring system to detect security-related issues in a configured GitHub repository using Foundry, an API, and a React frontend with a dashboard.
```

## Reference components

| Path | Purpose |
|------|---------|
| `reference-architectures/iac/foundry/` | Terraform for a Foundry account, project, and model deployment. |
| `reference-architectures/iac/container-apps/` | Terraform for Azure Container Apps hosting exactly two apps: API and frontend. |
|…
