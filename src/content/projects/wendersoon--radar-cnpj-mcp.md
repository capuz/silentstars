---
repo: "wendersoon/radar-cnpj-mcp"
name: "radar-cnpj-mcp"
description: "Servidor MCP e CLI para localizar empresas brasileiras por CNAE e região, utilizando dados abertos de CNPJ da Receita Federal."
readmeQualityOk: true
url: "https://github.com/wendersoon/radar-cnpj-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["cnae", "cnpj", "duckdb", "leads", "mcp", "mcp-server", "receita-federal", "typescript"]
stars: 57
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-01T23:58:28Z"
lastCommitAt: "2026-11-02T15:17:32Z"
lastReleaseAt: "2026-11-02T01:25:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 31
maintainers: ["wendersoon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d76d1424a5459b4384099b1ae66d4e179481046eea71c64dae3b618f41878066/wendersoon/radar-cnpj-mcp"
---

# 📡 radar-cnpj-mcp

**Encontre empresas por atividade e região na base pública de CNPJ da Receita Federal,
direto do seu agente de IA ou do terminal.**

## Por que

Você vende algo para empresas e quer saber **quem são os clientes possíveis na sua região**:
quantas oficinas existem em Campinas, quais academias abriram este ano em São Paulo, onde
se concentram as clínicas odontológicas do estado.

A Receita Federal publica o cadastro de **mais de 70 milhões de estabelecimentos**, mas em
arquivos brutos de vários GB. O radar-cnpj-mcp transforma isso numa base local, consultada
em milissegundos, que o seu agente de IA entende.

- ⚡ **Instantâneo**: buscas em milissegundos, mesmo no Brasil inteiro
- 🔒 **Local e gratuito**: os dados ficam na sua máquina, sem mensalidade nem limite de resultados
- 🧠 **Feito para IA**: o agente traduz "oficina mecânica" para o CNAE certo e aplica os filtros
- 🇧🇷 **Pensado para o Brasil**: busca sem acentos, MEI separado de microempresa, CSV pronto para o Excel

## Pergunte do seu jeito

> **Você:** Quantas oficinas mecânicas ativas existem em Campinas?
>
> **Claude:** 2.301 estabelecimentos com a atividade principal 4520-0/01 (manutenção e
>…
