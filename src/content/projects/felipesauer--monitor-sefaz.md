---
repo: "felipesauer/monitor-sefaz"
name: "monitor-sefaz"
description: "Monitor open-source de disponibilidade dos webservices da SEFAZ (NF-e, NFC-e, CT-e, MDF-e e DC-e) por UF — status em tempo real, sem certificado. Roda como SPA estática no GitHub Pages."
readmeQualityOk: true
url: "https://github.com/felipesauer/monitor-sefaz"
homepage: "https://felipesauer.github.io/monitor-sefaz/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["brasil", "cte", "mdfe", "monitoring", "nfce", "nfe", "nota-fiscal-eletronica", "react", "sefaz", "status-page"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-02T15:23:56Z"
lastCommitAt: "2026-08-08T04:35:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["github-actions[bot]", "felipesauer"]
openGraphImageUrl: "https://opengraph.githubassets.com/87e0a2a9b1cb63b518432ec622e3cc4541183aea54e86cb0129461aed285178b/felipesauer/monitor-sefaz"
discussionCount: 0
---

# Monitor SEFAZ

Status page da disponibilidade dos webservices da SEFAZ para os documentos
fiscais eletrônicos brasileiros — **NF-e, NFC-e, CT-e, MDF-e e DC-e, nas 27 UFs**.
Cruza fontes públicas por consenso, mostra o histórico de uptime num dashboard e
avisa quando algo cai. Open-source, independente, sem afiliação com a SEFAZ ou a
Receita Federal.

**→ [Acesse o monitor online](https://felipesauer.github.io/monitor-sefaz/)**

## Destaques

- **135 serviços monitorados** — os 5 documentos × 27 UFs, resolvendo sozinho qual
  autorizador atende cada estado (próprio, SVRS, SVAN, Ambiente Nacional…).
- **Consenso multi-fonte** — cruza três fontes com precedência para as oficiais, em
  vez de depender de uma só; se uma cai, as outras sustentam.
- **Notificações multicanal** — Discord, Slack, Telegram ou webhook quando um serviço
  cai/volta, entra em contingência, ou sai uma Nota Técnica.
- **Detecção de drift** — sinaliza quando uma fonte oficial fica inconsistente (o
  portal mudou o HTML), em vez de mascarar silenciosamente.
- **Zero-infra por padrão** — roda como site 100% estático no GitHub Pages; sem
  banco, sem servidor, sem certificado.

## O que ele monitora

Os cinco…
