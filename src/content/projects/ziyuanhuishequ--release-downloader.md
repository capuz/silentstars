---
repo: "ziyuanhuishequ/release-downloader"
name: "release-downloader"
description: "Batch-download GitHub Release files and automatically archive them by system: a no-install single-file exe plus browser extensions (Chrome/Edge/Firefox), with multi-threaded chunked downloads, resumable downloads, and a dynamic acceleration route pool."
originalDescription: "批量下载 GitHub Release 文件并按系统自动归档：免安装单文件 exe + 浏览器扩展（Chrome/Edge/Firefox），多线程分片、断点续传、动态加速线路池。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ziyuanhuishequ/release-downloader"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [51, 32]
topics: ["batch-download", "chrome-extension", "downloader", "egui", "firefox-extension", "github-release", "resume-download", "rust"]
stars: 71
forks: 6
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-11-04T08:11:23Z"
lastCommitAt: "2026-11-26T15:26:53Z"
lastReleaseAt: "2026-11-26T14:34:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 66
undervaluedScore: 15
maintainers: ["ziyuanhuishequ"]
openGraphImageUrl: "https://opengraph.githubassets.com/43e480edc2f58ef0d8cbd60fa851f608cb82927817478d5b401c29974e4b5687/ziyuanhuishequ/release-downloader"
---

# GitHub 下载整理工具

批量下载多个仓库的 GitHub Release 文件，并按系统与架构自动归档到不同文件夹。免安装单文件 exe，像素风界面，Windows 平台。

## 下载

| 用途 | 文件 |
| --- | --- |
| Windows 桌面版（推荐，免安装） | [`GitHub-Release-Downloader-Desktop-v1.6.5.exe`](https://github.com/ziyuanhuishequ/release-downloader/releases/latest/download/GitHub-Release-Downloader-Desktop-v1.6.5.exe) |
| Chrome / Edge / Brave / 360 / QQ | [`GitHub-Release-Downloader-Ext-v1.2.1-chrome.zip`](https://github.com/ziyuanhuishequ/release-downloader/releases/latest/download/GitHub-Release-Downloader-Ext-v1.2.1-chrome.zip) |
| Firefox | [`GitHub-Release-Downloader-Ext-v1.2.1-firefox.zip`](https://github.com/ziyuanhuishequ/release-downloader/releases/latest/download/GitHub-Release-Downloader-Ext-v1.2.1-firefox.zip) |

上面四个文件都在 [**最新 Release**](https://github.com/ziyuanhuishequ/release-downloader/releases/latest) 的 Assets 里，
点文件名即可直接下载。扩展的每个历史版本另有单独 Release（如
[ext-v1.2.1](https://github.com/ziyuanhuishequ/release-downloader/releases/tag/ext-v1.2.1)）。

**装扩展**：解压到固定目录（别放临时目录，删了扩展就失效）→ `chrome://extensions`
（Edge 是 `edge://extensions`）→ 右上角开启「开发者模式」→「加载已解压的扩展程序」→ 选解压出来的文件夹。
扩展是「加载已解压」安装，**不会自动更新**：换新版后覆盖解压，再到扩展页点「重新加载」。
