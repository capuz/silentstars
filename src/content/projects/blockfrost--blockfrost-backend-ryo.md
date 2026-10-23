---
repo: "blockfrost/blockfrost-backend-ryo"
name: "blockfrost-backend-ryo"
description: "Blockfrost API backend. You can now Run-Your-Own."
readmeQualityOk: true
url: "https://github.com/blockfrost/blockfrost-backend-ryo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["api", "blockfrost", "cardano"]
stars: 84
forks: 26
openIssues: 12
closedIssues: 62
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2022-08-26T15:20:42Z"
lastCommitAt: "2026-10-23T08:46:58Z"
lastReleaseAt: "2023-03-20T13:43:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 49
maintainers: ["slowbackspace", "cleverca22", "hlolli"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3295a6711c6a13cbed468320fb922743496c6a9796b1519aee3511df44801eb/blockfrost/blockfrost-backend-ryo"
discussionCount: 2
---

# Blockfrost.io backend service

## Getting started

The backend is Node.js app written in Typescript using Fastify. To run it you need Node.js version 16 and higher (LTS is highly recommended). Blockchain data are queried from [cardano-db-sync](https://github.com/input-output-hk/cardano-db-sync). Follow their documentation to learn more about running your own instance.

## Running your own

We made it simple to run your own version of the Blockfrost backend.

### System requirements

The system requirements for the basic Blockfrost backend stack (which means `blockfrost-backend`, `cardano-node`, `cardano-db-sync` and `postgresql` on the same machine) are:

- 64 GB of RAM or more
- 8 CPU cores or more
- 250 GB of disk space or more
- SSD disk with at least 80k IOPS (measured as chunk size)

### Configuration

There are several configuration files in `config` directory. Config file is picked based on a value in an environment variable `NODE_ENV` (value set in `NODE_ENV` must match the name of the config file). This environment variable is set automatically while running the backend via prepared `yarn` scripts.

If you are using an authenticated db connection that requires a…
