---
repo: "supernova1963/eedc-homeassistant"
name: "eedc-homeassistant"
description: "eedc – Energie Effizienz Data Center als Home Assistant App"
readmeQualityOk: true
url: "https://github.com/supernova1963/eedc-homeassistant"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [68, 30]
stars: 39
forks: 2
openIssues: 10
closedIssues: 350
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-03T12:41:20Z"
lastCommitAt: "2026-09-06T08:03:47Z"
lastReleaseAt: "2026-02-18T02:38:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 99
undervaluedScore: 41
maintainers: ["supernova1963"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a15bfcc64d1a6b6be70771c78e9e44446e5e29b23d45fb7333aaad9acda84fb/supernova1963/eedc-homeassistant"
discussionCount: 29
---

</p>

  <strong>Dokumentationsstand 4.0.0</strong> | Standalone PV-Analyse mit optionaler Home Assistant Integration
</p>

</p>

---

## Was ist eedc?

**eedc** (Energie Effizienz Data Center) ist eine lokale Anwendung zur umfassenden Auswertung und Wirtschaftlichkeitsanalyse von Photovoltaik-Anlagen. Die Software läuft standalone oder als Home Assistant App und speichert alle Daten lokal.

### Warum eedc?

- **Keine Cloud-Abhängigkeit** – Alle Daten bleiben auf deinem Server
- **Standalone-fähig** – Funktioniert ohne Home Assistant
- **Echtzeit-Monitoring** – Live Dashboard mit animiertem Energiefluss
- **Universelle Anbindung** – MQTT-Inbound für jedes Smarthome-System
- **Umfassende Analyse** – Von Energiebilanz bis ROI-Berechnung
- **Multi-Komponenten** – PV-Anlage, Speicher, E-Auto, Wärmepumpe, Wallbox, Balkonkraftwerk

---

## Die Oberfläche: drei Achsen

eedc sortiert alle Funktionen nach drei einfachen Fragen. Alle Daten bleiben erhalten, alte Lesezeichen werden umgeleitet.

| Achse | Frage | Inhalt |
|---|---|---|
| **Cockpit** | Wann? | Zeit-Achse: Live · Tag · Monat · Jahr/Gesamt · Aussicht |
| **Komponenten** | Was? | Deine Geräte, je Status → Verlauf → Vergleich →…
