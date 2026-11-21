---
repo: "zhizhuzhizhuzhi/xiaomi13-aospa"
name: "xiaomi13-aospa"
description: "Unofficial AOSPA 17 integration sources, device trees and build instructions for Xiaomi 13 (fuxi)."
readmeQualityOk: true
url: "https://github.com/zhizhuzhizhuzhi/xiaomi13-aospa"
homepage: "https://sourceforge.net/projects/xiaomi13-aospa/"
language: "Java"
languages: ["Java"]
languagePcts: [55]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-10-12T10:07:44Z"
lastCommitAt: "2026-11-21T11:35:04Z"
lastReleaseAt: "2026-10-20T11:12:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 54
maintainers: ["zhizhuzhizhuzhi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a047d67c1e40151a6cb7cee508431b2256f5d1dc56275680f54acca4d48c7213/zhizhuzhizhuzhi/xiaomi13-aospa"
---

# Xiaomi 13（fuxi）AOSPA Android 17

[English](https://github.com/zhizhuzhizhuzhi/xiaomi13-aospa/blob/HEAD/README_EN.md)

本仓库提供设备构建入口。源码版本由 [manifest](https://github.com/zhizhuzhizhuzhi/android_local_manifests/tree/aospa-17) 固定；公共补丁和构建工具统一放在 [SM8550 integration](https://github.com/zhizhuzhizhuzhi/android_vendor_xiaomi_sm8550-integration/tree/aospa-17)，设备配置直接来自独立的 [device 仓库](https://github.com/zhizhuzhizhuzhi/android_device_xiaomi_fuxi/tree/aospa-17)。

## 获取源码和构建

Ubuntu 22.04 / 24.04 x86_64，安装 Android 构建依赖、Git、Git LFS、repo 和 Python 3.11+。准备与清单匹配的输入目录，保留其中记录的相对路径。

```sh
mkdir android-fuxi && cd android-fuxi
repo init -u https://github.com/zhizhuzhizhuzhi/android_local_manifests.git -b aospa-17 -m fuxi.xml --git-lfs
repo sync -c --no-tags -j8
python3 vendor/xiaomi/sm8550-integration/tools/prepare-source.py "$PWD" --device fuxi
python3 vendor/xiaomi/sm8550-integration/tools/prepare-inputs.py "$PWD" --device fuxi \
  --source /path/to/prepared-fuxi-inputs --replace-stock-inputs
BUILD_NUMBER=20261121 bash vendor/xiaomi/sm8550-integration/tools/build.sh "$PWD" fuxi userdebug 16
```
