---
repo: "WizardHeHeJun/Zero"
name: "Zero"
description: "情感引擎 × LLM 的数字人 — 贝叶斯主动推断确定性地生成情绪，LLM 只在输入/输出两端结合；三时间尺度+稳态、短时注意力与长时记忆的桥、可指定人格"
readmeQualityOk: true
url: "https://github.com/WizardHeHeJun/Zero"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["active-inference", "affective-computing", "bayesian-inference", "digital-human", "emotion-engine", "episodic-memory", "langgraph", "llm", "multi-agent", "persona"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-23T10:49:07Z"
lastCommitAt: "2026-07-29T06:14:52Z"
lastReleaseAt: "2026-07-03T14:16:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 62
maintainers: ["WizardHeHeJun"]
openGraphImageUrl: "https://opengraph.githubassets.com/92a9a34e17ad2b43d03113ca2967af289bb20378eb7b7b27d5457c4031c1a6ad/WizardHeHeJun/Zero"
---

# Zero — 情感引擎驱动的 AI 数字人

> 让机器**带着情绪**说话。Zero 以一套**情感引擎**为内核、以 **LLM** 为语言外壳：每一句话先被读成情绪、在引擎里按人类情感动力学演化，再由语言与表情把这份情绪自然地漏出来——不是让模型"扮演"情绪，而是让情绪真实地参与生成。

情感引擎融合了五个学科的建模视角：

- **数学** — 贝叶斯主动推断、动力系统、在线价值学习
- **心理学** — OCC 评价理论、效价-唤醒环状模型、情绪调节、评价性条件作用
- **生物学** — 面部动作单元（FACS）、自主神经生理反应
- **神经科学** — 预测编码、全局工作空间点燃、显著网络门控、杏仁核多通路、多巴胺奖赏预测误差
- **计算科学** — 多 Agent 编排（LangGraph）、多网络并行

---

## 定位与边界：这是「大脑」，不是全部

Zero 是数字人的**情感 / 认知内核**——那颗负责「产生并调制情绪」的大脑。它**不直接接管**感官与身体：

- **感知输入**（视觉 / 语音 / 生理信号 / 面部…）与**执行操控**（形象驱动 / 动作 / 对外动作）封装在一个**配套项目**里、作为 **MCP client** 接入。本内核**已内建 MCP server**——把一次情感引擎会话暴露为 `open / step / close` 三工具（本地 stdio / 远程 streamable-http，带 Bearer 鉴权），配套项目作为 client **已端到端接通**：每轮透传会话身份、喂入 `(v,a)` 刺激与可选多模态先验，即可推进会话并取回情绪化输出。
- 因此本仓库当前以**文本进、情绪化文本 + 通道值出**跑通内核回路；`main.py` / CLI 是**单跑内核的验证路径**——更丰富的多模态输入与操控经**已接通的 MCP 接点**驱动，且不动内核契约。
- 内核所有对外能力都**协议化、可注入**（评价桥 / 语言 / 通道解码器 / 记忆后端按协议替换），正是为了让 MCP 侧的感知与操控**接进来而不动内核契约**。

---

## 情感引擎是怎么做的

把"人产生并表达情绪"的过程，建模成一条**贝叶斯流水线**——感知一句话、推断出此刻的情绪、让它随时间演化、再分两路外化为语言和表情。

### 1. 评价桥：把话读成情绪

每一句输入先经**评价桥**反推出效价-唤醒坐标 `(v, a)`——一句夸奖是正效价、一句挑衅是负效价高唤醒——作为刺激喂给引擎。

### 2. 情感引擎核心：贝叶斯主动推断 + 显著度门控工作空间

引擎不是简单地"查表给情绪"，而是把多条**并行的功能流**竞争整合成一个全局情绪状态：

- **OCC 评价流** —…
