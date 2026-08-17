---
repo: "hoowhoami/EchoMusicPlugins"
name: "EchoMusicPlugins"
description: "EchoMusic的插件仓库"
readmeQualityOk: true
url: "https://github.com/hoowhoami/EchoMusicPlugins"
homepage: "https://github.com/hoowhoami/EchoMusic"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["echomusic", "plugins"]
stars: 29
forks: 16
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-06-05T14:32:35Z"
lastCommitAt: "2026-08-17T04:20:34Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 43
maintainers: ["hoowhoami", "oneday5799", "Max8808"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bb182da38d986047c97b08e43729cb0a02f78cec3085be9f34e5c8394b1107c/hoowhoami/EchoMusicPlugins"
---

# EchoMusic 插件系统

本仓库收录 EchoMusic 插件开发文档与示例插件。

## 插件系统定位

EchoMusic 内置一套完全自研、深度耦合主程序的定制化插件运行体系，整体设计思路与 Chromium 系浏览器插件有着本质区别——不兼容 Chrome 插件规范、沙盒隔离模型与权限清单机制。

### 超高拓展自由度，无强制权限沙盒

插件运行环境与主程序原生打通，不存在分层安全沙盒隔离。主程序向插件完整开放音频内核、本地文件、数据库、窗口、网络、外设等底层接口。开发者可基于完整程序能力实现音源接入、界面重构、音频实时处理、系统联动、本地媒体批量管理等深度定制功能，拓展边界不受框架硬性限制。

### 安全权责交由用户自主把控

程序不会主动限制插件操作权限。插件的安装、启用、卸载、信任与否全部由用户自主决策，第三方插件带来的使用风险由用户自行知悉并承担。项目不做强制插件审核，充分下放使用选择权。

### 配套安全模式，兼顾自由度与程序稳定性

为解决无沙盒环境下插件异常、恶意代码、逻辑崩溃导致主程序卡死、闪退、配置损坏等问题，系统内置安全模式：

- **自动触发**：插件运行出错、内存溢出、死循环、非法调用底层接口时，程序自动切入安全模式，禁用全部第三方插件，完成故障隔离与自动恢复，保障播放器本体可正常启动。
- **手动开启**：用户可在设置内主动切换至安全模式，临时禁用所有自定义插件，用于排查插件冲突、清理异常插件、修复损坏配置。

自由插件模式与安全模式为两套互补运行方案：日常使用可关闭安全模式，享受完整插件拓展能力；遇到程序异常、插件冲突时，可通过自动/手动安全模式快速恢复至纯净运行状态，在高拓展自由度和程序稳定性之间做出平衡取舍。

## 在线插件源

EchoMusic 2.2.6-beta.11 起支持在"插件管理"中浏览在线插件源。本仓库根目录提供 `echo-plugins.json`，可以直接作为插件源添加：

```text
https://github.com/hoowhoami/EchoMusicPlugins
```

添加后，EchoMusic 会读取仓库根目录的 `echo-plugins.json`。这个文件只是插件源索引，负责告诉 EchoMusic“有哪些插件、插件仓库在哪里、插件目录在哪里”。插件的名称、版本、描述、作者、图标、入口文件、能力声明和兼容性要求，都以插件仓库里的 `manifest.json` 为准。

刷新在线插件列表时，EchoMusic 会先读取插件源索引，再根据每个条目的 `repo` 和 `path` 读取对应插件目录下的 `manifest.json`。安装时会下载插件仓库 zip，只提取 `path` 指向的目录并再次校验其中的 `manifest.json`。…
