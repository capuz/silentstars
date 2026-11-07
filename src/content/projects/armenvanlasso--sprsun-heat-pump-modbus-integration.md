---
repo: "ArmenVanlasso/Sprsun-Heat-Pump-modbus-integration"
name: "Sprsun-Heat-Pump-modbus-integration"
description: "Modbus integration for Sprsun CGK heat pumps in Home Assistant. Supports multiple languages."
readmeQualityOk: true
url: "https://github.com/ArmenVanlasso/Sprsun-Heat-Pump-modbus-integration"
homepage: "https://github.com/ArmenVanlasso/Sprsun-Heat-Pump-modbus-integration"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["home-assistant", "integration", "modbus", "sprsun"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 4
createdAt: "2026-02-03T13:41:19Z"
lastCommitAt: "2026-11-07T16:12:00Z"
lastReleaseAt: "2026-11-07T16:08:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 76
maintainers: ["ArmenVanlasso"]
openGraphImageUrl: "https://opengraph.githubassets.com/da3abefeb858ef238610aab2dfbee9734f99cb540366f422f9cf7f504ef495a2/ArmenVanlasso/Sprsun-Heat-Pump-modbus-integration"
discussionCount: 1
---

Integracja pozwala na bezpośrednie podłączenie pomp ciepła Sprsun serii CGK_V3L do Home Assistanta za pomocą Modbus (np. przez bramkę Modbus TCP lub inny konwerter).
Celem integracji jest pełne, lokalne sterowanie oraz odczyt parametrów pracy bez użycia chmury.</b>

Aktualnie integracja wspiera następujące modele:
$${\color{green} CGK025V3L, CGK030V3L, CGK040V3L, CGK050V3L, CGK060V3L }$$ 
$${\color{yellow} (CGK030V3L-B)\ w\ trakcie\ testowania}$$

Integracja tworzy w Home Assistant następujące typy encji:

1. Climate (climate.*)

Dostępne m.in.:

Temperatury zadane:
ogrzewania
chłodzenia
CWU
Zaawansowane nastawy:
histerezy (start/stop) dla ogrzewania / chłodzenia / CWU
krzywe grzewcze / chłodzące (X1–X4, Y1–Y4)
funkcja czasowa – temperatury dla trybów czasowych
temperatura załączenia grzałki
parametr Delta T

2. Sensory (sensor.*)

Sensory logiczne

Dostępne m.in.:

Czas pracy sprężarki:
daily / monthly / yearly / total
Czas pracy wentylatora:
daily / monthly / yearly / total
Czas posiadania pompy (OwnershipDays)
Liczenie oparte jest na stanach binarnych istniejących encji HA (np. sprężarka ON/OFF, wentylator ON/OFF).

3. Binary sensors (binary_sensor.*)

Przykładowe encje:…
