---
repo: "SP3KON/ESP32-HAM-CLOCK"
name: "ESP32-HAM-CLOCK"
description: "Small HAM Clock using ESP32_CYD_ILI9341_240x320"
readmeQualityOk: true
url: "https://github.com/SP3KON/ESP32-HAM-CLOCK"
language: "C++"
languages: ["C++", "HTML"]
languagePcts: [63, 33]
stars: 41
forks: 15
openIssues: 5
closedIssues: 1
watchers: 8
contributors: 1
recentReleases: 1
createdAt: "2026-01-26T22:26:50Z"
lastCommitAt: "2026-07-04T22:52:46Z"
lastReleaseAt: "2026-04-22T21:59:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 12
maintainers: ["SP3KON"]
openGraphImageUrl: "https://opengraph.githubassets.com/2619bb3806c1fcc206986046a5cf9d9ee1460bb44a30801c38a0adfcfbcd6e00/SP3KON/ESP32-HAM-CLOCK"
---

# ESP32-HAM-CLOCK

ESP32 HAM CLOCK to zegar i terminal DX/APRS dla ESP32 (głównie CYD ESP32-2432S028), z wyświetlaczem TFT 2.4" i równoległym panelem WWW.

PROJEKT OBUDOWY do wydruku 3d dla tego projektu:

https://makerworld.com/pl/models/2402822-datadisplay-v1-updated#profileId-2633814

Projekt łączy:
- DX Cluster (telnet),
- POTA (API),
- HAMALERT (telnet),
- APRS-IS (RX + opcjonalny TX beacon),
- pogodę i prognozę (OpenWeather),
- dane propagacyjne/solar.

Ustawienia są zapisywane w NVS, a zasoby WWW/fonty są trzymane w LittleFS.

## Najważniejsze funkcje

- DX Cluster: filtry, logowanie, keepalive.
- POTA: spoty z publicznego API.
- HAMALERT: pobieranie spotów przez telnet.
- APRS-IS:
  - odbiór ramek,
  - filtr `#filter r/lat/lon/radius`,
  - opcjonalny TX beacon,
  - APRS ALERT (lista znaków, nearby/WX, LED).
- OpenWeather:
  - pogoda bieżąca,
  - prognoza,
  - PM2.5/PM10.
- TFT + dotyk XPT2046:
  - menu filtrów,
  - jasność,
  - rotacje,
  - kalibracja,
  - auto-switch ekranów.
- Panel WWW:
  - zakładki `DXSPOT`, `POTA`, `HAMALERT`, `APRS`, `ALERT`, `Ekran TFT`, `Ustawienia`, `Instrukcja`.
- Build helper:
  - `pre:copy_user_setup.py` automatycznie kopiuje `User_Setup.h` do…
