---
repo: "iFence/power-paste"
name: "power-paste"
description: "Power Paste is a desktop clipboard history manager built with Tauri 2, Vue 3, and Rust.It is designed around a native-feeling workflow: monitor clipboard changes in the background, open a compact history panel with a global shortcut, then quickly search, preview, copy, edit, or paste previous items back into the last target application."
readmeQualityOk: true
url: "https://github.com/iFence/power-paste"
homepage: "https://power-paste.hiaspirin.cc/"
language: "Rust"
languages: ["Rust"]
languagePcts: [54]
stars: 35
forks: 4
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-29T13:00:33Z"
lastCommitAt: "2026-11-19T11:56:23Z"
lastReleaseAt: "2026-04-24T10:05:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 34
maintainers: ["iFence", "aspirin1997", "SeanWong17"]
openGraphImageUrl: "https://opengraph.githubassets.com/4730380053a18d270dbf5e583bcda80d66c4c367a7b1797a0352a91a10521b4d/iFence/power-paste"
---

# Power Paste

Power Paste is a desktop clipboard history manager built with `Tauri 2`, `Vue 3`, and `Rust`. It focuses on a native-feeling workflow: watch clipboard changes in the background, open a compact panel with a global shortcut, then quickly search, preview, copy, edit, tag, or paste older items back into the last target application.

The current implementation is local-first. Clipboard history is stored in SQLite on the device, settings are persisted in `settings.json`, and local-network transfer speaks the LocalSend protocol (embedded from `localsend/localsend`, Apache-2.0), so official LocalSend clients can discover and exchange files with Power Paste directly.

中文说明见 [README.zh-CN.md](https://github.com/iFence/power-paste/blob/HEAD/README.zh-CN.md)。

## Product Preview

### Demo Video

[Watch the demo video](https://github.com/iFence/power-paste/blob/HEAD/docs/demo-video.mp4)

| Main Panel | Settings |
|---|---|
|  | |
