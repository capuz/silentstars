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
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-02T15:23:56Z"
lastCommitAt: "2026-07-04T22:18:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["github-actions[bot]", "felipesauer"]
openGraphImageUrl: "https://opengraph.githubassets.com/4728e67cd769ef6a0beb0bbc854a2ee5930686d51db553b328dea8b8746cfdb6/felipesauer/monitor-sefaz"
---

# Monitor SEFAZ

Monitor de disponibilidade dos webservices da SEFAZ para documentos fiscais
eletrônicos brasileiros — NF-e, NFC-e, CT-e, MDF-e e DC-e, por unidade federativa.

Coleta o status de cada autorizador, classifica o resultado e o apresenta num
dashboard com histórico de uptime. Projeto open-source e independente, sem
afiliação com a SEFAZ ou a Receita Federal.

Você pode [acessar o monitor online](https://felipesauer.github.io/monitor-sefaz/).

## O que ele monitora

Os cinco documentos fiscais eletrônicos, nas 27 UFs, resolvendo automaticamente
qual autorizador atende cada estado (próprio, SVRS, SVAN e demais):

- NF-e — Nota Fiscal Eletrônica (modelo 55)
- NFC-e — Nota Fiscal de Consumidor Eletrônica (modelo 65)
- CT-e — Conhecimento de Transporte Eletrônico
- MDF-e — Manifesto Eletrônico de Documentos Fiscais
- DC-e — Declaração de Conteúdo eletrônica

Cada serviço é classificado em um de quatro estados: operacional (cStat 107),
instável (108), indisponível (109) ou sem dados.

## Como obtém os dados

O modo padrão não exige certificado digital. O monitor cruza fontes públicas
por consenso, com precedência para as oficiais: o
[portal do…
