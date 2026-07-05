---
repo: "Gfermoto/soil-sensor-7in1"
name: "soil-sensor-7in1"
description: "🌱 JXCT 7-in-1 Soil Sensor (v3.13.2) - A professional IoT soil monitoring system based on ESP32 with Modbus RTU, MQTT, and advanced compensation algorithms"
originalDescription: "🌱 JXCT 7-в-1 Датчик Почвы (v3.13.2) - Профессиональная IoT система мониторинга почвы на базе ESP32 с Modbus RTU, MQTT и продвинутыми алгоритмами компенсации"
descriptionLang: "ru"
readmeQualityOk: true
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
lastCommitAt: "2026-07-05T06:32:07Z"
lastReleaseAt: "2025-08-01T16:55:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/a42a9cd8b4e12e0b88f283decac0e78b2151997ca0c4262a6d4194df0d80caa3/Gfermoto/soil-sensor-7in1"
---

# JXCT Soil Sensor v3.13.2

IoT soil monitoring system based on ESP32.

7 soil parameters (moisture, temperature, pH, EC, NPK), web interface, OTA, MQTT. Archimedes model for EC, Nernst equation for pH.

**Article on Habr:** [IoT soil sensor 7-in-1 on ESP32: scientific compensation, 24 crops, and open-source firmware](https://github.com/Gfermoto/soil-sensor-7in1/blob/HEAD/habr_article/article.md) — text for publication in `habr_article/`

## Connection Diagram

## Quick Start

```bash
git clone https://github.com/Gfermoto/soil-sensor-7in1.git
cd soil-sensor-7in1
pip install -r requirements.txt
pio run -t upload
pio run -t uploadfs
```

## Tests

```bash
pio test -e native
python scripts/run_e2e_tests.py
```

## Documentation

- [User Manual](https://github.com/Gfermoto/soil-sensor-7in1/blob/HEAD/docs/manuals/USER_GUIDE.md)
- [Technical Documentation](https://github.com/Gfermoto/soil-sensor-7in1/blob/HEAD/docs/manuals/TECHNICAL_DOCS.md)
- [Connection Diagram](https://github.com/Gfermoto/soil-sensor-7in1/blob/HEAD/docs/manuals/WIRING_DIAGRAM.md)
- [API](https://github.com/Gfermoto/soil-sensor-7in1/blob/HEAD/docs/manuals/API.md)
-…
