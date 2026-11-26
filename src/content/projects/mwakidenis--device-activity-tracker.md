---
repo: "mwakidenis/device-activity-tracker"
name: "device-activity-tracker"
description: "A phone number can reveal whether a device is active, in standby or offline (and more). This PoC demonstrates how delivery receipts + RTT timing leak sensitive device-activity patterns. (WhatsApp / Signal)"
readmeQualityOk: true
url: "https://github.com/mwakidenis/device-activity-tracker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 16
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2025-12-30T17:03:10Z"
lastCommitAt: "2026-11-26T12:56:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: ["mwakidenis"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e2525f40695e66e1e2960935375e5679d20f3e12b3b5e733570b8b94d39daed/mwakidenis/device-activity-tracker"
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
