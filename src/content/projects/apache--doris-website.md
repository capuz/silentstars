---
repo: "apache/doris-website"
name: "doris-website"
description: "Apache Doris Website"
readmeQualityOk: true
url: "https://github.com/apache/doris-website"
homepage: "https://doris.apache.org/"
language: "MDX"
languages: ["MDX"]
languagePcts: [75]
topics: ["doris", "analytics", "apache", "big-data", "data-warehousing", "database", "datalake", "dbms", "distributed-system", "hadoop"]
stars: 136
forks: 489
openIssues: 105
closedIssues: 206
watchers: 34
contributors: 314
recentReleases: 0
createdAt: "2018-09-21T15:24:57Z"
lastCommitAt: "2026-10-31T02:00:03Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 50
maintainers: ["morningman", "dependabot[bot]", "ninedata-cloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe80ed9b89294dbe193aa8e630c9eab932d44cb3e6f78318cac772c8a175818/apache/doris-website"
---

# Apache Doris Website

Source code for [doris.apache.org](https://doris.apache.org), built with [Docusaurus 3](https://docusaurus.io/).

## Quick Start

### Prerequisites

- Node.js >= 18
- Yarn

### Local Development

Use `local_dev.sh` to run the site locally. It handles dependency installation, version filtering, and memory settings automatically.

```bash
# Start English dev server (default: only 'current' version, 2 GB memory)
./local_dev.sh

# Start Chinese dev server
./local_dev.sh start-zh

# Start on a custom port
./local_dev.sh start --port 8080

# Build a specific doc version
./local_dev.sh start --versions "4.x"

# Build English docs (production build)
./local_dev.sh build

# Build all locales (en + zh-CN)
./local_dev.sh build-all

# Clean build artifacts and caches
./local_dev.sh clean
```

Run `./local_dev.sh help` for all available commands and options.

### Production Build

```bash
export NODE_OPTIONS=--max-old-space-size=8192
yarn install
yarn docusaurus build --locale en --locale zh-CN
```

The output is generated in the `build/` directory.

## Directory Structure

```
.
├── docs/                         # Current (dev) version docs (English)
├──…
