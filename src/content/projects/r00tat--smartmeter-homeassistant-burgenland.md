---
repo: "r00tat/smartmeter_homeassistant_burgenland"
name: "smartmeter_homeassistant_burgenland"
description: "Smart meter reader for Austrian grid operators – Home Assistant integration (HACS), add-on and standalone"
readmeQualityOk: true
url: "https://github.com/r00tat/smartmeter_homeassistant_burgenland"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["hacs", "home-assistant", "integration"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-11-17T09:57:09Z"
lastCommitAt: "2026-11-16T09:59:18Z"
lastReleaseAt: "2025-01-05T12:14:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["dependabot[bot]", "r00tat"]
openGraphImageUrl: "https://opengraph.githubassets.com/1566b34a1a58d7ba1749eb25f7dc2bac43ed07d1bd450d8028ec21fa57a7058b/r00tat/smartmeter_homeassistant_burgenland"
---

# Smart Meter Reader Burgenland - AT

This python program connects your Austrian Smart Meter to Home Assistant
via MQTT.

Supported meters (select via `meter_type`):

- `burgenland` *(default)* — Netz Burgenland
  [Landis+Gyr E450](https://www.netzburgenland.at/fileadmin/NB_pdf_NEU/Smart_Meter/Spezifikation_Kundenschnittstelle_E450_korr_2.pdf)
  via DLMS/HDLC at 9600 baud.
- `noe_evn` — Netz Niederösterreich / EVN Sagemcom T210-D via DLMS over
  M-Bus framing at 2400 baud (8E1).
- `wien` — Wiener Netze (Siemens IM150/IM350/IM351, Iskraemeco AM550,
  Landis+Gyr E450) via DLMS/HDLC on the infrared interface at 9600 baud.

Implemented from the grid operators' specifications, **not yet tested with
a real meter** — [real telegrams wanted](#real-data-wanted):

- `steiermark` — Energienetze Steiermark, Landis+Gyr E450 via wired M-Bus
  (RJ12) at 2400 baud (8E1).
- `steiermark_sagemcom` — Energienetze Steiermark, Sagemcom via DSMR P1
  (RJ12) at 115200 baud (8N1).
- `salzburg` — Salzburg Netz, Kaifa / Honeywell via wired M-Bus (RJ12) at
  2400 baud (8E1).
- `tirol` — TINETZ, Kaifa / Honeywell via wired M-Bus (RJ12) at 2400 baud
  (8E1).
- `h1` — the future *Smart Meter 2.0* customer…
