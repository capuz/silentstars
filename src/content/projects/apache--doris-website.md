---
repo: "apache/doris-website"
name: "doris-website"
description: "Apache Doris Website"
readmeQualityOk: true
url: "https://github.com/apache/doris-website"
homepage: "https://doris.apache.org/"
language: "MDX"
languages: ["MDX"]
languagePcts: [74]
topics: ["doris", "analytics", "apache", "big-data", "data-warehousing", "database", "datalake", "dbms", "distributed-system", "hadoop"]
stars: 138
forks: 491
openIssues: 11
closedIssues: 300
watchers: 34
contributors: 317
recentReleases: 0
createdAt: "2018-09-21T15:24:57Z"
lastCommitAt: "2026-11-27T12:53:25Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 53
maintainers: ["morningman", "Gabriel39", "eldenmoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/35c9f03113e5899357c4d6d51cfd042cbd04c62159e36054db4e1f531f03536d/apache/doris-website"
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
