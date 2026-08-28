---
repo: "aidvizhhub/camoufox-research"
name: "camoufox-research"
description: "MCP server for browser research on the anti-detect Camoufox browser: search, JS/SPA page reading, batch fetch, live sessions, cache"
readmeQualityOk: true
url: "https://github.com/aidvizhhub/camoufox-research"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-20T19:26:30Z"
lastCommitAt: "2026-08-28T14:26:53Z"
lastReleaseAt: "2026-08-27T17:08:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 55
maintainers: ["aidvizhhub"]
openGraphImageUrl: "https://opengraph.githubassets.com/1cd3f5e316d4c8af7e40d5f253b4049c99c74c4556ea2a7f3ca2d3245ccdf454/aidvizhhub/camoufox-research"
---

# Camoufox Research

**Browser research toolkit for AI agents, exposed through MCP.**

Search the web. Read JS-heavy pages. Interact with websites. Extract data. Monitor changes.
**Give your AI agent a real browser.**

![MAP@10]

```
## Роутер тулов (tool_hint)

Не перебирай 58 тулов вслепую — спроси **одну команду**:

`tool_hint(what="таблицы")` → `для «таблицы» → table_extract: таблицы со страницы`

| Спроси про... | Роутер ответит |
|---|---|
| поиск / статьи / анализ | web_search · paper_search · fetch_page |
| мониторинг / карта сайта | page_diff · map_site / sitemap |
| выжимки / отчёт / цитаты | research_digest · research_report · citation_pack |
| таблицы / скриншот / ссылки | table_extract · screenshot · extract_links |
| файлы / документ / профиль | read_document · session_download · profile_save |
| сеть / прокси / браузер | session_network · set_proxy · session_start |

## Переносимость путей (закон 28)

Всё работает из одного источника: env `CAMOUFOX_*` > `~/.cache/camoufox-research/config.env`
(пишет `install_mcp.py`) > авто-fallback. Никаких хард-путей.

| Команда | Что делает |
|---|---|
| `python scripts/install_mcp.py` | установка + запись config.env |
| `python…
