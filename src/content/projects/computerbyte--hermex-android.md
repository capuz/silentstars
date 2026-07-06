---
repo: "ComputerByte/hermex-android"
name: "hermex-android"
description: "Native Android (Kotlin + Jetpack Compose) client for a self-hosted hermes-webui server"
readmeQualityOk: true
url: "https://github.com/ComputerByte/hermex-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-03T04:06:19Z"
lastCommitAt: "2026-07-06T07:03:52Z"
lastReleaseAt: "2026-07-05T09:25:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["ComputerByte"]
openGraphImageUrl: "https://opengraph.githubassets.com/13bce6f3d2c8f1b1e79b2ac0f5c9887ab9bdc759c323acaa088f863eaea91c1e/ComputerByte/hermex-android"
---

# Hermex Android

Hermex is the native Android control plane for a self-hosted [Hermes](https://github.com/nesquena/hermes-webui)
AI agent server, built with Kotlin and Jetpack Compose — the Android counterpart to the iOS
Hermex app.

## Status

**Active development / UI preview build — current version: v0.10.0-ui-rebuild.**

This is not a final Play Store release yet, but the app is already running on real Android
hardware against a real Hermes server. The v0.10.0 release introduced a slide-out navigation
drawer with hamburger menu access from every screen, replacing the previous inline nav
layout. See the Screenshots section below for the current look. See `API_CONTRACT.md` for the
verified server API contract this app targets.

## Current Features

- Native Android / Jetpack Compose UI, styled from a shared Hermex design system (colors, shape,
  typography tokens) with a live-composited wordmark, bolder navigation typography, and
  TODAY/YESTERDAY/date session grouping in the home/session list
- Slide-out navigation drawer with Hermex wordmark, nav items (Chats/Tasks/Skills/Memory/
  Insights/Projects/Settings), Recents section, and compact New Chat button — accessible via…
