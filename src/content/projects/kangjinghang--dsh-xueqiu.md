---
repo: "kangjinghang/dsh-xueqiu"
name: "dsh-xueqiu"
description: "雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。"
readmeQualityOk: true
url: "https://github.com/kangjinghang/dsh-xueqiu"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["cordis", "deepseek-harness", "dsh", "finance", "stock", "xueqiu", "dsh-plugin"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T03:37:04Z"
lastCommitAt: "2026-08-24T04:16:39Z"
lastReleaseAt: "2026-08-19T03:08:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["kangjinghang"]
openGraphImageUrl: "https://opengraph.githubassets.com/108a1ef5cd50bfca43ea5c6398b8ab9a4b831ec641acd3dd623ba20317127429/kangjinghang/dsh-xueqiu"
---

# dsh-xueqiu · 雪球 mini 行情面板

> DeepSeek Harness 上的雪球行情面板：**免登录**查看 A股/港股/美股实时行情、K线、分时、热榜、搜索、7×24 快讯与热议用户。面板嵌入输入框上方不遮挡对话，常驻行情区域显示四大指数与自选股涨跌，交易时段智能刷新。

中文 | [English](https://github.com/kangjinghang/dsh-xueqiu/blob/HEAD/README.en.md)

**[功能](#-功能) · [截图](#-截图) · [安装](#-安装) · [使用](#️-使用) · [稳定性](#-稳定性设计) · [质量与测试](#-质量与测试) · [FAQ](#-faq) · [更新日志](#-更新日志)**

## 🆚 与同类行情插件

| 能力 | dsh-xueqiu | 股票皮肤类插件 |
| --- | --- | --- |
| 面板形态 | 嵌入输入框上方，不遮挡对话 | 全局换肤/状态栏 |
| K线/分时 | 蜡烛图+均线+十字光标，7 档周期 | 部分有 |
| 热榜/快讯/KOL | 全有 | 多数无 |
| 数据源 | 雪球（社区数据：帖子/热议用户独有） | 腾讯/Yahoo 等 |
| 请求防护 | 闸门+看门狗+缓存+自愈+隐藏暂停 | 一般仅缓存 |
| 常驻行情区域 | 四大指数+12 自选两列平铺，⤡ 调宽 | 多为纯状态栏 |
| 主题 | 跟随 DSH 明暗 | 需整体换肤 |

## ✨ 功能

| 功能 | 说明 |
| --- | --- |
| 📊 实时行情 | 大盘指数（上证/深证/创业板/科创50）+ 自选股列表，涨红跌绿，**表头点击排序** |
| 🕯️ K线图 | **蜡烛图** + 成交量柱 + **MA5/10/20 均线** + **十字光标悬浮详情**（开高低收/涨跌/量/均线值），5分/15分/30分/60分/日K/周K/月K 7 档切换；**滚轮锚点缩放 + 拖拽平移**，拖到尽头自动追加更早历史，双击复位 |
| ⏱️ 分时图 | 价格线 + 均价线 + 昨收基准虚线，十字光标查任意分钟报价 |
| 🔥 热榜 | 雪球热门榜，A股/美股/港股/全球 切换 |
| 🔍 搜索 | 搜股票（一键加自选/看详情）、搜帖子 |
| 📰 快讯 | 7×24 实时快讯，重要新闻高亮 |
| 👥 热议用户 | 个股热门 KOL（粉丝数/认证标识） |
| 💼 自选股 | 本地持久化，增删随点随改；**可选登录**后直接使用雪球云端自选股 |
| 👤 可选登录 | 粘贴浏览器 Cookie 即可登录（借鉴…
