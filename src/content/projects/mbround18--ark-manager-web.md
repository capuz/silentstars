---
repo: "mbround18/ark-manager-web"
name: "ark-manager-web"
description: "This is a web UI utility for Ark Manager which is provided by ark-server-tools. Please review the readme below and check the issues tab before installing!!! If you need support please create an issue or tweet @MBRound18"
url: "https://github.com/mbround18/ark-manager-web"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [46, 40]
topics: ["arksurvivalevolved", "ark-server-tools", "steam", "steamcmd", "ruby"]
stars: 21
forks: 4
openIssues: 2
closedIssues: 17
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2017-03-05T07:22:24Z"
lastCommitAt: "2026-06-27T00:48:17Z"
lastReleaseAt: "2022-02-14T07:30:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 64
maintainers: ["kodiakhq[bot]", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e92c6edbca899e53bca07f07f1ff689b289a28e696163f5b19ceaa2f0a53cbf/mbround18/ark-manager-web"
fundingLinks: ["GITHUB:https://github.com/mbround18"]
---

# Ark Manager Web

---

## Disclaimer

> This project has gone through a major rewrite and the project you knew it as is no more! Why?
It was riddled with out of date & no longer supported technology. Angular 1 is dead & ruby just couldnt keep up with concurrent requests.

1) This project is designed for single instances in mind. 

2) This software is provided to you without any authentication or access based security
it is up to you the user to install or develop your own security methods and best practices.

3) There may be future effort for security on this code base but only if its in popular demand.

##### Migrating from Angular 1 version

I have NOT tested it as this project is from 2016-2017 but this should be able to be a drop in replacement.

## Usage

```shell
mkdir -p ./ARK ./config
docker run -d \
  -p "8000:8000" \
  -p "32330:32330" \
  -p "7777:7777/tcp" \
  -p "7777:7777/udp" \
  -p "7778:7778/tcp" \
  -p "7778:7778/udp" \
  -p "27016:27016/tcp" \
  -p "27016:27016/udp"  \
  --mount "type=bind,source=$(pwd)/ARK,target=/home/steam/ARK" \
  --mount "type=bind,source=$(pwd)/config,target=/etc/arkmanager/" \
  --user=steam \…
