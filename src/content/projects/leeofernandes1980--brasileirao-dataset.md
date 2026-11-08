---
repo: "leeofernandes1980/brasileirao-dataset"
name: "brasileirao-dataset"
description: "Data Lake Brasileirão 2003-2026"
readmeQualityOk: true
url: "https://github.com/leeofernandes1980/brasileirao-dataset"
homepage: "https://brasileirao-dataset.vercel.app"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python", "TypeScript"]
languagePcts: [53, 24, 21]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-11T22:58:15Z"
lastCommitAt: "2026-11-08T10:42:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 53
maintainers: ["github-actions[bot]", "leeofernandes1980"]
openGraphImageUrl: "https://opengraph.githubassets.com/7825926ddb26cadf39da5c3281cced9ffa7d079f3b67517d2d6050944487ac4c/leeofernandes1980/brasileirao-dataset"
---

# Brasileirao Dataset

Dataset completo do Campeonato Brasileiro Série A de 2003 a 2026, com data lake em três camadas e dashboard interativo.

---

## Visão Geral

| Componente | Descrição |
|---|---|
| **CSVs raiz** | Arquivos brutos originais do dataset (2003–2023) |
| **`datalake/`** | Pipeline ETL em Python — bronze → silver → gold |
| **`dashboard/`** | Dashboard Next.js 16 com DuckDB-WASM no browser |

**Cobertura:** 2003–2026 · Série A · 9.500+ partidas  
**Fontes:** Dataset original de Adão Duque (2003–2023) + API pública do Sofascore, gratuita (2024–2026)

---

## Estrutura do Repositório

```
Brasileirao_Dataset-master/
├── campeonato-brasileiro-full.csv          ← partidas (resultados, formações, técnicos)
├── campeonato-brasileiro-estatisticas-full.csv  ← estatísticas por clube por partida
├── campeonato-brasileiro-gols.csv          ← gols por atleta/minuto
├── campeonato-brasileiro-cartoes.csv       ← cartões por atleta/minuto
├── Legenda.txt                             ← dicionário de colunas dos CSVs
├── QUERYS.sql                              ← consultas SQL de exemplo
├── atualizar_rodada.bat                    ← script para atualizar rodada atual (Windows)
├──…
