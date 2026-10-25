---
repo: "RenierM26/pyEzvizApi"
name: "pyEzvizApi"
description: "Python API and CLI for EZVIZ cameras and smart devices, with Home Assistant integration support."
readmeQualityOk: true
url: "https://github.com/RenierM26/pyEzvizApi"
homepage: "https://pypi.org/project/pyezvizapi/"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["api-client", "camera", "cli", "ezviz", "home-assistant", "home-automation", "iot", "mqtt", "python", "smart-home"]
stars: 85
forks: 25
openIssues: 16
closedIssues: 9
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2024-12-30T05:04:56Z"
lastCommitAt: "2026-10-25T08:39:56Z"
lastReleaseAt: "2025-02-02T16:56:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 47
maintainers: ["RenierM26", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba2512714cfdb0259abf9e2dc485591b2e1ef80d811214c50762127c5ba5f66e/RenierM26/pyEzvizApi"
---

# Ezviz PyPi

## Overview

Pilot your Ezviz cameras (and light bulbs) with this module. It is used by:

- The official Ezviz integration in Home Assistant
- The EZVIZ (Beta) custom integration for Home Assistant

You can also use it directly from the command line for quick checks and scripting.

## Features

- Inspect device and connection status in table or JSON form
- Control cameras: PTZ, privacy/sleep/audio/IR/state LEDs, alarm settings
- Control light bulbs: toggle, status, brightness and color temperature
- Dump raw pagelist and device infos JSON for exploration/debugging
- Reuse a saved session token (no credentials needed after first login)

## Install

From PyPI:

```bash
pip install pyezvizapi
```

After installation, a `pyezvizapi` command is available on your PATH.

### Dependencies (development/local usage)

If you are running from a clone of this repository or using the helper scripts directly, ensure these packages are available:

```bash
pip install requests paho-mqtt pycryptodome
```

## Quick Start

```bash
# See available commands and options
pyezvizapi --help

# First-time login and save token for reuse
pyezvizapi -u YOUR_EZVIZ_USERNAME -p YOUR_EZVIZ_PASSWORD…
