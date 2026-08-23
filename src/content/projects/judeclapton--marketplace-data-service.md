---
repo: "judeclapton/marketplace_data_service"
name: "marketplace_data_service"
description: "Daily data pipeline for marketplace metrics: collects API data, stores it in PostgreSQL DB and visualizes key insights via Metabase."
readmeQualityOk: true
url: "https://github.com/judeclapton/marketplace_data_service"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-01T15:22:12Z"
lastCommitAt: "2026-08-23T04:10:01Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 80
undervaluedScore: 77
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8067d9b2b63eaab398281e2e518de1d5aeeef045bf30c730554df334c670557c/judeclapton/marketplace_data_service"
---

# Marketplace Data Service

## Описание проекта
Проект реализует полный цикл автоматизированного сбора данных по API, их загрузку в PostgreSQL-базу и визуализацию ключевых метрик через Metabase.
Цель - обеспечить стабильный поток данных для аналитики клиентской активности, продаж и ассортиментной матрицы.

## Структура проекта
<pre>
marketplace_data_service/
├── config/                     # переменные окружения - скрыта
│   └── .env
├── core/
│   ├── logger.py               # конфигурация логгирования
│   ├── api_client.py           # работа с API
│   ├── db_client.py            # работа с БД
│   └── data_parsing.py         # валидация и подготовка данных
├── loaders/
│   ├── base_loader.py          # базовый класс
│   ├── daily_loader.py         # ежедневная загрузка данных (`cron` в 07:00)
│   └── historical_loader.py    # единоразовая загрузка исторических данных
├── services/
│   └── app.py                  # бизнес-логика
├── logs/                       # логи
├── main.py                     # точка входа
├── .gitignore
└── README.md                   # документация
</pre>

## Автоматизация
- Загрузка исторических данных выполнена единоразово через `historical_loader.py`
-…
