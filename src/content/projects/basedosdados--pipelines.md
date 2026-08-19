---
repo: "basedosdados/pipelines"
name: "pipelines"
description: "🔀 Orquestrador de fluxos de captura, ingestão e tratamento de dados da BD"
readmeQualityOk: true
url: "https://github.com/basedosdados/pipelines"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [55, 44]
topics: ["prefect", "opendata", "opensource", "python", "hacktoberfest", "hacktoberfest2022"]
stars: 48
forks: 21
openIssues: 79
closedIssues: 594
watchers: 5
contributors: 41
recentReleases: 0
createdAt: "2022-01-11T18:07:57Z"
lastCommitAt: "2026-08-19T04:07:37Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 56
maintainers: ["rdahis", "DaviMacielCavalcante", "luizavboas"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c517c249c4dcb0c6b4cccb708b90a391dca4f9967e69faabc8a0f0d677d09f1/basedosdados/pipelines"
---

</a>
</p>

    <em>Universalizando o acesso a dados de qualidade.</em>
</p>

# Pipelines

Esse repositório contém fluxos de captura e subida de dados no datalake da Base dos Dados.

## Ingestão assistida por IA

Para fazer o onboarding de um novo conjunto de dados, inicie o agente `orchestrator` com o prompt abaixo. Preencha os campos — quanto mais contexto você fornecer, menos perguntas o agente fará.

```text
Onboard dataset <dataset_slug>.
Sources: <URL or local path to raw files — e.g. https://dados.gov.br/... or ~/Downloads/dados_xyz/>
Drive folder: BD/Dados/Conjuntos/<dataset_slug>/
Architecture suggestion: <brief description — e.g. "one table per year, annual updates, municipal level">
Organization: <source organization name — e.g. "IBGE", "Ministério do Meio Ambiente">
Notes: <anything unusual — e.g. "data is in wide format", "files split by state", "API requires auth">
```

O agente executa uma sequência de 11 etapas (contexto → arquitetura → download → limpeza → upload → dbt → validação → IDs → metadados dev → aprovação → metadados prod → PR), pausando para aprovação humana antes de promover para produção.

## 👥 Como contribuir

Leia nosso [guia de…
