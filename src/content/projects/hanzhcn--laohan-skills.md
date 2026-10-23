---
repo: "hanzhcn/laohan-skills"
name: "laohan-skills"
description: "老韩AI · Agent Skills pack — 22 skills covering the full content creation workflow, content acquisition from 30+ platforms, and developer tools. Supports Claude Code / Codex / OpenClaw. Search “老韩AI” on Douyin for hands-on tutorials."
originalDescription: "老韩AI · Agent Skills 技能包 — 22 个技能覆盖内容创作全流程、30+ 平台内容获取与开发者工具，支持 Claude Code / Codex / OpenClaw。抖音搜索「老韩AI」看实战教程"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hanzhcn/laohan-skills"
homepage: "https://github.com/hanzhcn/laohan-skills/releases"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [74]
topics: ["ai-content", "bilibili", "claude-code", "douyin", "openclaw", "skills", "video-download", "youtube", "ai-tools", "chinese"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-27T19:26:00Z"
lastCommitAt: "2026-10-23T09:33:05Z"
lastReleaseAt: "2026-09-10T16:58:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 48
maintainers: ["hanzhcn"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe93eb5fdd2e1aa864b608350849f4c1ad67faa6c03e286d7567d076331fdcf2/hanzhcn/laohan-skills"
---

# laohan-skills

**Agent Skills Pack** — Content creation pipeline + 30+ platform acquisition + dev tools
**Agent Super Skills Pack** — Full content creation pipeline + 30+ platform content acquisition + developer tools, all in one sentence

**[English](https://github.com/hanzhcn/laohan-skills/blob/HEAD/README.en.md)** | Chinese

By [老韩AI](https://github.com/hanzhcn) · Search “**老韩AI**” on Douyin for hands-on tutorials · Supports [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Codex](https://developers.openai.com/codex/) / [OpenClaw](https://github.com/openclaw/openclaw)

---

## Quick Start

> **No need to install everything** — pick the skills you want and install them individually to avoid clutter. For the full single-install commands, see “[On-Demand Installation](#按需安装)”.

```bash
# Install all at once (22 skills; requires Claude Code, Codex, or OpenClaw)
npx skills add hanzhcn/laohan-skills --agent claude-code -g -y   # Codex/OpenClaw users: replace claude-code with the corresponding agent name

# Install one (recommended: pick as needed)
npx skills add hanzhcn/laohan-skills --skill laohan-xiazai

# Install several
npx skills add hanzhcn/laohan-skills --skill…
