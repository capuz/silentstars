---
repo: "STARDUSTLC666/dsh-dream"
name: "dsh-dream"
description: "DSH task experience memory: automatically organizes candidates, manual review and adoption, recall of related tasks, and source and scope verification. Issues and PRs welcome."
originalDescription: "DSH 任务经验记忆：自动整理候选、人工审阅采纳、相关任务召回、来源与范围核查。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-dream"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [72, 28]
topics: ["deepseek-harness", "dsh-plugin", "agent-memory", "memory", "reflection"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T14:34:02Z"
lastCommitAt: "2026-11-13T18:33:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["STARDUSTLC666", "jazzzzmaybe"]
openGraphImageUrl: "https://opengraph.githubassets.com/de2dd37e4572c8bde400301618e42e8576ba5e060f6a8c627660a0a61a0dfdef/STARDUSTLC666/dsh-dream"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-dream/blob/HEAD/README.en.md)

# Dream

**Let DSH turn the tasks it has completed into experience you can use next time.**

**[Installation](#安装) · [Usage flow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-dream/blob/master/docs/REFERENCE.zh.md)**

## Features

- After an actual task ends, candidate experience is organized according to the switches and quota.
- Verify the original text, scope of applicability, conditions, and exceptions before deciding whether to adopt it.
- Reuse confirmed experience in related tasks, and keep its source.

## See how it works

A step carousel made from real screenshots taken in a verification environment: review the pending candidates, then view the adopted list. It demonstrates the manual review flow. It is not a continuous screen recording or a performance benchmark.

## Installation

Install `@stardustlc/dsh-dream` from the “Plugins” panel of the DSH desktop app. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add @stardustlc/dsh-dream
```

For the web version, change `desktop` to `web`. After…
