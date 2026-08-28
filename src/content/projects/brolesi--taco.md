---
repo: "brolesi/taco"
name: "taco"
description: "Tabela Nutricional de Composição de Alimentos no Brasil"
readmeQualityOk: true
url: "https://github.com/brolesi/taco"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["brazil", "nutritional-facts", "tabela", "taco", "nitrition"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-01-14T02:08:30Z"
lastCommitAt: "2026-08-28T14:25:04Z"
lastReleaseAt: "2026-08-28T14:23:21Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 48
maintainers: ["brolesi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dc76ef6cfaa36b65355e70961cd65d88275a199960d4ad82ff50836c228a76f/brolesi/taco"
---

# TACO — Tabela Brasileira de Composição de Alimentos

Dados normalizados e API REST da **Tabela Brasileira de Composição de Alimentos
(TACO, 4ª edição, NEPA/UNICAMP)**, acompanhados de fontes complementares
(Guia Alimentar para a População Brasileira e Tabela de Medidas Referidas da POF/IBGE).

O repositório oferece:

- **Pipelines reproduzíveis** ([`scripts/process_taco.py`](https://github.com/brolesi/taco/blob/HEAD/scripts/process_taco.py) e
  [`scripts/process_pof.py`](https://github.com/brolesi/taco/blob/HEAD/scripts/process_pof.py)) que convertem as planilhas
  originais da TACO e da POF em CSVs limpos e normalizados;
- **CSVs prontos para uso** em [`data/processed/`](https://github.com/brolesi/taco/blob/HEAD/data/processed/): composição
  centesimal, ácidos graxos, aminoácidos e medidas caseiras em gramas;
- **API REST** ([FastAPI](https://fastapi.tiangolo.com/)) para consulta, comparação
  e soma de nutrientes.

## Estrutura do projeto

```
taco/
├── api/                  # API REST (FastAPI)
├── data/
│   ├── raw/              # Fontes originais, imutáveis (TACO .xls, POF .xls)
│   └── processed/         # CSVs canônicos gerados pelos pipelines (taco/, pof/)
├── docs/…
