---
repo: "qsc20001102/astrbot_plugin_jx3"
name: "astrbot_plugin_jx3"
description: "Aggregates game data for 剑网三 (JX3), providing queries, team management, image rendering, local danger-avoidance records, and real-time event push."
originalDescription: "聚合剑网三游戏数据，提供查询、团队管理、图片渲染、本地避雷和实时事件推送。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qsc20001102/astrbot_plugin_jx3"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [60, 20]
stars: 14
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-01T07:59:06Z"
lastCommitAt: "2026-10-29T10:35:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 71
maintainers: ["ShengCaiQiu", "Junnstoy", "qsc20001102"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb796a0dbb4d56b8be345395c18cd72263f10f84a4c4181aaa639ec649a09320/qsc20001102/astrbot_plugin_jx3"
---

# astrbot_plugin_jx3

  A comprehensive data query plugin for 剑网3 built on AstrBot.

`astrbot_plugin_jx3` queries 《剑网3》 game data through data sources such as JX3API and JX3BOX. Depending on the feature, it outputs plain text, remote images, HTML-rendered images, image-and-text messages, or results from a two-step interaction. It also provides per-session server binding, per-session access control, real-time event push, session-isolated danger-avoidance records, and visual cache management.

## Features

- Chinese trigger words cover activities, famous weapons (名剑), rankings, trading, factions, characters, encounters (奇遇), Hundred Battles (百战), housing (家园), community, and more.
- Supports plain text, remote images, HTML/Jinja2-rendered images, and image-and-text message chains.
- Commands `宏`, `资历`, and `装备`, as well as the guild, faction, and other ranking lists, use a two-step interaction with a 15-second window. If the user does not respond in time, the first option is selected by default.
- Query images use a unified light, high-contrast theme. Render sharpness, output format, and JPEG quality can be adjusted on the plugin configuration page. All HTML-rendered images display…
