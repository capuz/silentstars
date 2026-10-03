---
repo: "ESK-Project/android_kernel_xiaomi_mt6895"
name: "android_kernel_xiaomi_mt6895"
description: "ESK Kernel for xaga(in)/xagapro(in)"
readmeQualityOk: true
url: "https://github.com/ESK-Project/android_kernel_xiaomi_mt6895"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["esk", "gki", "kernel", "xaga"]
stars: 14
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9981
recentReleases: 0
createdAt: "2025-08-01T16:12:04Z"
lastCommitAt: "2026-10-03T09:20:52Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 80
undervaluedScore: 73
maintainers: ["vingu-linaro", "rafaeljw", "bachnxuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8c3bd22eb461506cd45b7f9e1f974562dd4e7706159e8a94bb80a3fc9b30c16/ESK-Project/android_kernel_xiaomi_mt6895"
---

# How do I submit patches to Android Common Kernels

1. BEST: Make all of your changes to upstream Linux. If appropriate, backport to the stable releases.
   These patches will be merged automatically in the corresponding common kernels. If the patch is already
   in upstream Linux, post a backport of the patch that conforms to the patch requirements below.
   - Do not send patches upstream that contain only symbol exports. To be considered for upstream Linux,
additions of `EXPORT_SYMBOL_GPL()` require an in-tree modular driver that uses the symbol -- so include
the new driver or changes to an existing driver in the same patchset as the export.
   - When sending patches upstream, the commit message must contain a clear case for why the patch
is needed and beneficial to the community. Enabling out-of-tree drivers or functionality is not
not a persuasive case.

2. LESS GOOD: Develop your patches out-of-tree (from an upstream Linux point-of-view). Unless these are
   fixing an Android-specific bug, these are very unlikely to be accepted unless they have been
   coordinated with kernel-team@android.com. If you want to proceed, post a patch that conforms to the
   patch requirements…
