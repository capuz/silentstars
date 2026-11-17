---
repo: "Varanda-org/varanda"
name: "varanda"
description: "Rede social brasileira P2P"
readmeQualityOk: true
url: "https://github.com/Varanda-org/varanda"
homepage: "https://varanda.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["brasil", "expo", "holepunch", "hypercore", "hyperswarm", "p2p", "peer-to-peer", "react-native", "rede-social", "social-network"]
stars: 25
forks: 6
openIssues: 90
closedIssues: 103
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-10-21T12:09:51Z"
lastCommitAt: "2026-11-17T14:49:08Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 91
undervaluedScore: 42
maintainers: ["rodrigopavezi"]
openGraphImageUrl: "https://opengraph.githubassets.com/cdf25fb803df6d4baa654e16d15a4b31aac6d5a1654f753f096b15160b15ac88/Varanda-org/varanda"
discussionCount: 3
---

# varanda

Monorepo npm da fase 0 de uma rede social ponto a ponto no Holepunch (Hypercore, Hyperswarm e HyperDHT): o programa de terminal (`varanda`, `varanda-serve`), o aplicativo iOS, Android e web (`apps/app`), o site estático (`apps/site`) e as bibliotecas compartilhadas (`packages/*`). A referência normativa dos formatos é [docs/protocol.md](https://github.com/Varanda-org/varanda/blob/HEAD/docs/protocol.md). O guia de desenvolvimento está em [docs/development.md](https://github.com/Varanda-org/varanda/blob/HEAD/docs/development.md).

## Estrutura do repositório

É um monorepo npm (workspaces `packages/*` e `apps/*`, um só `package-lock.json` na raiz).

- `apps/cli`: o programa de linha de comando (`varanda`, `varanda-serve`), o semeador e a demo. [README](https://github.com/Varanda-org/varanda/blob/HEAD/apps/cli/README.md).
- `apps/app`: aplicativo iOS, Android e web, com o worklet Bare que roda o nó no celular e a interface de membro. [README](https://github.com/Varanda-org/varanda/blob/HEAD/apps/app/README.md).
- `apps/site`: o site estático do Varanda (página de apresentação, logotipo e as fontes dos ícones do app).…
