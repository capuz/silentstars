---
repo: "GH-Wuxin/WuxinBot"
name: "WuxinBot"
description: "WuxinBot — osu!-focused QQ group AI chatbot (pippi)"
originalDescription: "WuxinBot — osu!-focused QQ group AI chatbot (pippi)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/GH-Wuxin/WuxinBot"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 35]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-09T12:34:57Z"
lastCommitAt: "2026-10-23T09:32:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4bb5afebfe028d2ed14fa8fd0294b56602684353434f9e17a53639cbcc8e76a9/GH-Wuxin/WuxinBot"
---

# WuxinBot

An extensible AI Agent for QQ group chats, based on OneBot v11.

WuxinBot combines open-ended conversation, deterministic message routing, and bounded tool calls in one runtime. Explicit commands and high-confidence data queries are handled directly by code. The LLM is used only when understanding context or choosing a tool is required. It is not an autonomous agent that plans and executes tasks without limit, and it is not just a chat bot that forwards group messages to a model as-is.

The current release uses **pippi** as the default interactive persona. pippi is a presentation-layer persona setting, not the project definition of WuxinBot.

V2.0 adds per-group coordinated natural replies, plus affinity, recent mood, and forms of address and tone that the LLM decides and updates. The Owner is permanently displayed as "特殊" (Special). Command permissions are checked against real identity and source, not by keyword judgment.

View status, rankings, decisions, usage, and correction records under Console "More → 接话与好感 (Replies & Affinity)". After upgrading, the master switch is off by default. Once enabled, it follows the existing per-group switches and participation…
