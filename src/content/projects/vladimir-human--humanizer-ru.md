---
repo: "Vladimir-Human/humanizer-ru"
name: "humanizer-ru"
description: "Находит следы машинного текста в русском и объясняет их вам"
readmeQualityOk: true
url: "https://github.com/Vladimir-Human/humanizer-ru"
homepage: "https://vladimir-human.github.io/humanizer-ru/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "humanizer", "nlp", "russian", "agent-skills", "ai-detection", "claude", "llm", "text-humanization", "ai-writing"]
stars: 123
forks: 9
openIssues: 6
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2026-01-21T15:02:29Z"
lastCommitAt: "2026-09-05T07:49:18Z"
lastReleaseAt: "2026-09-04T17:16:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 90
undervaluedScore: 37
maintainers: ["Vladimir-Human"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1139128402/6fd4e927-b1d5-40ec-8080-a2834d58c758"
discussionCount: 0
---

# humanizer-ru
Находит следы машинного текста в русском и объясняет их вам

## Кому это нужно

- Редактору и преподавателю: проверить текст перед публикацией: `humanizer-markers --scan файл.md`.
- Разработчику и CI: гейт вставки из чат-интерфейсов: [action и контракт](https://github.com/Vladimir-Human/humanizer-ru/blob/HEAD/contract.v1.json).
- Пользователю ИИ-ассистента: та же проверка внутри агентной среды: [MCP одной конфигурацией](#mcp-одной-конфигурацией) или [демо](https://vladimir-human.github.io/humanizer-ru/).

## Попробовать за 30 секунд

- [Демо в браузере](https://vladimir-human.github.io/humanizer-ru/): ничего не устанавливать, текст не покидает браузер.
- В терминале:

```text
pip install humanizer-ru
humanizer-markers --scan primer.txt
  primer.txt:1 [contentReference] Согласно отчёту :contentReference[oaicite:3]{index=3}, рост заявок за неделю 12%: https://
  primer.txt:1 [utm_chatgpt] Согласно отчёту :contentReference[oaicite:3]{index=3}, рост заявок за неделю 12%: https://
  primer.txt:2 [zero_width] Данные подтверждены ассистентом​, подробности в чате.
```

### MCP одной конфигурацией

```json
{
  "mcpServers": {
    "humanizer-ru": { "command": "humanizer-mcp"…
