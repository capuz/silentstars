---
repo: "LAN-TINA-WS/dsh-gui-customization"
name: "dsh-gui-customization"
description: "DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。"
readmeQualityOk: true
url: "https://github.com/LAN-TINA-WS/dsh-gui-customization"
homepage: "https://github.com/LAN-TINA-WS/dsh-gui-customization/releases/latest"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["deepseek-harness", "dsh", "dsh-plugin", "skin", "theme", "deepseek"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-14T08:29:53Z"
lastCommitAt: "2026-08-16T04:09:48Z"
lastReleaseAt: "2026-08-15T15:19:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["LAN-TINA-WS", "FuturePioneer-3"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1333966638/dd481df3-476e-4429-a584-018bd5556ab2"
---

# dsh-gui-customization — DeepSeek Harness 时装工坊

中文 | [English](https://github.com/LAN-TINA-WS/dsh-gui-customization/blob/HEAD/README.en.md)

## dsh-gui-customization

DeepSeek Harness Web UI 的**主题定制插件**：Nous 蓝默认配色（明暗双模式）、四套预设与 13 色自定义、氛围光（光晕/呼吸/位置实时可调）、动态背景（图片/视频，原生文件选择 + 内置预设「deepseek娘01」+ 背景透明度滑块 + 侧边栏透明开关）、配色导入/导出，中英双语、设置持久化、跨重启保留。配置入口：设置 → 界面设定。

> [最新 Release](https://github.com/LAN-TINA-WS/dsh-gui-customization/releases/latest) · [dsh-plugin 生态](https://github.com/topics/dsh-plugin) · [反馈](https://github.com/LAN-TINA-WS/dsh-gui-customization/issues/1)

## 成品展示

| 能力 | 说明 |
| --- | --- |
| 配色 | Nous 蓝默认主题（明暗双模式）+ 系统默认/Nous 蓝/靛紫/翡翠绿四预设 + 13 色自定义 |
| 氛围光 | 角落光晕随主题主色联动；强度、呼吸幅度、位置（5 模式）实时可调 |
| 动态背景 | 图片（原生选文件 + 预设「deepseek娘01」）与视频（静音循环）双模式，互斥切换；主区透出 + 明暗自适应遮罩；背景透明度滑块 + 侧边栏透明开关；IndexedDB 持久化 |
| 导入/导出 | 配色方案一键导出 JSON（自动复制剪贴板）、粘贴导入即应用 |
| 双语 | 中 / 英文案随 DSH 语言设置即时切换 |
| 持久化 | localStorage + IndexedDB，刷新页面与重启 DSH 后完整恢复 |
| 正式形态 | 组合插件，跨重启存在，出现在「设置 → 插件」区 |

## 快速安装

**GitHub 直装（推荐，国内网络最快，免等 npm）**：

```sh
dsh plugin --profile web add github:LAN-TINA-WS/dsh-gui-customization#path:packages/dsh-gui-customization
# 重启 dsh web，打开「设置 → 界面设定」开始配置
```

**npm 安装（一条命令）**：

```sh
dsh plugin…
