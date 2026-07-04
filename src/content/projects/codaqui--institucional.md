---
repo: "codaqui/institucional"
name: "institucional"
description: "Repositório central da Codaqui, possui os documentos e discussões."
readmeQualityOk: true
url: "https://github.com/codaqui/institucional"
homepage: "https://codaqui.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["documentation", "institucional", "hacktoberfest"]
stars: 34
forks: 19
openIssues: 45
closedIssues: 132
watchers: 4
contributors: 32
recentReleases: 8
createdAt: "2022-03-08T03:33:49Z"
lastCommitAt: "2026-07-04T22:17:51Z"
lastReleaseAt: "2026-04-15T21:28:43Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine", "community_hub", "fork_magnet"]
healthScore: 95
undervaluedScore: 69
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aff0b391006126882e577d3c2590954e96e284e207bbf4f6217bee225334479b/codaqui/institucional"
fundingLinks: ["CUSTOM:https://codaqui.dev/participe/apoiar"]
discussionCount: 72
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
| Backend (NestJS) | [`backend/`](./backend/README.md) | Servidor ARM64 via Podman Compose |

O GitHub Pages **nunca** publica o `backend/`. O CI usa apenas `npm ci → npm run build → deploy`.

---

## Como Contribuir

Para detalhes de setup, comandos e fluxo de desenvolvimento, consulte o **[DEVELOPMENT.md](./DEVELOPMENT.md)**:

- [Contribuindo só no Frontend](./DEVELOPMENT.md#frontend-docusaurus) — sem Podman, sem backend
- [Desenvolvendo o Backend](./DEVELOPMENT.md#backend-nestjs)
- [Ambiente Full Stack](./DEVELOPMENT.md#full-stack-frontend--backend--infra)
- [Deploy](./DEVELOPMENT.md#deploy)

---

## Espaços de Discussão

- Discussões e docs: [codaqui.dev](https://codaqui.dev) · [GitHub…
