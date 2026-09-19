---
repo: "tschm/cs"
name: "cs"
description: "The 10-line CTA: a trend-following strategy in ten lines of code, and four refinements measured in Sharpe ratio, kurtosis and trading costs"
readmeQualityOk: true
url: "https://github.com/tschm/cs"
homepage: "https://tschm.github.io/cs"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["convex-optimization", "cta", "quantitative-finance", "sharpe-ratio", "trend-following", "futures", "marimo", "portfolio-optimization", "trading-costs"]
stars: 46
forks: 23
openIssues: 1
closedIssues: 61
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2019-04-07T10:20:26Z"
lastCommitAt: "2026-09-19T02:46:32Z"
lastReleaseAt: "2026-06-08T06:15:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 62
maintainers: ["tschm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d6a2253c32a598eeb261c5866b68673efb74cf24f47e34d000647dc4917789d/tschm/cs"
---

# 📈 [The 10-line CTA](http://tschm.github.io/cs)

## 🚀 About

Challenged by a young CEO, I wrote a terse CTA (Commodity Trading Advisor) investment
strategy in just 10 lines of code. This project discusses the somewhat quirky background
of this code fragment and explores how Convex Programming
opens the door to deeper insights into the strategy.

## ✨ Features

- 💰 Implement a hedge fund strategy in just 10 lines of code
- 📊 Boost the Sharpe Ratio through optimization techniques
- 📉 Control both Kurtosis and trading costs

## 🛠️ Getting Started

### 📋 Prerequisites

- Python 3.11+
- A POSIX shell. macOS and Linux have one by default.

> **🪟 Windows users:** The `make` targets are written for a POSIX shell and
> rely on tools like `mkdir -p`, `printf`, `curl`, and `[ … ]`. They will **not**
> run under `cmd.exe` or PowerShell — you'll see errors such as
> `process_begin: CreateProcess(NULL, # Ensure the … folder exists, …) failed.`
> Run the commands below from **WSL** (recommended) or **Git Bash**, both of
> which provide a POSIX shell.

### 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/tschm/cs.git
cd cs

# Install dependencies
make install…
