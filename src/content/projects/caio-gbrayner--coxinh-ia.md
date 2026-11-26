---
repo: "Caio-GBrayner/Coxinh.IA"
name: "Coxinh.IA"
description: "Uma sátira à mania de colocar IA em tudo, até na coxinha. Neste harness multiagente, o Chef inventa uma receita com o que tem na cozinha, o Subchef questiona a proposta e, se der impasse, sobra para você decidir se a ideia merece ser empanada."
readmeQualityOk: true
url: "https://github.com/Caio-GBrayner/Coxinh.IA"
homepage: "https://coxinh-ia.vercel.app"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [74, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-14T16:19:39Z"
lastCommitAt: "2026-11-26T15:24:13Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["Caio-GBrayner", "isjoaovictor"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d19fea688f0507cb8097e60ddf050000a18fe9864d1dc7180a3a8c437d5add9/Caio-GBrayner/Coxinh.IA"
---

# Coxinh.IA

**O melhor harness de IA para as coxinhas mais sem sentido que você possa imaginar.**

https://coxinh-ia.vercel.app/

O Coxinh.IA transforma ingredientes e ideias improváveis em receitas de coxinha. É um projeto de humor e sátira criado para estudar fluxos com agentes de IA: a receita pode ser absurda, mas o sistema precisa mostrar como chegou ao resultado e apresentar o aconselhamento de consumo com suas fontes e incertezas.

**Estado atual:** API oficial em `src/api/app.py`, interface React com polling e carrossel global, persistência em SQLite ou Postgres e imagens via OpenRouter (ou simulação sem chave).

## Rodar localmente

### Pré-requisitos

- Python 3.11 ou superior.
- Node.js 24.
- Chaves de provedor para gerar receitas e, se desejado, consultar a web e gerar imagens reais.

### 1. Configurar o ambiente

Na raiz do projeto, crie o ambiente Python, instale as dependências e copie o arquivo de configuração:

```powershell
py -3 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
if (-not (Test-Path .env)) { Copy-Item .env.example .env }
notepad .env
```

Preencha as variáveis necessárias no `.env`:
