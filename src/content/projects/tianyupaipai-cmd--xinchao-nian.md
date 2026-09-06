---
repo: "tianyupaipai-cmd/xinchao-nian"
name: "xinchao-nian"
description: "心潮念（Xinchao·Nian）— 会惦记你的AI心智：心潮动态驱力引擎 + Ombre Brain 记忆库深度融合，一键联合部署。非商业(含OB二改约束)。"
readmeQualityOk: true
url: "https://github.com/tianyupaipai-cmd/xinchao-nian"
language: "Python"
languages: ["Python"]
languagePcts: [63]
topics: ["ai-companion", "docker-compose", "mcp", "memory"]
stars: 148
forks: 63
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-09T05:29:33Z"
lastCommitAt: "2026-09-06T08:04:07Z"
status: "newborn"
tags: []
healthScore: 79
undervaluedScore: 24
maintainers: ["tianyupaipai-cmd"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ed099c654b2e1c851c9c22e89c9278851a31a834444386e6ae08d5bbe48795f/tianyupaipai-cmd/xinchao-nian"
---

# 心潮·念 3.3.0（Xinchao · Nian）

一个会**惦记你**的 AI 心智：**心潮**（动态驱力/欲望引擎）+ **Ombre Brain**（记忆库）深度融合，一键联合部署。

- **心潮** 让它有随时间变化的内在状态——想念、期待、挂念、好奇、独处欲……不是每次对话都从零开始。
- **Ombre Brain** 给它一个真正的长期记忆库——breath 浮现、hold 沉淀、dream 消化、trace 追溯。
- **融合** 让"欲望影响记忆影响行动"闭环：驱力偏置召回哪些记忆浮现，浮现的记忆又回推驱力。

## 3.3 更新重点

3.2 之前，心潮回答"我想要什么"（12 维驱力）和"我是谁"（14 维性格 + 锚点）。3.3 补上中间那层——"我现在怎样"、"我最近的样子"——以及把这些递到 AI 窗口里的两条通道。

- **情绪层**：valence / arousal 两轴，和 OB 记忆桶同一套坐标；事件打脉冲、会话 tone 拉扯、grieve/anger 拽回落目标，只做指数回落不自激。情绪调制各维增速（难受更惦记、开心更想分享），并把坐标带进 breath 做共振排序。
- **自我觉察**：每天从情绪日志、驱力、念头、浮现记忆里挑"我最近的样子"的候选，`xinchao_awareness` 确认或放下只由 AI 自己定，确认后经 OB `I` 沉淀。
- **黑匣子** `xinchao_box`：只有 AI 能看的地方，单独文件存，不进 Dashboard、接口、OB；支持到期、露头、事的日期与到点提醒。攒下的话（pending）退役，由它接替。
- **"此刻"块** `GET /v1/now`：三到六行第一人称状态，给客户端钩子附进上下文；每个心潮工具回应末尾也自带一行。
- **心潮自身信号**（Bridge `reason=self_signal`）：驱力冲顶、情绪转折、挂念、醒来余韵、觉察、持续念头，递到 AI 窗口；没被接走的在下一次 `xinchao_context` 的"你不在的时候"段带出。
- **梦 2.0**：原料来自 OB `dream` 消化全量加远期小事，梦带意象与醒来心情，醒来打情绪脉冲、意象进思绪池，推送挪到早上；白昼浮现改为落进念头池，不再代笔推送。
- **两种接法**：实时注入版（自建前端 + adapter + 钩子）与官方客户端版（全靠拉）。代码不分叉，只是两套配置，对照表见 [`xinchao/docs/3.3-情绪觉察与桥.md`](https://github.com/tianyupaipai-cmd/xinchao-nian/blob/HEAD/xinchao/docs/3.3-情绪觉察与桥.md)。
- **OB 3.6+**：`/mcp`…
