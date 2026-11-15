---
repo: "moellere/WireStudio"
name: "WireStudio"
description: "Agent-driven design studio for ESPHome-compatible (e.g. ESP32/ESP8266, RP2040) + LoRaWAN devices: generates ESPHome YAML, KiCad schematic/PCB, 3D-printable enclosures, and builds/flashes/provisions LoRaWAN firmware (ChirpStack + Home Assistant)."
readmeQualityOk: true
url: "https://github.com/moellere/WireStudio"
homepage: "https://wirestudio.io"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [69, 23]
topics: ["ai-agent", "chirpstack", "claude", "electronics", "esp32", "esphome", "fastapi", "hardware-design", "home-assistant", "iot"]
stars: 28
forks: 3
openIssues: 1
closedIssues: 24
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-03T19:48:49Z"
lastCommitAt: "2026-11-15T08:18:31Z"
lastReleaseAt: "2026-06-20T10:24:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["moellere"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1228254372/29af38c8-d427-4859-8fc7-6c1e25ccd2ee"
discussionCount: 1
---

# wirestudio

Hardware design tool for microcontroller devices. A single `design.json`
(board + components + connections) drives every artifact: solved pin
assignments, electrical validation, firmware for the framework you pick
(compile-clean ESPHome YAML, a Tasmota template, a WLED build, LoRaWAN
firmware, Meshtastic, CircuitPython or MicroPython), an ASCII wiring
diagram, a KiCad schematic and placed PCB, a JLCPCB fab bundle (BOM /
CPL / Gerber / drill), and a parametric OpenSCAD enclosure. Drive it
from the web UI, the built-in agent, or any MCP client.

Stock ESPHome's Device Builder covers picking a board and adding
components. wirestudio works below the YAML: the component library
carries electrical metadata ESPHome doesn't model (voltage rails,
current draw, pull-ups, per-pin capabilities), a CSP solver assigns
legal pins from it, a validator catches boot-strap / ADC2-WiFi /
voltage conflicts, and the same design fans out to the physical
artifacts — wiring, schematic, PCB, enclosure. The bundled boards span
the ESP32 family (original, C3, S3, C6) and ESP8266; nothing is
ESP32-specific — any board ESPHome supports can be added with a library
file ([integration…
