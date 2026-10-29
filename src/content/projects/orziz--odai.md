---
repo: "orziz/odai"
name: "odai"
description: "General task-execution governance framework for AI agents: aligns goals and facts, plans and schedules capabilities, holds the authorization and risk boundaries, and governs task execution through real acceptance and delivery. Governance framework for evidence-driven planning, orchestration, and verified delivery."
originalDescription: "AI agent 通用任务治理框架：对齐目标与事实，规划和调度能力，守住授权与风险边界，治理任务执行到真实验收与交付。Governance framework for evidence-driven planning, orchestration, and verified delivery."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/orziz/odai"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [77, 23]
topics: ["odai", "ai-agents", "dsh-plugins", "ai-agent", "dsh-plugin", "dsh", "agent-skills", "agentic-workflow", "ai-governance", "claude-code"]
stars: 119
forks: 18
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-03-19T01:32:22Z"
lastCommitAt: "2026-10-29T10:36:34Z"
lastReleaseAt: "2026-08-04T09:24:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 37
maintainers: ["orziz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1185828998/3482ba40-4385-41d0-b1af-71c73bb5604b"
---

**English** · [Chinese](https://github.com/orziz/odai/blob/HEAD/README.zh-CN.md)

Optional writer handles drafting, rewriting, translation, and localization once direction is settled. Creative owns direction, ideation, and taste review; without a writer mapping, creative continues to handle writing as before. Writer is read-only and child-only on API and local CLI routes, returning drafts or replacement text for the controller to verify and apply.

# odai

`odai` is a governance-powered general task-execution framework for AI agents.

It embeds governance into execution: align the real objective, facts, assumptions, authorization, risks, and acceptance; then choose the shortest sufficient path, combine the right capabilities, act, verify, and keep moving until the task is genuinely deliverable. It does not replace the model's judgment with a rigid workflow.

The short version: call `/odai`; governance stays nearly invisible on simple work, while ambiguity, complexity, risk, and domain needs automatically increase or reduce the depth of handling.

## Why Use It

`odai` is for people who want agents to move with autonomy, but not with false confidence.

It helps an agent:

- ask…
