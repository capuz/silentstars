---
repo: "palfrey/discord-apt"
name: "discord-apt"
description: "APT repository for Discord"
readmeQualityOk: true
url: "https://github.com/palfrey/discord-apt"
homepage: "https://tevps.net/blog/2023/09/03/apt-repository-for-discord/"
language: "Python"
languages: ["Python", "Makefile"]
languagePcts: [74, 26]
topics: ["apt-get", "discord"]
stars: 191
forks: 10
openIssues: 0
closedIssues: 18
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2023-09-02T17:26:27Z"
lastCommitAt: "2026-07-08T05:42:27Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 44
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8efce7f27b434a3c2eeb8b63bba11920f4ed4115c971b49806dac81891cfa499/palfrey/discord-apt"
fundingLinks: ["GITHUB:https://github.com/palfrey", "KO_FI:https://ko-fi.com/palfrey"]
---

# Discord APT repository

As has been [repeatedly asked for](https://support.discord.com/hc/en-us/community/posts/360031737491-Give-us-an-apt-repository-Linux-), this is an APT repository for Discord. Note that I do not in anyway claim ownership over the .deb files here, this is just merely a nicer packaging option. Discord: if you want to do this yourself, please tell me about it and I'll point people there instead!

## Usage instructions

1. Download the file https://palfrey.github.io/discord-apt/discord-repo_1.2_all.deb and install it (e.g. `sudo dpkg -i discord-repo_1.2_all.deb` or whatever graphical tool you use for .deb files)
   * Note this uses a [debian.sources](https://wiki.debian.org/SourcesList#debian.sources_format) format repo entry, but all modern versions of apt should support this. This repo doesn't support anything that this doesn't work with.
2. `sudo apt-get update`
3. Install the desired version

| Version | Command                               |
| ------- | ------------------------------------- |
| Stable  | `sudo apt-get install discord`        |
| PTB     | `sudo apt-get install discord-ptb`    |
| Canary  | `sudo apt-get install discord-canary` |

(I have…
