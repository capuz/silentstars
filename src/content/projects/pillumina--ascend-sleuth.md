---
repo: "pillumina/ascend-sleuth"
name: "ascend-sleuth"
description: "Knowledge base for diagnosing faults in training and inference on Ascend NPUs: matches cases by symptom, locates root causes using prior knowledge and source-code analysis, then places new findings in a review queue that is promoted back into the knowledge base weekly."
originalDescription: "昇腾 NPU 训练与推理故障诊断知识库：按症状命中 case、用先验知识与源码分析定位根因，定位后进待审队列、每周升格回库。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/pillumina/ascend-sleuth"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [52, 47]
topics: ["agent-skills", "ascend", "claude-code", "diagnosis", "llm", "npu", "skills-sh", "agentskills", "ai-agents", "aiops"]
stars: 6
forks: 4
openIssues: 9
closedIssues: 9
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-07-28T03:05:33Z"
lastCommitAt: "2026-11-17T14:35:51Z"
lastReleaseAt: "2026-11-12T11:12:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["pillumina", "github-actions[bot]", "stfdtj"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba8da02f4ef62147ba7448043eb61afc269dd57a30d1473263b68e2ec1366f0a/pillumina/ascend-sleuth"
---

When training or inference on Ascend NPUs is interrupted, shows accuracy anomalies, or suffers performance degradation, hand the logs and version information to the agent. It routes by symptom, consults prior knowledge (official documentation and already-accumulated facts) to frame the direction, then loads candidate cases and verifies them one by one. If nothing matches, it continues with deeper investigation and can pull source code by version for analysis. Output: a localization conclusion and a fix plan.

After localization, new knowledge enters a review queue. Routine weekly maintenance deduplicates it and promotes it to cases, so that similar problems hit directly next time. Commonalities are separately summarized into prior knowledge. The system also evolves based on usage records: misses, execution errors, and expired entries are all recorded as improvement cards. Changes are verified according to their impact scope, and a PR is submitted for human review.

The skill is packaged according to the [Agent Skills](https://agentskills.io/) standard. It can run in agents that support this standard, such as pi, Claude Code, Codex, and DeepSeek Harness (DSH).

## Quick Start

###…
