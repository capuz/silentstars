---
repo: "madpsy/ka9q_ubersdr"
name: "ka9q_ubersdr"
description: "WebSDR for ka9q-radio"
url: "https://github.com/madpsy/ka9q_ubersdr"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [33, 21]
stars: 28
forks: 8
openIssues: 9
closedIssues: 82
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-10-08T17:05:06Z"
lastCommitAt: "2026-06-28T10:46:23Z"
lastReleaseAt: "2026-01-01T18:24:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 50
maintainers: ["madpsy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd50b66fc780506cc1eaf24497caac6d083d931656c04b9865e5cc9a0ff9a58/madpsy/ka9q_ubersdr"
---

# ka9q_ubersdr

Web interface for ka9q-radio SDR software.

## Getting Started

**Most users should start here: [https://ubersdr.org/](https://ubersdr.org/)**

The UberSDR website provides comprehensive installation instructions, setup guides, and documentation to help you get started quickly and easily.

---

> **Note:** This is currently designed for RX888 MKII SDR hardware to provide 0-30 MHz (full HF) coverage.

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

> **⚠️ WARNING: End users should NOT follow this method!**
>
> **If you just want to use UberSDR, use the [Quick Start one-line install command](#quick-start) above instead.**
>…
