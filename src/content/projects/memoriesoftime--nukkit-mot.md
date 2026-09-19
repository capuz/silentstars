---
repo: "MemoriesOfTime/Nukkit-MOT"
name: "Nukkit-MOT"
description: "Support for multiple versions of Nukkit Minecraft Bedrock Edition Server Software"
readmeQualityOk: true
url: "https://github.com/MemoriesOfTime/Nukkit-MOT"
homepage: "https://www.nukkit-mot.com"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["bedrock", "bedrock-edition", "minecraft", "minecraft-server", "multiversion", "nukkit", "nukkit-mot", "minecraft-bedrock-server"]
stars: 153
forks: 70
openIssues: 7
closedIssues: 286
watchers: 6
contributors: 47
recentReleases: 0
createdAt: "2023-08-10T13:21:52Z"
lastCommitAt: "2026-09-19T02:43:08Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 49
maintainers: ["w1zardz", "lt-name", "Kanelucky"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/676985676/bb8fb373-acf9-4d1c-ab46-d4ee45771b62"
fundingLinks: ["KO_FI:https://ko-fi.com/memoriesoftime", "CUSTOM:https://boosty.to/memoriesoftime", "CUSTOM:https://afdian.com/a/ltname"]
---

<h3 align="center">Nukkit-MOT</h3>
</p>

------

## Introduction
Nukkit-MOT is a fork of [Nukkit](https://github.com/CloudburstMC/Nukkit) that provides multi-version support, compatibility with NetEase clients, and a well-established plugin ecosystem.

Only interested in newer versions? You might want to try [Lumi](https://github.com/KoshakMineDEV/Lumi) or [PowerNukkitX](https://github.com/PowerNukkitX/PowerNukkitX)

### What's new in Nukkit-MOT?
1. Support for 1.2 – 1.26.50 version (you can set the minimum protocol in the config)
2. Supports most entities with AI
3. Support for the nether world and The Еnd
4. Generation of dungeons and caves
5. Support for vanilla commands
6. Support for NetEase clients

## How to install?
1. Install java 17 or higher
2. Download the .jar file from the links below
3. Write a command to run: `java -jar Nukkit-MOT-SNAPSHOT.jar` (change `Nukkit-MOT-SNAPSHOT.jar` to the name of the file you downloaded)

### Run with Docker
```bash
docker run -d --name nukkit-mot \
  -p 19132:19132/udp \
  -v $(pwd)/data:/data \
  -e JAVA_OPTS="-Xms2G -Xmx2G" \
  --restart unless-stopped \
  memoriesoftime/nukkit-mot:latest
```
- `:latest` and `:<short-sha>` are…
