---
repo: "Ddiidev/tabua_mare_api"
name: "tabua_mare_api"
description: "API REST pública de tábua de marés do litoral brasileiro, escrita em V com veb. Consultas em JSON sem cadastro, porto mais próximo por geolocalização, SQLite + PostgreSQL, Stripe e rate limit por plano. SDKs em JS/TS, Go e C#."
readmeQualityOk: true
url: "https://github.com/Ddiidev/tabua_mare_api"
homepage: "https://tabuamare.api.br"
language: "V"
languages: ["V", "HTML"]
languagePcts: [31, 29]
topics: ["api-key", "brazil", "brazilian", "docker", "geolocation", "google-oauth", "maritime", "oceanography", "postgresql", "rate-limiting"]
stars: 41
forks: 8
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-09-07T00:13:51Z"
lastCommitAt: "2026-09-16T08:47:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 56
maintainers: ["Ddiidev"]
openGraphImageUrl: "https://opengraph.githubassets.com/656bc719b6cc3194476e7a7abdca950f86616883ad7bc5cda8389774f069368f/Ddiidev/tabua_mare_api"
---

# Tábua de Marés – API Brasileira

Uma API pública para consultar dados precisos de marés em todo o litoral brasileiro. Interface REST simples, sem necessidade de chave de API, com cobertura nacional e exemplos práticos.

- Site oficial: https://tabuamare.api.br/
- Documentação: `/docs`
- Playground: `/playground`
- Apoiar o projeto: `/apoiar`

## Recursos

- Dados precisos e atualizados de marés.
- Interface REST simples e fácil de integrar.
- Cobertura nacional (todos os estados costeiros do Brasil).
- Uso livre, sem autenticação.
- Banco SQLite atualizado do ano corrente, com dados reais utilizados em produção, disponível para utilização em seus próprios projetos.
- Consulta por geolocalização: obtenha a tábua de maré informando latitude, longitude e estado, sem precisar conhecer o porto.

## Base de API

- Prefixo V2 (Atual): `/api/v2`
- Prefixo V1 (Depreciado): `/api/v1`

## Mudanças na V2 (Versão Atual)

A versão 2 da API traz uma mudança importante na identificação dos portos:
- **IDs de Portos agora são strings baseadas no estado** (ex: `pb01`, `rj02`, `sp03`).
- Na V1, os IDs eram numéricos (ex: 1, 2, 3).
- Todos os endpoints da V1 estão disponíveis na V2, mas devem ser…
