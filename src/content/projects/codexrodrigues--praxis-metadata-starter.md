---
repo: "codexrodrigues/praxis-metadata-starter"
name: "praxis-metadata-starter"
description: "APIs que publicam, junto aos endpoints de dados, um contrato rico e interpretável em tempo de execução (ex.: OpenAPI + extensões x-ui) que descreve recursos, campos, validações e preferências de UI. O frontend consome esses contratos para se configurar dinamicamente, sem codegen."
readmeQualityOk: true
url: "https://github.com/codexrodrigues/praxis-metadata-starter"
homepage: "https://praxisui.dev/"
language: "Java"
languages: ["Java"]
languagePcts: [87]
stars: 5
forks: 0
openIssues: 3
closedIssues: 64
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-29T22:00:17Z"
lastCommitAt: "2026-08-28T14:21:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 73
maintainers: ["codexrodrigues"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3ecd93d8cee5a9bf6c89f63a3c03ecc48c457ceca1f413c9d053adadcbf058d/codexrodrigues/praxis-metadata-starter"
---

# Praxis Metadata Starter

`praxis-metadata-starter` e a fonte canonica da semantica metadata-driven do backend Praxis.

Ele publica:

- OpenAPI enriquecido com `x-ui`
- `/schemas/filtered` como contrato estrutural consumido pelos runtimes
- `/schemas/catalog` como catalogo documental e de discovery
- `/schemas/domain` como catalogo semantico AI-operable de dominio, evidencias e governanca
- `/schemas/surfaces` e `/schemas/actions` como discovery semantico
- `GET /{resource}/capabilities` e `GET /{resource}/{id}/capabilities` como snapshot agregado
- `POST /{resource}/export` como operacao canonica de exportacao de colecao
- `/praxis/cockpit` como cockpit automatico do host, derivado das superficies metadata-driven existentes
- envelopes `RestApiResponse` com suporte efetivo a Spring HATEOAS
- falhas publicas governadas de operacoes resource-oriented com `code`, `target`, categoria e
  mensagem segura, sem expor causas privadas de persistencia ou integracao

Nao e apenas um gerador de CRUD. O baseline atual da plataforma e:

- `resource`
- `surface`
- `action`
- `capability`
- HATEOAS

## Public Documentation

Use estes entry points primeiro:

- Home:…
