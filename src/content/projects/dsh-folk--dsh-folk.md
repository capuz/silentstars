---
repo: "DSH-Folk/DSH-Folk"
name: "DSH-Folk"
description: "DSH-Folk —— A DeepSeek Harness mobile launcher based on FolkPatch's design style."
originalDescription: "DSH-Folk —— 基于 FolkPatch 设计风格的 DeepSeek Harness 移动端启动器。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/DSH-Folk/DSH-Folk"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [79]
stars: 46
forks: 6
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-28T04:41:04Z"
lastCommitAt: "2026-11-25T03:13:28Z"
lastReleaseAt: "2026-09-02T04:14:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 83
undervaluedScore: 39
maintainers: ["IPF-Sinon"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4820fa9dff8650d51bf1d2dab5a9cba49909ce14dfcdf5fcc88e7ea24be9ef5/DSH-Folk/DSH-Folk"
fundingLinks: ["CUSTOM:https://jiye.funcun.top/Sponsors"]
---

# DSH-Folk

[Simplified Chinese](https://github.com/DSH-Folk/DSH-Folk/blob/HEAD/README.md) | [English](https://github.com/DSH-Folk/DSH-Folk/blob/HEAD/README.en.md)

**A launcher for running DeepSeek Harness on Android**

DSH-Folk packages [DeepSeek Harness](https://www.npmjs.com/package/@deepseek-ai/dsh) (a Node.js-based coding agent CLI) into a ready-to-use Android app. On first launch, it downloads a Linux container runtime matched to the device architecture (`arm64-v8a` / `x86_64`), starts `dsh web` via proot / proroot, and provides a native WebUI, terminal, plugin store, automation workflows, and extension support.

No root or Termux required. If the device has root, Shizuku, or wireless ADB configured, the corresponding privileged features can be enabled as needed.

## Table of Contents

- [Preview](#预览)
- [Feature Overview](#功能一览)
- [Requirements](#环境要求)
- [Installation](#安装)
- [Runtime Management](#运行时管理)
- [Documentation Index](#文档索引)
- [Project Structure](#项目结构)
- [Acknowledgements](#致谢) · [License](#许可证) · [Friendly Links](#友情链接) · [Community](#交流)
