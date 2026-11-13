---
repo: "STARDUSTLC666/deepseek-computer-use"
name: "deepseek-computer-use"
description: "DSH community Windows desktop plugin: window screenshots, UI controls, mouse and keyboard, session authorization and operation audit. Issues and PRs are welcome."
originalDescription: "DSH 社区 Windows 桌面插件：窗口截图、界面控件、鼠标键盘、会话授权与操作审计。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/deepseek-computer-use"
language: "C#"
languages: ["C#", "JavaScript"]
languagePcts: [53, 46]
topics: ["accessibility", "computer-use", "deepseek-harness", "desktop-automation", "dsh", "uia", "windows", "dsh-plugin"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-17T18:57:27Z"
lastCommitAt: "2026-11-13T18:32:38Z"
lastReleaseAt: "2026-10-18T05:17:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 44
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/26ba186d5b4fc7c8ff7208fdfb1e0d71db3d3980fc9e37661061fe6f4c1b3c40/STARDUSTLC666/deepseek-computer-use"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/deepseek-computer-use/blob/HEAD/README.en.md)

# Computer Use

**Let DSH operate Windows apps within authorized scope.**

**[Installation](#安装) · [Usage flow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/deepseek-computer-use/blob/main/docs/REFERENCE.zh.md)**

## Features

- View a window screenshot or UI controls before deciding the next step.
- Limit the scope of operations through session app authorization.
- Verify actual results, and keep operation auditing and interruption capability.

## Installation

Install `deepseek-computer-use` from the Plugins panel of the DSH desktop app. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add deepseek-computer-use
```

For the web version, change `desktop` to `web`. After installation, restart the corresponding DSH. Host version requirements are determined by the version the package declares, `>=0.2.2-rc.3`.

## Getting Started

1. Install deepseek-computer-use in the actual DSH profile on Windows 10/11, then create a new session.
2. Open the target software, and in the conversation explain the app to…
