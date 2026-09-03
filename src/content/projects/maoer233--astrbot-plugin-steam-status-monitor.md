---
repo: "Maoer233/astrbot_plugin_steam_status_monitor"
name: "astrbot_plugin_steam_status_monitor"
description: "监控Steam指定玩家的游戏状态变更，并实时推送至群聊。"
readmeQualityOk: true
url: "https://github.com/Maoer233/astrbot_plugin_steam_status_monitor"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 207
forks: 26
openIssues: 2
closedIssues: 25
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-06-03T06:32:01Z"
lastCommitAt: "2026-09-03T08:13:26Z"
lastReleaseAt: "2026-01-24T08:34:14Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 41
maintainers: ["Maoer233", "OLRainM", "e-legy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7931e8a92f4695cde2e4ad74a9a1a2fe319634a619a0236638d893ddfa2f9e5/Maoer233/astrbot_plugin_steam_status_monitor"
discussionCount: 0
---

# Steam 状态监控插件V3    [](https://github.com/Maoer233/astrbot_plugin_steam_status_monitor) [](https://github.com/Maoer233/astrbot_plugin_steam_status_monitor) [](https://github.com/Maoer233/astrbot_plugin_steam_status_monitor/pulls)

## 访问统计

本插件是专为AstrBot设计的插件，用于定时轮询 Steam Web API，监控指定玩家的在线/离线/游戏状态变更，并在状态变化时推送通知。支持多 SteamID 监控，自动记录游玩日志，支持群聊分组，数据持久化，支持丰富指令。

## 功能特性
- 支持定时轮询多个 SteamID 的状态，分群管理，每个群聊可独立配置监控玩家
- 检测玩家上线、下线、开始/切换/退出游戏等状态变更，自动推送游戏启动/关闭提醒
- **游玩会话状态机**：一局游戏只有一个所有者；切到另一款游戏立即结算上一局；同一游戏 180 秒内假退出不重复推结束卡
- **监控开关持久化**：`/steam on` / `/steam off` 写入 `group_switches.json`，重启后仍记住本群开关
- 成就变动自动推送提醒
- **头像框渲染**：开始游戏/结束游戏/list/rank 均支持 Steam 头像框，本地优先缓存 7 天
- **游戏时长排行榜**：支持  / ，按数字天数查询，凌晨 4:00 天分界
- 游戏时长排行榜：支持  本群排行和  所有群排行，可按数字天数查询
- 智能轮询 + 固定轮询双模式可切换，默认为1-30分钟查询一次状态，取决于steam的上次在线时间
- 持久化记录玩家游玩日志，重启bot后状态不会丢失
- **批量查询优化**：采用 Steam 官方批量接口（单次最多 100 个 ID），大幅降低 API 调用次数，从根本上避免触发 Steam 限流（HTTP 429 / x-eresult: 84）
- **多种 ID 输入格式**：`addid` 现支持 SteamID64、个人资料链接、自定义 vanity URL、`s.team` 短链、8 位好友码等多种格式
- **通知开关精细化**：可独立控制游戏结束通知、成就推送、以及图片/文本推送方式
- **结束卡长名**：长游戏名按开始卡同一套策略拉长画布并换行，不再截断
- **无效会话过滤**：跳过空群号 / `GroupMessage:0_` 等无法投递的 QQ 会话，避免主动推送报错
- **超时不堵结束卡**：Steam 查询超时期间仍结算到期会话并立刻推送结束通知，不会攒到下次开局
-…
