---
repo: "AWMC-TEAM/maimaiDX-QueryBot"
name: "maimaiDX-QueryBot"
description: "maimaiDX record query, and with a lot of feature."
readmeQualityOk: true
url: "https://github.com/AWMC-TEAM/maimaiDX-QueryBot"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 10
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-02T00:31:00Z"
lastCommitAt: "2026-08-23T04:07:59Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["Michaelwucoc", "xiaomuahua666"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ff700bc6eda7949a14e04d199236ff1db653498c6a983899650bf81e5914235/AWMC-TEAM/maimaiDX-QueryBot"
---

# maimaiDX QueryBot

> **衍生项目声明：本项目基于 [Yuri-YuzuChaN/maimaiDX](https://github.com/Yuri-YuzuChaN/maimaiDX) 修改。**

面向 NoneBot2 的舞萌 DX 查询与账号服务插件，由 [AWMC TEAM](https://github.com/AWMC-TEAM) 维护。原项目版权与贡献归原作者及其贡献者所有，详细说明见 [NOTICE](https://github.com/AWMC-TEAM/maimaiDX-QueryBot/blob/HEAD/NOTICE)。

## 功能特性

- **成绩查询**：b50 / b40、定数查询、谱面详情、个人成绩
- **难度 / 版本筛选**：按难度（紫 / 13+ 等）或版本（镜代 / 爽代等）筛选 b50
- **历代版本 b50 / b35**：使用指定版本定数重算 rating
- **定数表 / 完成表**：等级定数表、等级完成表、牌子完成表（晓极完成表等）
- **进度与推荐**：牌子进度、等级进度、吃分推荐、弱项处方单、目标 Rating 沙盘、B50 风险预警、周报 / 月报 / 日报
- **数据存储**：开启本地成绩快照，支持存档查询与进步报告
- **群功能**：我在群里有多菜、群 rating 排行、群单曲排行、友人对战（含段位 CP）、对战战绩 Head-to-Head
- **PC 数系统**：机台登录、曲目 PC 数统计、PC 数排行榜
- **AWMCNET 默认数据源**：首次查分自动合并水鱼/落雪可用成绩并迁移到 AWMCNET
- **查分器上传**：二维码始终写入 AWMCNET；已绑定水鱼/落雪时额外同步对应平台
- **统一账号**：原 maibot 的账号绑定、Token、上传、票券与状态功能已合并，无需单独运行 Koishi Bot
- **管理审计**：统一 REF_ID 请求链路、敏感信息脱敏、用户封禁与内置管理 WebUI
- **倍率票 / 道具**：获取倍率票、查询票券、添加收藏品
- **谱面标签 / 印象**：v.wmc.pub 谱面标签、难度分析与谱面印象
- **数据源切换**：水鱼 API 或本地 `dxdata.json`
- **双 Bot 模式**：保留 OneBot 与腾讯官方 QQ Bot 两种模式；官方 QQ 的加密 openid
  通过论坛 OAuth 或管理员绑定映射到原 QQ 号，群级猜歌数据也可迁移。

## 安装

```bash
pip install nonebot-plugin-maimaidx
```

从当前仓库安装开发版：

```bash
git clone…
