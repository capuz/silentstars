---
repo: "alicia1030su/dsh-ai-debate"
name: "dsh-ai-debate"
description: "AI Debate: A DSH-powered, multi-platform debate assistant that understands context and stance, drafts persona-based replies for approval. Currently supports Baidu Tieba, with Weibo and Zhihu planned."
originalDescription: "AI 代吵架｜基于 DSH 的多平台 AI 辩论助手，理解讨论上下文与用户立场，按自定义人格生成回复，人工确认后发布。现支持百度贴吧，计划接入微博、知乎等平台。 | AI Debate: A DSH-powered, multi-platform debate assistant that understands context and stance, drafts persona-based replies for approval. Currently supports Baidu Tieba, with Weibo and Zhihu planned."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/alicia1030su/dsh-ai-debate"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-27T12:34:56Z"
lastCommitAt: "2026-11-05T08:06:01Z"
lastReleaseAt: "2026-10-29T07:02:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 46
maintainers: ["alicia1030su"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c1b1f8ececaf49e16977d33d62808cd75215ad2acf69f5cf36fd12579a7198f/alicia1030su/dsh-ai-debate"
---

# AI Debate · dsh-ai-debate

  <img
    src="docs/images/ai-debate-cover.png"
    alt="AI Debate project cover: a black-haired woman in a black-and-gold outfit with arms folded across her chest, and a white-haired AI girl wearing blue tech headphones, pointing forward during an intense debate"
    width="420"
  />

A DSH plugin that reads Baidu Tieba posts and their sub-replies (楼中楼), reconstructs the argument between the owner and the opponent, drafts a reply in the selected persona, and publishes it **only after the owner confirms**.

> Scope: this plugin is about making points clear and surfacing supporting evidence. It does not threaten, personally attack, fabricate claims, organize pile-ons, or spam. Publishing defaults to **manual review**; every reply must be read in full by the owner and explicitly confirmed.

---

## Table of Contents

- [What it actually does](#它到底能做什么)
- [Platform support status](#平台支持现状)
- [Four personas](#四种人格)
- [Requirements](#环境要求)
- [Installation](#安装)
- [Configuration](#配置)
- [Usage workflow](#使用流程)
- [Nine tools](#九个工具)
- [Reply review and publishing](#回复的审核与发布)
- [Architecture and module layout](#架构与模块划分)
- [How to develop a new platform…
