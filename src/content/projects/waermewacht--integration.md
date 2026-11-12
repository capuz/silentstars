---
repo: "waermewacht/integration"
name: "integration"
description: "Gesundheits-Check für Wärmepumpen in Home Assistant: Arbeitszahlen je Modus und Zeitraum, Takte, Abtauungen – nur lesend, lokal (HACS)"
readmeQualityOk: true
url: "https://github.com/waermewacht/integration"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["bosch", "buderus", "cop", "ems-esp", "hacs", "hacs-integration", "heat-pump", "home-assistant", "waermepumpe"]
stars: 14
forks: 0
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-27T11:51:02Z"
lastCommitAt: "2026-11-12T11:41:52Z"
lastReleaseAt: "2026-10-28T11:37:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 47
maintainers: ["n42net"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1435659948/ba7e5ac6-559c-4aba-85be-3128e78a9212"
---

**Deutsch** · [English](https://github.com/waermewacht/integration/blob/main/README.en.md)

> **Vorlagen:** Die Vorlagen für EMS-ESP, Bosch HomeCom und Daikin Altherma (P1P2MQTT) laufen an echten Anlagen, alle anderen sind Beta (siehe [Voraussetzungen](#voraussetzungen)).

**Wie effizient arbeitet deine Wärmepumpe wirklich?** Wärmewacht berechnet in Home Assistant Arbeitszahlen je Betriebsart und Zeitraum, zählt Starts, Kurzläufe und Abtauungen und zeigt einige Diagnosewerte. Grundlage sind die Entitäten, die deine Wärmepumpe schon liefert. Wärmewacht liest nur und steuert nie. Keine Cloud, keine Netzabfragen.

**Ausprobieren ohne Installation:** Die [Demo](https://waermewacht.github.io/integration/?lang=de) zeigt Arbeitszahlen, Takte, Gesundheits-Check, Warmwasser, AZ-Kennlinie und Energiesignatur für eine kalte Januarwoche, einen milden Herbst mit taktender Anlage, eine Hybridanlage mit Gaskessel und eine Gasheizung vor dem Umstieg – mit den echten [Karten](#karten), erfundenen Werten, aber gerechnet vom Code der Integration.

**Noch mit Gas oder Öl?** Wärmewacht rechnet auch die Heizlast deines Hauses aus dem Gas- oder Ölverbrauch, als Grundlage für die Auslegung einer…
