---
repo: "fanyuantaier/wechatauto-replica"
name: "wechatauto-replica"
description: "Windows WeChat automation for Windows (non-web), wxauto replica supporting WeChat 4.x - Windows 微信客户端自动化（非网页版）复刻版"
readmeQualityOk: true
url: "https://github.com/fanyuantaier/wechatauto-replica"
homepage: "https://pypi.org/project/wechatauto-replica/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "uiautomation", "wechat", "weixin", "ocr", "sqlcipher", "wechat-automation", "wxauto", "wechat4", "wechatauto"]
stars: 17
forks: 14
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-08-07T09:42:11Z"
lastCommitAt: "2026-08-16T04:08:56Z"
lastReleaseAt: "2026-08-15T11:55:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 70
undervaluedScore: 33
maintainers: ["fanyuantaier"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e95ef0d8bebd698dc6e328e93d1dbc1a95a20b2402f683e7bcfc65a66f85cf8/fanyuantaier/wechatauto-replica"
---

[**English**](https://github.com/fanyuantaier/wechatauto-replica/blob/HEAD/README.md) | [**中文**](https://github.com/fanyuantaier/wechatauto-replica/blob/HEAD/README.zh-CN.md)

# wechatauto-replica — WeChat 4.x Windows Automation (wxauto-compatible)

Automate the **WeChat 4.x Windows desktop client** (not the web version): read messages, listen in real time, download media, export full history, read Moments (朋友圈), and send messages — by driving the local client directly.

> **Current version:** 1.1.0 · Windows 10/11 · Python 3.9+ (verified on 3.12) · WeChat **4.1.12+**
>
> **Why this project exists:** the classic [wxauto](https://github.com/cluic/wxauto) relies on the UI Automation tree, which WeChat 4.x broke with self-drawn rendering (no accessibility nodes). wechatauto-replica is a drop-in-style replacement: messages are read through **local database decryption** (SQLCipher 4), and sending uses a **UIA + OCR hybrid** driver that auto-falls back between engines.

*Reading the encrypted `contact.db` / `message_*.db` / `sns.db` files directly from `xwechat_files/.../db_storage/` — no web API, all local.*

## ✨ Features

| Capability | Status | How |
|---|---|---|
| Read messages |…
