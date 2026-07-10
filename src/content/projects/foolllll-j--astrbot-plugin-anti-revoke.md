---
repo: "Foolllll-J/astrbot_plugin_anti_revoke"
name: "astrbot_plugin_anti_revoke"
description: "一款为 AstrBot 设计的 QQ 防撤回插件。"
readmeQualityOk: true
url: "https://github.com/Foolllll-J/astrbot_plugin_anti_revoke"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 2
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-09T11:34:08Z"
lastCommitAt: "2026-07-10T04:29:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 32
maintainers: ["Foolllll-J", "Thetail001"]
openGraphImageUrl: "https://opengraph.githubassets.com/86b7c267a5124d400226acb9bef9fd813f1e3a117a18a92c0beb828aca230bc0/Foolllll-J/astrbot_plugin_anti_revoke"
---

# 📼 QQ 防撤回

<i>🍃 声落有声，影过留影</i>

</div>

## ✨ 简介

一款为 [**AstrBot**](https://github.com/AstrBotDevs/AstrBot) 设计的 QQ 防撤回插件，支持对多种消息类型的监控与恢复，包括文字、图片、语音、视频、文件、聊天记录以及小程序等。

---

## 📖 使用须知

| 项目               | 描述                                                                                                                       |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **支持平台** | 仅支持 **`aiocqhttp`** 平台。                                                                                             |
| **监控范围** | 仅支持 **群聊** 消息的撤回监控。                                                                                      |
| **消息类型** | 支持聊天场景的所有消息类型。 |

> [!CAUTION]
> 如果会话配置了语音转文本，可能会导致语音消息的撤回监控无法正常工作。

---

## 🎮 指令

> 以下指令仅限 **管理员** 使用

| 指令 | 参数 | 描述 |
| :--- | :--- | :--- |
| **`撤回转发`** | `群号` `目标会话` | 为指定群设置转发目标。格式：`@数字` (私聊), `#数字` (群聊)。支持多次设置以转发到多个目标。 |
| **`取消撤回转发`** | `群号` `[目标会话]` | 取消指定群的转发目标。如果不带目标参数，则重置该群回默认转发配置。 |
| **`查看撤回转发`** | 无 | 查看当前所有自定义的撤回转发配置。 |

---

## ⚙️ 配置

首次加载后，请在 AstrBot 后台 -> 插件 页面找到本插件进行设置，所有配置项都有详细的说明和介绍。

---

## 📅 更新日志

详见…
