---
repo: "ProjectOpenSea/opensea-cli"
name: "opensea-cli"
description: "Query the OpenSea API from the command line or programmatically"
readmeQualityOk: true
url: "https://github.com/ProjectOpenSea/opensea-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 12
forks: 10
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-02-24T21:51:32Z"
lastCommitAt: "2026-11-12T05:43:58Z"
lastReleaseAt: "2026-02-26T00:58:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 65
maintainers: ["ryanio", "Meemaw", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d3dd7d86f9fc5880d86a0d9b3d67fb0f1ec7e540e54ac9e24cdbbe90f02165a/ProjectOpenSea/opensea-cli"
---

# opensea-cli 

Query the OpenSea API from your terminal or from TypeScript. Output defaults to JSON for scripts and agents, with table and TOON formats available.

## Table of contents

- [Install](#install)
- [Authentication](#authentication)
- [Quick start](#quick-start)
- [Commands](#commands)
- [Programmatic SDK](#programmatic-sdk)
- [Output formats](#output-formats)
- [Exit codes](#exit-codes)
- [Development](#development)
- [Docs](#docs)

## Install

Requires Node.js 18 or newer.

```bash
npm install -g @opensea/cli
```

Or run it without installing:

```bash
npx @opensea/cli collections get mfers
```

## Authentication

API commands need a key. The CLI reads it from `--api-key`, then `OPENSEA_API_KEY`, then the key saved in `~/.opensea/api_key`.

```bash
# Get an instant free-tier API key (no signup needed) and save it to ~/.opensea/api_key
opensea auth request-key --save --if-missing   # no-op when a key is already set or saved
opensea collections get mfers

# or set it in the environment, which takes precedence over the saved key
export OPENSEA_API_KEY=your-api-key

# or pass inline
opensea --api-key your-api-key collections get mfers
```

`auth request-key` returns a…
