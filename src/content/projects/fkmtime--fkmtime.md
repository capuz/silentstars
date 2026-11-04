---
repo: "FKMTime/FKMTime"
name: "FKMTime"
description: "A system for running speedcubing competitions without scorecards!"
readmeQualityOk: true
url: "https://github.com/FKMTime/FKMTime"
homepage: "https://fkmtime.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 11
forks: 1
openIssues: 10
closedIssues: 107
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-01-10T15:45:13Z"
lastCommitAt: "2026-11-04T13:05:16Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 75
maintainers: ["maxidragon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/159869e26646c166b345ab4b21f7019cc61cbd57f89d770251404b9ed51ec38b/FKMTime/FKMTime"
---

# FKMTime

## What is FKMTime?

FKMTime is a system for running speedcubing competitions without scorecards! 

Documentation is available [here](https://fkmtime.github.io/docs).

## Important information

**FKMTime is currently in the testing phase. For now, in accordance with WCA regulations, scorecards are still used in parallel with the system.**

## Running bundled (with nginx reverse proxy etc - like prod) version
This version can be accessed remotely if `TOKEN` env var is passed to docker-compose (modify docker-compose-bundled.yml file to set your own token)
To get token use `https://panel.fkmtime.com`

```bash
docker compose -f ./docker-compose-bundled.yml pull && docker compose -f ./docker-compose-bundled.yml up
```

## Bluetooth auto setup on macOS (development)

The micro connector uses Linux D-Bus for Bluetooth, which containers on macOS
cannot reach. Run [docker-adapter](https://github.com/filipton/docker-adapter)
natively instead; the connector finds it at `host.docker.internal:3127`.

```bash
./scripts/docker-adapter.sh
```

The script downloads the adapter on first run. Keep it running, and allow
Bluetooth for your terminal in **System Settings → Privacy & Security…
