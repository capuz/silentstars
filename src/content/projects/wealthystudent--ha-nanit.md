---
repo: "wealthystudent/ha-nanit"
name: "ha-nanit"
description: "Nanit baby monitor integration for Home Assistant (HACS)"
readmeQualityOk: true
url: "https://github.com/wealthystudent/ha-nanit"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 56
forks: 12
openIssues: 4
closedIssues: 30
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2026-02-20T18:06:21Z"
lastCommitAt: "2026-10-08T10:52:40Z"
lastReleaseAt: "2026-02-22T05:30:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 40
maintainers: ["wealthystudent", "com6056", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9231213a37811ef29ad0c5d0b0e3d640d00620930af7f68404db288ee9346850/wealthystudent/ha-nanit"
---

# Nanit — Home Assistant Integration

---

> **Monitor your baby — right from Home Assistant.**
>
> Live streams, nursery sensors, night light control, and automations — all from your HA dashboard. Works with all Nanit cameras and the Sound & Light Machine.

## Requirements

- Home Assistant **2025.12** or newer
- A Nanit account with email/password
- [HACS](https://hacs.xyz/) (recommended)

## Installation

### HACS (recommended)

1. Open **HACS → Integrations → ⋮ → Custom repositories**.
2. Add `https://github.com/wealthystudent/ha-nanit` as **Integration**.
3. Install **Nanit**, then restart Home Assistant.

### Manual

1. Download `nanit.zip` from the [latest release](https://github.com/wealthystudent/ha-nanit/releases/latest).
2. Extract it into `config/custom_components/nanit/` in your Home Assistant configuration directory.
3. Restart Home Assistant.

Use the release zip, not a copy of the repository: the source on `main` carries a placeholder version that release builds replace.

## Setup

1. Go to **Settings → Devices & Services → Add Integration → Nanit**.
2. Enter your Nanit email and password.
3. Enter the MFA code sent to your device (use the latest code — they expire…
