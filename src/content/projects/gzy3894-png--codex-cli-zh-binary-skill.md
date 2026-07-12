---
repo: "gzy3894-png/codex-cli-zh-binary-skill"
name: "codex-cli-zh-binary-skill"
description: "Codex CLI TUI available out of the box on Android: based on ReTerminal + Alpine/proot, it includes the Chinese version of Codex ARM64 musl installation, dependency detection, Responses API configuration, and recovery process."
originalDescription: "Android 上开箱可用的 Codex CLI TUI：基于 ReTerminal + Alpine/proot，内置 Codex 中文版 ARM64 musl 安装、依赖检测、Responses API 配置和恢复流程。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gzy3894-png/codex-cli-zh-binary-skill"
homepage: "https://linux.do"
language: "C"
languages: ["C", "Shell", "Kotlin"]
languagePcts: [42, 25, 24]
topics: ["codex", "linux-do", "codex-cli", "openai-codex", "zh-cn", "chinese", "android", "codex-chinese", "termux", "alpine"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-26T04:05:44Z"
lastCommitAt: "2026-07-12T06:09:03Z"
lastReleaseAt: "2026-07-04T07:24:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 54
maintainers: ["gzy3894-png"]
openGraphImageUrl: "https://opengraph.githubassets.com/b36e75f9d89308a6c5ce9ae368a964e95e5df38727cd1b976c85ddc5b2d59975/gzy3894-png/codex-cli-zh-binary-skill"
discussionCount: 0
---

# Codex for TUI

Codex for TUI is a Codex CLI terminal application for Android phones. It is based on ReTerminal and includes an Alpine/proot terminal environment, the installation process for the Chinese version of Codex ARM64 musl, a file tray, and a collaborative browser, allowing users to avoid manually configuring Termux, rootfs, dependencies, PATH, API configuration, local maintenance commands, and mobile preview tools.

In short: install the APK, open the terminal, and follow the prompts to complete the dependency and API configuration to access Codex TUI on your phone.

## Important: 2.5.9 Codex History Recovery and Conversation Partition Fix

2.5.9 fixes the issue where Codex UUIDv7 rollout was incorrectly filtered, restoring the import of all Codex history and correctly reading `payload.message` to generate titles. The sidebar is split into three collapsible partitions: **Codex Conversations / Claude Conversations / Terminal Window**, and selecting historical conversations still executes resume according to the real UUID. See the release notes at `docs/codex-for-tui-2.5.9-release-notes.md`.

## Important: 2.5.0 Session Isolation (based on 2.4.10)

2.5.0 delivers session…
