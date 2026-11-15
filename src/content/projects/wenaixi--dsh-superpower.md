---
repo: "Wenaixi/dsh-superpower"
name: "dsh-superpower"
description: "DeepSeek Harness plugin: 15 obra/superpowers engineering skills, bilingual descriptions, per-skill toggles"
originalDescription: "DeepSeek Harness plugin: 15 obra/superpowers engineering skills, bilingual descriptions, per-skill toggles | DeepSeek Harness 插件：15 个 obra/superpowers 工程纪律技能，技能描述中英双语自由切换，每一个技能本身自由开关"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Wenaixi/dsh-superpower"
homepage: "https://www.npmjs.com/package/@wenaixi/dsh-superpower"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [67, 22]
topics: ["dsh", "superpowers", "ai-agent", "brainstorming", "chinese", "cordis", "deepseek", "deepseek-harness", "dsh-plugin", "methodology"]
stars: 30
forks: 2
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-21T17:30:06Z"
lastCommitAt: "2026-11-15T08:17:51Z"
lastReleaseAt: "2026-10-01T14:12:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Wenaixi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c16cfd66557b48e1061159b800cf737e6564a9f846ccd7d88d198e98712a7c5/Wenaixi/dsh-superpower"
discussionCount: 0
---

# dsh-superpower

[English](https://github.com/Wenaixi/dsh-superpower/blob/HEAD/README.md) | [中文](https://github.com/Wenaixi/dsh-superpower/blob/HEAD/README.zh.md)

A DSH port of [obra/superpowers](https://github.com/obra/superpowers). 15 skills are injected into `ctx.skills`. Skill bodies are the official English originals; the panel switches the description each skill shows in the model catalog and the slash-command (`/`) skill menu between Chinese and English, while skill names stay as upstream English.

## Install

Needs the dsh runtime (adapted to latest `v0.2.1-rc.2` / `>=0.2.0-rc.2` via `npm i -g @deepseek-ai/dsh`); Node and pnpm floors are in the badges above. Examples use the `web` profile; substitute your own profile name.

```bash
# A - npm (recommended, always latest)
dsh plugin --profile web add @wenaixi/dsh-superpower@8.1.1

# A2 - the unscoped name, same version, same code
dsh plugin --profile web add dsh-superpower@8.1.1

# B - GitHub (bypasses mirror lag)
dsh plugin --profile web add github:Wenaixi/dsh-superpower

# Verify
dsh --profile web --dump-config | grep -A2 "@wenaixi/dsh-superpower"
# # == @wenaixi/dsh-superpower / - id: superpowers

dsh --profile web  #…
