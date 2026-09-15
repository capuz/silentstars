---
repo: "well0nez/allwinner-h713-linux"
name: "allwinner-h713-linux"
description: "Mainline Linux 6.16.7 port for Allwinner H713 (HY310 projector) - WIP"
readmeQualityOk: true
url: "https://github.com/well0nez/allwinner-h713-linux"
language: "C"
languages: ["C", "Python"]
languagePcts: [67, 26]
stars: 15
forks: 2
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 3
createdAt: "2026-04-01T01:16:24Z"
lastCommitAt: "2026-09-15T08:55:07Z"
lastReleaseAt: "2026-09-15T08:49:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 40
maintainers: ["well0nez"]
openGraphImageUrl: "https://opengraph.githubassets.com/8347ed08386ea99e252ee4c644548c3abe6df83cdf9ca1af2266884288775b7f/well0nez/allwinner-h713-linux"
---

# H713 Linux

Mainline Linux **6.18.38** and a fully open boot chain (U-Boot SPL, TF-A BL31, U-Boot, Linux) on projectors
built around the Allwinner **H713** (sun50iw12p1). It started on the MagCubic HY310 and that is still the one
board this system has been run on; the repository now knows several H713 boards, holds a profile for each
firmware it has seen, and builds images only for boards that somebody has actually tested. No vendor source
code, no vendor Android: the boards' own firmware was reverse-engineered until the display, the HDMI input,
the sound and the motor could be driven from Linux.

**See it running** - HDMI input on the projector, test pattern and audio in sync (2026-09-08):
https://github.com/user-attachments/assets/75bb0b88-038e-4703-a6f9-def8eb071986

The kernel series builds on [cstenger/allwinner-h713-mainline](https://github.com/cstenger/allwinner-h713-mainline)
(vendored here as `mainline/`, full history) - whose own driver base, patches `0001` - `0022`, came from
this repository's `legacy` branch in the first place (tag `legacy-arm32-2026-08`). Everything above
`0049` is new work for the projector.

> **Beta - read this before you flash.**
> Installing…
