---
repo: "Neroliu/BBBUID"
name: "BBBUID"
description: "崩坏3 (Honkai Impact 3rd) plugin for gsuid_core - 签到、UID管理、WIKI查询"
url: "https://github.com/Neroliu/BBBUID"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-07T16:21:20Z"
lastCommitAt: "2026-06-25T06:40:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 59
maintainers: ["Neroliu"]
openGraphImageUrl: "https://opengraph.githubassets.com/7922b80dea09a9b80b6bd51d7193845d4f77596d01eaac1322ceb73014feb431/Neroliu/BBBUID"
---

# BBBUID

</p>
<h1 align="center">BBBUID 1.0.0</h1>
<h4 align="center">支持OneBot(QQ)、QQ频道、微信、开黑啦、Telegram的崩坏3插件</h4>
</div>

## 丨功能一览

| 功能 | 说明 |
|------|------|
| 米游社签到 | 支持手动签到与每日自动签到（需绑定Cookie） |
| UID管理 | 绑定/切换/删除/查看UID |
| 数据查询 | 女武神、便笺、深渊、战场、往世乐土查询 |
| WIKI查询 | 角色、武器、圣痕、人偶、协同者图鉴查询 |
| WIKI搜索 | 关键词搜索崩坏3百科内容 |
| 乐土攻略 | 按关键词查询往世乐土攻略图，图片按需缓存 |
| 别名管理 | 自定义角色别名 |
| 定时任务 | 每日凌晨2点自动签到（需开启订阅） |

## 丨命令列表

### 基础命令
| 命令 | 说明 |
|------|------|
| `bbb绑定uid <uid>` | 绑定崩坏3 UID |
| `bbb切换uid` | 切换已绑定的UID |
| `bbb删除uid <uid>` | 解绑UID |
| `bbb查看uid` | 查看已绑定的UID列表 |
| `bbb帮助` | 查看帮助信息 |

### 签到命令
| 命令 | 说明 |
|------|------|
| `bbb签到` | 手动执行米游社签到 |
| `bbb开启自动签到` | 开启每日自动签到 |
| `bbb关闭自动签到` | 关闭每日自动签到 |
| `bbb全部重签` | 管理员命令，重新执行所有签到 |

### 数据查询命令
| 命令 | 说明 |
|------|------|
| `bbb查询` | 查询女武神首页/概况 |
| `bbb便笺` | 查询实时便笺（体力/日程） |
| `bbb深渊` | 查询深渊/超弦空间战报 |
| `bbb战场` | 查询战场战报/记忆战场 |
| `bbb往世乐土` | 查询往世乐土记录 |
| `bbb刷新面板` | 刷新角色数据缓存 |

### WIKI查询命令
| 命令 | 说明 |
|------|------|
| `bbb角色图鉴 <名称>` | 查询女武神角色信息 |
| `bbb武器图鉴 <名称>` | 查询武器信息 |
| `bbb圣痕图鉴 <名称>` | 查询圣痕信息 |
| `bbb人偶图鉴 <名称>` | 查询人偶信息 |
| `bbb协同者图鉴 <名称>` | 查询协同者信息 |
| `bbbwiki <关键词>` | 搜索崩坏3百科 |

### 乐土攻略命令
| 命令 | 说明 |
|------|------|
| `bbb乐土攻略 <关键词>`…
