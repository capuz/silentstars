---
repo: "gulagala001/oh-my-dsh"
name: "oh-my-dsh"
description: "DeepSeek Harness enhancement plugin: context compaction and memory, Dream memory, multi-agent Ultra, OpenCU computer use, code understanding, extension management, personalities and themes. All-in-one plugin for DeepSeek Harness: context compaction and memory, multi-agent Ultra, computer use, code understanding, extensions, personalities and themes."
originalDescription: "DeepSeek Harness 增强插件：上下文压缩与 Dream 记忆、Ultra 多智能体、OpenCU 电脑操作、代码理解、扩展管理、人格和主题。 All-in-one plugin for DeepSeek Harness: context compaction and memory, multi-agent Ultra, computer use, code understanding, extensions, personalities and themes."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gulagala001/oh-my-dsh"
homepage: "https://gulagala001.github.io/oh-my-dsh/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["ai-agent", "context-management", "deepseek-harness", "dsh", "memory", "plugin", "dsh-plugin", "deepseek-harness-plugin", "dsh-bundle"]
stars: 50
forks: 4
openIssues: 10
closedIssues: 21
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-10T04:42:57Z"
lastCommitAt: "2026-11-12T05:34:27Z"
lastReleaseAt: "2026-09-19T11:16:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/46a044f6b29996e701220d431e8ac7b23ac83fb4d74f69dbd535009b5b0ade00/gulagala001/oh-my-dsh"
---

## Quick Start

**Requirements:** DSH **0.2.2-rc.2**, Node.js **24.9.0+**. The model is the one you configured in DSH.

### 1. Install

In DSH, open **Plugins → ＋ Add plugin** and paste:

```text
https://github.com/gulagala001/oh-my-dsh/releases/download/v0.2.2-rc.2.omd.1.3.15/oh-my-dsh-0.2.2-rc.2.omd.1.3.15.tgz
```

Wait for your current task to finish, then enable the plugin or restart DSH as prompted. Your original settings and sessions are still there. For older DSH versions, upgrades, and uninstalling, see the [Install Guide](https://github.com/gulagala001/oh-my-dsh/blob/HEAD/docs/install.md). To verify the file, see [SHA256SUMS](https://github.com/gulagala001/oh-my-dsh/releases/download/v0.2.2-rc.2.omd.1.3.15/SHA256SUMS).

> By default, OMD lets the AI read and write files and run commands directly, without asking for each one. Permissions you set in your profile take precedence.

### 2. Try One Thing First

Start a new session, select **Oh My DSH** as the preset, and enter the following in a project directory:

```text
Read this project's README and tell me what it does and how to start it. Answer only based on what you read, and do not modify any files.
```

The answer…
