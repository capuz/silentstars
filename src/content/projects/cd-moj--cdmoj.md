---
repo: "cd-moj/cdmoj"
name: "cdmoj"
description: "CD-MOJ"
readmeQualityOk: true
url: "https://github.com/cd-moj/cdmoj"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [62, 25]
stars: 27
forks: 14
openIssues: 0
closedIssues: 17
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2016-09-13T00:29:14Z"
lastCommitAt: "2026-11-05T10:09:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 66
maintainers: ["bcribas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b551579a46d8c4d777086e44a5bdf9194b079062d389ac1857c7584ab1a1b8fd/cd-moj/cdmoj"
---

# MOJ — plataforma (cdmoj)

Juiz online (`moj.naquadah.com.br`) escrito em **bash**. Este repo (`cd-moj/cdmoj`) é a
**plataforma web**: uma **API bash** sob nginx + fcgiwrap (`server/`) + um **frontend
vanilla ESM sem build** (`web/`) + documentação (`docs/`). Os juízes **não** precisam deste
repo — eles rodam o `judge/` + `mojtools/` e puxam job pela API (modelo pull).

> Comece por **[`docs/OVERVIEW.md`](https://github.com/cd-moj/cdmoj/blob/HEAD/docs/OVERVIEW.md)** (arquitetura) e
> **[`docs/FLOW.md`](https://github.com/cd-moj/cdmoj/blob/HEAD/docs/FLOW.md)** (o caminho de uma submissão). Rotas:
> [`docs/API.md`](https://github.com/cd-moj/cdmoj/blob/HEAD/docs/API.md) + `web/api/openapi.json`. Deploy: [`docs/DEPLOY.md`](https://github.com/cd-moj/cdmoj/blob/HEAD/docs/DEPLOY.md);
> instalação do zero: [`docs/ADMIN.md`](https://github.com/cd-moj/cdmoj/blob/HEAD/docs/ADMIN.md). Manuais de usuário (treino, competidor,
> linguagens, staff, juiz): [`docs/`](https://github.com/cd-moj/cdmoj/blob/HEAD/docs/) (arquivos `MANUAL-*.md`).

## Onde vive (workspace multi-repo)

`/home/ribas/moj` **não** é um repositório — é o checkout de dev que junta repos independentes:

| Caminho | Papel |…
