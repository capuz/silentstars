---
repo: "habitat-network/habitat"
name: "habitat"
description: "Habitat is building a protocol and platform for organizations to own their data."
readmeQualityOk: true
url: "https://github.com/habitat-network/habitat"
homepage: "https://habitat.network"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [61, 36]
stars: 40
forks: 4
openIssues: 5
closedIssues: 44
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2025-11-17T00:10:18Z"
lastCommitAt: "2026-10-09T18:56:10Z"
lastReleaseAt: "2026-09-22T19:39:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["sashankg", "renovate[bot]", "arushibandi"]
openGraphImageUrl: "https://opengraph.githubassets.com/f03a3c8912459eb45766f8dae0e99c231e321e15ce9e3755f1c6a76d1a2f0444/habitat-network/habitat"
---

# Habitat

⚠️ This repository is under active development and may introduce breaking changes. Please reach out on Bluesky @habitat.network for up-to-date information and any usage questions. ⚠️

## Environment Setup

All external tools are managed by [proto](https://moonrepo.dev/docs/proto) which installs the correct versions declared in [.prototools](https://github.com/habitat-network/habitat/blob/HEAD/.prototools). To get setup, run:

```
bash <(curl -fsSL https://moonrepo.dev/install/proto.sh)
proto install
```

### Moonrepo

We use [moonrepo](https://moonrepo.dev/docs) to manage our monorepo. A crash course is available in [.moon/README.md](https://github.com/habitat-network/habitat/blob/HEAD/.moon/README.md).

## Local Development

`moon :dev` tasks read environment variables from `dev.env` which is gitignored.

### Ngrok

We use ngrok to make pear reachable from the public internet to support flows like PDS OAuth. 
Sign up for ngrok and follow the instructions at https://dashboard.ngrok.com/get-started/setup.
Set `NGROK_DOMAIN` in dev.env to the dev domain ngrok assigns you.

### Running Habitat frontend

The following command will spin up the primary frontend and backend…
