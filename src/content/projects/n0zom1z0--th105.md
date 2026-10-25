---
repo: "N0zoM1z0/th105"
name: "th105"
description: "Source reconstruction of 東方緋想天 ～ Scarlet Weather Rhapsody 1.06a"
readmeQualityOk: true
url: "https://github.com/N0zoM1z0/th105"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [55, 45]
topics: ["decompilation", "game-preservation", "ghidra", "msvc", "reccmp", "reverse-engineering", "touhou", "th105", "touhou-games"]
stars: 16
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-10T05:33:17Z"
lastCommitAt: "2026-10-25T09:01:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["N0zoM1z0"]
openGraphImageUrl: "https://opengraph.githubassets.com/556652e3f25323026ba975dd559741da1f58f6219ed44c4c56049864659f3189/N0zoM1z0/th105"
---

# 東方緋想天 ～ Scarlet Weather Rhapsody

  <img
    src="resources/title-screen.jpg"
    width="640"
    alt="Original Japanese TH10.5 1.06a title screen">

This project reconstructs the original Japanese TH10.5 version 1.06a
executable with reproducible byte comparison as the acceptance criterion.

> [!NOTE]
> Reconstruction is still in progress. TH105 is a particularly challenging target,
> and a faithful, byte-exact reconstruction is expected to take considerable time.

## Exact target

Supply your own `resources/th105.exe`:

| Property | Required value |
| --- | --- |
| Version | original Japanese 1.06a |
| Size | `3,129,344` bytes |
| SHA-256 | `56350024879199861579c11b0e1c67b9590e10a8d40cd5996b109deec9afca7e` |
| MD5 | `2ae711a6c92c4addbdbf526bc61d8e59` |
| Image base | `0x00400000` |
| Entry point | `0x0068B9D2` |

The [official 1.06a updater](https://tasofro.net/touhou105/download.html),
`th105_update_106a.exe`, contains this executable. The old `th105c.exe`/1.06
target is different and is deliberately rejected.

```bash
scripts/import-target.sh /path/to/th105.exe
scripts/repo-python scripts/verify-target.py
```

Copyrighted executables and game data are not included.

##…
