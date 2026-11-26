---
repo: "Tea-Neko-Party/TeaNeko-App"
name: "TeaNeko-App"
description: "A project containing TeaNeko-Core and TeaNeko-Onebot"
originalDescription: "包含了 TeaNeko-Core、TeaNeko-Onebot 的项目"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Tea-Neko-Party/TeaNeko-App"
language: "Java"
languages: ["Java"]
languagePcts: [95]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-07T06:49:55Z"
lastCommitAt: "2026-11-26T15:22:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 57
undervaluedScore: 45
maintainers: ["zExNocs"]
openGraphImageUrl: "https://opengraph.githubassets.com/06a64f00a53384bd6eef8638ee792b8d6b368df99f21d9e833ecaa8192df67bb/Tea-Neko-Party/TeaNeko-App"
---

# TeaNeko App

**A multi-platform chatbot with pluggable agents.**

Chat with an agent through platform clients or the web chat, and manage models, chat settings, memory, and runtime status in the web console.

[Build and Start](#构建与启动) · [Platform Access](#平台客户端部署) · [Development Environment](#开发环境) · [Detailed Documentation](#详细文档) · [Issue Feedback](https://github.com/Tea-Neko-Party/TeaNeko-App/issues)

## Core Capabilities

| Scenario | Capability |
| --- | --- |
| Agent conversation | Text and image input, model routing, and tool calls |
| Component assembly | Select context, memory, persona, expression, and other components per chat |
| Web management | Model and chat configuration, activity and memory, tasks, logs, and machine status |
| Platform access | Reverse WebSocket, standalone web chat |
| Plugin development | Annotated tools, components and systems, event listeners, and management interfaces |

## Build and Start

Requires **JDK 25, Node.js 22.12 or later, npm, and MySQL**. Use the bundled Gradle Wrapper, so no separate Gradle install is needed. On Windows PowerShell, replace `./gradlew` in the commands below with `.\gradlew.bat`.
