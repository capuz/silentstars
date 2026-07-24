---
repo: "chnzzh/lenovo-logo-changer"
name: "lenovo-logo-changer"
description: "Personalize your Lenovo's UEFI boot logo with jpg/tga/pcx/gif/bmp/png"
readmeQualityOk: true
url: "https://github.com/chnzzh/lenovo-logo-changer"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bios", "lenovo", "logo", "uefi"]
stars: 278
forks: 26
openIssues: 27
closedIssues: 31
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2023-12-27T14:37:12Z"
lastCommitAt: "2026-07-24T06:07:37Z"
lastReleaseAt: "2026-01-09T07:28:05Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 66
undervaluedScore: 18
maintainers: ["cieldeb", "chnzzh"]
openGraphImageUrl: "https://opengraph.githubassets.com/669b8e6521fe14369531accf210056c07e5f1f9bd6a014c02b4e394ef9fa7f0c/chnzzh/lenovo-logo-changer"
---

# Lenovo UEFI Boot Logo Changer

*Lenovo UEFI Boot Logo Changer* is a rust program designed to modify the Boot startup logo on Lenovo devices with UEFI firmware.
This tool allows you to customize the boot logo with different format image.

**[Download](https://github.com/chnzzh/lenovo-logo-changer/releases/latest) the latest executable file compiled by GitHub Actions**

You can also refer to [How to build](#how-to-build) to compile it yourself.

## Disclaimer

+ **This program involves modifications to UEFI variables and the ESP partition. Please ensure to backup important files before usage.**
+ **This program will not check if the image files you are using comply with the correct image format. Please ensure that your images can function properly.** (Otherwise your system may be compromised: [LogoFAIL](https://binarly.io/posts/finding_logofail_the_dangers_of_image_parsing_during_system_boot/))
+ This program is intended for personal research use only.
+ The detailed list provided at the end is user contributed and **ONLY** for informational purposes. It shall provide a cleaner view of user tested devices than [#34](https://github.com/chnzzh/lenovo-logo-changer/issues/34). No…
