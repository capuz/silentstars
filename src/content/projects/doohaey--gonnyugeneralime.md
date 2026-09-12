---
repo: "Doohaey/GonnyuGeneralIME"
name: "GonnyuGeneralIME"
description: "多地区通用赣语输入法，兼容赣语与普通话拼音"
readmeQualityOk: true
url: "https://github.com/Doohaey/GonnyuGeneralIME"
language: "Rust"
languages: ["Rust"]
languagePcts: [57]
topics: ["android", "chinese", "cross-platform", "dialect", "dictionary", "gan", "ganyu", "ime", "ios", "linux"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-27T14:59:19Z"
lastCommitAt: "2026-09-12T08:03:41Z"
lastReleaseAt: "2026-09-04T10:23:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Doohaey"]
openGraphImageUrl: "https://opengraph.githubassets.com/85f1c9aa083aa841d4ac89fe47fcbe2b1b1e8222a4c228ed73318bea1babc5d1/Doohaey/GonnyuGeneralIME"
---

# 赣语通用输入法 GonnyuGeneralIME

> 一种属于赣鄱大地的数字化书写方案。

目前支持：**南昌话、分宜话**，更多地区等你来接入！

**一键安装/简单易用/日常可用的赣语输入法，会拼音就能使用，方言拼音与普通话兼容支持。不会说赣语也能用来玩！用赣语思维也可以轻松大段输出普通话文本（比如本文）！**

**现已支持全平台快捷安装（apk, windows installer等等）以及各平台Rime安装包。**

上方按钮列出南昌话与分宜话的 Rime 方案仓库。其他安装方案请在下方[安装方法](#安装方法)小节找到对应平台内容下载并且安装。

## 测试版本 0.2.4-pre.14

- fix(mobile): 移除重复的编辑器文本预览；缓存标签不再覆盖候选。
- feat(mobile): 补齐数字页退格与长按连续删除，新增中英文切换。
- fix(mobile): 统一拼音页与数字页的方案切换键位置，移除重复引号键。
- fix(rime): 候选每页统一为 9 项，与数字选词键一致。

- fix(windows): 修复 Windows 安装器预发布版本升级。
- fix(rime): 修复 Rime 手机端符号输入触发默认候选。
- feat(windows): 接入 TSF UI-less 候选协议，支持由系统搜索等宿主接管候选显示。

## 目录

- [赣语通用输入法 GonnyuGeneralIME](#赣语通用输入法-gonnyugeneralime)
  - [测试版本 0.2.4-pre.14](#测试版本-024-pre14)
  - [目录](#目录)
  - [简介](#简介)
    - [特色](#特色)
  - [功能演示](#功能演示)
    - [无需学习，凭感觉就可以打](#无需学习凭感觉就可以打)
    - [收词广泛，本地风土全概览，生僻输入无压力](#收词广泛本地风土全概览生僻输入无压力)
    - [赣语与普通话，同屏就能选](#赣语与普通话同屏就能选)
    - [普通话拼音，直达赣语](#普通话拼音直达赣语)
    - [文白异读，分得清也选得到](#文白异读分得清也选得到)
    - [多读音、新老派，都照顾到](#多读音新老派都照顾到)
  - [安装方法](#安装方法)
    - [macOS](#macos)
    - [iOS](#ios)
    - [Android](#android)
    - [Windows](#windows)
    - [Linux：Fcitx5](#linuxfcitx5)
    - [Rime](#rime)
  - [本输入法采用的赣语拼音方案](#本输入法采用的赣语拼音方案)
    - [声母](#声母)…
