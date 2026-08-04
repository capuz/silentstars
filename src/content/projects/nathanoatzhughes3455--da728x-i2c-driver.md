---
repo: "nathanoatzhughes3455/da728x-i2c-driver"
name: "da728x-i2c-driver"
description: "Asynchronous no_std Rust driver library for Renesas DA7280, DA7281, and DA7282 haptic controller ICs, using I2C communication for embedded hardware applications."
readmeQualityOk: true
url: "https://github.com/nathanoatzhughes3455/da728x-i2c-driver"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 38
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-01T23:22:22Z"
lastCommitAt: "2026-08-04T06:11:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 13
maintainers: ["nathanoatzhughes3455"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa468937d7e473416e0e0710355282706989d77068f91dff0c4cc7459021796d/nathanoatzhughes3455/da728x-i2c-driver"
---

# da728x - Embedded Haptic Driver Library 2026

> **da728x is an asynchronous, `no_std` Rust driver for Renesas DA7280, DA7281, and DA7282 haptic controller ICs, communicating through I2C on embedded hardware.**

---

  </a>
</p>

> **[Download da728x](https://nathanoatzhughes3455.github.io/da728x-i2c-driver/)**

---

[Download Latest Build](https://nathanoatzhughes3455.github.io/da728x-i2c-driver/)

---

## Overview

The da728x crate brings Renesas DA7280, DA7281, and DA7282 haptic driver support to embedded Rust applications. It is built for `no_std` environments with limited resources and uses I2C to control linear resonant actuator (LRA) systems.

Both asynchronous applications and projects using a blocking programming model are supported. The driver brings together hardware setup, playback commands, resonant-frequency configuration, diagnostics, event reporting, and waveform handling.

---

## Capabilities

- Asynchronous operation with an optional blocking interface
- Compatibility with Renesas DA7280, DA7281, and DA7282 ICs
- I2C transport for embedded hardware
- Configuration checks before the device is operated
- LRA resonant-frequency configuration and control
- Commands…
