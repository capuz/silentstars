---
repo: "mallewski/TaupunktLueftung"
name: "TaupunktLueftung"
description: "ESP32-basierte Taupunkt-gesteuerte Lüftungsautomatik für Keller & feuchte Räume – mit Webinterface, MQTT und Live-Charts."
readmeQualityOk: true
url: "https://github.com/mallewski/TaupunktLueftung"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["diy", "esp-project-package", "esp32", "esp32-arduino", "home-automation", "iot", "mqtt", "taupunkt", "taupunktluefter", "taupunktlueftungssystem"]
stars: 9
forks: 0
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2025-04-01T19:48:02Z"
lastCommitAt: "2026-09-04T08:10:12Z"
lastReleaseAt: "2026-09-04T08:10:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 84
undervaluedScore: 55
maintainers: ["mallewski"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b992ce3211b22c2ddd8f8d59f4f2ee443b95cf7529e5602b11bab033b42f087/mallewski/TaupunktLueftung"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mallewski"]
---

## TaupunktLueftung

TaupunktLueftung ist ein ESP32-basiertes System zur intelligenten Lüftungssteuerung auf Grundlage der Taupunktdifferenz. Es ist ideal zum gezielten Trocknen feuchter Räume wie Keller, Waschküchen oder Vorratskammern – effizient und vollautomatisch.

Das System misst Temperatur und Luftfeuchtigkeit innen und außen (über Sensoren wie z. B. SHT31 oder DHT22 - oder per MQTT), berechnet daraus die Taupunkte und aktiviert die Lüftung nur dann, wenn trocknende Bedingungen vorliegen – also wenn die Außenluft in der Lage ist, Feuchtigkeit aufzunehmen, statt sie einzutragen. (Im Feuchte-Regelungs-Modus wird versucht eine Wunschluftfeuchtigkeit durch be- oder entfeuchten zu halten.)

Die Lüftung wird über ein Relais geschaltet – optimalerweise in einem Setup mit zwei Lüftern: einer zieht trockene Luft hinein, der andere führt feuchte Luft ab. Dadurch entsteht ein effektiver Luftstrom zum gezielten Entfeuchten.

-> [Schnell-Start-Anleitung](https://github.com/mallewski/TaupunktLueftung/blob/HEAD/quick_start.md)

## Features:

- Taupunktgesteuerte Lüftung zur gezielten Entfeuchtung - ein Algorithmus zur Taupunktanalyse steuert die Lüftung je nach Differenz.

- Die…
