---
repo: "STARDUSTLC666/dsh-calendar"
name: "dsh-calendar"
description: "DSH calendar workspace: CalDAV events, month / week / agenda views, free-slot suggestions, and ICS preview import. Issues and PRs are welcome."
originalDescription: "DSH 日历工作台：CalDAV 日程、月 / 周 / 议程视图、空闲时段建议与 ICS 预览导入。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-calendar"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [76, 24]
topics: ["calendar", "deepseek-harness", "dsh-plugin", "caldav", "google-calendar", "icloud", "nextcloud"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T22:50:55Z"
lastCommitAt: "2026-11-13T18:31:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["STARDUSTLC666"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7d5334cef55aaa852151bc049f71343f461475fd668cfea4d60cc08cf60e0f3/STARDUSTLC666/dsh-calendar"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-calendar/blob/HEAD/README.en.md)

# Calendar

**See your schedule, and find suitable free time in your current calendar.**

**[Installation](#安装) · [Getting started](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-calendar/blob/main/docs/REFERENCE.zh.md)**

## Features

- Schedule events using month, week, or agenda views.
- Find free-slot candidates by duration, working days, and buffer time.
- Review a new-event draft or ICS import preview before confirming the write.

Images show the real interface from a verification environment or a rendered sample PPTX, using sample data.

## Installation

In the DSH desktop app's “Plugins” panel, install `dsh-calendar`. If the command line is already configured, you can also use:

```bash
dsh plugin --profile desktop add dsh-calendar
```

For the web version, change `desktop` to `web`. After installation, restart the corresponding DSH. The host requirement follows what the package declares: `>=0.2.2-rc.3`.

## Getting started

1. Open “Calendar” in the left sidebar, choose a provider in the connection settings, and enter your own account and…
