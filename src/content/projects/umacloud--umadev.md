---
repo: "umacloud/umadev"
name: "umadev"
description: "AI 编码项目总监 Agent:驱动你已登录的 Claude Code / Codex / OpenCode，套上 9 阶段可治理的商业级交付流水线。  AI Coding Project Director Agent | Power Claude Code, Codex & OpenCode with a 9-stage governable commercial delivery pipeline."
url: "https://github.com/umacloud/umadev"
homepage: "https://umadev.umayun.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai", "ai-coding", "claude-code", "agents", "ai-agents", "codex-cli", "coding", "open-code", "coding-agents", "rust"]
stars: 98
forks: 38
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-06-19T16:43:11Z"
lastCommitAt: "2026-06-24T06:38:22Z"
lastReleaseAt: "2026-06-22T05:38:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 38
maintainers: ["umacloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ff6a26d1fa1d77dad6434a8710011c9e71ef9cbe0d81984f3ad513d11f0c369/umacloud/umadev"
---

# UmaDev

### 一个 AI 项目总监，带领一支完整团队，把你的需求交付成可上线产品

**产品 / 架构 / 设计 / 前后端 / 测试 / 安全 / 运维——像真实开发团队那样协作。底座是大脑，UmaDev 是带队交付的总监。**

简体中文 | [繁體中文](README.zh-TW.md) | [English](README_EN.md)

</div>

---

## 目录

- [简介](#简介) · [项目来源](#项目来源) · [它解决什么问题](#它解决什么问题)
- [快速体验](#快速体验) · [一个完整例子](#一个完整例子) · [UmaDev 如何工作](#umadev-如何工作) · [团队怎么协作](#团队怎么协作)
- [为什么可信](#为什么可信) · [运行模式](#运行模式) · [流水线设计](#流水线设计) · [质量门是什么](#质量门是什么)
- [治理规则是什么](#治理规则是什么) · [知识库是什么](#知识库是什么) · [交付产物长什么样](#交付产物长什么样)
- [**命令大全**](#命令大全) · [配置](#配置) · [Rust 架构](#rust-架构) · [开发](#开发)

## 简介

UmaDev 是一个本地运行的 **AI 项目总监 Agent**。它加载你**已经登录的 AI 编码底座**（Claude Code / Codex / OpenCode）的大脑——一个**常驻的持续会话**就是它的工作意识——然后像一位真正的项目总监那样，**带领一支完整团队**把你的一句需求交付成可上线产品。

总监不亲自敲代码。它做三件事：**理解你**、**调度团队**、**把关交付**。底座是干活的工程师（思考、调研、设计、写代码、审查都是底座的认知）；UmaDev 是带队的总监 + 确定性工具层（编排阶段、设置确认门、实时治理、跑质量门、留下审计证据）。

它的团队是一组**可调度的角色席位**，而非写死的判断逻辑：

- **产品经理** 拆解需求、定范围与验收标准
- **架构师** 定技术选型、分层分包、接口契约
- **UI/UX 设计师** 定设计系统、令牌、信息架构，盯住"不像 AI 模板"
- **前端 / 后端工程师** 真写代码（驱动底座连续用工具产出文件）
- **测试 / QA** 真跑构建测试、查覆盖
- **安全 / 红队** 扫漏洞、查攻击面、做 pre-PR 安全检查
- **运维 / DevOps** 管构建、CI、运行时证据、上线
- **总监** 在每道门汇总裁决、对照计划验收、拍板过或返工

干活的角色串行写主会话；评审的角色各自 fork…
