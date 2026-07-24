---
repo: "sigildeveloper/satura-bridge"
name: "satura-bridge"
description: "BT PAN - WiFi bridge for ESP32"
readmeQualityOk: true
url: "https://github.com/sigildeveloper/satura-bridge"
language: "CMake"
languages: ["CMake", "C"]
languagePcts: [47, 36]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-26T08:23:05Z"
lastCommitAt: "2026-07-24T06:10:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 18
maintainers: ["sigildeveloper"]
openGraphImageUrl: "https://opengraph.githubassets.com/d543f668b8eb4ea5557c2c7842d551a2b19ade23162359985fe7a9d7f9881594/sigildeveloper/satura-bridge"
---

# Satura Bridge

**«Bringing old phones back online.»**

Open-source Bluetooth Classic PAN to Wi-Fi Internet gateway for legacy mobile phones and Symbian devices.

---

## What is Satura Bridge?

Satura Bridge is a small ESP32-based Bluetooth Classic PAN to Wi-Fi Internet gateway designed to bring legacy mobile phones back online.

Many older phones, including Nokia Symbian devices, Sony Ericsson phones, and other legacy mobile devices, have Bluetooth but no Wi-Fi. As 2G and 3G networks are being shut down in many parts of the world, these devices are increasingly losing access to mobile Internet.

Satura Bridge provides an alternative: the phone connects to the ESP32 over Bluetooth PAN, while the ESP32 uses a modern Wi-Fi network as its upstream Internet connection.

The phone sees a regular Bluetooth PAN network connection. No drivers or special software are required on the phone side, provided that the device supports the required Bluetooth networking profile.

```

┌──────────────────┐
│   Legacy phone   │
│  Nokia / Symbian │
└────────┬─────────┘
│
│ Bluetooth Classic / PAN
▼
┌──────────────────┐
│  Satura Bridge   │
│      ESP32       │
└────────┬─────────┘
│
│ Wi-Fi
▼…
