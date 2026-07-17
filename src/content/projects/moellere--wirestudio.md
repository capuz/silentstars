---
repo: "moellere/WireStudio"
name: "WireStudio"
description: "Agent-driven design studio for ESP32 / ESPHome + LoRaWAN devices: generates ESPHome YAML, KiCad schematic/PCB, 3D-printable enclosures, and builds/flashes/provisions LoRaWAN firmware (ChirpStack + Home Assistant)."
readmeQualityOk: true
url: "https://github.com/moellere/WireStudio"
homepage: "https://wirestudio.io"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 33]
topics: ["ai-agent", "chirpstack", "claude", "electronics", "esp32", "esphome", "fastapi", "hardware-design", "home-assistant", "iot"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-03T19:48:49Z"
lastCommitAt: "2026-07-17T06:00:22Z"
lastReleaseAt: "2026-06-20T10:24:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 57
maintainers: ["moellere", "github-actions[bot]", "google-labs-jules[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1228254372/29af38c8-d427-4859-8fc7-6c1e25ccd2ee"
discussionCount: 1
---

# wirestudio

Hardware design tool for ESPHome devices. A single `design.json`
(board + components + connections) drives every artifact: solved pin
assignments, electrical validation, compile-clean ESPHome YAML, an
ASCII wiring diagram, a KiCad schematic and placed PCB, a JLCPCB fab
bundle (BOM / CPL / Gerber / drill), and a parametric OpenSCAD
enclosure. Drive it from the web UI, the built-in agent, or any MCP
client.

Stock ESPHome's Device Builder covers picking a board and adding
components. wirestudio works below the YAML: the component library
carries electrical metadata ESPHome doesn't model (voltage rails,
current draw, pull-ups, per-pin capabilities), a CSP solver assigns
legal pins from it, a validator catches boot-strap / ADC2-WiFi /
voltage conflicts, and the same design fans out to the physical
artifacts — wiring, schematic, PCB, enclosure.

Two LoRaWAN paths share the studio. The standalone target builds and
flashes RadioLib + LoRaWAN_ESP32 firmware over WebSerial. The newer
external-component path emits ESPHome YAML referencing
[`lorawan-for-esphome`](https://github.com/moellere/lorawan-for-esphome),
so the LoRaWAN device joins the same ESPHome / fleet-for-esphome…
