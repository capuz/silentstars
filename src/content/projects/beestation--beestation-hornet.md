---
repo: "BeeStation/BeeStation-Hornet"
name: "BeeStation-Hornet"
description: "99.95% station. 0.05% bees"
url: "https://github.com/BeeStation/BeeStation-Hornet"
homepage: "https://beestation13.com"
language: "DM"
languages: ["DM"]
languagePcts: [87]
topics: ["codebase", "game", "bees", "space", "space-station-13", "retrogaming", "atmospheric-modelling", "byond", "dm", "roleplay"]
stars: 215
forks: 730
openIssues: 362
closedIssues: 3237
watchers: 8
contributors: 989
recentReleases: 0
createdAt: "2018-12-18T23:26:44Z"
lastCommitAt: "2026-06-27T00:42:10Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 50
maintainers: ["ss13-beebot", "mrmanlikesbt", "Isaacnml"]
openGraphImageUrl: "https://opengraph.githubassets.com/68b1d97a477ebb4dc89e283d0d09a7a77ec1fc0df10fee0ff53a7e9cd2b4772f/BeeStation/BeeStation-Hornet"
fundingLinks: ["PATREON:https://patreon.com/user?u=10639001"]
---

<h1 align="center">BeeStation 13 Codebase</h1>

**Website:** http://beestation13.com
**Code:** https://github.com/beestation/beestation-hornet
**Wiki:** https://wiki.beestation13.com/view/Main_Page

## DOWNLOADING

There are a number of ways to download the source code. Some are described here, an alternative all-inclusive guide is also located at https://wiki.beestation13.com/view/Downloading_the_source_code

Option 1:
Follow this: https://wiki.beestation13.com/view/Guide_to_git
Clone the repository using `git clone`.

Option 2: Download the source code as a zip by clicking the ZIP button in the
code tab of https://github.com/beestation/beestation-hornet
(note: this will use a lot of bandwidth if you wish to update and is a lot of
hassle if you want to make any changes at all, so it's not recommended.)

Option 3: Use our docker image that tracks the master branch (See commits for build status. Again, same caveats as option 2)

```
docker run -d -p <your port>:1337 -v /path/to/your/config:/beestation/config -v /path/to/your/data:/beestation/data beestation/beestation <dream daemon options i.e. -public or -params>
```

## INSTALLATION

**You can no longer compile the codebase…
