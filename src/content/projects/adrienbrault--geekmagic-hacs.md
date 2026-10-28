---
repo: "adrienbrault/geekmagic-hacs"
name: "geekmagic-hacs"
description: "Home Assistant integration for GeekMagic displays (SmallTV Pro/Ultra). Server-side rendering, no device flashing required."
readmeQualityOk: true
url: "https://github.com/adrienbrault/geekmagic-hacs"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["custom-integration", "display", "esp8266", "geekmagic", "hacs", "home-assistant", "iot", "smalltv"]
stars: 474
forks: 52
openIssues: 45
closedIssues: 54
watchers: 13
contributors: 13
recentReleases: 0
createdAt: "2025-12-13T09:45:01Z"
lastCommitAt: "2026-10-28T09:57:42Z"
lastReleaseAt: "2026-07-05T17:05:27Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 29
maintainers: ["claude", "adrienbrault", "meirlo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a1b58bed43c0b107f0242ff2c855eb9171637bd0d53d1c1672e90e243ff29fc/adrienbrault/geekmagic-hacs"
---

# GeekMagic Display for Home Assistant

A Home Assistant custom integration for GeekMagic displays (SmallTV Pro, Ultra, and similar ESP8266/ESP32-based devices).

> **How it works:** This integration renders dashboard images directly in Home Assistant using Python/Pillow and pushes them to your GeekMagic device over HTTP. It supports the known stock firmware profiles and the newer SD_PRO-style firmware used by some Ultra units.

---

### Disclaimers

> **Early Software:** This project is in active development. Expect bugs, breaking changes, and incomplete features. The API and configuration format may change between versions.

> **Vibe Coded:** This integration was largely vibe-coded with AI assistance. While functional, it may contain unconventional patterns or rough edges. Contributions and feedback welcome!

---

### Background & Credits

I have a **GeekMagic Ultra** with ESP8266, which has [limited possibilities for flashing with ESPHome](https://community.home-assistant.io/t/installing-esphome-on-geekmagic-smart-weather-clock-smalltv-pro/618029). Instead of fighting the hardware, this integration takes a different approach: render everything server-side and push images to the…
