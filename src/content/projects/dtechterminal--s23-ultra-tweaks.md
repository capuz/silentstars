---
repo: "dtechterminal/s23-ultra-tweaks"
name: "s23-ultra-tweaks"
description: "S24 features on a rooted Galaxy S23 Ultra (One UI 9): AirDrop, Wi-Fi 7 MLO, 6 GHz hotspot, battery health, call recording. Runtime only, no flashing."
readmeQualityOk: true
url: "https://github.com/dtechterminal/s23-ultra-tweaks"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [55, 22]
stars: 69
forks: 10
openIssues: 5
closedIssues: 29
watchers: 5
contributors: 6
recentReleases: 10
createdAt: "2026-11-22T10:37:08Z"
lastCommitAt: "2026-11-27T13:00:03Z"
lastReleaseAt: "2026-11-23T15:47:47Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 39
maintainers: ["ankurpandeyvns", "moesuito"]
openGraphImageUrl: "https://opengraph.githubassets.com/16af84c1a429573697b6dd8710bbb7246d628bc65cbe3e64fce50258d3143923/dtechterminal/s23-ultra-tweaks"
---

# s23-ultra-tweaks

Turns on Galaxy S24-and-newer features on a rooted Galaxy S23 Ultra running One UI 9 / Android 17, with no flashing.

The tweaks come in six categories. The module page lets you pick a whole category or single tweaks.
Each one works on any S23 Ultra on One UI 9 unless it says otherwise.

**What's new** (details in the [changelog](https://github.com/dtechterminal/s23-ultra-tweaks/blob/HEAD/CHANGELOG.md)):
- **v1.8.10**: new **Watch battery fix** (`wearretry`, untested): Play services stops retrying a Galaxy Watch every few seconds while it's away or not answering. Helper apps that Samsung's *Deep sleeping apps* turned off (the Weather stub, Language Core, Mosey) are turned back on, and status says to take them off that list. The bug report now really holds an hour or more, shows which app last switched Wi-Fi off (issue #42), and no longer hangs when it starts the recorder.
- **v1.8.9**: AirDrop **receiving** works: incoming shares from a Mac or iPhone no longer crash Play services (found by @Ashraf12Nas). The bug report keeps the last hour or more of logs, so a failure can be reported afterwards without recording a test first, and it includes crash stack traces.
