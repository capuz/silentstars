---
repo: "JiahaoLi-creator/mathematical-academic-writing"
name: "mathematical-academic-writing"
description: "A source-grounded Codex skill for rigorous mathematical and statistical writing, analysis, and verification."
readmeQualityOk: true
url: "https://github.com/JiahaoLi-creator/mathematical-academic-writing"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["academic-writing", "codex", "codex-skill", "mathematics", "probability", "stochastic-calculus"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-07-27T12:55:46Z"
lastCommitAt: "2026-11-12T05:37:05Z"
lastReleaseAt: "2026-11-12T05:38:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 21
maintainers: ["JiahaoLi-creator"]
openGraphImageUrl: "https://opengraph.githubassets.com/b78bf5cb05081d9f973c6b5df95eec5777e9dbc06a2717d3c20b584be8145f60/JiahaoLi-creator/mathematical-academic-writing"
---

# Mathematical Academic Writing

[Quick start](#quick-start--快速开始) · [English](#english) · [中文](#中文) · [Worked example](#worked-example--双语示例) · [Validation](#validation)

**A source-grounded Codex skill for mathematical and statistical writing that preserves formal
meaning, study design, inference, and evidence strength.**

**一个面向数学与统计学写作的 Codex skill：以来源为依据，保持形式语义、研究设计、统计推断和证据强度。**

---

## Quick start | 快速开始

Install the public runtime into the Codex skills directory:

将公开 runtime 安装到 Codex skills 目录：

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/JiahaoLi-creator/mathematical-academic-writing.git \
  ~/.codex/skills/mathematical-academic-writing
```

Start a new Codex task after installation, then invoke the skill explicitly:

```text
$mathematical-academic-writing

Task: Revision
Genre: Visual companion
Primary source: [lecture notes, chapter or section]
Audience: [intended reader]
Preserve: [notation, assumptions, formulas, citations, and figure numbers]
Request: [the exact writing task]
```

安装后开启一个新的 Codex task，再通过 `$mathematical-academic-writing` 显式调用。

Update an existing public installation:

更新已有的公开安装版本：

```bash
git -C…
