---
repo: "BeeStation/BeeStation-Hornet"
name: "BeeStation-Hornet"
description: "99.95% station. 0.05% bees"
readmeQualityOk: true
url: "https://github.com/BeeStation/BeeStation-Hornet"
homepage: "https://beestation13.com"
language: "DM"
languages: ["DM"]
languagePcts: [87]
topics: ["codebase", "game", "bees", "space", "space-station-13", "retrogaming", "atmospheric-modelling", "byond", "dm", "roleplay"]
stars: 217
forks: 730
openIssues: 369
closedIssues: 3364
watchers: 9
contributors: 986
recentReleases: 0
createdAt: "2018-12-18T23:26:44Z"
lastCommitAt: "2026-11-02T15:07:54Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 50
maintainers: ["ss13-beebot", "mrmanlikesbt", "Tsar-Salat"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f42b64cc20ec2bfdbb8cee60d8a93fcca0d761f9365ba8ba6714ea8ef832a64/BeeStation/BeeStation-Hornet"
fundingLinks: ["PATREON:https://patreon.com/user?u=10639001"]
---

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

**You can no longer compile the codebase simply through Dream Maker**.

**Building Beestation…
