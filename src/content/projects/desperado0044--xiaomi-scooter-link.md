---
repo: "desperado0044/xiaomi-scooter-link"
name: "xiaomi-scooter-link"
description: "Scooter Link: Android app for Xiaomi Electric Scooters (tested: 5 Pro / 5 Max) over Bluetooth LE - dashboard, ride modes, lock, battery & ride data, documents, no Mi Home app required | Android-App für Xiaomi Electric Scooter (getestet: 5 Pro / 5 Max) per Bluetooth - ohne Mi Home"
readmeQualityOk: true
url: "https://github.com/desperado0044/xiaomi-scooter-link"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "ble", "bluetooth-low-energy", "electric-scooter", "jetpack-compose", "kotlin", "mi-home", "reverse-engineering", "xiaomi", "e-scooter"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-20T19:30:11Z"
lastCommitAt: "2026-10-25T08:39:29Z"
lastReleaseAt: "2026-09-20T19:31:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 42
maintainers: ["desperado0044"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1378706957/d3133002-c98c-4298-a47a-5b22fef15060"
---

# Scooter Link — Android BLE client for Xiaomi Electric Scooters (Mi Home alternative)

**English | [Deutsch](https://github.com/desperado0044/xiaomi-scooter-link/blob/HEAD/README.de.md)**

**An alternative Android app for the Xiaomi Electric Scooter 5 Pro / 5 Max (the standard 5 should work as well) — dashboard, ride modes, lock, battery and ride data over Bluetooth Low Energy, no Mi Home app needed.**

Looking for the **Elite, 5 Plus or the 6 / 6 Lite / 6 Pro / 6 Max / 6 Ultra**? They have **experimental, read-only** support
only (values are shown, nothing can be changed) — see [Supported models](#supported-models) for the status and how you can help.

---

A standalone Android client with public source code (non-commercial license) for **Xiaomi Electric Scooter** 5-series models
(tested: 5 Pro and 5 Max; the standard 5 should work too) that talks to the vehicle directly over Bluetooth Low Energy —
without the official Mi Home app. The complete BLE auth protocol (ECDH P-256 → HKDF-SHA256 →
AES-CCM) was reverse-engineered from scratch and is verified byte-for-byte against both real
devices.

This is an independent, non-commercial project with no affiliation with Xiaomi.

## ⚠️…
