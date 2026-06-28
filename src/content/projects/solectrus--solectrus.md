---
repo: "solectrus/solectrus"
name: "solectrus"
description: "Self-hosted photovoltaic dashboard for monitoring solar production, consumption, battery usage, grid exchange, and financial performance."
url: "https://github.com/solectrus/solectrus"
homepage: "https://solectrus.de"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [77]
topics: ["photovoltaic", "photovoltaics", "photovoltaics-dashboard", "influxdb", "monitoring", "homelab", "self-hosted"]
stars: 157
forks: 20
openIssues: 51
closedIssues: 476
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2020-12-19T18:28:37Z"
lastCommitAt: "2026-06-28T01:36:51Z"
lastReleaseAt: "2021-11-27T11:21:11Z"
status: "thriving"
tags: ["legacy_hero", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 45
maintainers: ["ledermann", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/322912392/c3c2ab9f-c4e4-4f2e-a2e4-07a6bf77871f"
fundingLinks: ["GITHUB:https://github.com/solectrus", "KO_FI:https://ko-fi.com/ledermann"]
discussionCount: 482
---

# SOLECTRUS

SOLECTRUS is your smart solar dashboard, giving you real‑time insights into energy generation and consumption. It automatically calculates costs and savings, so you can maximize the performance of your PV system.

## Live Demo

Try it out at https://demo.solectrus.de

## Installation

SOLECTRUS is a self‑hosted solution — just bring your own server (a Raspberry Pi works great, but any Linux box will do). To get started, visit https://configurator.solectrus.de/ and generate your Docker configuration interactively.

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
brew services start postgresql@18
```

3. Setup the application to install gems and NPM packages and create the database:

```bash
bin/setup
```

4. Start the application locally:

```bash
bin/dev
```

This starts the app and opens…
