---
repo: "xiaoluoshen/GreenWall-Mobile"
name: "GreenWall-Mobile"
description: "GreenWall Mobile "
readmeQualityOk: true
url: "https://github.com/xiaoluoshen/GreenWall-Mobile"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 31
forks: 13
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-10T17:58:38Z"
lastCommitAt: "2026-08-14T05:14:23Z"
lastReleaseAt: "2026-08-14T05:15:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 25
maintainers: ["xiaoluoshen"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a3d2d57c9fa94b19555451387a545ed615434e8ff2d4f5be54960b120c3efd2/xiaoluoshen/GreenWall-Mobile"
---

# GreenWall Mobile

</p>

  <strong>在手机上给你的 GitHub 贡献墙画画</strong>
</p>

  </a>
  </a>
  </a>
  </a>
</p>

---

## 简介

GreenWall Mobile 是 [GreenWall](https://github.com/zmrlft/GreenWall) 的移动端版本，基于 React Native（Expo）开发。它可以让你在手机上自由地在 GitHub 贡献热力图上绘画，然后通过 GitHub API 一键同步到你的 GitHub 账号，打造个性化的贡献墙。

UI 设计参考了 [MIUIX](https://github.com/compose-miuix-ui/miuix) 风格，大圆角卡片搭配简洁列表布局，支持深色 / 浅色主题自动切换。

## 功能特性

| 功能 | 说明 |
|------|------|
| **贡献日历绘制** | 完整的 52 周 x 7 天网格，支持触摸拖拽绘制 |
| **画笔 / 橡皮擦** | 自由切换绘制和擦除模式 |
| **4 档强度** | 对应 GitHub 贡献的 4 种绿色深度（1 / 3 / 6 / 9） |
| **字符图案** | 内置 A-Z、a-z、0-9 及常用符号图案，一键盖章到日历 |
| **年份选择** | 支持近 10 年的年份切换，想画哪年画哪年 |
| **撤销 / 重做** | 操作可回退，不怕画错 |
| **全绿 / 重置** | 一键填满或清空整个日历 |
| **GitHub 集成** | 通过 Personal Access Token 登录，创建仓库并推送贡献数据 |
| **中英文切换** | 支持简体中文和英文界面 |
| **深色模式** | 自动适配系统深色 / 浅色主题 |
| **本地存储** | 绘制数据和设置自动保存到本地 |
| **贡献刷新修复** | 改进了时间戳处理和邮箱获取逻辑，确保贡献能正确显示 |

## 使用说明

### 1. 绘制贡献图

打开应用后进入「画布」页面，选择年份，然后用手指在日历网格上绘制。底部工具栏可以切换画笔 / 橡皮擦，以及调节绿色强度。

### 2. 使用字符图案

切换到「字符」页面，选择想要的字符（支持大写字母、小写字母、数字和符号），点击即可将图案放置到当前日历上。

### 3. 推送到 GitHub

进入「设置」页面，输入你的 GitHub Personal Access Token 完成登录。登录后回到画布页面，点击「推送」按钮，填写仓库名称，应用会自动创建仓库并将贡献数据推送到 GitHub。

> **关于 Token 安全：** Token…
