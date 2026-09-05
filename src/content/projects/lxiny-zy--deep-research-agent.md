---
repo: "Lxiny-zy/deep-research-agent"
name: "deep-research-agent"
description: "Observable multi-agent deep research system with real-time progress, token telemetry, workflow orchestration, React UI, FastAPI and Docker deployment."
readmeQualityOk: true
url: "https://github.com/Lxiny-zy/deep-research-agent"
language: "Python"
languages: ["Python"]
languagePcts: [67]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-15T01:11:45Z"
lastCommitAt: "2026-09-05T07:47:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 35
maintainers: ["Lxiny-zy"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd0d7c4b458344b4b6048e94935a97c373aba53ec596db43d9c19ca7e70df588/Lxiny-zy/deep-research-agent"
---

# Deep Research Agent · 多 Agent 深度研究系统

把「一个问题」自动**拆解 → 并行检索 → 反思补洞 → 综合成带引用的研究报告**的多 Agent 系统。

面向 AI Agent 工程岗位的简历项目，重点展示 **多 Agent 编排、并行 fan-out、来源安全策略、证据验证、流式可观测、自动化评估** 等工程能力（而非又一个对话机器人）。

---

## ✨ 亮点（面试可讲的点）

- **多 Agent 协作**：Planner / Researcher / Reflector / Synthesizer 各司其职，职责清晰。
- **意图识别与请求侧门禁**：用户 query 与检索来源各走一条意图判定通道。输入侧是「多轮指代消解 → 三级意图级联 → 槽位抽取 → 澄清判定」四步：级联内部为「正则规则 → 本地 TF-IDF+逻辑回归（0 token，随包分发的 JSON 权重，纯 Python 推理）→ LLM 兜底」的成本阶梯；12 类可路由任务意图（另有 `unknown` 弃权态）会生成可审计的执行策略，决定工作流、子问题数、反思轮数、并发和证据要求。槽位覆盖时间、领域、语言、实体、输出格式、读者、地域、来源类型、新鲜度等约束并注入 Planner；风险意图（越狱 / 套取系统提示词 / 越权指令）在研究开始前拒识并产出说明性报告。策略与风险都只能收紧用户配置，显式 workflow 始终优先（详见 [docs/INTENT_RECOGNITION.md](https://github.com/Lxiny-zy/deep-research-agent/blob/HEAD/docs/INTENT_RECOGNITION.md)）。
- **Workflow-as-Data 编排引擎**：工作流以带版本的图数据（节点 / 边 / 条件 / Join 模式）落库执行。用户界面提供 deep（完整深度研究）、quick（快速检索）和 hsi_review（HSI/AI4S 文献审查）三种公共模板；其它控制原语由默认 planner-driven 运行时统一编排，历史模板保留为兼容入口，也可在前端画布自组工作流。`guarded` 仅是内部兼容别名，不出现在 UI，也不作为自动路由目标。
- **全局提示词与流程规则**：`framework/06_global_rules.md` 作为共享系统上下文注入内置、自定义和 planner-authored 的每个 Agent；默认 `DR_ORCHESTRATION_MODE=planner-driven`，因此提示词约束、计划与 artifact 交接对所有入口一致生效。
- **可靠性设计**：节点级超时 / 重试 / 退避 /…
