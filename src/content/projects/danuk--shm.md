---
repo: "danuk/shm"
name: "shm"
description: "Universal Billing with external actions"
readmeQualityOk: true
url: "https://github.com/danuk/shm"
homepage: "https://docs.myshm.ru"
language: "Perl"
languages: ["Perl"]
languagePcts: [94]
stars: 101
forks: 46
openIssues: 25
closedIssues: 29
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2018-02-19T15:28:29Z"
lastCommitAt: "2026-09-17T08:51:01Z"
lastReleaseAt: "2026-01-14T20:11:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 48
maintainers: ["danuk", "bkeenke"]
openGraphImageUrl: "https://opengraph.githubassets.com/49348ef3d5ecf6f05081e1d5c8cd81088e23aef1ec8be2d9cae74635d674108e/danuk/shm"
discussionCount: 0
---

# shm
SHM: Universal Billing with external actions

Открытая, бесплатная биллинговая система.

## Документация

https://docs.myshm.ru

## Система тегирования и релизов

### Правила создания тегов

- **Теги всегда начинаются с цифры** (не с `v`): `1.0.0`, `2.10.1`, `2.10.1-beta`, `2.10.1-rc`
- **Теги без суффикса** (просто версия: `2.10.1`) — разрешены только из ветки `master`
- **Теги с суффиксом** (например `-beta`, `-rc`, `-alpha`) — разрешены из любой ветки

Примеры:
- ✅ Из `master`: `2.10.1` (без суффикса)
- ✅ Из любой ветки: `2.10.1-beta`, `2.10.1-rc`, `2.10.1-alpha`
- ❌ Неверно: `v2.10.1` (начинается с `v`)
- ❌ Неверно: `2.10.1` из ветки `dev` (без суффикса разрешен только из `master`)

### Docker теги

При создании тега автоматически собираются Docker образы и пушатся с соответствующими тегами:

**Из ветки `master` (например тег `2.10.1`):**
```
danuk/shm-api:2.10.1       # оригинальный тег
danuk/shm-api:2.10         # minor версия
danuk/shm-api:latest       # последний релиз
```

**Из других веток (например тег `2.10.1-rc`):**
```
danuk/shm-api:2.10.1-rc    # оригинальный тег с суффиксом
danuk/shm-api:rc           # извлечённый суффикс (динамический)
```

То же самое…
