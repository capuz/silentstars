---
repo: "characterecho-sean/edvr-unofficial-patch"
name: "edvr-unofficial-patch"
description: "Unofficial VR fixes for Elite Dangerous: Odyssey - per-eye brightness, black void around the on-foot panel, adjustable panel distance"
readmeQualityOk: true
url: "https://github.com/characterecho-sean/edvr-unofficial-patch"
homepage: "https://discord.gg/AWJ6djKKzr"
language: "C++"
languages: ["C++"]
languagePcts: [80]
topics: ["elite-dangerous", "virtual-reality", "vr", "dlss", "fsr3", "taa"]
stars: 145
forks: 11
openIssues: 34
closedIssues: 42
watchers: 11
contributors: 5
recentReleases: 10
createdAt: "2026-08-09T19:44:55Z"
lastCommitAt: "2026-10-21T23:35:38Z"
lastReleaseAt: "2026-08-17T20:11:47Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 33
maintainers: ["characterecho-sean", "RocketsProjects"]
openGraphImageUrl: "https://opengraph.githubassets.com/fef8f6be510dab9f43289b56970a65d693498d323020ad8783c8519cacf934f3/characterecho-sean/edvr-unofficial-patch"
fundingLinks: ["KO_FI:https://ko-fi.com/seancharacterecho"]
discussionCount: 6
---

# EDVR: an unofficial patch for Elite Dangerous in VR

DLSS, FSR and XeSS upscaling for Elite in VR, and two dozen fixes for things
that make Odyssey uncomfortable in a headset, in a native OpenXR package that
takes about three minutes to install. [Upscaling: DLSS, FSR and
XeSS](#upscaling-dlss-fsr-and-xess) covers the upscalers. The short list of
fixes is under [What it fixes](#what-it-fixes), and
[docs/fixes.md](https://github.com/characterecho-sean/edvr-unofficial-patch/blob/HEAD/docs/fixes.md) describes each one in full.

If something is not working, [open an
issue](https://github.com/characterecho-sean/edvr-unofficial-patch/issues/new/choose).
Bugs get fixed there because you can attach the log, and the log usually shows
the cause. The [Discord](https://discord.gg/AWJ6djKKzr) is for setup questions,
"is this normal", or just talking about it; chat loses attachments and threads,
so bug reports belong in an issue.

To contribute code, start with [the build and validation guide](https://github.com/characterecho-sean/edvr-unofficial-patch/blob/HEAD/docs/building.md),
make the change in your fork, and open a pull request with the checks you ran.
C++ changes need a full native…
