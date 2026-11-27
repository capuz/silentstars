---
repo: "Najip/RKP-Mfr-Auto-Match"
name: "RKP-Mfr-Auto-Match"
description: "Auto-detect RKP keybox map[3] manufacturer and match props at boot for KernelSU/APatch/Magisk"
readmeQualityOk: true
url: "https://github.com/Najip/RKP-Mfr-Auto-Match"
language: "Shell"
languages: ["Shell", "HTML", "C++"]
languagePcts: [48, 31, 21]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-27T01:04:52Z"
lastCommitAt: "2026-11-27T16:29:47Z"
lastReleaseAt: "2026-11-27T04:25:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Najip", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/75e295401caac86a07bba68b16bdfcefb72657e729703db2d9221e1325e5b589/Najip/RKP-Mfr-Auto-Match"
---

# RKP Manufacturer Auto-Match

Simple KSU / APatch / Magisk module to auto-match manufacturer props with your active RKP keybox.

The original idea and the first RKP fix script come from [dlagia](https://github.com/dlagia). His untouched script is archived in [`archive/fix-rkp.sh`](https://github.com/Najip/RKP-Mfr-Auto-Match/blob/HEAD/archive/fix-rkp.sh). Big thanks to him.

Instead of hardcoding `nubia` (or whatever OEM the public RKP kb is from), this reads `map[3]` straight from your `keybox.xml` at boot and applies it via `resetprop`, with Zygisk handling Pixel Camera / whitelisted app restore. Should stay working even if you switch to a different public RKP kb later.

Only tested with [ITxiao6666/OhMyKeymint](https://github.com/ITxiao6666/OhMyKeymint) (both its TEE engine for keybox and its PIF engine).
