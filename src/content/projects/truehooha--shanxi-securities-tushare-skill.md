---
repo: "TrueHOOHA/shanxi-securities-tushare-skill"
name: "shanxi-securities-tushare-skill"
description: "Shanxi Securities Tushare Skill"
originalDescription: "山西证券Tushare Skill"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TrueHOOHA/shanxi-securities-tushare-skill"
homepage: "http://221.204.19.233:7173/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skill", "agent-skills", "finance", "financial-analysis", "financial-data"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-08T14:27:46Z"
lastCommitAt: "2026-11-08T10:41:45Z"
lastReleaseAt: "2026-07-21T03:45:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 50
maintainers: ["TrueHOOHA"]
openGraphImageUrl: "https://opengraph.githubassets.com/65ff33f50b31982ed82d2112dd5521a78bfde195ae1960cf959cac9ca76d001f/TrueHOOHA/shanxi-securities-tushare-skill"
discussionCount: 1
---

# Shanxi Securities Tushare Skill Suite

This project contains two companion financial analysis Agent Skills, based on the Shanxi Securities `sxsc_tushare` package:

| Skill | Responsibility | Use Case |
|-------|------|---------|
| `shanxi-securities-tushare` | **Data retrieval**: calls 100+ financial data interfaces, batch-fetches data, and delivers structured results | Data retrieval, export, backtest data preparation |
| `sxsc-tushare-analysis` | **Comprehensive analysis**: uses the interfaces of the data skill to cross-analyze targets and output reports | Analysis, research, evaluation, comparison |

---

## 1. If You Are a Human

Send the following sentence directly to your AI assistant:

```
Help me install this skill:
https://gitee.com/TrueHOOHA/shanxi-securities-tushare-skill/
```

> Leave the rest of the installation and configuration to the AI. You don't need to do it manually.

---

## 2. If You Are an Agent

### Installation

1. Copy the two folders in this project, `shanxi-securities-tushare/` (data skill) and `sxsc-tushare-analysis/` (analysis skill), into the `skills/` directory of the Agent tool you are using.

   Example final directory structure:

   ```…
