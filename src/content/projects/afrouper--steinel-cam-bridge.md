---
repo: "Afrouper/steinel-cam-bridge"
name: "steinel-cam-bridge"
description: "Bridge um die Leuchten mit Kameras von Steinl (z.B. L 625 CAM SC, L620 CAM SC) lokal zu nutzen und einen ONVIF/RTSP Endpunkt \"ohne Cloud\" und integrierbar in Drittsysteme bereitzustellen."
readmeQualityOk: true
url: "https://github.com/Afrouper/steinel-cam-bridge"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["camera", "home-assistant", "onvif", "onvif-camera", "steinl", "nabto", "nabto-edge", "hassio-addon", "home-assistant-addon", "l620"]
stars: 8
forks: 1
openIssues: 4
closedIssues: 12
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T19:37:29Z"
lastCommitAt: "2026-10-29T10:36:44Z"
lastReleaseAt: "2026-08-15T18:40:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 58
maintainers: ["Afrouper", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/327f5973c96156967eb5e84867732197eae65540a12049497fe5087870bf1bf4/Afrouper/steinel-cam-bridge"
---

# Bridge für Steinel CAM Leuchten auf ONVIF (RTSP), 2-Way Audio & Home Assistant

Die Bridge ist eine hochperformanter, 100 % autarker **Go-Daemon** der in Docker (Compose) oder als HomeAssistant App betrieben
werden kann.
Sie verwandelt **Steinel CAM Außenleuchten** (**L 625 CAM SC**, **L 620 CAM**, **XLED CAM 1/2**, **Spot CAM**) in standardkonforme
**ONVIF Profile S/T/G Kamera** mit **RTSP-Streaming**, **2-Wege-Audio (Gegensprechen)**, **lokalem MicroSD-Speicherabruf** und
vollständiger **MQTT Home Assistant Auto-Discovery**.
Damit ist eine nahtlosen Integration in **Home Assistant**, **Synology Surveillance Station**, **Scrypted**, **Frigate** und weitere
möglich.
Mit Hilfe von Scrypted ist dann z.B. eine Integration in **Apple HomeKit Secure Video (HKSV)** möglich.

Da ich nicht alle Modelle selbst besitze kann ich nicht alles selbst direkt vertesten. Über Rückmeldungen würde ich mich freuen.

> [!WARNING]
> Trotz sorgfältiger Entwicklung und Verwendung der Schnittstellen der offiziellen (Nabto) SDKs und APIs die von der Kamera
bereitgestellt werden kann nicht garantiert werden das es zu keinen Komplikationen mit der Hardware der Kamera/Leuchte kommt.
Das Projekt oder meine…
