---
repo: "hpy666666/xiaozhi-esp32-pet"
name: "xiaozhi-esp32-pet"
description: "基于xiaozhi-esp32的桌面宠物机器人，增加舵机控制和动态表情系统 | Desktop pet robot based on xiaozhi-esp32 with   servo control and dynamic emotion system"
readmeQualityOk: true
url: "https://github.com/hpy666666/xiaozhi-esp32-pet"
language: "C++"
languages: ["C++"]
languagePcts: [62]
stars: 33
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-09T14:12:40Z"
lastCommitAt: "2026-08-26T04:16:45Z"
lastReleaseAt: "2025-11-09T14:39:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 11
maintainers: ["hpy666666"]
openGraphImageUrl: "https://opengraph.githubassets.com/162c43573021d7f28daf791b194524c60e47e0cd54f7f8b01f5d3a77295526ac/hpy666666/xiaozhi-esp32-pet"
---

# Xiaozhi ESP32 Pet - 桌面宠物机器人 🐾

> 🔗 **Fork 自** [xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) | 专注于 **xiaozhi-pet 桌面宠物机器人** 版本的开发和优化

**本项目基于原版 xiaozhi-esp32，专注于桌面宠物机器人的开发。增加了4舵机控制系统和动态表情系统，让小智真正"动"起来！**

> 💡 **注意**: 本仓库只维护 **xiaozhi-pet** 板子配置。如需其他开发板支持（ESP-BOX、M5Stack等），请参考原项目 [xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) 或查看 [docs/other-boards/](https://github.com/hpy666666/xiaozhi-esp32-pet/blob/HEAD/docs/other-boards/)。

## 📸 项目展示

### 整体外观

</a>

### 硬件细节

<table>
  <tr>
    <td align="center" width="50%">
      </a>
      <br/>左侧视角 - 舵机布局
    </td>
    <td align="center" width="50%">
      </a>
      <br/>右侧视角 - OLED屏幕
    </td>
  </tr>
</table>

> 💡 **提示**: 点击图片可查看大图

</div>

---

## 📖 目录

- [新增特性](#-新增特性)
- [硬件需求](#-硬件需求)
  - [硬件设计文件](#-硬件设计文件)
- [快速开始](#-快速开始)
- [动画制作工具](#-动画制作工具)
- [常见问题](#-常见问题)
- [贡献指南](#-贡献指南)
- [致谢](#-致谢)

---

## ✨ 新增特性

相比原版 [xiaozhi-esp32](https://github.com/78/xiaozhi-esp32)，本项目新增了以下功能：

### 🤖 舵机控制系统
- ✅ **4个舵机驱动**: 使用ESP32的LEDC PWM控制4个SG90舵机
- ✅ **13种预定义动作**: 站立、趴下、坐下、前进、后退、左转、右转、挥手、摇头、点头等
- ✅ **MCP协议集成**: 通过语音指令控制宠物动作
- ✅ **分时启动优化**: 解决多舵机同时启动的电流冲击问题

### 😊 动态表情系统
- ✅ **慵懒眨眼GIF动画**: 基于LVGL v9的GIF动画，5.8秒循环，70帧
- ✅…
