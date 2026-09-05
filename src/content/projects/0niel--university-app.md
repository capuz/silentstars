---
repo: "0niel/university-app"
name: "university-app"
description: "A mobile application for the MIREA - Russian Technological University, which includes a schedule, news and many other functions"
readmeQualityOk: true
url: "https://github.com/0niel/university-app"
language: "Dart"
languages: ["Dart"]
languagePcts: [79]
topics: ["flutter", "dart", "android", "ios", "bloc", "clean-architecture"]
stars: 249
forks: 36
openIssues: 2
closedIssues: 103
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2021-05-11T14:37:44Z"
lastCommitAt: "2026-09-05T07:49:39Z"
lastReleaseAt: "2023-03-10T09:24:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded", "community_hub"]
healthScore: 99
undervaluedScore: 36
maintainers: ["0niel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/366413359/dabde586-9d82-4a28-ab26-70df4ee591f0"
fundingLinks: ["PATREON:https://patreon.com/mireaninja"]
discussionCount: 28
---

# University App

Открытая платформа студенческого приложения на Flutter. Репозиторий можно
адаптировать под другой университет без форка бизнес-логики: tenant, публичный
брендинг и deep links задаются конфигурацией, а университетские источники данных
подключаются через нормализованный ingest-контракт Supabase.

Конфигурация по умолчанию сохраняет совместимость с РТУ МИРЭА. Встроенный
MIREA-фетчер выключен по умолчанию и не должен использоваться для другого
tenant.

## Технологии и архитектура

- Flutter 3.44.2 и Dart 3.12 с null safety.
- Feature-first BLoC-архитектура: UI и BLoC находятся в `lib/<feature>`, а
  переиспользуемые клиенты, модели и репозитории — в Dart workspace `packages/`.
- `bloc`/`hydrated_bloc` для состояния, `yx_scope` для dependency injection и
  `go_router` для навигации.
- Freezed и `json_serializable` для генерируемых immutable-моделей и JSON DTO.
- Supabase Auth, Storage, миграции, RPC и Edge Functions как серверный контракт.
- Отдельный Python 3.12 worker для официальных новостей, Telegram-публикаций и
  Telegram Stories.

Основной поток данных:

```text
внешний источник -> Python worker -> Edge Function /ingest
                 -> Supabase RPC/таблицы…
