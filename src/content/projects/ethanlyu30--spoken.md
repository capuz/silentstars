---
repo: "EthanLyu30/spoken"
name: "spoken"
description: "with an AI assitant to help your verbal English among thousands of actual circumstances"
url: "https://github.com/EthanLyu30/spoken"
homepage: "https://spokenai.org"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [59, 39]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-05T00:22:48Z"
lastCommitAt: "2026-06-27T06:22:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 48
maintainers: ["EthanLyu30"]
openGraphImageUrl: "https://opengraph.githubassets.com/0745005ab6614ae39c59bd3dd1cfcefa1de408a3066c1da3cb5f533f9f2ebd94/EthanLyu30/spoken"
---

# 🗣️ Spoken — AI 英语口语陪练

**在真实场景下用语音和 AI 对话练口语，并获得发音、语法与表达的量化反馈。**

🔗 **在线体验 / Live demo**：<https://spokenai.org> · 备用 <https://spoken-gamma.vercel.app>（国内访问可能稍慢）

中文 · [English](README.en.md)

</div>

> 参赛作品，按 [开发路线图](docs/ROADMAP.md) 分 PR 持续交付；README 随功能同步更新。

---

## 📖 项目简介

Spoken 是面向中文母语者的 **AI 英语口语陪练**。挑一个真实场景（求职面试、咖啡馆点单、看医生…），就能和 AI 伙伴 **Pip** 进行**语音 / 文字对话**；过程中和结束后，系统从**发音、语法、表达**三个维度给出量化评测与纠错，并把每次练习沉淀为**成长曲线**。

四个口语训练核心诉求贯穿设计：

- **对话自然度** —— Pip 稳定扮演角色，会追问、会引导，回复**逐字流式**返回。
- **语音流畅与低延迟** —— 朗读默认用浏览器原生语音（连贯自然、几乎即时），讯飞云端可选；对话回复流式输出。
- **纠错精准与时机** —— 发音 / 语法走"慢路"异步分析，不打断对话，回合结束即时反馈。
- **可量化的成长** —— 跟读分、对话分、限时问答成绩全部入库，生成趋势与课后报告。

---

## ⭐ 亮点

- **快慢双路架构** + **流式对话回复**：对话即时跟手，评测异步不阻塞。
- **全讯飞语音链路**：语音听写（ASR）+ 语音评测（ISE 发音打分）+ 在线合成（TTS）；朗读支持「浏览器原生 / 讯飞云端」双引擎与语速/音调/音色自定义。
- **托福级限时问答**：真实托福独立题题库 + AI 场景题，45 秒作答，按 ETS 标准打分并给高分范例。
- **会用而非死背的金句**：电影 / 演讲·TED / 文学 / 名人 / 谚语，**标注真实出处**（经 Wikiquote 核实、剔除误传名言）+ **应用场景** + 一键去搜原声。
- **自定义 & 每日生成场景**：一句话生成任意角色扮演；每天推荐一个新场景。
- **真实成长数据**：连续天数 / 等级 / XP / 今日目标 + 跟读与问答历史曲线，全部由真实活动驱动。
- **顺手不卡顿**：生词本本地缓存 + 乐观更新——切页秒开、收藏 / 加词即时生效，弱网下后台同步、失败自动回滚。
- **健壮**：请求超时兜底、流式失败自动回退、通话断流自动重连；60+ 后端测试。

---

## ✨ 核心功能

| 模块 | 说明 |
|---|---|
| 🗺️…
