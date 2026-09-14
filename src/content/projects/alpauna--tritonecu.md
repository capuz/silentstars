---
repo: "alpauna/TritonECU"
name: "TritonECU"
description: "ESP32-S3 engine control unit — fuel injection, ignition timing, wideband O2 (CJ125/LSU 4.9), dashboard, and MQTT telemetry"
readmeQualityOk: true
url: "https://github.com/alpauna/TritonECU"
language: "C++"
languages: ["C++", "HTML"]
languagePcts: [66, 27]
topics: ["arduino", "automotive", "ecu", "engine-management", "esp32", "esp32-s3", "iot", "mqtt", "platformio", "cj125"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T03:28:51Z"
lastCommitAt: "2026-09-14T09:12:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 49
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b19df4ce13a2275745553a5663aaf8ed6a2dd8914c26c3d560835fd4309ff2aa/alpauna/TritonECU"
---

# TritonECU

Standalone engine and transmission controller for **Ford modular V8s of the
EEC-V era** — replacing the factory PCM.

Developed against a **1999 F-150 4WD, 5.4L Triton 2V, 4R70W**, but the
architecture is the modular family rather than one truck: 4.6L and 5.4L 2V
share the crank trigger, the sensor set, the SCP bus and the connector, so
Mustangs and other EEC-V modular applications of the period are the same
problem with a different calibration.

Built on an **STM32F767ZI**. Rewritten from scratch on the `rebuild` branch;
the previous ESP32-S3 firmware is described in
[`docs/legacy-esp32s3-README.md`](https://github.com/alpauna/TritonECU/blob/HEAD/docs/legacy-esp32s3-README.md) and still
lives on `main`.

**What is vehicle-specific and what is not:**

| Portable across EEC-V modulars | Specific to this truck |
|---|---|
| 36-1 VR crank decode, cam sync | firing order, displacement |
| EEC-V 104-pin connector and pinout | 4R70W shift logic (4R100 differs) |
| SCP / J1850 PWM bus | 4x4 transfer case inputs |
| Ignition and injection output stages | VE and spark tables |
| Sensor conditioning and protection | |

---

## Status

| Milestone | | |
|---|---|---|
| **M0**…
