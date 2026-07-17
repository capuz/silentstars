---
repo: "OctavioCriollo/nt-fan-controller"
name: "nt-fan-controller"
description: "ESP32 firmware for the NT-IoT Board v3.0 — temperature-driven PWM fan controller for telecom power cabinets. Mobile-first web dashboard, MQTT/TLS JSON telemetry (EMQX-tested), browser OTA, NVS runtime config."
readmeQualityOk: true
url: "https://github.com/OctavioCriollo/nt-fan-controller"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["esp32", "iot", "json", "mqtt", "emqx", "fan-controller", "freertos", "ota", "platformio", "pwm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-04-03T16:57:18Z"
lastCommitAt: "2026-07-17T05:59:05Z"
lastReleaseAt: "2026-07-04T00:25:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 73
maintainers: ["OctavioCriollo"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d450da0c8f8e84c596ea44d4b54b33c9f0a4c678d4c090897aac4854dbb1eb2/OctavioCriollo/nt-fan-controller"
fundingLinks: ["KO_FI:https://ko-fi.com/octaviocriollo"]
discussionCount: 0
---

# NT FAN Controller

Production ESP32 firmware for the **NT-IoT Board v3.0** (Network Telemetrix) — a
temperature-driven PWM fan controller for telecom power cabinets (Power ELTEK
rectifiers). It replaces always-on cooling with a demand-driven curve, publishes
JSON telemetry over **MQTT/TLS**, and ships a **mobile-first web dashboard** for
live monitoring, tuning and OTA updates — every operating parameter is
runtime-configurable from the browser, no recompile in the field.

</p>

## Highlights

- **Demand-driven cooling** — fan duty follows a configurable power-law curve
  `PWM = n + (1−n)·xᵖ` between the Low/High temperature thresholds
  (`p = 1` linear, `p = 2` parabolic; floor `n` for minimum airflow). Edited by
  **dragging two points on a live graph** in the dashboard.
- **Configurable alarm hysteresis** — the high-temperature alarm is a Schmitt
  trigger with a draggable reset band (clamped to 20 % of the range), so the
  alarm relay never chatters around the threshold.
- **Real fan feedback** — tachometer RPM per fan (IRAM ISR pulse counting with
  critical sections), with door-gated failure alarms and selectable general
  alarm logic (`FAN1 OR/AND FAN2`, single-fan).
-…
