---
repo: "LFVFL/LanShare"
name: "LanShare"
description: "LAN file sharing + group chat: PyQt5 desktop client + standard-library-only HTTP server + hand-written frontend (no framework, no build tool)"
originalDescription: "局域网文件共享 + 群聊：PyQt5 桌面端 + 纯标准库 HTTP 服务 + 手写前端（无框架、无构建工具）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LFVFL/LanShare"
language: "Python"
languages: ["Python"]
languagePcts: [75]
topics: ["file-sharing", "http-server", "intranet", "lan", "no-dependencies", "pyqt5", "python", "self-hosted", "sse", "windows"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-10-19T07:13:39Z"
lastCommitAt: "2026-10-28T09:56:01Z"
lastReleaseAt: "2026-10-28T07:13:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 35
maintainers: ["LFVFL"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4139745b931b5ffd191d7af381229b96a80d30ced809c81d3cfdeeae7acaa7b/LFVFL/LanShare"
---

# LAN Cloud Drive Sharing (LanShare)

Current source code and local fix candidate: **v7.0.1** (Windows single-file EXE, pending re-test on the faulty computer). The published GitHub release is still v7.0.

A LAN file-sharing tool that **works without internet**: on Windows, double-click to run. Phones, tablets, and other computers on the same Wi-Fi or switch can open a browser to transfer files and create group chats. It does not go through any third-party server.

- Desktop: Python 3 + PyQt5, native window + tray, can be packaged as a single exe
- Server: standard library `http.server` only (multi-threaded), no web framework
- Frontend: hand-written HTML/CSS/JS, no build tool, no npm dependencies

## Features

| Category | Capability |
|---|---|
| Files | Server-side paginated and global sorting / upload (chunked + resumable + pause and resume) / download (Range resume supported) / adjacent preview buttons / rename / delete / create directory / drag-and-drop upload |
| Batch | Bundled download (resumable, or optionally streamed), move / copy, search in current directory only / current directory and subdirectories / entire shared directory (root merges duplicate scopes), accurate…
