---
repo: "Tobiichi-Origuchi/CefDetector"
name: "CefDetector"
description: "Check how many CEFs are on your computer."
readmeQualityOk: true
url: "https://github.com/Tobiichi-Origuchi/CefDetector"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["cef", "cefsharp", "cli", "electron", "libcef", "linux-desktop", "rust", "egui", "linux", "windows"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-11T06:22:13Z"
lastCommitAt: "2026-07-31T06:31:16Z"
lastReleaseAt: "2026-06-15T06:02:04Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 57
maintainers: ["Tobiichi-Origuchi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0ad4abead8652f88af753f4c23071414a1bb790fa6b0bda2e2580c4d40059c7/Tobiichi-Origuchi/CefDetector"
discussionCount: 1
---

# CEF Detector [](https://github.com/Tobiichi-Origuchi/CefDetector/actions/workflows/ci.yml) [](https://github.com/Tobiichi-Origuchi/CefDetector/actions/workflows/release.yml)

Check how many CEFs are on your computer

看看你的电脑上有多少个 [CEF (Chromium Embedded Framework)](https://github.com/chromiumembedded/cef)

> [!Note]
> 欢迎你把程序截图发到 [Discussions](https://github.com/Tobiichi-Origuchi/CefDetector/discussions) 中, 看看谁才是真的 **《超级CEF王》**

> 你说的对，但是《LibCEF》是由谷歌自主研发的一款全新开放浏览器内核。第三方代码运行在在一个被称作「CEF」的浏览器沙盒，在这里，被前端程序员选中的代码将被授予「libcef.so」，导引浏览器之力‌。你将扮演一位名为「电脑用户」的冤种角色，在各种软件的安装中下载类型各异、体积庞大的 CEF 们，被它们一起占用硬盘空间，吃光你的内存——同时，逐步发掘「CEF」的真相

## 截屏

## 下载

[Release](https://github.com/Tobiichi-Origuchi/CefDetector/releases)
页面提供以下构建产物：

| 平台 | 搜索后端 | 文件名 |
| --- | --- | --- |
| Linux x86_64 | ignore | `cefdetector-<version>-linux-x86_64-ignore.tar.gz` |
| Linux x86_64 | plocate | `cefdetector-<version>-linux-x86_64-plocate.tar.gz` |
| Windows x86_64 | ignore | `cefdetector-<version>-windows-x86_64-ignore.zip` |
| Windows x86_64 | Everything IPC | `cefdetector-<version>-windows-x86_64-everything.zip` |

(macOS to be continued...)

ignore 后端就是用 rust 的 ignore 库多线程枚举所有路径，速度相对慢，内存占用更高，更吃 CPU 的性能，唯一的好处是不用额外的依赖…
