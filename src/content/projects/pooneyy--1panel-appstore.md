---
repo: "pooneyy/1Panel-Appstore"
name: "1Panel-Appstore"
description: "1Panel 应用商店的非官方应用适配库 1Panel App Store Unofficial App Adaptation Repository"
url: "https://github.com/pooneyy/1Panel-Appstore"
language: "CSS"
languages: ["CSS"]
languagePcts: [48]
stars: 45
forks: 5
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 100
recentReleases: 0
createdAt: "2025-06-13T10:46:17Z"
lastCommitAt: "2026-06-28T02:02:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 52
maintainers: ["renovate[bot]", "pooneyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a228beb0bf190eb692701671838a8943dba627656c561d50c037426c4233bb1/pooneyy/1Panel-Appstore"
---

中文 | [English](https://github.com/pooneyy/1Panel-appstore/blob/localApps/README-en.md)

* * *
## 目录

- [目录](#目录)
- [免责声明](#免责声明)
  - [1. 镜像容器适配](#1-镜像容器适配)
  - [2. 法律遵守](#2-法律遵守)
  - [3. 免责声明接受](#3-免责声明接受)
- [1. 简介](#1-简介)
- [2. 使用方式](#2-使用方式)
- [3. 备注](#3-备注)
- [4. 应用一览图](#4-应用一览图)
- [5. 致谢](#5-致谢)

***

## 免责声明

### 1. 镜像容器适配
本项目仅针对原`docker`镜像容器运行进行针对`1Panel`应用商店的适配。我们不对任何原始镜像的有效性做出任何明示或暗示的保证或声明，并且不对使用本仓库应用所造成的任何影响负责。用户在使用本项目时应自行承担风险。

### 2. 法律遵守
用户在使用本仓库时必须遵守所在国家与地区的法律法规。某些应用可能受到特定国家法律的限制，用户需自行了解并遵守相关法律要求。本仓库不对用户违反法律法规所产生的任何后果负责。

### 3. 免责声明接受
用户在导入本仓库并使用其中的应用时，即表示用户已经阅读、理解并同意接受本免责声明的所有条款和条件。

请注意，本免责声明仅针对本仓库的使用情况，并不包括其他第三方应用或服务。对于与本仓库链接的第三方内容，我们不对其准确性、完整性、可靠性或合法性负责。

在使用本仓库之前，请确保已经阅读、理解并接受了本免责声明的所有条款和条件。

***
## 1. 简介
这是一些适配`1Panel`商店`2.0`版本的docker应用配置。

致力于一键运行各种 Docker 应用。无需复杂配置，享受便利和高效。

### 本仓库分支说明
- `localApps`：主分支
- `config`：配置文件分支，专门用于编辑本仓库的配置文件
- `patch/*`：用于编辑时的临时分支
- `renovate/*`：机器人产生的临时分支
- `script`：用于存放脚本的分支

## 2. 使用方式

> [!TIP]
>
> 当前脚本支持使用参数指定 1panel 的安装路径，以及指定想导入的Apps。假如你的 1panel 安装在 /opt，你只需要：
>
> ```bash
> bash <(curl -sSL https://fastly.jsdelivr.net/gh/pooneyy/1Panel-Appstore@script/update_local_appstore.sh) \
>   --1panel-path /opt \
>   --app app_name_1…
