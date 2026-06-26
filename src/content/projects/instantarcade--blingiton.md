---
repo: "InstantArcade/BlingItOn"
name: "BlingItOn"
description: "BlingItOn RGB Matrix Workshop"
url: "https://github.com/InstantArcade/BlingItOn"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [61, 39]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-29T04:39:42Z"
lastCommitAt: "2026-06-26T23:42:21Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 28
maintainers: ["InstantArcade", "estefanniegg"]
openGraphImageUrl: "https://opengraph.githubassets.com/b88c3b3b32bca0660c55bccd7f828f5e6c3c0a3a7cdab9517520ee46ce2224b0/InstantArcade/BlingItOn"
---

# Programming Your Own Generative Art Matrix

Welcome to the repository for our intermediate-level maker workshop, originally presented at the **[2025 Hackaday Superconference](https://hackaday.com/2025/09/23/2025-hackaday-superconference-announcing-our-workshops-and-tickets/)**! In this workshop, we explore the fundamentals of **generative algorithms** and apply them to create dynamic, data-driven visual art on a physical display. The repository is split into two separate implementation folders: one using **CircuitPython** and the other using **C++**. ˇ

**[Join our discord!](https://discord.gg/dmBcJM6YX)**

## Hardware / Materials
The case for the LED matrix was designed for this 64x64 matrix:
* **Adafruit 64x64 RGB LED Matrix (2.0mm Pitch):** [Product Page (ID: 5362)](https://www.adafruit.com/product/5362)
  * *Specs:* 130 mm x 130 mm dimensions, high-density RGB LEDs.
* **Matrix Portal S3:** https://www.adafruit.com/product/5778

*Note: Depending on your microcontroller choice (e.g., ESP32, Raspberry Pi Pico, MatrixPortal), make sure you have the appropriate logic level shifters or a dedicated driver shield/wing as recommended by Adafruit.*

## Structure

```text
├── CPP/    #…
