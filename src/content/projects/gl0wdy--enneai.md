---
repo: "Gl0wdy/EnneAI"
name: "EnneAI"
description: "RAG-based typology bot"
readmeQualityOk: true
url: "https://github.com/Gl0wdy/EnneAI"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-04-22T19:34:38Z"
lastCommitAt: "2026-09-05T07:48:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 72
maintainers: ["Gl0wdy", "FLMxN"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6a2acf4a524f23060d219540b5c884b9b7ccb5f6042a3ec31eb3734e1dd084e/Gl0wdy/EnneAI"
---

# EnneAI

EnneAI — Telegram-бот для работы с типологическими моделями через LLM и RAG. Проект объединяет несколько слоёв:

- модуль Наранхо для диалоговой работы с типологией и поиска по источникам;
- модуль Юнга для типирования персонажей, произведений и другого контента;
- RAG-пайплайн на основе Qdrant и эмбеддингов для поиска релевантных фрагментов из книг;
- MongoDB для хранения пользователей, переписок и API-ключей;
- Telegram-интерфейс на aiogram с настройками, историей и админским управлением.

Код проекта расположен в пакете `src/enneai`, а точка входа — `src/enneai/main.py`.

## Что находится в репозитории

```text
.
├── src/
│   └── enneai/
│       ├── main.py                 # запуск Telegram-бота
│       ├── config.py               # чтение env-переменных
│       ├── scraper.py              # scraper для сборки контента
│       ├── ai/
│       │   ├── llm/
│       │   │   └── keys_rotation.py # ротация OpenRouter ключей
│       │   ├── modules/
│       │   │   ├── jung/
│       │   │   └── naranjo/
│       │   └── rag/
│       │       ├── chunker.py
│       │       ├── context.py
│       │       ├── embeddings.py
│       │       ├── ingest.py
│       │       ├──…
