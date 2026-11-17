---
repo: "MewX/ps5-official-firmware-list"
name: "ps5-official-firmware-list"
description: "The community-contributed PlayStation 5 official firmware list with checksums."
readmeQualityOk: true
url: "https://github.com/MewX/ps5-official-firmware-list"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 27
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-09-14T22:23:49Z"
lastCommitAt: "2026-11-17T14:42:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 60
maintainers: ["MewX", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e22eb3c1c5fe5f6cf3149e055db482c7ecaaa5cabd94fa0f097a6a614ebf8947/MewX/ps5-official-firmware-list"
---

# PlayStation 5 Official Firmware List
The community-contributed PlayStation 5 official firmware list with checksums.

File issues if you have any questions.

> [!IMPORTANT]
> By default, no downloads will be offered by this repo.
> **However, if you work on PS5 security research, then I'm happy to offer binaries that I have.**
> Otherwise, please download the firmware from somewhere else, and then look up this table for the checksums.

## Update List files

Format: `http://f<REGION>01.ps5.update.playstation.net/update/ps5/official/<OBFUSCATED_STRING>/list/<REGION>/updatelist.xml`.

Examples:
```
http://fjp01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/jp/updatelist.xml
http://fus01.ps5.update.playstation.net/update/ps5/official/tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6/list/us/updatelist.xml
```

`<OBFUSCATED_STRING>` is not derived from the firmware version and cannot be calculated: it is the
constant `tJMRE80IbXnE9YuG0jzTXgKEjIMoabr6` for every version and every region.

`<REGION>` is one of 8 values only — `au`, `br`, `cn`, `jp`, `ru`, `sa`, `uk`, `us` — and all 8 lists
advertise the identical firmware, so the region does…
