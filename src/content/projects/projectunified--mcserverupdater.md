---
repo: "ProjectUnified/MCServerUpdater"
name: "MCServerUpdater"
description: "A program to update Minecraft server jar"
readmeQualityOk: true
url: "https://github.com/ProjectUnified/MCServerUpdater"
homepage: "https://projectunified.github.io/MCServerUpdater/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["spigot", "spigot-api", "minecraft", "minecraft-server", "bukkit", "paper", "papermc", "airplane", "purpur", "bungeecord"]
stars: 12
forks: 4
openIssues: 1
closedIssues: 7
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-11-29T14:37:33Z"
lastCommitAt: "2026-10-31T15:58:11Z"
lastReleaseAt: "2021-12-12T14:21:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 59
maintainers: ["dependabot[bot]", "HSGamer", "sonu7089"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea56ac90b7f89e241f67f9a777ac42f2bd842640c29bcf2f23b1c64391fb0189/ProjectUnified/MCServerUpdater"
fundingLinks: ["GITHUB:https://github.com/HSGamer"]
---

# MCServerUpdater

> This is a simple program that will check for updates to Minecraft server jar and download them if they are available.

## Download

Download the latest version of MCServerUpdater
from [here](https://github.com/ProjectUnified/MCServerUpdater/releases)

## Arguments

```
Option                           Description
------                           -----------
--help                           Get the list of arguments
--projects                       Get the list of projects
--output <String>                The output file path (default: server.jar)
--project <String>               The project to download (default: paper)
--version <String>               The project version (default: default)
```

## Examples

* List all available projects
    * `java -jar MCServerUpdater.jar --projects`
* Download the latest build of Paper
    * `java -jar MCServerUpdater.jar`
    * `java -jar MCServerUpdater.jar --project paper`
* Download the latest build of Paper and save it to the file `server.jar`
    * `java -jar MCServerUpdater.jar --output server.jar`
    * `java -jar MCServerUpdater.jar --project paper --output server.jar`
* Download the latest build of Paper 1.17.1…
