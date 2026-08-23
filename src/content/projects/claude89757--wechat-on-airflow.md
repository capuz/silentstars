---
repo: "claude89757/wechat-on-airflow"
name: "wechat-on-airflow"
description: "基于 Apache Airflow 的微信智能应用编排框架，通过可视化工作流驱动 AI 与数据自动化任务。支持 智能客服（多轮对话/知识库）、AI 图文/短视频生成、智能提醒等应用，灵活扩展多模态交互与大模型能力。"
readmeQualityOk: true
url: "https://github.com/claude89757/wechat-on-airflow"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 24]
topics: ["airflow", "chatbot", "wechat"]
stars: 87
forks: 19
openIssues: 1
closedIssues: 1
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2025-01-09T05:58:34Z"
lastCommitAt: "2026-08-23T04:08:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 44
maintainers: ["claude89757"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe70e2603fa0c30849ead3360cb48029712a3733532b2342f318d78c463742f9/claude89757/wechat-on-airflow"
---

# 🎾 WeChat-on-Airflow

> 深圳网球场地空场提醒平台：基于 Apache Airflow 3 自动巡检多个深圳网球场的可订状态，向邮箱订阅用户推送空闲场次，并同步发送 best-effort 的微信群提醒。

[中文](https://github.com/claude89757/wechat-on-airflow/blob/HEAD/README.md) · [English](https://github.com/claude89757/wechat-on-airflow/blob/HEAD/README.en.md)

## ✨ 功能特性

- **多场馆自动巡检**：7 个深圳场馆巡检 DAG（深圳湾 15s 高频、大湾区、大沙河免费场、金地、上越沙河、TOPS、体育中心）+ HTTPS 代理巡检 + 每日设备维护
- **邮箱订阅推送**：Cloudflare Worker Web 应用全权负责邮箱验证、订阅匹配、事件去重与失败重试（Tencent SES 投递）
- **微信群提醒**：Android 设备宿主上的独立 WeChat Sender（systemd + Appium），best-effort 投递，失败按群隔离记录，不影响邮件链路
- **代码即契约**：`config/` 下的机器可读组件/配置/运行时契约；DAG 仅做调度编排，业务实现全部位于 `src/` 包
- **精确发布**：GitHub Actions 是唯一控制面，按精确 commit 部署，部署后自动健康校验
- **完整质量门禁**：`make verify` 覆盖 lint、类型检查、单元测试、Web 构建、镜像构建与 DagBag 契约检查

## 🏗️ 系统架构

```mermaid
flowchart TB
    subgraph control["GitHub 控制面"]
        CI["CI / verify 质量门禁"]
        Release["Production Release 精确 commit 部署"]
        CI --> Release
    end

    subgraph sources["外部数据源"]
        SZ["深圳湾 / 大湾区订场 API"]
        NSWTT["NSWTT 大沙河免费场"]
        VENUES["金地 / 上越沙河 / TOPS / 体育中心"]
        PROXY["公共代理源 + GitHub 代理仓库"]
    end

    subgraph airflow["Apache Airflow 3.3（CeleryExecutor）"]
        Scheduler["Scheduler +…
