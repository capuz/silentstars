---
repo: "LeanxModulostk/UnityFix"
name: "UnityFix"
description: "Improves the performance of Call of Duty Mobile, Genshin Impact and other Unity engine games (You can add the library for a game or app via the web UI.)"
readmeQualityOk: true
url: "https://github.com/LeanxModulostk/UnityFix"
homepage: "https://t.me/modulostk"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [52, 48]
topics: ["android", "apatch", "apatch-module", "kernelsu", "kernelsu-module", "magisk", "magisk-module", "magisk-modules"]
stars: 42
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2023-01-09T09:47:57Z"
lastCommitAt: "2026-11-22T02:11:06Z"
lastReleaseAt: "2026-11-22T02:07:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 39
maintainers: ["LeanxModulostk"]
openGraphImageUrl: "https://opengraph.githubassets.com/56774da75fc0576a4968e66111ffbb268059f85a87c45719312b787664e2ed73/LeanxModulostk/UnityFix"
---

# UnityFix

**English** | [Español](#español)

## Description
Applications that use the Unity engine incorrectly set the CPU affinity to maximum capacity cores, this module configures the library name and mask to always report the same maximum which helps improve performance in games such as:
- Call of Duty Mobile
- Genshin Impact
- League of Legends: Wild Rift
- Mobile Legends
- CarX Street
- Free Fire
- and others...

- **You can add the library for a game or app via the web UI.**

### How it works
UnityFix sets two kernel parameters (in `/proc/sys/kernel/` or `/proc/sys/walt/`, depending on the kernel):

- **`sched_lib_name`**: Comma-separated list of library names (.so), for example `libunity.so, libfb.so`. The kernel checks the libraries each app has loaded, and if one of them matches a name in the list, the app is treated as a "library based app". Unity games load `libunity.so`.
- **`sched_lib_mask_force`**: CPU bitmask (bit N = CPU N, an integer between 0 and 255). When one of the apps detected through `sched_lib_name` asks the kernel to pin its threads to some cores, the kernel replaces the cores it asked for with this mask.

Mask values (8 cores):
