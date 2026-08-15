---
repo: "W3LFARe/docker-allthemods10"
name: "docker-allthemods10"
description: "A Modded Java Minecraft server container for Unraid that runs All the Mods 10"
readmeQualityOk: true
url: "https://github.com/W3LFARe/docker-allthemods10"
language: "Shell"
languages: ["Shell"]
languagePcts: [92]
stars: 11
forks: 49
openIssues: 2
closedIssues: 7
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2024-11-24T19:18:18Z"
lastCommitAt: "2026-08-15T04:05:46Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 82
undervaluedScore: 58
maintainers: ["r14f", "Gadoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0222b8d5e008bd30b359917012c629c92665218118fff93e41648a525d89e9c2/W3LFARe/docker-allthemods10"
---

# [All the Mods 10-8.0](https://www.curseforge.com/minecraft/modpacks/all-the-mods-10) on Curseforge

- [Description](#description)
- [Requirements](#requirements)
- [Options](#options)
  * [Adding Minecraft Operators](#adding-minecraft-operators)
- [Troubleshooting](#troubleshooting)
  * [Accept the EULA](#accept-the-eula)
  * [Permissions of Files](#permissions-of-files)
  * [Resetting](#resetting)
- [Source](#source-original-atm9-repo)

## Description

This container is built to run on an [Unraid](https://unraid.net) server, outside of that your mileage will vary.

The docker on the first run will download the same version as tagged `All the Mods 10-8.0` and install it.  This can take a while as the Forge installer can take a bit to complete.  You can watch the logs and it will eventually finish.

After the first run, it will simply start the server.

Note: There are no modded Minecraft files shipped in the container, they are all downloaded at runtime.

## Requirements

* /data mounted to a persistent disk
* Port 25565/tcp mapped
* environment variable EULA set to "true"

As the end user, you are responsible for accepting the EULA from Mojang to run their server, by default in…
