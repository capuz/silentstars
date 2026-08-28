---
repo: "evrone-erp/release-notes-action"
name: "release-notes-action"
description: "GitHub Action для команд, работающих по Gitflow и ведущих планирование задач в Yandex Tracker. Готовит структурированные Release Notes."
readmeQualityOk: true
url: "https://github.com/evrone-erp/release-notes-action"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["gitflow", "github-actions", "yandex-tracker"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2024-05-29T04:57:27Z"
lastCommitAt: "2026-08-28T14:24:23Z"
lastReleaseAt: "2025-04-24T14:20:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 33
maintainers: ["grmnga"]
openGraphImageUrl: "https://opengraph.githubassets.com/39ae43f7aa755e37f2ef064dcc039023ad8025d4824a5b98c141f4470229e8af/evrone-erp/release-notes-action"
---

# Release notes action
GitHub action для подготовки release notes для команд, работающих по Gitflow и ведущих планирование задач в Yandex Tracker.
## Оглавление
- [Release notes action](#release-notes-action)
  - [Оглавление](#оглавление)
  - [Что умеет](#что-умеет)
  - [Пример готового release notes](#пример-готового-release-notes)
  - [Подготовка](#подготовка)
  - [Как это работает](#как-это-работает)
    - [Общий случай](#общий-случай)
    - [Коммиты без задач](#коммиты-без-задач)
    - [Эпики](#эпики)
    - [Создание черновика релиза](#создание-черновика-релиза)
  - [Обработка ошибок](#обработка-ошибок)
  - [Дополнительные сведения](#дополнительные-сведения)
## Что умеет
* Определяет по именам коммитов список задач, вошедших в релиз.
* По каждой задаче достает из API Трекера её название и ссылку на задачу.
* Указывает автора pull request'а задачи и ссылку на реквест.
* Группирует задачи эпиков.
* Помещает готовый release notes в описание релизного PR.
* Создает черновик релиза на GitHub.

<br>

## Пример готового release notes
> ## What's Changed 
>
> * [[QUEUE-1511](https://tracker.yandex.ru/#)] Поправить цифры в plan application by [@grmnga](https://github.com/grmnga) in…
