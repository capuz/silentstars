---
repo: "thiago-salvador/puxa-ficha"
name: "puxa-ficha"
description: "Plataforma cidada de transparencia eleitoral — Eleicoes 2026"
readmeQualityOk: true
url: "https://github.com/thiago-salvador/puxa-ficha"
homepage: "https://puxaficha.com.br"
language: "PLpgSQL"
languages: ["PLpgSQL", "TypeScript"]
languagePcts: [70, 28]
topics: ["eleicoes", "politica"]
stars: 7
forks: 2
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-06T23:48:47Z"
lastCommitAt: "2026-08-30T00:43:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["thiago-salvador"]
openGraphImageUrl: "https://opengraph.githubassets.com/be07c1623c945479b7dbb8534042f03ebca199b9982ea15f910c089c4b5e5dfa/thiago-salvador/puxa-ficha"
---

# Puxa Ficha

Plataforma cívica de consulta pública sobre candidatos das eleições brasileiras
de 2026. Ficha pública, comparador lado a lado e pontos de atenção com fontes
visíveis. Os dados vêm de bases oficiais (TSE, Câmara dos Deputados, Senado
Federal, Portal da Transparência) sob a Lei de Acesso à Informação.

A cobertura atual é dos cargos majoritários do Executivo: Presidência da
República e governos estaduais, incluindo os vices das chapas.

**Site:** https://puxaficha.com.br

## Como conferir um número do site

Este repositório é público por um motivo específico: qualquer pessoa deve poder
pegar uma afirmação do site e rastrear até a fonte oficial, sem precisar
acreditar em nós. Esta seção mostra como, com casos reais.

O caminho é o script que coletou (quando está neste repositório) e a URL oficial
que ele leu.

### Patrimônio declarado

O valor vem do DivulgaCand, o sistema de divulgação de candidaturas do TSE.

- Coleta: [`scripts/gerar-backfill-patrimonio-tse-2026.ts`](https://github.com/thiago-salvador/puxa-ficha/blob/HEAD/scripts/gerar-backfill-patrimonio-tse-2026.ts),
  que lê o pacote oficial **`bem_candidato_2026`** do portal de dados abertos do
  TSE. Nenhum…
