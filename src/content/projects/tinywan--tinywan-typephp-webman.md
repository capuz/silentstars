---
repo: "Tinywan/tinywan-typephp-webman"
name: "tinywan-typephp-webman"
description: "typephp build webman"
originalDescription: "typephp build webman"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Tinywan/tinywan-typephp-webman"
language: "PHP"
languages: ["PHP"]
languagePcts: [79]
topics: ["typephp", "webman", "workerman", "php"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-08-27T08:33:28Z"
lastCommitAt: "2026-10-09T10:51:04Z"
lastReleaseAt: "2026-09-17T10:18:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/776222692b3580042f42da067eed2e8f77a758ac5c46a810e18cf3d954e426af/Tinywan/tinywan-typephp-webman"
---

# ⚡ TypePHP Webman

**Give PHP the distribution and deployment experience of Go / Rust**

Based on [TypePHP](https://www.swoole.com/) (a PHP AOT static compiler developed by Swoole), this statically compiles **Webman / Workerman** projects into native binary machine code (ELF / PE), delivering extreme startup speed, memory isolation, and zero-dependency distribution.

## 📖 Table of Contents

- [Core Architecture](#-核心架构)
- [Core Features](#-核心特性)
- [Build Output Overview](#-编译产物一览)
- [Quick Start (Direct Download)](#-快速开始直接下载使用)
  - [1. Linux Fully Static Single File (🌟 Recommended)](#1-linux-纯静态单文件-推荐)
  - [2. Linux Dynamic Portable Package](#2-linux-动态便携包)
  - [3. Windows x64 Portable Package](#3-windows-x64-绿色包)
- [Local Development and Build](#-本地开发与编译构建)
  - [Method 1: One-Click Build with Docker Image (🌟 Recommended)](#方式一docker-镜像一键编译-推荐)
  - [Method 2: Native Host Toolchain Packaging](#方式二宿主机原生工具链打包)
- [Service Verification and Access](#-服务验证与访问)
- [Key AOT Adaptations and Technical Details](#-aot-关键适配与技术细节)
- [License](#-开源协议)

## 🚀 Core Architecture

```mermaid
graph LR
    subgraph 1. Source Layer
        A[PHP 8.4/8.5 Source] --> B[Webman / Workerman]
    end…
