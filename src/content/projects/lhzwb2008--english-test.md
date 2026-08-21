---
repo: "lhzwb2008/english-test"
name: "english-test"
description: "English Voice Tutor - 基于豆包实时语音API的英语口语练习应用"
readmeQualityOk: true
url: "https://github.com/lhzwb2008/english-test"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-24T09:33:28Z"
lastCommitAt: "2026-08-21T04:10:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 45
maintainers: ["lhzwb2008", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d3d313639870df421f8d11a85b9cbda7126ae8d239a765d73deb53997e83e0b/lhzwb2008/english-test"
---

# 英语学习智能体能力一览

对外能力分两套引擎：**扣子（Coze）** 与 **自部署 Qwen 代理**。接口与接入细节见 `API.md` / `GRAMMAR_API.md`。

## Coze（扣子）

| 能力 | 说明 |
|------|------|
| 学习计划生成 | 按学生档案与任务池编排学习计划 |
| 图片作业批改 | 作业图片 OCR + 批改 |
| 知识点讲解 | 知识点讲解 |
| 万能模型（文本） | 自由 Prompt，纯文本 |

> 口语批改旧版仍在 Coze 登记，**已切换至 Qwen**，不建议继续使用。

## Qwen 自部署代理

### 兼容 Coze Chat 的智能体

| 能力 | 说明 |
|------|------|
| 口语批改 | 音频口语评测（五维评分等） |
| 万能音频模型 | 自由 Prompt，音频输入 |

### 词汇 / 语法薄弱点

| 能力 | 说明 |
|------|------|
| 单元总评 + 知识点列表 | Think / PET 单元或 Test 总评，输出薄弱知识点（PET 含官方量表成绩） |
| 知识点讲解 + 出题 | 单点讲解与练习题 |
| 知识点口播短视频 | 异步生成口播讲解短视频 |

## 本地维护（可选）

```bash
npm install
# Coze Prompt 推送：npm run coze:push-plan / push-image / push-knowledge …
# Qwen 代理：npm run qwen:serve
```

生产部署见 [`deploy/README.md`](https://github.com/lhzwb2008/english-test/blob/HEAD/deploy/README.md)。
