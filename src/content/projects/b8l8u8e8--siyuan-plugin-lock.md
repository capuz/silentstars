---
repo: "b8l8u8e8/siyuan-plugin-lock"
name: "siyuan-plugin-lock"
description: "A free privacy protection plugin for SiYuan Note that supports locking documents and notebooks with a password or gesture, and automatically locking the screen after inactivity."
originalDescription: "这是一款免费的思源笔记隐私保护插件，支持文档/笔记本加锁（密码/手势）与无操作自动锁屏。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/b8l8u8e8/siyuan-plugin-lock"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
stars: 15
forks: 1
openIssues: 0
closedIssues: 14
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-12-24T16:29:53Z"
lastCommitAt: "2026-11-07T09:31:01Z"
lastReleaseAt: "2026-01-15T12:29:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 30
maintainers: ["b8l8u8e8"]
openGraphImageUrl: "https://opengraph.githubassets.com/1fbe725f08519cdfc8fbf90ed3006cbc46029956d170253d56ae10a3ce46b352/b8l8u8e8/siyuan-plugin-lock"
---

# 🔒 Privacy Protection (SiYuan Lock)

Provides locking mechanisms for SiYuan Note notebooks and documents. Supports password/gesture locks, auto-relock based on trusted duration, and auto-lock screen upon inactivity.

[Chinese](https://github.com/b8l8u8e8/siyuan-plugin-lock/blob/main/README_zh_CN.md) | [English](https://github.com/b8l8u8e8/siyuan-plugin-lock/blob/main/README.md)

## ✨ Features

- **Document/Notebook Locking**: Supports password or 3x3 gesture patterns.
- **Locking Strategy**: Supports default lock on restart, custom auto-relock after N minutes of trusted duration, and a Self-Discipline Lock (auto-unlocks after the countdown; cannot unlock/remove during countdown).
- **Notebook Lock Behavior**: The document tree automatically collapses and requires unlocking to expand; locked documents display a lock icon and a trust countdown (countdown display can be disabled).
- **Document Lock Behavior**: Document locks apply to descendants; content is masked when opening a document; locked documents in the tree cannot expand and require unlocking; if the lock originates from a parent document or notebook, the specific name is indicated.
- **Global Search Protection**: Matched…
