---
repo: "HikariCalyx/cmsdl"
name: "cmsdl"
description: "A downloader designed for Greater China region mushroom game"
url: "https://github.com/HikariCalyx/cmsdl"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-23T11:44:38Z"
lastCommitAt: "2026-06-28T01:34:07Z"
lastReleaseAt: "2026-06-25T15:41:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["HikariCalyx"]
openGraphImageUrl: "https://opengraph.githubassets.com/a34947b76e267efc1f03b21f29a0a953f5e55b41baa76481089b7beaafc012e5/HikariCalyx/cmsdl"
---

# cmsdl
[简体中文](https://github.com/HikariCalyx/cmsdl/tree/main/README.zh-CN.md)

A downloader designed for Greater China region mushroom game.

## Why create this?
I don't want to use the bloated launcher developed by SQ Games at all.
This program is meant for a full replacement of CMS official v3 Launcher.

For chat records about how it was developed, see chat_records directory.

## Will I get banned by operator because of this program?
No. This program is built with minimum previlege requirements in mind, and it does not require elevation at all. When you launch game with cmsdl, cmsdl will close itself after game is launched. Besides, anti-tampering is implemented in all regions of mushroom games since 2023: The server will refuse you from logging into the game if game data are corrupted or modified.

Feel free to review the source code. If you still have concerns, then don't use it.

Gaming hackers are unwelcome.

## Usage
### CMS
- Get latest CMS client:
```bash
~/cmsdl cms --check
```

- Download, or integrity check, or repair CMS client
```bash
~/cmsdl cms --download /path/to/cms/client
```
If the download was interrupted, you can rerun and it will continue to download.

-…
