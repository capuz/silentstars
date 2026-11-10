---
repo: "Qinjingxue/Sunpack"
name: "Sunpack"
description: "Automated archive processing tool for Windows: background monitoring, detection, extraction, recursive processing and crash recovery. Automated archive processing for Windows — watch folders, detect, extract, verify and recursively process archives in the background."
originalDescription: "Windows 全自动压缩包处理工具：后台监控、识别、解压、递归处理与崩溃恢复。 Automated archive processing for Windows — watch folders, detect, extract, verify and recursively process archives in the background."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Qinjingxue/Sunpack"
language: "Python"
languages: ["Python", "C++", "C"]
languagePcts: [31, 29, 20]
topics: ["sunpack", "7zip", "archive", "archive-extractor", "automation", "cpp", "extraction", "python", "rar", "rust"]
stars: 33
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-22T12:08:18Z"
lastCommitAt: "2026-11-10T11:38:06Z"
lastReleaseAt: "2026-08-17T01:59:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["Qinjingxue", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/153e808cd8dfcb3b0aec4a54a02b4657626d9d56d11c3e21b240131a1d4d497b/Qinjingxue/Sunpack"
---

---

## Contents

- [Installation](#安装说明)
- [Usage Guide](#使用指南)
  - [Command Overview](#命令速览)
  - [Password Management](#密码管理)
  - [GUI Management Panel](#gui管理面板)
  - [Usage Notes](#使用注意)
- [Core Features](#核心能力)
  - [Recursive Processing](#递归处理)
  - [Post-processing](#后处理)
  - [Watch Mode Monitoring System](#watch模式监控系统)
  - [Robustness and WAL Crash Recovery](#稳健性和wal崩溃恢复)
  - [High Concurrency and Speed Optimization](#高并发和速度优化)
  - [Low Background Resource Usage](#后台低资源占用)
- [Configuration](#配置)
- [Development and Testing](#开发与测试)
  - [Development](#开发相关)
  - [Architecture Overview](#架构速览)
  - [Testing](#测试)
  - [Reproducible Worker and 7-Zip Comparison Tests](#可复现的-worker-与-7-zip-对比测试)
- [Known Issues](#已知问题)
- [Contributing](#参与贡献)
- [Acknowledgements](#致谢)
- [License](#许可证)

## Installation

### System Requirements

SunPack only supports Windows 10 version 1709 and later, and Windows 11. Watch mode only supports the NTFS file system.

Download the latest `sunpack-windows-<arch>-<version>-setup.exe` from [GitHub Releases](https://github.com/Qinjingxue/Sunpack/releases/latest).

1. Choose the installer based on your system architecture: for 64-bit Intel/AMD Windows choose…
