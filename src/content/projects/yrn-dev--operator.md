---
repo: "yrn-dev/Operator"
name: "Operator"
description: "Terminal AI coding agent — Autonomous AI Agent on your computer. Supports Alem AI + Ollama. Works with code, research, automation, DevOps, data analysis, and content generation."
readmeQualityOk: true
url: "https://github.com/yrn-dev/Operator"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 11
forks: 15
openIssues: 13872
closedIssues: 32380
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-07-29T18:09:48Z"
lastCommitAt: "2026-11-11T10:10:53Z"
lastReleaseAt: "2026-11-11T10:11:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 61
undervaluedScore: 44
maintainers: ["yrn-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6c98cd18b69c1f4a668e7ddebe81c2dc01c26f9c91018938a2b4a8fcfb13f1d/yrn-dev/Operator"
---

# operator

## CLI 1.3: возможности десктопа в терминале

В 1.3.1 уточнены роль и характер Operator, добавлены реальные сведения об ОС,
CPU и RAM; `system_info` проверяет текущие ресурсы и, по запросу, NVIDIA GPU.
Старт CLI чистый по умолчанию; подробности доступны с `--verbose`.
Каталог скиллов в системном запросе сокращён, полные файлы скиллов сохранены.
Повторы одинаковых ошибок распознаются раньше; полезная длительная работа
не ограничена числом шагов.

История, настройки и память CLI хранятся на устройстве. При использовании
облачной модели запрос и переданный контекст отправляются её провайдеру.
Локальное хранение не означает, что сетевой запрос виден только владельцу.

Встроенные инструменты `subagent`, `background_run`, `background_check`,
`background_stop`, `github`, `browser`, `computer` и `system_info` загружаются автоматически.
Плагины и MCP из десктопа не переносятся. Qwen работает с включёнными
рассуждениями; переключателя thinking/no-thinking нет. Модели без поддержки
reasoning продолжают работать в своём обычном режиме.

```bash
operator --doctor                  # проверка окружения без обращения к модели
operator                           # интерактивный терминал…
