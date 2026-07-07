---
repo: "ficusdeltoidearobertbarany663/DroneRX"
name: "DroneRX"
description: "Detect and identify drones in real time with passive RF scanning on M5Stack CoreS3, no radio emission, cloud, or external dependency"
readmeQualityOk: true
url: "https://github.com/ficusdeltoidearobertbarany663/DroneRX"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["anticollision", "arduino", "beacon", "cpp", "drone", "drone-detection", "embedded-systems", "esp32", "esp32-s3", "french-guiana"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T02:08:21Z"
lastCommitAt: "2026-07-07T06:39:13Z"
status: "thriving"
tags: []
healthScore: 57
undervaluedScore: 10
maintainers: ["ficusdeltoidearobertbarany663", "ericperret"]
openGraphImageUrl: "https://opengraph.githubassets.com/2279c279604931048c3e926cab4fc8830021a20b6019aa960c13d3d37dac2f4b/ficusdeltoidearobertbarany663/DroneRX"
---

# DroneRX — Passive Drone Detection & Identification

**M5Stack CoreS3 (ESP32-S3) — Autonomous passive RF scanner**

DroneRX détecte et identifie les drones en temps réel par écoute passive des balises WiFi réglementaires, sans émission radio, sans cloud, sans dépendance externe.

DroneRX detects and identifies drones in real time by passively listening to regulatory WiFi beacons — no radio emission, no cloud, no external dependency.

---

## Fonctionnalités / Features

### Scanner RF passif / Passive RF Scanner
- **4 protocoles** : FR (SGDSN 6A:5C:35), ASTM F3411 ODID (FA:0B:BC), DJI DroneID (26:37:12), Parrot (90:3A:E6)
- **3 modes de scan** : Detection (canaux 1–14), Classic (1, 6, 11), Tracking (canaux actifs uniquement)
- **Waterfall SDR** temps réel sur l'écran — visualisation RSSI par canal avec code couleur par protocole
- **Beep mélodique** à chaque nouveau drone détecté

### Connectivité / Connectivity
- **WiFi Access Point** : SSID `drone.local`, captive portal avec DHCP maison (hostname client), DNS, mDNS
- **BLE (Web Bluetooth)** : lien données bidirectionnel via Nordic UART Service — scan RF 100% entre les bursts BLE
- **Zéro pairing** : connexion BLE directe, sans…
