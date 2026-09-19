---
repo: "MrWeiCodes/dsh-permgate"
name: "dsh-permgate"
description: "Fine-grained permission control plugin for DeepSeek Harness (DSH)"
originalDescription: "为 DeepSeek Harness（DSH）提供的细粒度权限控制插件"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MrWeiCodes/dsh-permgate"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "dsh-plugins", "permissions"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T13:15:29Z"
lastCommitAt: "2026-09-18T16:45:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 48
maintainers: ["MrWeiCodes"]
openGraphImageUrl: "https://opengraph.githubassets.com/159e674ad616587a7becc6630cd7f5120a5684fd7e02844073062af1edf2d37c/MrWeiCodes/dsh-permgate"
---

# dsh-permgate — DSH Permission Gateway

> A fine-grained permission control plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH)

**🌏 Chinese | [English](https://github.com/MrWeiCodes/dsh-permgate/blob/HEAD/README_EN.md)**

`dsh` · `dsh-plugin` · `plugin` · `permission control` · `approval` · `sandbox` · `security` · `AI agent` · `permission control` · `approval` · `sandbox` · `permission gateway`

## Introduction

Currently, DSH only has three levels of permissions: [Read only], [Workspace Write], [Full access], with relatively coarse granularity. This plugin adds a **"Custom Review"** permission gateway for item-by-item review of tool calls.

Permissions are reviewed item-by-item according to categories (directory access / command execution / file reading / image reading / file editing / undo operations / spawn sub-agents / repeat operations), supporting dual-level global/project configuration, exceptions (whitelist/blacklist), quick tool defaults, custom rules, fallback strategies, and bilingual Chinese/English approval popups and sandbox escalation workflows.

## Features

- **Eight Permission Categories**: Directory access outside workspace,…
