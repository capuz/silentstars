---
repo: "SimomYung/unpack_huawei_package"
name: "unpack_huawei_package"
description: "Huawei phone firmware package unpacking tool"
originalDescription: "华为手机固件解包工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SimomYung/unpack_huawei_package"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 36
forks: 6
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-16T10:00:48Z"
lastCommitAt: "2026-11-23T10:31:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 62
undervaluedScore: 29
maintainers: ["SimomYung", "Gyayana"]
openGraphImageUrl: "https://opengraph.githubassets.com/86a2165469909ed802144e14df09d8b6d8fe311c9042111ea2284d29e6c5ff9e/SimomYung/unpack_huawei_package"
---

# Huawei Phone Firmware Package Unpacking Tool
## 1. Introduction:
- Huawei Android system packages (before HarmonyOS 5) use the update.app format. This format can be unpacked with HuaweiUpdateExtractor to obtain all partition images.
- Starting with HarmonyOS 5, Huawei firmware packages use the new update.bin format. This format cannot be unpacked with HuaweiUpdateExtractor. Opening it in a hex editor shows that it is the standard OpenHarmony upgrade package format.
- Although OpenHarmony provides an unpacking tool, [update_packaging_tools library](https://gitee.com/openharmony/update_packaging_tools), running it produces no output. Adding a main program after the code makes it run normally, but when a partition is very large (system.img, >1G), a data offset parsing error occurs, so the unpacked image is much smaller than the actual size.
- After reading the official code, I wrote unpack_huawei_package.py in Python. This project requires no dependencies to be installed. If you don't want to install Python, the project also provides a ready-to-run exe program.
- Place update.bin in the same directory as the program.
