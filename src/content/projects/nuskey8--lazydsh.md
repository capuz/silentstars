---
repo: "nuskey8/lazydsh"
name: "lazydsh"
description: "A lazier terminal UI for DeepSeek Harness."
readmeQualityOk: true
url: "https://github.com/nuskey8/lazydsh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 44
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-11-14T08:18:59Z"
lastCommitAt: "2026-11-15T08:10:42Z"
lastReleaseAt: "2026-11-15T08:00:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 30
maintainers: ["nuskey8"]
openGraphImageUrl: "https://opengraph.githubassets.com/6060557b82235784d920e7515c385c950d077c4a0a594b04f0c40670cf7de0b1/nuskey8/lazydsh"
---

# lazydsh

English | [简体中文](https://github.com/nuskey8/lazydsh/blob/HEAD/README.zh-CN.md) | [日本語](https://github.com/nuskey8/lazydsh/blob/HEAD/README.ja.md)

A lazier terminal UI for DeepSeek Harness.

## Overview

lazydsh is a TUI harness powered by [DeepSeek Harness](https://deepseek.com/en/harness/) as its backend. It contains only the essential features required to handle DeepSeek Harness in a TUI, making it lightweight compared to other DSH TUI clients such as [dsh-TUI](https://dshtui.com/en).

## Features

### Lightweight & Fast

lazydsh is built on top of [pi](https://pi.dev/). It provides a simple, user-friendly, and high-performance TUI with only the necessary features.

### Standalone

lazydsh is **NOT** a DSH plugin.

Many DSH TUI clients are provided as plugins, which can lead to version compatibility issues with the core DSH installation.

lazydsh is an independent CLI tool containing only the core parts of DSH. It can run on Node without requiring the full DSH main package.

### Provider Independent

lazydsh supports all providers natively supported by pi out-of-the-box. You can connect and use subscriptions from OpenAI, Anthropic, Google, OpenCode, and others, in…
