---
repo: "ThinkOffApp/ClawWatch"
name: "ClawWatch"
description: "The first intelligent AI agent running natively on a smartwatch. NullClaw + Vosk offline STT + Claude on Galaxy Watch"
readmeQualityOk: true
url: "https://github.com/ThinkOffApp/ClawWatch"
homepage: "https://thinkoff.io"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [82]
topics: ["ai-agent", "android", "galaxy-watch", "nullclaw", "offline-ai", "smartwatch", "voice-assistant", "wear-os", "kotlin", "on-device-ai"]
stars: 76
forks: 10
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-02T12:50:38Z"
lastCommitAt: "2026-11-27T12:58:52Z"
lastReleaseAt: "2026-08-05T03:09:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 13
maintainers: ["ThinkOffApp"]
openGraphImageUrl: "https://opengraph.githubassets.com/527047ec9a44f2bf14b9b177494d0fa8da4db231648907b0d49feee30400268d/ThinkOffApp/ClawWatch"
discussionCount: 4
---

# ClawWatch

**The first intelligent AI agent running natively on a smartwatch.**

A voice-controlled smartwatch agent for Wear OS: an on-device LLM assistant living on your Galaxy Watch, with offline speech recognition and no companion app in the loop.

Tap. Speak. Get an answer. No cloud STT, no phone dependency, no latency from middlemen.

ClawWatch bundles [NullClaw](https://github.com/nullclaw/nullclaw) `v2026.3.7` as a static ARM binary, paired with offline speech recognition (Vosk) and the built-in TTS engine. The live response path now tries NullClaw first again on every query. On Wear OS, NullClaw's `curl` calls are bridged back to the parent Kotlin app for network access, and if the native path fails or times out ClawWatch falls back to the existing Kotlin Anthropic path instead of leaving the watch stuck.

> **Google Play packaging.** A Play-targeted BYOK build (`ClawWatch-Pro`, currently in a private repository)
> is in progress and not published on Google Play yet; build from this repository for now. This repository
> is the open-source original where development happens.
