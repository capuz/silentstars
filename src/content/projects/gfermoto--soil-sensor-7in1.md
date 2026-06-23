---
repo: "Gfermoto/soil-sensor-7in1"
name: "soil-sensor-7in1"
description: "🌱 JXCT 7-в-1 Датчик Почвы (v3.13.2) - Профессиональная IoT система мониторинга почвы на базе ESP32 с Modbus RTU, MQTT и продвинутыми алгоритмами компенсации"
url: "https://github.com/Gfermoto/soil-sensor-7in1"
homepage: "https://gfermoto.github.io/soil-sensor-7in1/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [79, 21]
topics: ["esp32", "hass", "mqtt", "sensor", "soil", "thingspeak"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-12T20:12:32Z"
lastCommitAt: "2026-06-23T06:41:21Z"
lastReleaseAt: "2025-08-01T16:55:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 66
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7e5f75c00216f6d62b5a42cc0e0eb2c98cc6488592471e6b6c77cf8b02f7914/Gfermoto/soil-sensor-7in1"
---

# JXCT Soil Sensor v3.13.2

IoT система мониторинга почвы на базе ESP32.

7 параметров почвы (влажность, температура, pH, EC, NPK), веб-интерфейс, OTA, MQTT. Модель Арчи для EC, уравнение Нернста для pH.

**Статья на Habr:** [IoT-датчик почвы 7-в-1 на ESP32: научная компенсация, 24 культуры и open-source прошивка](habr_article/article.md) — текст для публикации в `habr_article/`

## Схема подключения

![Полная схема: ESP32 + SP3485E + JXCT + питание](habr_article/images/wiring_full_system.png)

![Таблица пинов](habr_article/images/wiring_pin_table.png)

## Быстрый старт

```bash
git clone https://github.com/Gfermoto/soil-sensor-7in1.git
cd soil-sensor-7in1
pip install -r requirements.txt
pio run -t upload
pio run -t uploadfs
```

## Тесты

```bash
pio test -e native
python scripts/run_e2e_tests.py
```

## Документация

- [Руководство пользователя](docs/manuals/USER_GUIDE.md)
- [Техническая документация](docs/manuals/TECHNICAL_DOCS.md)
- [Схема подключения](docs/manuals/WIRING_DIAGRAM.md)
- [API](docs/manuals/API.md)
- [Сайт](https://gfermoto.github.io/soil-sensor-7in1/)

## Структура

```
src/         # Код прошивки
include/     # Заголовки
test/        # Тесты
scripts/     #…
