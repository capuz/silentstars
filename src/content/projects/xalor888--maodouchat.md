---
repo: "xalor888/Maodouchat"
name: "Maodouchat"
description: "Maodouchat: secure & lightweight Telegram/WeChat-style messenger (Android + Ktor server + Docker deployment)"
originalDescription: "Maodouchat: secure & lightweight Telegram/WeChat-style messenger (Android + Ktor server + Docker deployment)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xalor888/Maodouchat"
homepage: "https://chat.mdou.me"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["app", "application", "application-code", "chat-app", "chat-application", "chatapp"]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-08T06:41:10Z"
lastCommitAt: "2026-10-24T00:15:37Z"
lastReleaseAt: "2026-08-20T19:23:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["xalor888"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1327488116/33b39ae0-1561-4d96-8204-afe3d9abaed5"
discussionCount: 0
---

# Maodouchat

Maodouchat (毛豆聊天) is an end-to-end encrypted Android instant messaging app: Jetpack Compose client + Ktor backend. It covers one-on-one and group chats, posts, audio and video calls, Signal protocol E2EE, encrypted attachments, optional AI capabilities, and an admin console.

For the feature list and completeness status, see [`docs/feature-inventory.md`](https://github.com/xalor888/Maodouchat/blob/HEAD/docs/feature-inventory.md). For the Bot API, see [`docs/bot-developer-api.md`](https://github.com/xalor888/Maodouchat/blob/HEAD/docs/bot-developer-api.md).

## Tech Stack

| Layer | Technology |
|----|------|
| Client | Kotlin, Jetpack Compose, Room + SQLCipher, WorkManager |
| Real-time | WebSocket `/ws` + REST fallback |
| Encryption | libsignal-client (1:1 sessions + group Sender Key), attachments AES-256-GCM |
| Calls | WebRTC (1:1 + group mesh), TURN short-term credentials |
| Server | Ktor, Exposed, JWT, PostgreSQL |
| Deployment | Docker Compose (Caddy + Postgres + server) |

## Requirements

- **JDK 21**: Required by this repository's Gradle build. Do not run Gradle with JDK 25.
- Android Studio / Android SDK, with `compileSdk = 37`.

Common commands:

```bash…
