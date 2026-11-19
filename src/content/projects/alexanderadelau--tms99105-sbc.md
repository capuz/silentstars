---
repo: "AlexanderAdelAU/TMS99105-SBC"
name: "TMS99105-SBC"
description: "TMS9900/99105 Single Board Computer"
readmeQualityOk: true
url: "https://github.com/AlexanderAdelAU/TMS99105-SBC"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [67]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-01-16T00:51:27Z"
lastCommitAt: "2026-11-19T05:06:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 69
maintainers: ["AlexanderAdelAU", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/49bef7bc03e92862d63032fe75e3f467f1f453fbf737ca0353c655c65e6c7f80/AlexanderAdelAU/TMS99105-SBC"
---

# TMS99105 SBC — System Build

This repository contains the current source build for the TMS99105 SBC
operating-system volume: DSKINIT62, BDOS61, XMODEM59, standalone DIR2,
Shell 6.5 and its ten command pages.

**One command builds the complete operating-system volume:**

```bat
MAKE_SYSTEM.bat
```

The script stages every component in `Build`, assembles all modules,
generates the Shell address include, runs SYSGEN and copies the resulting
`PAYLOAD65.HEX` to the sibling `../MONITOR` upload-staging directory. It also
builds the standalone utilities in `SRC/Utilities` and copies their `.H99`
files to the same directory; these are not included in the SYSGEN volume.

## Upload and boot the SBC

After `MAKE_SYSTEM.bat` reports `BUILD OK`, the payload is ready to transfer:
