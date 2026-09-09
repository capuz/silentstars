---
repo: "madpsy/ka9q_ubersdr"
name: "ka9q_ubersdr"
description: "WebSDR for ka9q-radio"
readmeQualityOk: true
url: "https://github.com/madpsy/ka9q_ubersdr"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [45, 22]
stars: 33
forks: 11
openIssues: 1
closedIssues: 113
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2025-10-08T17:05:06Z"
lastCommitAt: "2026-09-09T08:16:33Z"
lastReleaseAt: "2026-01-01T18:24:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 56
maintainers: ["madpsy"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b9f7f9e47408b42f368c71494dca6081320cb461d80a21bbedd531ee84cee1c/madpsy/ka9q_ubersdr"
---

# ka9q_ubersdr

Web interface for ka9q-radio SDR software.

## Getting Started

**Most users should start here: [https://ubersdr.org/](https://ubersdr.org/)**

The UberSDR website provides comprehensive installation instructions, setup guides, and documentation to help you get started quickly and easily.

---

> **Note:** This is currently designed for RX888 MKII SDR hardware. Coverage follows the radiod front end sample rate: 0-30 MHz (full HF) at the default 64.8 Msps, or 0-60 MHz — 6 m included — at 129.6 Msps. See `RECEIVER_SPAN.md`.

## Quick Start

> **Note:** This installation script is designed for Debian/Ubuntu-based systems only.

> **⚠️ Important:**
> - UberSDR only works on x86_64 machines and is not compatible with ARM devices like the Raspberry Pi
> - Ensure your RX888 MKII is plugged in before running the installation

Run this one-liner to install and start everything automatically:

```bash
curl -fsSL https://ubersdr.org/install.sh | bash
```

This will install Docker, fetch prebuilt images, and perform automated installation tasks to get you up and running quickly.

## Manual Installation for Development ONLY

> **⚠️ WARNING: End users should NOT follow this…
