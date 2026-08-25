---
repo: "kohakushigure/llm-cultivation-path"
name: "llm-cultivation-path"
description: "LLM 修仙之路 — 打怪升级式 LLM 技术栈学习平台:内置 IDE、Docker 沙箱、8 章 39 任务,从 API 调用到自建小模型 / A gamified LLM learning platform"
readmeQualityOk: true
url: "https://github.com/kohakushigure/llm-cultivation-path"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["ai-agents", "fastapi", "langchain", "learning-platform", "llm", "rag", "react"]
stars: 10
forks: 0
openIssues: 6
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-07T16:43:41Z"
lastCommitAt: "2026-08-25T04:08:43Z"
lastReleaseAt: "2026-08-13T08:50:01Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 28
maintainers: ["kohakushigure"]
openGraphImageUrl: "https://opengraph.githubassets.com/993cee035a382e0dcc866a421e61d131d684a3258d4aa0cc27c8401bff4277f5/kohakushigure/llm-cultivation-path"
---

# LLM Agent 工程师学习之路 · LLM Cultivation Path

**打怪升级式、任务驱动的 LLM 技术栈学习平台 —— 从第一次 API 调用,到自建一个小模型。**

[English](https://github.com/kohakushigure/llm-cultivation-path/blob/HEAD/README.en.md) | **简体中文**

像打游戏一样闯关学 LLM 工程:8 章 39 个实战任务,真代码、真沙箱、真 API。在内置 IDE 里写 Python,调用真实的大模型接口,通过验证规则、赚取经验值、解锁下一关。无需注册登录,进度保存在你自己的浏览器里。

## ✨ 特色

- ⚔️ **游戏化课程** —— 8 章 39 任务 **212 步**,覆盖 LLM 全技术栈,从 API 基础一路打到自建小模型
- 💻 **内置 IDE** —— Monaco 编辑器;每个任务配说明、任务清单、提示、样例、术语和完整代码参考
- 📜 **学习契约模板** —— 每个 starter 顶部标明本步目标、补写内容、关键函数出入参、技术栈和可观察结果,动笔前就知道要做什么
- 🐳 **真实代码执行** —— Docker 沙箱(core / ml 双镜像)运行你的 Python,直连 DeepSeek 真实接口,看真实输出
- ✅ **智能通关验证** —— 静态规则(代码结构 / API 调用 / 输出匹配)+ 行为校验(沙箱实跑 + pytest),精准判定掌握度
- 🔑 **自己的 Key 自己的账** —— 联网课程必须填你自己的 DeepSeek Key(存浏览器,不过夜于服务器),没有公共 Key 可蹭
- 🤖 **LLM 生成课程** —— 课程内容本身由 LLM 管线生成(`scripts/generate_curriculum.py`),Pydantic 全程校验
- 📦 **本地优先** —— 无需登录,进度存浏览器 `localStorage`,数据在你手里
- 📖 **完整文档站** —— 安装指南、学习路径、以及每个用到的库的搜索式技术参考

## 📸 截图

| 学习工作区(IDE + 教学面板) | 课程地图 |
| :---: | :---: |
|  |  |

| 技术参考文档 |
| :---: |
|  |

## 🚀 快速开始

**环境要求:** Node.js ≥ 20、pnpm ≥ 9、Python ≥ 3.12、Docker(可选,用于代码沙箱)

```bash
# 1. 克隆
git clone https://github.com/kohakushigure/llm-cultivation-path.git
cd…
