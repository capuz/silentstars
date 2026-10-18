---
repo: "Soardiac/ha-solarmanager"
name: "ha-solarmanager"
description: "Inoffizielle Home Assistant Integration für Solar Manager (solar-manager.ch)"
readmeQualityOk: true
url: "https://github.com/Soardiac/ha-solarmanager"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "home-assistant", "home-assistant-custom-component", "integration", "photovoltaics", "smarthome", "solar", "solar-manager", "solarmanager"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 15
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2025-08-19T17:40:47Z"
lastCommitAt: "2026-10-18T08:15:27Z"
lastReleaseAt: "2026-04-21T13:11:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 61
maintainers: ["Soardiac", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0176f51e500160fa9b23a4d18204e2c8558bd4f4b59ed63afe4fc746086551f4/Soardiac/ha-solarmanager"
discussionCount: 6
---

> [!WARNING]
> **Für HA Core 2026.9 und neuer braucht ihr zwingend v1.12.0 oder höher!**

# Solar Manager – Home Assistant (Custom Integration)

> **Inoffiziell.** Die Firma Solar Manager AG ist für diesen Code nicht verantwortlich und bietet keinen Support dafür.

Bindet das [Solar Manager](https://www.solar-manager.ch/) Gateway in Home Assistant ein — wahlweise über die **Cloud-API** (voller Funktionsumfang) oder direkt über die **lokale REST-API** (nur Sensoren, kein Internet nötig).

- **Cloud-API**: [cloud.solar-manager.ch](https://external-web.solar-manager.ch/swagger) – voller Funktionsumfang inkl. Steuerung (Werte lesen und schreiben)
- **Lokale API**: `GET /v2/point` direkt am Gateway – nur Sensoren (Werte auslesen) möglich; kein Account nötig
- [**HA Quality Scale**](https://developers.home-assistant.io/docs/core/integration-quality-scale/rules/) (Selbsteinschätzung): Bronze ✓ · Silver 95 % (volle Testabdeckung in Arbeit) · Gold: alle anwendbaren Regeln umgesetzt (Repair-Issue für die E-Mail/Passwort-Migration; Discovery nicht anwendbar)

---

## Voraussetzungen

- Home Assistant ≥ 2025.8
- Solar Manager Gateway

**Cloud-Modus** (voller Funktionsumfang):
- Solar Manager…
