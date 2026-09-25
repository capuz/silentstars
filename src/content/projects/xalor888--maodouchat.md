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
languagePcts: [94]
topics: ["app", "application", "application-code", "chat-app", "chat-application", "chatapp"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-08T06:41:10Z"
lastCommitAt: "2026-09-25T09:00:01Z"
lastReleaseAt: "2026-08-20T19:23:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 54
maintainers: ["xalor888", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1327488116/33b39ae0-1561-4d96-8204-afe3d9abaed5"
discussionCount: 0
---

# Maodouchat

Maodouchat (Maudou Chat) is an end-to-end encrypted Android instant messaging application: Jetpack Compose client + Ktor backend. Covers one-on-one chat/group chat, feeds, audio and video calls, Signal protocol E2EE, encrypted attachments, optional AI capabilities and admin panel.

For feature list and completeness, see [`docs/feature-inventory.md`](https://github.com/xalor888/Maodouchat/blob/HEAD/docs/feature-inventory.md); for Bot API, see [`docs/bot-developer-api.md`](https://github.com/xalor888/Maodouchat/blob/HEAD/docs/bot-developer-api.md).

## Technology Stack

| Layer | Technology |
|-------|---|
| Client | Kotlin, Jetpack Compose, Room + SQLCipher, WorkManager |
| Realtime | WebSocket `/ws` + REST fallback |
| Encryption | libsignal-client (1:1 sessions + group Sender Key), attachment AES-256-GCM |
| Calls | WebRTC (1:1 + group mesh), TURN short-term credentials |
| Server | Ktor, Exposed, JWT, PostgreSQL |
| Deployment | Docker Compose (Caddy + Postgres + server) |

## Environment Requirements

- **JDK 21**: Mandatory requirement for Gradle builds in this repository; do not use JDK 25 to run Gradle.
- Android Studio / Android SDK, `compileSdk = 37`.

Common…
