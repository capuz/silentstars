---
repo: "leeofernandes1980/brasileirao-dataset"
name: "brasileirao-dataset"
description: "Data Lake Brasileirão 2003-2026"
readmeQualityOk: true
url: "https://github.com/leeofernandes1980/brasileirao-dataset"
homepage: "https://brasileirao-dataset.vercel.app"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [56, 25]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-11T22:58:15Z"
lastCommitAt: "2026-11-01T10:44:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 53
maintainers: ["github-actions[bot]", "leeofernandes1980"]
openGraphImageUrl: "https://opengraph.githubassets.com/f579f8b8bf606f68f9444ca0cd5d320e3378dfa3bad0cff85a539effbdcde5dc/leeofernandes1980/brasileirao-dataset"
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
