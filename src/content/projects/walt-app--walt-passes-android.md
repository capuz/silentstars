---
repo: "walt-app/walt-passes-android"
name: "walt-passes-android"
description: "Open-source pass-handling kernel for the Walt wallet app. PKPASS parsing, signature verification, encrypted storage, and security-critical UI flows. Transparency-for-trust."
readmeQualityOk: true
url: "https://github.com/walt-app/walt-passes-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 145
forks: 2
openIssues: 32
closedIssues: 39
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-03T12:51:46Z"
lastCommitAt: "2026-10-02T09:59:07Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 86
undervaluedScore: 23
maintainers: ["bittelc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7fd7657e5e08cba5d7700fb9c96723ff61bebee94e3e87eade3ce38ea213ecc/walt-app/walt-passes-android"
---

# Walt Passes (Android)

> The open-sourced pass-handling implementation that ships in the [Walt](https://walt.is) Android wallet app.

## Why this repository exists

Walt is a privacy-focused NFC tap-to-pay wallet. Its core promise is that user data stays on the device. As Walt adds support for boarding passes, event tickets, loyalty cards, and other pass types (mirroring Apple Wallet and Google Wallet's "pass" concept), users have a reasonable question: *what does Walt actually do with my pass data?*

This repository answers that question by being the auditable source of truth for Walt's pass handling. Walt's main app is closed source. The pass-handling code is not. Every security-and-privacy claim Walt makes about pass handling is implemented in code that lives here.

**This repository exists for transparency, not for library reuse.** Reuse is welcome as a side effect. The primary commitment is the audit trail.

## Status

Pre-alpha. Architecture and design phase. No releases yet.

## Trust claim audit map

| Walt claim | Where to look |
|---|---|
| PKPASS parser is hardened against malicious input | `passes-core` — `PassParser`, `ParserConfig`, ZIP/JSON/PNG hardening |
|…
