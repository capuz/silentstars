---
repo: "Nero0427/dsh-purge-lite"
name: "dsh-purge-lite"
description: "Trimmed prompt-injection plugin for DeepSeek Harness: inject your own system prompt and patch the host. Nothing else."
originalDescription: "Trimmed prompt-injection plugin for DeepSeek Harness: inject your own system prompt and patch the host. Nothing else."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Nero0427/dsh-purge-lite"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cordis", "deepseek-harness", "dsh", "dsh-plugin", "nodejs", "prompt-engineering", "system-prompt"]
stars: 20
forks: 7
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-05T01:25:12Z"
lastCommitAt: "2026-11-21T11:39:00Z"
lastReleaseAt: "2026-11-07T10:19:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 26
maintainers: ["Nero0427"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc47857f0f474f50a62eb2ebc7c309ddad1770ed461cbd1d2367eb6b5c939651/Nero0427/dsh-purge-lite"
---

# dsh-purge · lite

**Swap your own system prompt into DeepSeek Harness.**

A plugin that does only two things: it injects the body text into the `system prompt`, then applies a patch to the host so that it takes effect. Every other module is simply absent.

---

## Table of Contents

- [What is this](#这是什么)
- [Design trade-offs](#设计取舍)
- [Installation](#安装)
- [Upgrading](#升级)
- [Quick start](#快速开始)
- [Configuration](#配置)
- [Commands](#命令)
- [HTTP API](#http-接口)
- [How it works](#工作原理)
- [Directory structure](#目录结构)
- [Compatibility](#兼容性)
- [Version support matrix](#版本支持矩阵)
- [FAQ](#常见问题)
- [Known limitations](#已知限制)
- [Versions](#版本)
- [Upstream and license](#上游与许可)

---

## What is this

DeepSeek Harness (hereafter DSH) assembles the `system prompt` before every request: host identity segment + plugin segment + tool descriptions. This plugin rewrites that assembled result to your liking. It replaces the host body with your own text and attaches an anchor at the tail, ensuring the injection remains effective across multiple turns.
