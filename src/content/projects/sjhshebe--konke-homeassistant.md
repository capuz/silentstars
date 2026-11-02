---
repo: "sjhshebe/konke-homeassistant"
name: "konke-homeassistant"
description: "Konke Smart custom integration for Home Assistant"
originalDescription: "Konke Smart custom integration for Home Assistant"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/sjhshebe/konke-homeassistant"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["hacs", "home-assistant", "homeassistant", "integration", "konke", "smart-home"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-01T10:03:41Z"
lastCommitAt: "2026-11-02T17:53:11Z"
lastReleaseAt: "2026-11-02T17:58:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 8
maintainers: ["sjhshebe"]
openGraphImageUrl: "https://opengraph.githubassets.com/f83d9dc47009793f1ee8a4a08718e189e05199cb5234493596d44186cbf73497/sjhshebe/konke-homeassistant"
---

# Konke Smart for Home Assistant

This project is a Konke Smart integration developed for the latest version of Home Assistant. Its goal is to bridge devices already saved in the Konke Smart app to Home Assistant, so they can work with devices from other brands and enable some automations.

## Installation

### Method 1: One-click installation

Run the following in the Home Assistant Terminal / SSH:

```bash
curl --retry 3 --retry-all-errors --connect-timeout 15 --max-time 120 -fsSL --http1.1 https://raw.githubusercontent.com/sjhshebe/konke-homeassistant/main/install.sh -o /tmp/konke-install.sh && sh /tmp/konke-install.sh
```

The script downloads `konke.zip` from the latest GitHub Release and installs it to `custom_components/konke` in Home Assistant. After installation, Home Assistant Core restarts automatically.

To install a specific version, set `KONKE_VERSION`:

```bash
curl --retry 3 --retry-all-errors --connect-timeout 15 --max-time 120 -fsSL --http1.1 https://raw.githubusercontent.com/sjhshebe/konke-homeassistant/main/install.sh -o /tmp/konke-install.sh && KONKE_VERSION=v0.8.1 sh /tmp/konke-install.sh
```

If your environment does not have `curl`, you can use:

```bash…
