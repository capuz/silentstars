---
repo: "heyvaldemar/minecraft-server-docker-compose"
name: "minecraft-server-docker-compose"
description: "Minecraft Server Using Docker Compose"
readmeQualityOk: true
url: "https://github.com/heyvaldemar/minecraft-server-docker-compose"
homepage: "https://www.heyvaldemar.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["docker", "docker-compose", "docker-container", "minecraft", "minecraft-datapack", "minecraft-esp", "minecraft-forge", "minecraft-forge-mod", "minecraft-mod", "minecraft-plugin"]
stars: 34
forks: 13
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2021-06-23T15:34:26Z"
lastCommitAt: "2026-11-09T12:00:08Z"
lastReleaseAt: "2026-09-13T12:57:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 72
maintainers: ["heyvaldemar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb0260e69c5403471c57b8fdecbd8e65f253c01243a636aa0dd19f7ea69bd5fe/heyvaldemar/minecraft-server-docker-compose"
fundingLinks: ["GITHUB:https://github.com/heyvaldemar", "PATREON:https://patreon.com/heyvaldemar", "KO_FI:https://ko-fi.com/heyvaldemar", "CUSTOM:paypal.com/paypalme/heyValdemarCOM", "CUSTOM:buymeacoffee.com/heyValdemar", "CUSTOM:ko-fi.com/heyValdemar"]
---

# Minecraft Server (Paper) on Docker Compose

## Contents

- [Why this stack?](#why-this-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Features](#features)
- [Plugins](#plugins)
- [Supply chain trust](#supply-chain-trust)
- [Production checklist](#production-checklist)
- [Backups](#backups)
- [Testing](#testing)
- [About the maintainer](#about-the-maintainer)

This repository deploys a Paper Minecraft server with automatic plugin installation (Modrinth + direct URLs, Geyser/Floodgate for Bedrock crossplay out of the box) and a scheduled world backup container. One `docker compose up` away from a survival server your friends can join.

📙 Full narrative installation guide on the blog: [heyvaldemar.com/install-minecraft-server-using-docker-compose/](https://www.heyvaldemar.com/install-minecraft-server-using-docker-compose/).

## Why this stack?

| Need | This stack | Manual install | Other compose examples |
|------|-----------|----------------|------------------------|
| Ready to deploy in <10 min | ✅ | ❌ java, jars, systemd | Often |
| Plugins auto-installed on start | ✅ Modrinth + URL lists | Manual downloads | Rare |
| Bedrock crossplay…
