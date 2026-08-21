---
repo: "Darmioniks/proxy-and-vless-collector"
name: "proxy-and-vless-collector"
description: "Сайт который берёт прокси tg и vless ключи из открытых github репозиториев и оставляет только рабочие, удобно подключает их в тг"
readmeQualityOk: true
url: "https://github.com/Darmioniks/proxy-and-vless-collector"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-06T17:02:43Z"
lastCommitAt: "2026-08-21T04:09:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 43
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34f8e0f2866c30166faa4c7575e3549f26e46f8894ad1ded53c8e936468758ba/Darmioniks/proxy-and-vless-collector"
---

# Proxy Manager

Streamlit-приложение для сбора MTProto-прокси (Telegram) и VLESS-ключей из нескольких независимых источников, с проверкой работоспособности.

## Возможности

- **MTProto**: сбор из нескольких репозиториев, дедупликация по `server:port`, проверка пинга.
- **VLESS**: каскадная фильтрация ключей на работоспособность:
  1. **TCP** — отсев мёртвых серверов (по уникальным `host:port`);
  2. **TLS handshake** — проверка рукопожатия с нужным SNI (для `tls`/`reality`);
  3. **Xray** — реальный URL-тест только по выжившим ключам.
- Пагинация, фильтр по тексту, выгрузка в `.txt`.

## Установка

```bash
pip install -r requirements.txt
streamlit run proxy_manager.py
```

## Опционально: реальный URL-тест через Xray

Для этапа 3 нужен бинарь `xray` ([Xray-core releases](https://github.com/XTLS/Xray-core/releases)) в `PATH` или рядом с `proxy_manager.py`. Без него каскад завершается на этапе TLS.

## Настройки

Константы в начале `proxy_manager.py`:

| Константа | Назначение | По умолчанию |
|---|---|---|
| `MAX_TCP_WORKERS` | потоков TCP-проверки | 100 |
| `MAX_TLS_WORKERS` | потоков TLS-проверки | 60 |
| `MAX_XRAY_WORKERS` | параллельных Xray url-тестов | 8 |
|…
