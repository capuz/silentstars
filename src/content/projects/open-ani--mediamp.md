---
repo: "open-ani/mediamp"
name: "mediamp"
description: "Video / audio player for Compose Multiplatform."
readmeQualityOk: true
url: "https://github.com/open-ani/mediamp"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [81]
topics: ["android", "audio", "cmp", "compose-multiplatform", "jetpack-compose", "kmp", "kotlin", "kotlin-multiplatform", "kotlin-multiplatform-mobile", "media"]
stars: 156
forks: 31
openIssues: 15
closedIssues: 7
watchers: 4
contributors: 17
recentReleases: 3
createdAt: "2024-12-07T11:11:56Z"
lastCommitAt: "2026-11-22T11:51:51Z"
lastReleaseAt: "2026-10-16T17:45:52Z"
status: "thriving"
tags: []
healthScore: 82
undervaluedScore: 43
maintainers: ["Him188", "StageGuard", "NihilDigit"]
openGraphImageUrl: "https://opengraph.githubassets.com/696fc36ad434fb5487f69628676b55c207b2c88ab162031484cdcfd2dff88e01/open-ani/mediamp"
---

# MediaMP

MediaMP is a media player for Compose Multiplatform. It is a
wrapper over popular media player libraries like ExoPlayer on each platform.

The goal is to provide a **unified** media player abstraction for
`commonMain`, as
well as supporting backend-specific features and direct access with the underlying media player
library for advanced use cases.

Supported targets and backends:

|    Platform    | Architecture(s) | Implementation |
|:--------------:|-----------------|----------------|
|    Android     | Any             | ExoPlayer      |
| JVM on Windows | x86_64, AArch64 | MPV            |
|  JVM on macOS  | x86_64, AArch64 | MPV            |
|  JVM on Linux  | x86_64          | MPV            |
|      iOS       | AArch64         | AVKit          |
| Browser (wasm) | Any             | HTMLVideoElement |

Platforms that are not listed above are not supported yet. Feel free to file an issue if you need
them.

The VLC backend is deprecated and no longer maintained; MPV replaced it as the desktop backend
in state spec v2.
