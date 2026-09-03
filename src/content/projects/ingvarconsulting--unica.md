---
repo: "IngvarConsulting/unica"
name: "unica"
description: "Unica (Ю́ника) — публичный плагин Codex и Claude Code для разработки на 1С:Предприятии."
readmeQualityOk: true
url: "https://github.com/IngvarConsulting/unica"
homepage: "https://ingvar.pro/products/unica"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["1c-enterprise", "claude-code-plugin", "codex-plugin", "mcp", "skills"]
stars: 188
forks: 28
openIssues: 111
closedIssues: 223
watchers: 1
contributors: 8
recentReleases: 2
createdAt: "2026-05-02T10:32:15Z"
lastCommitAt: "2026-09-03T08:13:36Z"
lastReleaseAt: "2026-06-22T12:10:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 32
maintainers: ["zeegin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bf4d77be72be91897fc1e77464dac8f1bc677ee3090d0c9b8c5f6ab3aa761a1/IngvarConsulting/unica"
---

</a>
</p>

# Unica

Unica (Ю&#x301;ника) — публичный плагин [Codex](https://openai.com/codex/) и
[Claude Code](https://code.claude.com/docs/en/overview) для разработки на
1С:Предприятии. Он добавляет навыки и один MCP-сервер `unica`, через который
агент создаёт и проверяет метаданные, формы, роли, СКД, внешние обработки и
отчёты, запускает 1С и ищет BSL-код.

Оба хоста получают один и тот же каталог плагина: манифесты лежат рядом, а
`.mcp.json` определяет корень плагина по той переменной, которую подставляет
конкретный хост.

## Требования

- один из агентов:
  - [Codex CLI](https://learn.chatgpt.com/docs/codex/cli);
  - [Claude Code](https://code.claude.com/docs/en/overview);
- стандартный Git, включая Git for Windows на Windows;
- платформа 1С только для операций, которым реально требуется запуск 1С.

### Поддерживаемые версии платформы 1С

| Версия платформы | Статус | Что это означает |
| --- | --- | --- |
| `8.5.1.x`, `8.5.4.x` | Планируется | Хотим добавить в ближайшее время. |
| `8.3.27.x` | Поддерживается | Unica поддерживает все актуальные релизы ветки 8.3.27. |
| `8.3.26.x` и ниже | Не планируется | Помогаем мигрировать на 8.3.27. Если вам действительно нужна более…
