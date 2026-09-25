---
repo: "solectrus/solectrus"
name: "solectrus"
description: "Self-hosted photovoltaic dashboard for monitoring solar production, consumption, battery usage, grid exchange, and financial performance."
readmeQualityOk: true
url: "https://github.com/solectrus/solectrus"
homepage: "https://solectrus.de"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [80]
topics: ["photovoltaic", "photovoltaics", "photovoltaics-dashboard", "influxdb", "monitoring", "homelab", "self-hosted"]
stars: 165
forks: 20
openIssues: 50
closedIssues: 504
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2020-12-19T18:28:37Z"
lastCommitAt: "2026-09-25T08:58:03Z"
lastReleaseAt: "2021-11-27T11:21:11Z"
status: "thriving"
tags: ["legacy_hero", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 45
maintainers: ["ledermann", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/322912392/c3c2ab9f-c4e4-4f2e-a2e4-07a6bf77871f"
fundingLinks: ["GITHUB:https://github.com/solectrus", "KO_FI:https://ko-fi.com/ledermann"]
discussionCount: 525
---

# SOLECTRUS

SOLECTRUS is your smart solar dashboard, giving you real‑time insights into energy generation and consumption. It automatically calculates costs and savings, so you can maximize the performance of your PV system.

## Live Demo

Try it out at https://demo.solectrus.de

## Installation

SOLECTRUS is a self‑hosted solution — just bring your own server (a Raspberry Pi works great, but any Linux box will do).

The recommended way to install SOLECTRUS is [HELIOS](https://solectrus.de/install/), the companion app that manages your installation. HELIOS sets up the Docker containers, keeps the configuration in one place, and installs updates with one click. It also creates a support package with anonymized logs and configuration if you need help.

## Development

To contribute, set up a local development environment (this guide assumes macOS with Homebrew):

1. Clone the repository:

```bash
git clone git@github.com:solectrus/solectrus.git
cd solectrus
```

2. Install PostgreSQL, Redis, and Caddy (if not already present). On a Mac with HomeBrew, run this to install from the `Brewfile`:

```bash
brew bundle
```

Ensure that PostgreSQL is running:

```bash
brew services start…
