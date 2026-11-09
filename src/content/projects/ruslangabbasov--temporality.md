---
repo: "RuslanGabbasov/temporality"
name: "temporality"
description: "Temporality — открытая среда исполнения и контур управления для агентских систем: выполняет долгие задачи, ведёт доказательную историю действий, держит под контролем права и надзор — и превращает проверенный опыт в знания и навыки, которые работают на следующих задачах."
readmeQualityOk: true
url: "https://github.com/RuslanGabbasov/temporality"
homepage: "https://temporality.ext.io/"
language: "Go"
languages: ["Go", "TypeScript", "HTML"]
languagePcts: [49, 25, 23]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-14T12:44:29Z"
lastCommitAt: "2026-11-09T04:35:18Z"
lastReleaseAt: "2026-10-19T05:59:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["RuslanGabbasov", "actions-user", "KelebroDir"]
openGraphImageUrl: "https://opengraph.githubassets.com/70ca1ef2774e116d6ffa8a93ac56094e6e56da43e0700febcac5b561059bfe87/RuslanGabbasov/temporality"
---

# Temporality

**Русский** · [English](https://github.com/RuslanGabbasov/temporality/blob/HEAD/README.en.md) · [Документация](https://ruslangabbasov.github.io/temporality/docs/) · [Эксплуатация харнеса](https://ruslangabbasov.github.io/temporality/docs/operations.html)

Temporality — среда исполнения и контур управления для ИИ-агентов: долговременные
задачи на Temporal, полная трасса работы, права, подтверждения и согласование
документов людьми — и накопление опыта (знания, навыки, артефакты), который
возвращается в следующие запуски.

```text
Agent Kernel ──events──▶ Journal ──projection──▶ Knowledge / Hints
     ▲                      │                         │
     └──────── hints ◀──────┴──── Experience Timeline ┘
```

## Быстрый стенд

Нужен только Docker (BuildKit). Никаких .env и ключей на старте — модель,
первый агент и песочница настраиваются в мастере онбординга при первом
открытии интерфейса.

```sh
mkdir temporality && cd temporality
curl -o docker-compose.yml https://raw.githubusercontent.com/RuslanGabbasov/temporality/main/docker-compose.yml
docker compose up -d
```

Откройте `http://localhost:3000` — мастер проведёт через: первый проект →
администратор → провайдер…
