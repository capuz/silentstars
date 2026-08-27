---
repo: "zzzhhe999/Mihomo-Script-Rules"
name: "Mihomo-Script-Rules"
description: "面向 Bettbox 的 mihomo 订阅预处理脚本,QuickJS 引擎 / ES2020 语法。挂载订阅即自动接管:节点自动重命名、垃圾节点过滤、16 地区 + 17 服务分流、DNS 防污染、QUIC 管控。"
readmeQualityOk: true
url: "https://github.com/zzzhhe999/Mihomo-Script-Rules"
homepage: "https://github.com/zzzhhe999/Mihomo-Script-Rules"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 26
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T05:44:00Z"
lastCommitAt: "2026-08-27T14:28:08Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 45
maintainers: ["zzzhhe999", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/87712219491a5d9c0022c13379c10314a2e92467a1b649c0f7141b78b00c586a/zzzhhe999/Mihomo-Script-Rules"
---

# Mihomo (Clash Meta) 智能预处理脚本

</p>

  <b>为 Bettbox 深度优化的订阅预处理脚本 · QuickJS 引擎 · ES2020 语法 · GitHub Actions 全自动维护</b>
</p>

---

## 目录

- [1.简介](#1简介)
- [2.快速上手](#2快速上手)
- [3.功能](#3功能)
  - [3.1 服务策略组](#31-服务策略组)
  - [3.2 地区与倍率分组](#32-地区与倍率分组)
- [4.核心特性](#4核心特性)
  - [4.1 节点处理](#41-节点处理)
  - [4.2 策略组架构](#42-策略组架构)
  - [4.3 DNS 防污染](#43-dns-防污染)
  - [4.4 网络特性](#44-网络特性)
- [5.个性化定制](#5个性化定制)
  - [5.1 服务开关](#51-服务开关)
  - [5.2 地区与倍率开关](#52-地区与倍率开关)
  - [5.3 全局开关](#53-全局开关)
  - [5.4 过滤正则](#54-过滤正则)
- [6.规则集与自动更新](#6规则集与自动更新)
- [7.鸣谢](#7鸣谢)
- [8.许可证](#8许可证)

---

## 1.简介

本项目是运行在 **Bettbox**（Mihomo 内核 / QuickJS 引擎）内的 **JavaScript 订阅预处理脚本**。

机场原始订阅普遍存在三类问题：节点名混入广告、过期提醒等杂质；缺少分流策略；DNS 容易泄漏污染。脚本接管订阅后自动完成四件事：

- **节点重命名**：按国家/地区 + 倍率统一命名，自动移除杂质节点
- **策略组分流**：生成地区组、服务组、倍率组，开箱即用
- **DNS 防污染**：Fake-IP + 国内外 DNS 分流，杜绝泄漏
- **按需定制**：每个服务、地区、功能均可独立开关

---

## 2.快速上手

### 2.1 获取脚本链接

**主链接：**

```
https://raw.githubusercontent.com/zzzhhe999/Mihomo-Script-Rules/refs/heads/main/Mihomo-Script-Rules.js
```

**CDN 加速镜像：**

```
https://fastly.jsdelivr.net/gh/zzzhhe999/Mihomo-Script-Rules@main/Mihomo-Script-Rules.js
```

### 2.2 在 Bettbox 客户端中导入

Ⅰ 进入 APP → 点击底部 **更多**

Ⅱ 找到 **脚本** 功能入口 → 点击右下角 **+** → 选择…
