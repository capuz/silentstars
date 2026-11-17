---
repo: "NekoBoxHQ/Mihomo-Suite"
name: "Mihomo-Suite"
description: "Mihomo management suite: dashboard + core + configuration tool, installed into LuCI (Services → Mihomo Console)"
originalDescription: "Mihomo 管理套件：面板 + 核心 + 配置工具，装进 LuCI（服务 → Mihomo 控制台）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NekoBoxHQ/Mihomo-Suite"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [61, 26]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-13T17:37:13Z"
lastCommitAt: "2026-11-17T12:16:11Z"
lastReleaseAt: "2026-11-17T12:01:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 64
maintainers: ["lima-droid", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e90f1369975dd7781d5d9109cf2e19a44f8ba438cc6190cf70cd547c649cb274/NekoBoxHQ/Mihomo-Suite"
---

# 墨枢云境 · MTUN-XD

  An intelligent Mihomo management suite for OpenWrt / iStoreOS

---

## Project Overview

**墨枢云境 (MTUN-XD)** is a Mihomo management suite for OpenWrt / iStoreOS.

Built around Mihomo as its core, it integrates a web control panel, a browser-based configuration generator, and system maintenance features. It provides an all-in-one experience covering core deployment, configuration generation, and runtime management.

The project uses a lightweight design that separates the suite itself from third-party runtime components. The core and panel are fetched from official release channels during installation, while the configuration tool ships with the package. This keeps the software package small while allowing flexibility for component updates and maintenance.

**One entry point to manage Mihomo's runtime, configuration, and maintenance.**

## Interface Preview

## Core Components

| Component | Function | How It Is Obtained |
| --- | --- | --- |
| Mihomo Core | Proxy core and traffic handling | Downloaded at install time, CPU architecture detected automatically |
| MetaCubeXD | Web visual control panel | Latest official release fetched at install time |
|…
