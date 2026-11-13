---
repo: "STARDUSTLC666/dsh-ppt"
name: "dsh-ppt"
description: "Turn materials into a deliverable presentation. Finished products can be downloaded directly. Issues and PRs are welcome."
originalDescription: "给出材料，拿到可以交付的演示文稿。 可直接下载成品 欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-ppt"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["deepseek-harness", "dsh-plugin", "ppt", "skills", "slides", "pptx", "presentation"]
stars: 37
forks: 5
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-15T18:01:27Z"
lastCommitAt: "2026-11-13T18:35:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 38
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/e904196d6d8c3d12a956606c6badee53d825aec4d210cd6d8bea563216917df3/STARDUSTLC666/dsh-ppt"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-ppt/blob/HEAD/README.en.md)

# PPT

**Provide materials, get a presentation ready for delivery.**

**[Installation](#安装) · [Usage flow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-ppt/blob/master/docs/REFERENCE.zh.md)**

## Features

- Generate HTML slideshows, editable PPTX files, and project packages.
- Edit text, images, and slide order on demand, with undo support.
- Optional digital provenance tracing, live simulation, AI pre-review, and defense rehearsal.

Images come from real interfaces in the verification environment or from rendering sample PPTX files, using sample data.

## Installation

Install `dsh-ppt` from the “Plugins” panel in the DSH desktop app. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add dsh-ppt
```

For the web version, change `desktop` to `web`. After installation, restart the corresponding DSH. The host requirement is based on the package declaring `>=0.2.2-rc.3`.

## Getting started

1. In the target workspace, provide materials, purpose, audience, and page count, for example: “Make a deliverable…
