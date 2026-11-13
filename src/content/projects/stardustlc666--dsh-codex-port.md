---
repo: "STARDUSTLC666/dsh-codex-port"
name: "dsh-codex-port"
description: "Porting Codex skills to DSH: import preview, invocation policy and license retention, name conflict checks. Issues and PRs are welcome."
originalDescription: "将 Codex 技能移植到 DSH：导入预览、调用策略与许可保留、重名检查。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-codex-port"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [64, 36]
topics: ["codex", "deepseek-harness", "dsh-plugin", "skills"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-14T19:54:14Z"
lastCommitAt: "2026-11-13T18:32:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 42
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/9534660ff9cfeb28384bdb9a1258819517e28b8a099cf36e519a5b0b3af4759b/STARDUSTLC666/dsh-codex-port"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-codex-port/blob/HEAD/README.en.md)

# Codex Port

**Bring commonly used Codex skills to DSH.**

**[Installation](#安装) · [Usage flow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-codex-port/blob/master/docs/REFERENCE.zh.md)**

## Features

- View portable skills, dependencies, and licenses.
- Check the target directory and name conflict handling before deciding to import.
- Import only the skills you need, and review the migration results.

## Installation

Install `dsh-codex-port` from the "Plugins" panel in the DSH desktop app. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add dsh-codex-port
```

For the web version, change `desktop` to `web`. After installation, restart the corresponding DSH. The host requirement is based on the package declaration `>=0.2.2-rc.3`.

## Getting Started

1. Start a session in your target DSH workspace and indicate where your local Codex skills are located.
2. Ask the assistant to first list portable skills, dependencies, and license notes, rather than copying everything at once.
3. Select the skills you…
