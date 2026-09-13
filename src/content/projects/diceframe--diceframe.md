---
repo: "diceframe/diceframe"
name: "diceframe"
description: "一个可自部署的 AI跑团引擎（TRPG），多种游戏规则 COC/DND/自由酒馆等，支持 WebUI、多人游戏、世界书、骰子检定、状态追踪和群聊 Bot。 | A self-hostable AI tabletop RPG platform with multiple rule systems (COC/DND/free tavern etc.), supporting WebUI, multiplayer, lorebook, dice checks, state tracking, and chat bot."
readmeQualityOk: true
url: "https://github.com/diceframe/diceframe"
homepage: "https://diceframe.com"
language: "Python"
languages: ["Python"]
languagePcts: [67]
topics: ["ai", "ai-dungeon-master", "ai-gm", "call-of-cthulhu", "dice", "dice-roller", "dnd", "dnd5e", "game-master", "role-playing-game"]
stars: 52
forks: 6
openIssues: 6
closedIssues: 10
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-07-15T05:45:01Z"
lastCommitAt: "2026-09-13T08:30:04Z"
lastReleaseAt: "2026-07-30T03:22:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 42
maintainers: ["EOEOY", "Guan612", "tai1747563448-max"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ad37c581627dc7ff72857fc52846302325ced82266bc470b843eb264f267179/diceframe/diceframe"
---

</p>

<h1 align="center">DiceFrame</h1>

DiceFrame 是一个可以自己部署的 **AI 跑团引擎**，支持 **D&D / CoC / 自定义规则**与**多人 WebUI**。

它把 Web 桌面、角色卡、世界书、骰子、状态变动、剧情日志和群聊 Bot 接到同一个游戏状态里。玩家用自然语言说“我想做什么”，系统负责把这句话交给 GM 模型、处理骰子与状态变化，并把结果同步给网页或群聊里的其他玩家。

这个项目适合几种场景：

- 一个人试跑世界观，看看一个设定能不能玩起来。
- 小团在浏览器里联机，由一个人当 GM 管理入口和节奏。
- 群聊里跑团，玩家用 `@bot` 提交行动、查状态；需要检定时系统自动判断并掷骰。
- 自己改规则、世界书和角色模板，做一套私人跑团工具。

当前版本仍处于早期发布阶段。功能已经能跑，但接口、存档结构和文档还会继续整理。

## 交流与反馈

问题反馈和改进建议请优先通过 [GitHub Issues](https://github.com/diceframe/diceframe/issues) 提交，代码贡献欢迎发起 PR。提交前请阅读 [贡献指南](https://github.com/diceframe/diceframe/blob/HEAD/CONTRIBUTING.md)。

QQ 交流群：1060613588

## 功能概览

- WebUI：顶部以“总览 / 游玩 / 角色 / 内容 / 管理”组织主要工作区；内容区包含世界书、世界、冒险包和规则，管理区包含记忆、日志、插件和设置。
- 多人桌：邀请链接、玩家等待、暂离/回来、GM 强制推进、SSE 实时同步；实验性玩家直连可通过一次性链接码建立 WebRTC 对局。
- 骰子与状态：D&D 5e 轻量规则、自定义 d20、CoC 7e 轻量 d100 与无骰叙事分层处理；支持规则声明的优势/劣势、CoC 奖惩骰，以及 HP、理智、金币、物品、经验、死亡/复活等状态标签。
- 世界书：NPC、地点、物品、事件、谜题、势力等条目，按关键词注入上下文。
- 记忆与摘要：长团会压缩历史，也可以启用 embedding 做语义召回。
- AI 生成：世界、规则、角色、世界书条目都可以由模型辅助生成。
- 语音朗读：系统音色零配置回退，也可连接在线或本地 OpenAI 兼容 TTS、GPT-SoVITS；服务已有的 voice ID 和个人参考 WAV 可直接使用，商店音色预设完全可选。
- 系统生图：在模型路由中配置 OpenAI 兼容图像模型，为对话场景、角色头像、道具和地图背景生成图片；重大场景切换可在后台自动生成场景图。
- QQ /…
