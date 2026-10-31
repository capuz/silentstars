---
repo: "chsami/Microbot"
name: "Microbot"
description: "Modified Version of the Open source Runelite client"
readmeQualityOk: true
url: "https://github.com/chsami/Microbot"
homepage: "https://themicrobot.com"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 212
forks: 579
openIssues: 2
closedIssues: 85
watchers: 11
contributors: 434
recentReleases: 0
createdAt: "2023-08-13T07:24:30Z"
lastCommitAt: "2026-10-31T09:54:37Z"
lastReleaseAt: "2024-06-21T21:23:06Z"
status: "thriving"
tags: ["solo_builder", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 50
maintainers: ["chsami", "Fourtifys", "Harin23"]
openGraphImageUrl: "https://opengraph.githubassets.com/cdff2dd539cc0feb620e3940c8f1a3421bed7c2940fb60097bce06b4c25e4b1c/chsami/Microbot"
fundingLinks: ["GITHUB:https://github.com/chsami", "CUSTOM:https://paypal.me/MicrobotBE?country.x=BE"]
discussionCount: 15
---

# Microbot
Microbot is a RuneLite fork with an always-on Microbot plugin for learning, building, and running automation scripts.

This README is intentionally short. Durable details live in the docs below so high-level context does not rot when implementation details move.

## Start Here
- Install or run a release: `docs/installation.md`
- Set up a development environment: `docs/development.md`
- Understand the runtime: `docs/ARCHITECTURE.md`
- Build scripts safely: `runelite-client/src/main/java/net/runelite/client/plugins/microbot/AGENTS.md`
- Use entity caches/queryables: `runelite-client/src/main/java/net/runelite/client/plugins/microbot/api/QUERYABLE_API.md`
- Drive a running client: `docs/MICROBOT_CLI.md`

## Common Commands
- Compile client: `./gradlew :client:compileJava`
- Run unit tests: `./gradlew :client:runUnitTests`
- Build all projects: `./gradlew buildAll`
- Build shaded jar: `./gradlew :client:assemble`

## Code Map
- Microbot plugin and scripts: `runelite-client/src/main/java/net/runelite/client/plugins/microbot`
- Reusable helpers: `runelite-client/src/main/java/net/runelite/client/plugins/microbot/util`
- Queryable caches:…
