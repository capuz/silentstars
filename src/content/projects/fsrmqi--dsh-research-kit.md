---
repo: "fsrmqi/dsh-research-kit"
name: "dsh-research-kit"
description: "dsh-research-kit is a DSH plugin: it maintains a catalog of research resources, assembles workflows and user parameters into editable prompts, and the current DSH session handles actually sending and executing them."
originalDescription: "dsh-research-kit 是一个 DSH 插件：它维护科研资源目录、把工作流和用户参数组装成可编辑 Prompt，并由 DSH 当前会话负责实际发送与执行。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/fsrmqi/dsh-research-kit"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek-harness-plugin", "deepseek-harness-plugins", "dsh", "dsh-plugin", "dsh-plugin-market", "dsh-plugins"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-10T11:30:08Z"
lastCommitAt: "2026-11-27T12:58:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 50
maintainers: ["fsrmqi"]
openGraphImageUrl: "https://opengraph.githubassets.com/04c3a1f071b3cd682e32d4ba7c59ae1f10dad411e61b0e3e666e6acf57ec3929/fsrmqi/dsh-research-kit"
---

# DSH Research Kit

[Simplified Chinese](https://github.com/fsrmqi/dsh-research-kit/blob/HEAD/README.md) · [English](https://github.com/fsrmqi/dsh-research-kit/blob/HEAD/README.en.md)

> A research workbench and cross-host MCP toolset for DeepSeek Harness: 351 manually reviewed workflows, 109 skill entries, 129 scientific data sources, and 38 research tools.

In DSH, it turns repeated research tasks into **parameterized, editable, and visible-before-sending** prompts. Through a standalone stdio MCP Server, it can also provide literature search, evidence management, research run, and review tools to hosts such as Codex, Claude Code, and Zed. All research judgments still need to be verified by researchers.

---

## Prerequisite: What is DSH

This project is a plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (command-line abbreviation `dsh`). DSH is an open-source local Agent work system from DeepSeek. Its core design philosophy is "Everything is a Plugin": models, tools, interfaces, and storage are all made up of replaceable plugins.
