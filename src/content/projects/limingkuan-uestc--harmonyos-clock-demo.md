---
repo: "LiMingKuan-UESTC/HarmonyOs-Clock-Demo"
name: "HarmonyOs-Clock-Demo"
description: "一个基于 HarmonyOS ArkTS 的翻页时钟与饭点提醒 Demo 应用，支持三餐闹钟设置与通知提醒。"
url: "https://github.com/LiMingKuan-UESTC/HarmonyOs-Clock-Demo"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["arkts", "arkui", "clock", "harmonyos", "student-project"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-01-23T07:41:25Z"
lastCommitAt: "2026-06-24T06:39:50Z"
lastReleaseAt: "2026-06-17T11:25:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 20
maintainers: ["LiMingKuan-UESTC", "DEMON-coding"]
openGraphImageUrl: "https://opengraph.githubassets.com/b110e570f57821b0bbaab86517f26b5f9a597b5c70fed98135b028c16f044c26/LiMingKuan-UESTC/HarmonyOs-Clock-Demo"
---

<h1>🕒 饭点提醒 (HarmonyOS Clock-Demo)</h1>
  <p>一个基于 HarmonyOS + ArkTS 的轻量化翻页时钟与饭点提醒应用</p>

  <p>
  </p>
</div>

<br/>

## 📖 项目简介

本项目旨在为大学生提供一个轻量化、贴心的饭点提醒工具。<br>

大学生因为课程、实验等原因常常错过饭点，而按时就餐对于健康至关重要。本项目旨在提供一个轻量化、贴心的提醒工具。应用首屏提供高颜值的**翻页时钟**展示当前时间，并允许用户一键设置早餐、午餐、晚餐的系统级通知提醒。

## ✨ 核心功能

- ⏱️ **翻页时钟**：实时动态展示当前时间，提供优秀的视觉交互体验。
- 🔔 **三餐提醒**：预置早/午/晚三个饭点，支持点击时间区域自定义修改提醒时间。
- ⚙️ **系统通知接入**：通过系统底层的通知权限申请与本地通知分发，确保提醒准时到达。
- 🎛️ **状态管理**：采用卡片式布局与状态开关控制，直观易用。

### ✅ 首页

- 实时展示当前时间（翻页样式）
- 提供按钮跳转到提醒设置页面

### ✅ 提醒设置页

- 预置三个饭点提醒项：早餐 / 午餐 / 晚餐
- 点击时间区域可对提醒时间进行修改
- 右侧显示开关，可启用 / 关闭提醒
- 启用后，在设定时间触发系统通知提醒（已申请权限并发布通知）

## 📷 效果展示
<br>
</div>
<br>
- 注：上方图片依次展示了 通知权限申请、首页时钟、提醒设置页、触发提醒、时间修改页 的实际运行结果。

## 🛠 运行与开发

1. 克隆仓库到本地

   ```bash
   git clone https://github.com/LiMingKuan-UESTC/HarmonyOs-Clock-Demo.git
   ```

2. 在 **DevEco Studio** 中打开项目

   * 使用 HarmonyOS SDK（建议 API Level 对应最新版本）
   * 等待项目索引 / 依赖构建完成

3. 连接设备或打开模拟器

   * 运行应用即可体验

## 📦 技术栈

| 技术            | 说明                |
| ------------- | ----------------- |
| HarmonyOS     | 应用运行平台            |
| ArkTS         | ArkUI 声明式 UI 开发语言 |
| DevEco Studio | 官方 IDE，用于开发与调试    |
| 系统通知          | 用于闹钟提醒通知授权与发布     |

## 💡 设计思路

*…
