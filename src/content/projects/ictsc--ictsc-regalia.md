---
repo: "ictsc/ictsc-regalia"
name: "ictsc-regalia"
description: "ICTSC Score Server (4th Gen)"
originalDescription: "ICTSC Score Server (4th Gen)"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/ictsc/ictsc-regalia"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [43, 27]
stars: 7
forks: 2
openIssues: 56
closedIssues: 73
watchers: 4
contributors: 45
recentReleases: 0
createdAt: "2023-06-21T22:57:05Z"
lastCommitAt: "2026-11-06T13:20:19Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 70
maintainers: ["Dodai-Dodai", "csenet", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d8bd8bdd3896474392353e3610cbc93f28d9f5f332fbae8f148052d0f7bc615/ictsc/ictsc-regalia"
---

# ictsc-regalia

A monorepo that bundles the ICTSC contestant dashboard, operations console, and score server. The API is managed contract-first with OpenAPI.

## Directory layout

```text
.
├── backend/                 Go API, DB schema, external service adapters
│   └── openapi.json         The single source of truth for the API
├── frontend/packages/
│   ├── api/                 OpenAPI-generated types and shared REST client
│   ├── ui/                  Shared Vue UI, design, Storybook
│   ├── contestant/          Contestant Nuxt SPA
│   ├── admin/               Operations Nuxt SPA (/admin/)
│   └── config/              Shared lint/format config
├── docs/                    Design and external integration contracts
└── Taskfile.yaml            Development tasks
```

## Generation

After changing the OpenAPI spec, update the generated artifacts for both languages from the repository root.

```sh
task generate
```

If differences remain after generation, commit those differences as part of the API contract change.

## Development

Start the dependent services and the API with Docker.

```sh
task dev-backend
```

For details, see…
