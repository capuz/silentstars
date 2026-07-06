---
repo: "asukaneko/nekobot"
name: "nekobot"
description: "A web-based multi-channel AI role-playing project that integrates a character card system, chat, workspace, tool invocation, knowledge base, memory, workflow, and a visual management backend."
originalDescription: "一个面向Web的多频道 AI 角色扮演项目，集成角色卡系统、聊天、工作区、工具调用、知识库、记忆、工作流与可视化管理后台。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/asukaneko/nekobot"
homepage: "https://asukaneko.github.io/nekobot/"
language: "Python"
languages: ["Python"]
languagePcts: [53]
topics: ["python", "agent", "mcp", "memory", "roleplay", "rp", "worldbook"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2025-03-25T06:08:21Z"
lastCommitAt: "2026-07-06T07:02:13Z"
lastReleaseAt: "2026-05-20T10:56:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 77
maintainers: ["asukaneko"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e802b65919fdc502784c10ec8ffd644d34ad673c225bc0f4717abbe45103015/asukaneko/nekobot"
---

# NekoBot

A multi-channel AI role-playing system for the web, including channels such as Web, QQ, CLI, Telegram, Feishu, etc.

</div>

## Overview

NekoBot is an AI system designed for role-playing and long-term interaction scenarios. The project adopts an architecture that separates the unified AI core from the channel adaptation layer, providing a complete web management backend, character runtime, memory system, tool invocation, and workspace capabilities.

Its core goal is not merely to provide a "chat interface," but to offer a sustainable, configurable, observable, and scalable infrastructure for character-based intelligent agents.

## Core Capabilities

- Multi-channel access: Supports QQ, Web, CLI, Telegram, Feishu, sharing a unified `ChatRequest / ChatResponse` processing chain.
- Character runtime: Built-in real-time emotional engine, six-dimensional relationship model, dynamic PromptStack, automatic state assessment, and character memory.
- Web console: Provides session management, character management, model configuration, workflows, knowledge base, memory, logs, and debugging interface.
- Tools and workspace: Supports tool invocation, file read/write, shared/private…
