---
repo: "NicolasBernaerts/tasmota"
name: "tasmota"
description: "Some Tasmota firmware extensions"
readmeQualityOk: true
url: "https://github.com/NicolasBernaerts/tasmota"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 88
forks: 17
openIssues: 2
closedIssues: 100
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2019-06-03T06:19:44Z"
lastCommitAt: "2026-11-08T14:14:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 49
maintainers: ["NicolasBernaerts", "TooMuhtsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b5b812778722ceba4d3349748aecef9364ca6be2d3f3a8b5c0c74d7294362f/NicolasBernaerts/tasmota"
---

# Tasmota Firmware Extensions

You'll find here some ESP8266 and ESP32 Tasmota firmware extensions :
  * **teleinfo** : manage **Teleinfo** protocol (Linky) & RTE API for **Tempo** and **Ecowatt** protocol
  * **gazpar** : manage french gaz smart meters (Gazpar)
  * **intercom** : manage building gate opening upon flat intercom rings
  * **motion** : handle motion detectors and push buttons in parallel to light circuit
  * **offload** : pilot device with power offloading according to power meter publishing thru MQTT
  * **pilotwire** : manage french pilotwire electrical heaters with **offload** functionnality
  * **serialrelay** : handle ICSE01xA and LC Tech serial relay boards
  * **sensor-vmc** : handle local and MQTT sensors & Motor Controled Ventilator according to target humidity level

# ESP8266 & ESP32 tools

In the **tools** folder you get 2 simple tools for Linux users :
  * **tasmota-discover** to list all tasmota devices available on the same LAN.
  * **tasmota-flash** to erase and/or flash ESP8266 and ESP32 devices.

# Analyse des usages

Du fait des projets Tasmota que je développe, je suis en échange avec l'université de Grenoble qui réalise une étude sur…
