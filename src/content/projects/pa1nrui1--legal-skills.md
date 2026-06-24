---
repo: "pa1nrui1/legal-skills"
name: "legal-skills"
description: "Chinese legal workflow skills for AI agents"
url: "https://github.com/pa1nrui1/legal-skills"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-16T04:40:20Z"
lastCommitAt: "2026-06-24T06:32:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["pa1nrui1"]
openGraphImageUrl: "https://opengraph.githubassets.com/d100cea0ca94873918558dd5d2bd51cad82215ff62da38af2fdd2b89f69dbad5/pa1nrui1/legal-skills"
---

# Legal Skills

  <strong>面向中国法律工作的 AI Agent Skill 系统</strong><br>
  将法律咨询、诉讼、刑辩、劳动争议、破产、合同、合规、检索与文书交付，组织成可复核、可追踪、可本地化改造的 Agent 工作流。
</p>

</p>

---

## 项目定位

Legal Skills 是一套开源的中文法律工作 Skill 集合，目标不是提供一个“万能法律提示词”，而是把真实法律服务中容易被模型忽略的流程、校验、分工和交付边界，拆解为可由 AI Agent 执行和复核的工作单元。

在这个项目里，Agent 不是被鼓励直接给出结论，而是被要求按法律工作习惯推进：

- 先识别任务类型，再选择对应的专业 Skill；
- 先读取材料、复查关键信息，再进入分析或起草；
- 涉及法规、案例、政策或规范性文件时，必须暴露来源和校验状态；
- 材料不足、OCR 存疑、事实冲突、期限风险和授权不明时，必须向使用者提示；
- 生成正式 Word 文书前，必须经过出稿前审查和导出质量门；
- 对外输出始终保留专业人士复核空间，避免把模型推断包装成已核验事实或法律意见。

因此，Legal Skills 更接近一个“法律 Agent 工作台的规则层”：它把律师、法务、法律科技团队日常处理事项时的流程经验，沉淀为 Markdown Skill、流程协议、文书模板、检查清单和少量本地脚本。

> **重要提示：本项目不提供法律意见。**
> 本项目输出的任何内容都应视为供律师、法务或合格专业人士复核的工作草稿。真实法律事项必须由专业人士基于完整事实、有效授权、现行法律、可核验案例和具体语境作出独立判断。

## 版本更新

当前公开版本重点更新：

### 2026-06-24

| 模块 | 更新内容 |
|---|---|
| **合同审查** | 新增 Word 红线稿执行层：用户要求修订模式时，先生成 `redline-plan.json`，再运行 `scripts/redline/apply_redline_plan.py` 输出带真实 `w:ins` / `w:del` 修订痕迹和批注的审核修订稿，并通过 `scripts/redline/qa_redline.py` 做结构 QA。 |
| **合同审查修订策略** | 新增 `references/修订策略.md` 和 `references/redline-plan-protocol.md`，将“必须修改 / 建议修改 / 需客户确认 / 可优化”映射为 `replace / insert / delete / comment / report-only`，并固化审查人、上线期、原合同路径、正式审查意见路径和解析方式。 |
| **文档与测试** |…
