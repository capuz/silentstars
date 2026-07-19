---
repo: "Zoey-Cheng/MLSys-Learning-Notes"
name: "MLSys-Learning-Notes"
description: "MLSys 自学笔记 — with hand-written runnable code"
readmeQualityOk: true
url: "https://github.com/Zoey-Cheng/MLSys-Learning-Notes"
homepage: "https://zoey-cheng.github.io/MLSys-Learning-Notes/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
stars: 17
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-25T23:41:22Z"
lastCommitAt: "2026-07-19T06:13:24Z"
status: "thriving"
tags: []
healthScore: 67
undervaluedScore: 36
maintainers: ["Zoey-Cheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ada396577d4f66a2b212b17e0c38a8fde63db03f4cdc91e0d06da8266507390/Zoey-Cheng/MLSys-Learning-Notes"
---

# MLSys 菜狗自学笔记

MLSys 自学笔记，每篇尽量带可运行代码，知乎同步更新。

📖 **网页版**：<https://zoey-cheng.github.io/MLSys-Learning-Notes/>

**[About Planning]**

计划覆盖 pre-training、post-training、inference、算子与异构计算。大致目标：

- 基础模型：了解结构，能手写简化版模型代表
- 训练：前后向计算流程，DP/EP/SP/CP/TP/PP 并行 + 通信量分析
- 推理：prefill / decode 分离合并，以及 KV Cache 各类相关优化
- 算子：基础 CUDA 算子，FA 1/2，进阶 - 架构相关优化、MoE 相关算子
- RL：……还没想好，DPO/PPO/GRPO，sync / async / multi turn 之类的
- 手写题 Quick Ref ([模型](https://github.com/Zoey-Cheng/MLSys-Learning-Notes/blob/HEAD/notes/07_面试手写题/07_01_模型.md) / [推理](https://github.com/Zoey-Cheng/MLSys-Learning-Notes/blob/HEAD/notes/07_面试手写题/07_02_推理.md) / [算子](https://github.com/Zoey-Cheng/MLSys-Learning-Notes/blob/HEAD/notes/07_面试手写题/07_03_算子CUDA.md))

qwq 其实 25 年就想写了，一直在拖，上班了继续慢慢更新中（

**[Why write this?]**

知乎/Github 好资源很多，但感觉没有特别系统性 + 满足个人逻辑闭环的 + code demo 足够的，所以想自己推一遍，每个 topic 从基础出发，补足细节，配上手写的可运行代码 / 遇到过的面试题。

**[About Me]** 26 Master NG 菜狗
- **Intern**：ByteDance CN @ AML 科学计算 → NVIDIA CN @ cuTile → NVIDIA US @ XLA
- **Fulltime**：ByteDance US @ AI Search, ML infra - 训练支持

## 笔记列表

每篇笔记有 repo 内的 md 版本和对应的知乎 link；相关 code 有可下载的 ipynb，也有可以直接运行的 Google Colab 版本。

| Topic | 笔记 | 知乎 | code link | code简介 |…
