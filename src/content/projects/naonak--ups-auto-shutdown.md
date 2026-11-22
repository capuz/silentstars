---
repo: "naonak/ups-auto-shutdown"
name: "ups-auto-shutdown"
description: "This Docker image is designed to monitor the status of an Uninterruptible Power Supply (UPS) using the Network UPS Tools (NUT) and automatically shutdown the host machine in case of power failure or if the battery falls below certain thresholds. Perfect for Raspberry Pi."
readmeQualityOk: true
url: "https://github.com/naonak/ups-auto-shutdown"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-11-10T08:51:49Z"
lastCommitAt: "2026-11-22T11:50:56Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 48
maintainers: ["naonak"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7d2954b96ed046607ba8a4598266746a3f350a651d968cf316c9df7494f7abe/naonak/ups-auto-shutdown"
---

# UPS Auto Shutdown

## Description

**UPS Auto Shutdown** is a Python script that uses the **PyNUTClient** library to monitor the status of an uninterruptible power supply (UPS) via a NUT (Network UPS Tools) server. It triggers actions like system shutdown or sending notifications when the UPS battery is low, the load is too high, or the main power is lost.

The script supports alerts via email and [Apprise](https://github.com/caronc/apprise) for sending notifications to multiple platforms.

## Features

- Monitors UPS battery and load status.
- Triggers a safe shutdown when the battery is low or the runtime is short.
- Sends alert notifications via email and Apprise.
- Supports **dry-run** mode to test without executing an actual shutdown.
- Customizable via environment variables or command-line arguments. **Command-line arguments take priority over environment variables**.

## Requirements

- Python 3.x
- Running NUT server accessible from the script
- Python libraries:
  - `PyNUTClient`
  - `apprise`

## Installation

1. Clone the repository:

```bash
git clone https://github.com/naonak/ups-auto-shutdown.git
cd ups-auto-shutdown
```
