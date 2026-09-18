---
repo: "codaqui/institucional"
name: "institucional"
description: "Repositório central da Codaqui, possui os documentos e discussões."
readmeQualityOk: true
url: "https://github.com/codaqui/institucional"
homepage: "https://codaqui.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["documentation", "institucional", "hacktoberfest"]
stars: 33
forks: 19
openIssues: 45
closedIssues: 132
watchers: 4
contributors: 22
recentReleases: 0
createdAt: "2022-03-08T03:33:49Z"
lastCommitAt: "2026-09-18T14:03:56Z"
lastReleaseAt: "2026-04-15T21:28:43Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub", "fork_magnet"]
healthScore: 95
undervaluedScore: 64
maintainers: ["github-actions[bot]", "endersonmenezes"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf292a1bca07807647c9a556fbc0bfeb6032e355fa07782bc05e9e4dbef9afd8/codaqui/institucional"
fundingLinks: ["CUSTOM:https://codaqui.dev/participe/apoiar"]
discussionCount: 82
---

# CODAQUI

Codaqui é uma **associação brasileira sem fins lucrativos** que democratiza educação em tecnologia para jovens, servindo como guarda-chuva para comunidades parceiras de tech.

**Site**: https://codaqui.dev · **CNPJ**: 44.593.429/0001-05

---

## Sobre o Repositório

Este repositório é um **monorepo**:

| Camada | Diretório | Hospedagem |
|--------|-----------|-----------|
| Frontend (Docusaurus) | `/` (raiz) | GitHub Pages — automático via CI |
| Backend (NestJS) | [`backend/`](https://github.com/codaqui/institucional/blob/HEAD/backend/README.md) | Servidor ARM64 via Podman Compose |

O GitHub Pages **nunca** publica o `backend/`. O CI usa apenas `npm ci → npm run build → deploy`.

---

## Como Contribuir

Para detalhes de setup, comandos e fluxo de desenvolvimento, consulte o **[DEVELOPMENT.md](https://github.com/codaqui/institucional/blob/HEAD/DEVELOPMENT.md)**:

- [Contribuindo só no Frontend](https://github.com/codaqui/institucional/blob/HEAD/DEVELOPMENT.md#frontend-docusaurus) — sem Podman, sem backend
- [Desenvolvendo o Backend](https://github.com/codaqui/institucional/blob/HEAD/DEVELOPMENT.md#backend-nestjs)
- [Ambiente Full…
