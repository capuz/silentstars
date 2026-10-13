---
repo: "imboy-pub/imboy"
name: "imboy"
description: "An open-source instant messaging solution with an Erlang and PostgreSQL backend and a Flutter frontend. The backend service uses cowboy, a high-performance web framework on erlang/OTP. In a load test on an 8-core, 16 GB host (1M PPS), it kept over 1M TCP connections stably online for more than 90 minutes. It supports one-to-one video calls based on WebRTC. Android app: https://loadly.io/imboyapp"
originalDescription: "使用erlang和PostgreSQL做后端、flutter做前端开发的一款开源的即时聊天解决方案（基于erlang/otp的高性能web框架 cowboy 做后端服务，用 \"8核16G 主机（100万PPS）\"压测，保持100万+TCP稳定在线90分钟以上） 支持基于webrtc 一对一视频通话功能。Android体验 https://loadly.io/imboyapp"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/imboy-pub/imboy"
language: "Erlang"
languages: ["Erlang"]
languagePcts: [88]
topics: ["cowboy", "erlang", "postgresql", "websocket"]
stars: 33
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-09-07T01:34:09Z"
lastCommitAt: "2026-10-13T10:23:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 55
maintainers: ["leeyisoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a3179168dd8a998f5928a3b3c74da810fe3cb2aa9c9ce54116e84d8966d026/imboy-pub/imboy"
discussionCount: 0
---

# IMBoy Backend

[English](https://github.com/imboy-pub/imboy/blob/HEAD/README.en.md)

IMBoy is a privately deployable instant messaging platform. This repository contains the Erlang/OTP backend, database migrations, production deployment configuration, and product documentation. The Flutter client and React admin console are in separate repositories.

## What it can do

Phase 1 delivery (`phase1_delivery` profile) capability scope:

- One-to-one and group chat, and message push (Core IM: contacts, history/offline/multi-device sync, attachments and message governance)
- Enterprise organizations/departments/members/workspaces and RBAC; human customer-service agents and visitor Widget; OA integration (internal API / SSO / Webhook)
- Channel foundation (the organization's internal General group and announcement channels)
- Moments and nearby people (Phase 1 scope; publishing, interactions, location, and privacy controls must be accepted against the delivery matrix)
- HTTP API and WebSocket long connections
- PostgreSQL persistence and direct upload of attachments to Garage S3
- Docker Compose single-node production deployment (Helm/Kubernetes is experimental and not validated on a…
