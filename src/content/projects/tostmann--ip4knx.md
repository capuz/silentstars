---
repo: "tostmann/ip4knx"
name: "ip4knx"
description: "Universal KNXnet/IP gateway firmware for Busware TUL (ESP32-C3) and TUL32 (ESP32-C6) — up to 10 concurrent tunnels, NCN5130 transceiver."
readmeQualityOk: true
url: "https://github.com/tostmann/ip4knx"
language: "C++"
languages: ["C++"]
languagePcts: [81]
topics: ["busware", "esp32", "esp32-c3", "esp32-c6", "home-assistant", "knx", "openknx", "tul", "knx-gateway", "knxnet-ip"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-02T14:39:40Z"
lastCommitAt: "2026-10-26T21:00:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0eddbaca671a2ea1cb882562031cd9fe2e4cd6a72a7724cb822f2a286604dc27/tostmann/ip4knx"
discussionCount: 0
---

# ip4knx - Universal KNXnet/IP Gateway

Custom firmware to turn the busware **TUL** (ESP32-C3) and **TUL32** (ESP32-C6) USB sticks and the bus-powered **TULX32** (ESP32-C6) into a fully featured KNXnet/IP Routing and Tunneling Gateway.

Built upon the excellent [OpenKNX](https://github.com/OpenKNX/knx) stack, highly optimized and patched for the specific hardware requirements of the NCN5130 transceiver and modern ESP32 Arduino Core 3.x frameworks.

## 🌟 Features

*   **Prio 1: Home Assistant Support:** The Home Assistant KNX integration finds the stick with its gateway scan and connects through a KNXnet/IP tunnel — no knxd, no add-on. See [HowToHomeAssistant.md](https://github.com/tostmann/ip4knx/blob/HEAD/HowToHomeAssistant.md).
*   **High Performance Concurrency:** Supports up to **10 concurrent KNXnet/IP Tunneling connections** (e.g., simultaneous use of ETS, Home Assistant, Node-RED, etc.).
*   **Tunnel Source-Address Validation:** Each tunnel gets an assigned individual address, and telegrams a client sends through its tunnel carry it. Source `0.0.0` is filled in as the KNXnet/IP Tunnelling specification requires; any other source is rewritten as well. That second part is a…
