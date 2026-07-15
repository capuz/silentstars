---
repo: "syncsoftco/tickr"
name: "tickr"
description: "Tickr is an open-source project that continuously fetches and updates financial market data, starting with cryptocurrency candle data, using CCXT and GitHub Actions. It supports multiple timeframes and is designed for easy extension to other assets with ticker symbols, making it a versatile tool for developers and analysts."
readmeQualityOk: true
url: "https://github.com/syncsoftco/tickr"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-08-23T01:46:06Z"
lastCommitAt: "2026-07-15T05:54:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 66
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ae871cbb00b6fe97de65c18c5c7dc3e3c577623b4f1a280d7699605beff0019/syncsoftco/tickr"
---

# Tickr

**Tickr** is an open-source project designed to continuously fetch and update financial market data, starting with cryptocurrency candle data, using the powerful CCXT library. By leveraging GitHub Actions, Tickr automatically syncs the latest candle data at various granularities—ranging from 1 minute to 1 month—directly to this repository.

## Features

- **Automated Data Sync:** Tickr fetches and updates the latest market data at regular intervals using GitHub Actions.
- **Flexible Granularity:** Supports multiple timeframes, including 1 minute, 5 minutes, 15 minutes, 1 hour, 6 hours, 12 hours, 1 day, and 1 week.
- **Extensible Design:** Built to easily extend support to other assets with ticker symbols.
- **GitHub Integration:** Uses PyGithub for efficient data retrieval without needing to clone the entire repository.

## Getting Started

### Prerequisites

- Python 3.x
- GitHub account
- GitHub Personal Access Token (for PyGithub)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/tickr.git
   cd tickr
   ```

2. Install the required Python packages:

   ```bash
   pip install .
   ```
### Usage

#### Using the Tickr…
