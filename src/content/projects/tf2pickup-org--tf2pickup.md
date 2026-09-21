---
repo: "tf2pickup-org/tf2pickup"
name: "tf2pickup"
description: "Team Fortress 2 pick-up games for everyone"
readmeQualityOk: true
url: "https://github.com/tf2pickup-org/tf2pickup"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 5
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2024-06-27T15:00:20Z"
lastCommitAt: "2026-09-21T09:13:23Z"
lastReleaseAt: "2025-03-29T10:46:37Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 87
maintainers: ["renovate[bot]", "garrappachc", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/213a2fba44f2aa25bc810bb0e4d54117eeba7747e75023c85f4377065efde4a4/tf2pickup-org/tf2pickup"
---

<h1 align="center">
  </a>
</h1>

<h3 align="center">tf2pickup.org</h3>

  </a>

  </a>
</p>

</p>

<br />

tf2pickup.org was created with a simple objective in mind. Make it as easy and accessible for twelve players to play a 6v6 pick-up game in Team Fortress 2 as possible.

## Local deployment

### Setup

- Clone the repository or download a zipped release of your choice
- Open the terminal inside the repository folder
- Install the dependencies

  ```bash
  $ pnpm install
  ```

- Copy and rename `sample.env` to `.env` and adjust your environment values, mainly:
  - `STEAM_API_KEY` - your [Steam API key](https://steamcommunity.com/dev/apikey), the "Domain Name" can be set to anything you like,
  - `LOGS_TF_API_KEY` - your [logs.tf API key](https://logs.tf/uploader),
  - `SUPER_USER` - your SteamID64,
  - `LOG_RELAY_ADDRESS` - your IP address in the local network.

### Deployment

- Start the required services

  ```bash
  $ docker-compose up -d
  ```

- Finally, run the server in development mode

  ```bash
  $ pnpm dev
  ```

  By default, the server is listening on port 3000 .

## Docker images

```bash
$ docker pull ghcr.io/tf2pickup-org/tf2pickup:latest
```
