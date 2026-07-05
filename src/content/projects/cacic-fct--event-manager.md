---
repo: "cacic-fct/event-manager"
name: "event-manager"
description: "Aplicativo de eventos dos alunos"
readmeQualityOk: true
url: "https://github.com/cacic-fct/event-manager"
homepage: "https://eventos.cacic.dev.br"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["angular", "nestjs", "graphql"]
stars: 11
forks: 6
openIssues: 2
closedIssues: 139
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2022-02-11T01:41:28Z"
lastCommitAt: "2026-07-05T06:35:39Z"
lastReleaseAt: "2022-03-22T00:54:38Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 100
undervaluedScore: 80
maintainers: ["Yudi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fb1803427822ef3061c5a53bec40497d77985b3d75d824b010d122d972f6ef7/cacic-fct/event-manager"
discussionCount: 2
---

# CACiC Event Manager

O gerenciador de eventos do CACiC (também conhecido como "FCT App") é um sistema para controle de inscrições, presenças e emissão de certificados de eventos.

## Contribuindo

Todos podem contribuir para o projeto.

Leia o [guia de contribuição do CACiC](https://github.com/cacic-fct/.github/blob/main/Contributing.md).

## Documentação

A documentação do projeto está disponível em [docs.fctapp.cacic.dev.br](https://docs.fctapp.cacic.dev.br).

O projeto da documentação está disponível na pasta `docs`.

## Aplicativo

O aplicativo é construído com Angular e pode ser acessado em [eventos.cacic.dev.br/app/](https://eventos.cacic.dev.br/app/).

### Desenvolvimento

Antes de começar, instale o [Bun](https://bun.sh/).

#### Iniciando o desenvolvimento

Instale as dependências do monorepo:

```bash
bun install
```

Se o comando ainda retornar `401`, verifique se o token tem `read:packages` e se sua conta tem acesso ao pacote no GitHub Packages.

Este projeto usa o [Nx](https://nx.dev) para gerenciar o monorepo.

#### Serviços locais

O backend depende de PostgreSQL, Redis e Typesense. Para subir os serviços locais de desenvolvimento, use:

```bash
docker compose -f…
