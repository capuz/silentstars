---
repo: "oil-oil/agent-record"
name: "agent-record"
description: "Record real web interactions, add mouse highlights, focus effects, and captions, and produce exportable product demo videos."
originalDescription: "录制真实网页操作，添加鼠标强调、聚焦和说明文字，制作可导出的产品演示视频。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oil-oil/agent-record"
homepage: "https://www.oiloil.org"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [80, 20]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-09T09:03:21Z"
lastCommitAt: "2026-11-25T03:19:35Z"
lastReleaseAt: "2026-08-09T09:08:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 18
maintainers: ["oil-oil"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fc43e0c121b4cac5f1d3fdc157e68056ac9fa861368b6a06de6322a4636afdc/oil-oil/agent-record"
---

# Agent Record Skill

Record real web interactions, add mouse highlights, focus effects, and captions, and produce exportable product demo videos.

This repository contains only a public Agent Skill. The browser extension is free; the local Companion provides recording and export capabilities. Free can export 1080p30 with a watermark; Pro can export 2K/4K60 without a watermark and allows commercial use.

## Where the Skill is

The Skill directory is:

```text
skills/agent-record/
```

`SKILL.md` is the entry point, `scripts/` contains the public agent and installer, and `references/` contains the operation guidelines.

## Install into Codex

```bash
git clone https://github.com/oil-oil/agent-record.git
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R agent-record/skills/agent-record "${CODEX_HOME:-$HOME/.codex}/skills/agent-record"
```

Reopen Codex and it is ready to use. On first run it downloads the macOS Companion for the corresponding version, verifies its SHA256, and installs the open-source rendering dependencies according to the lock file. It does not download Core source code.
