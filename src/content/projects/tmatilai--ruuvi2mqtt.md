---
repo: "tmatilai/ruuvi2mqtt"
name: "ruuvi2mqtt"
description: "Integrate RuuviTag sensors with Home Assistant through MQTT discovery"
readmeQualityOk: true
url: "https://github.com/tmatilai/ruuvi2mqtt"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 7
forks: 1
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-02-20T16:03:55Z"
lastCommitAt: "2026-09-10T08:20:34Z"
lastReleaseAt: "2026-04-15T08:04:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 59
maintainers: ["dependabot[bot]", "tmatilai"]
openGraphImageUrl: "https://opengraph.githubassets.com/35e9bf103cc9008d7d903ffe1feaa8b80575d376bdbdc853cc20754212d4df76/tmatilai/ruuvi2mqtt"
---

# Ruuvi2MQTT

Ruuvi2MQTT listens for [RuuviTag](https://ruuvi.com/ruuvitag/) sensor BLE events and sends MQTT messages, especially for [Home Assistant](https://www.home-assistant.io/) with [MQTT Discovery](https://www.home-assistant.io/docs/mqtt/discovery/).

There are also many other projects for integrating RuuviTags to Home Assistant. The main reasons for this project are:

- Possibility to run multiple bridges in case one receiver can't hear all the sensors (and/or for HA).
- I wanted to have a hobby project to learn and use Rust.

The second bullet means that the documentation, configuration, and code quality might not be top-notch. Improvements welcome!

---

## Requirements

The target platforms are Linux on amd64, arm64, and arm7 (Raspberry Pi). Because of [dbus](https://docs.rs/dbus/latest/dbus/) dependency, (cross) compiling and MUSL can get complicated. MacOS is supposed to work as well.

---

## Usage

Pre-build binaries and container images can be found in <https://github.com/tmatilai/ruuvi2mqtt>.

An example configuration file can be seen in [ruuvi2mqtt.yaml](https://github.com/tmatilai/ruuvi2mqtt/blob/HEAD/ruuvi2mqtt.yaml).
Configuration file is by default searched…
