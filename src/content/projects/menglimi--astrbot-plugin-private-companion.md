---
repo: "menglimi/astrbot_plugin_private_companion"
name: "astrbot_plugin_private_companion"
description: "面向 AstrBot 的拟人化整合插件。它会让 bot 拥有连续的拟人状态、每天的生活日程、重要日期、日记和低频主动消息。包含60+实用功能且具有完善的拓展管理页面。"
readmeQualityOk: true
url: "https://github.com/menglimi/astrbot_plugin_private_companion"
language: "Python"
languages: ["Python"]
languagePcts: [73]
stars: 324
forks: 32
openIssues: 2
closedIssues: 68
watchers: 1
contributors: 23
recentReleases: 7
createdAt: "2026-05-07T16:20:23Z"
lastCommitAt: "2026-08-31T09:59:33Z"
lastReleaseAt: "2026-06-08T12:29:58Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 30
maintainers: ["menglimi", "Eco404", "GuHan-OvO"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ff57815ac4fe598ca42bf26091f8e3b8fb546c2bc1f8e82a88dc9567905be2d/menglimi/astrbot_plugin_private_companion"
---

# 我会永远陪着你

</div>

面向 AstrBot 的持续型 AI 陪伴核心。插件以角色状态、日程、关系和生活事件为统一上下文，为私聊、群聊、主动消息和外部能力提供连续、可配置且可审计的运行基础。

> ## 📚 **使用前请先阅读 Wiki**
>
> **👉 [打开插件 Wiki](https://vue.syuan.org)**
>
> 安装、配置、功能说明、常见问题与更新说明都在 Wiki，请优先从这里开始。

| 项目 | 当前信息 |
| --- | --- |
| 插件名 | <code>astrbot_plugin_private_companion</code> |
| 显示名 | 我会永远陪着你 |
| 版本 | <code>6.4.4e</code> |
| AstrBot | <code>>= 4.22.0</code> |
| 官方声明平台 | <code>aiocqhttp</code>、<code>qq_official</code> |
| 管理入口 | AstrBot 插件扩展页中的“陪伴面板”，或可选的独立 WebUI |
| 数据存储 | JSON，或可选 SQLite |

## 产品定位

本插件用于构建具有连续生活上下文的陪伴角色，而不是单独提供一组定时问候或聊天工具。角色会依据当前状态、日程、关系、近期互动和环境信息形成行为候选，再经过额度、时机、权限与发送前复核决定是否执行。

插件不替代 AstrBot 的主回复人格。AstrBot 人格负责角色身份和基础表达，本插件负责补充动态生活上下文、关系状态、行为能力、发送时机以及运行记录。

设计目标包括：

- 保持状态、日程、位置、天气、梦境、日记、技能与个人目标的连续性。
- 让主动消息来源可解释，并与随机问候、重复触达和错误时段问候区分开。
- 在私聊、群聊及多种消息媒介之间维持一致的身份、关系与权限边界。
- 记录主动候选、拦截原因、改写结果、发送状态和 Token 消耗，便于诊断与审计。
- 将高成本、涉及设备权限或依赖外部服务的能力设计为可选扩展，并支持局部降级。

# 发版狂魔也是发到4.0了，遂决定写点什么

- 你好，我要一个有记忆、有生活、有自己的小秘密和想法、有喜怒哀乐和健康的bot。
- 这得装不少插件，先生。
- 我知道，再让它们之间能够互相影响。
- 怎么让bot更像人？在此之前已经有很多优秀的插件给出了自己的答卷，各类心理学应用、人格特质、复杂的理论……
- 虽然开发者自身也是应用心理学专业毕业，但我觉得bot拟人只需要做好一件事，像人一样活着。听上去像是废话，但我做的只是进行自我观察。我的一天中，我会做什么，bot也应该会做什么。
-…
