---
repo: "felipetjmg1-bit/oraculo-x37"
name: "oraculo-x37"
description: "API Python de classificação e regressão com scikit-learn e servidor MCP com ferramentas determinísticas de análise explicável."
readmeQualityOk: true
url: "https://github.com/felipetjmg1-bit/oraculo-x37"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["explainable-ai", "fastmcp", "flask", "github-sponsors", "machine-learning", "mit", "model-context-protocol", "open-source", "pytest", "python"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-30T19:33:49Z"
lastCommitAt: "2026-11-24T14:09:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 59
undervaluedScore: 58
maintainers: ["felipetjmg1-bit", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0d425c8db08c049e94d897216db06de3395624b8ef9467a1a7bfda5d275f371/felipetjmg1-bit/oraculo-x37"
fundingLinks: ["GITHUB:https://github.com/felipetjmg1-bit"]
discussionCount: 1
---

# Oráculo X-37

**Aplicação demonstrativa em desenvolvimento e validação.** O Oráculo X-37 reúne uma API Flask para treinamento e inferência de modelos scikit-learn e um servidor MCP independente com ferramentas determinísticas de análise. Não é um sistema de produção nem um serviço de decisão automatizada validado.

## Visão geral

O projeto explora uma arquitetura modular para:
- treinamento demonstrativo com dados sintéticos;
- inferência de modelos de classificação e regressão;
- rotas de explicação e inspeção de resultados;
- ferramentas MCP para simulação exploratória, explicação, auditoria descritiva, monitoramento por limiares e apoio estruturado à comparação de opções.

A API HTTP e o servidor MCP são processos separados. Não presuma que o servidor MCP esteja embutido na API Flask.

## Arquitetura

| Componente | Localização | Função |
|---|---|---|
| API Flask | `app/main.py`, `app/api/` | Endpoints HTTP |
| Serviços de ML | `app/services/`, `app/models/` | Treinamento e inferência |
| Servidor MCP | `app/mcp/server.py` | Ferramentas via MCP |
| Treinamento | `scripts/train.py` | Geração e treinamento demonstrativo |
| Testes | `tests/` | Verificações automatizadas |
