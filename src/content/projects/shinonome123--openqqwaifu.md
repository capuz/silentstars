---
repo: "shinonome123/openqqwaifu"
name: "openqqwaifu"
description: "openqqwaifu is a standalone QQ Waifu console and runtime. It consolidates character cards, session memory, knowledge base, member directory, skill system, model integration, Web Console, and the OpenClaw-compatible skill runtime into a single service. NapCat / OneBot only handles QQ protocol and message sending and receiving."
originalDescription: "openqqwaifu 是一个独立运行的 QQ Waifu 控制台与运行时。  它把角色卡、会话记忆、知识库、成员目录、技能系统、模型接入、Web Console，以及 OpenClaw 兼容 skill runtime 都收敛在同一个服务里；NapCat / OneBot 只负责 QQ 协议和消息收发。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/shinonome123/openqqwaifu"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 99
forks: 6
openIssues: 0
closedIssues: 0
watchers: 14
contributors: 2
recentReleases: 0
createdAt: "2026-04-14T04:51:55Z"
lastCommitAt: "2026-10-27T12:39:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 22
maintainers: ["shinonome123"]
openGraphImageUrl: "https://opengraph.githubassets.com/aca007528aaa9ca68ee16fb0df579908fb2160bd34a5df1e51da6c90b0fe7b53/shinonome123/openqqwaifu"
---

# openqqwaifu

`openqqwaifu` is a standalone QQ Waifu console and runtime.

It consolidates character cards, session memory, knowledge base, member directory, skill system, model integration, Web Console, and the OpenClaw-compatible skill runtime into a single service. NapCat / OneBot only handles QQ protocol and message sending and receiving.

## What It Is Now

A virtual girlfriend system under development that combines OpenClaw with QQ bot functionality.

- Standalone Python backend and Web Console
- Character card editing, switching, previewing, and profile management
- Per-character isolated sessions, knowledge, members, and runtime state
- Tool capabilities such as search, image generation, summarization, file reading, and web page fetching
- Skill marketplace, bundle import, skill panel, and security policies
- OpenClaw-compatible runtime
  - native / bundle detection
  - ClawHub / SkillsMP / GitHub multi-source import
  - MCP tool bridge
  - hook-pack execution
  - hybrid routing
  - ACP / Codex harness session bridge
- NapCat WebUI login bridge and sidecar management
- Docker Compose deployment

## Architecture Overview

The new private-chat runtime path already provides…
