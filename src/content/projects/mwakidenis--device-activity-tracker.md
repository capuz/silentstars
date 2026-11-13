---
repo: "mwakidenis/device-activity-tracker"
name: "device-activity-tracker"
description: "A phone number can reveal whether a device is active, in standby or offline (and more). This PoC demonstrates how delivery receipts + RTT timing leak sensitive device-activity patterns. (WhatsApp / Signal)"
readmeQualityOk: true
url: "https://github.com/mwakidenis/device-activity-tracker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-12-30T17:03:10Z"
lastCommitAt: "2026-11-13T05:38:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["mwakidenis"]
openGraphImageUrl: "https://opengraph.githubassets.com/f78d4726eb6ccb0fd817248e07ad24f27ceb54ffddec2051a4134be5a109a046/mwakidenis/device-activity-tracker"
---

> ⚠️ **DISCLAIMER**: Proof-of-concept for educational and security research purposes only. Demonstrates privacy vulnerabilities in WhatsApp and Signal.

## Overview

This project implements the research from the paper **"Careless Whisper: Exploiting Silent Delivery Receipts to Monitor Users on Mobile Instant Messengers"** by Gabriel K. Gegenhuber, Maximilian Günther, Markus Maier, Aljosha Judmayer, Florian Holzbauer, Philipp É. Frenzel, and Johanna Ullrich (University of Vienna & SBA Research).

**What it does:** By measuring Round-Trip Time (RTT) of WhatsApp message delivery receipts, this tool can detect:
- When a user is actively using their device (low RTT)
- When the device is in standby/idle mode (higher RTT)
- Potential location changes (mobile data vs. WiFi)
- Activity patterns over time

**Security implications:** This demonstrates a significant privacy vulnerability in messaging apps that can be exploited for surveillance.

## Example

The web interface shows real-time RTT measurements, device state detection, and activity patterns.

## Installation

```bash
# Clone repository
git clone https://github.com/gommzystudio/device-activity-tracker.git
cd…
