---
repo: "Aimang2002/KleinBot"
name: "KleinBot"
description: "基于C/C++开发、对接大语言模型的QQ机器人"
readmeQualityOk: true
url: "https://github.com/Aimang2002/KleinBot"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-10T14:15:06Z"
lastCommitAt: "2026-08-30T09:23:47Z"
lastReleaseAt: "2025-06-03T04:00:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 64
maintainers: ["Aimang2002", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbba69a2dafee047d7802859570f4254bbffbe2a7826a5600db9fa96ecb127dd/Aimang2002/KleinBot"
---

# KleinBot

**基于 C++17 的自托管多模态 QQ Agent**

*KleinBot 是一个以 QQ 为交互载体、在应用层实现多模态感知、工具调用与任务编排的对话式 Agent*

</div>

---

## 目录

- [简介](#简介)
- [核心特性](#核心特性)
- [快速开始](#快速开始)
- [配置](#配置)
- [模型接入](#模型接入)
- [内置命令](#内置命令)
- [模型工具](#模型工具function-calling)
- [长期记忆](#长期记忆)
- [运行时架构](#运行时架构)
- [运行资源目录](#运行资源目录)
- [开发与测试](#开发与测试)
- [使用了第三方工具](#使用了第三方工具)
- [开源协议](#开源协议)

## 简介

KleinBot（下文简称 **Klein**）是一个使用 C++17 开发、以 QQ 为交互载体的应用层多模态 Agent。它通过 OneBot 接入 QQ，统一编排文本、图片、语音和音乐等消息，并组合不同厂商的 LLM、视觉、绘图与语音能力。

模型可以根据自然语言自主选择搜索、网页阅读、图片处理、长期记忆和提醒等工具；Klein 负责上下文、工具执行、结果回灌、权限和资源边界，将模型推理组织成可控的任务闭环。

> Klein 不实现协议端本身，而是对接支持 CQ 码的第三方 OneBot 实现。测试使用的协议端为 [LLOneBot](https://github.com/LLOneBot/LLOneBot)，其他兼容 OneBot 11 的实现原则上也可以对接。

## 核心特性

| 能力 | 说明 |
| --- | --- |
| **Agent Loop** | 模型自主决定调用哪些工具、调用几轮，直到给出回答；应用层负责工具执行、结果回灌和边界控制；对产生畸形参数的第三方网关做了兼容 |
| **联网能力** | `klein_web_search` 关键词检索（Tavily，时间策略由模型参数表达）+ `klein_web_fetch` 抓取指定链接正文（超长内容自动按问题摘要） |
| **长期记忆** | 无向量检索的用户资料、偏好与事实记忆，后台自动提取、按需召回，`#重置上下文` 一并清除 |
| **Web 配置面板** | 浏览器中表单化编辑全部配置：Klein 主题控制台界面、密钥掩码显示、保存即校验并原子写回、按影响等级报告变更 |
| **多模态** | 支持视觉的模型直接读图，其余模型自动走独立视觉模型；图片按用户隔离存储为可复用资产 |
| **语音回复** | 对接 [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) 的文字转语音 |
|…
