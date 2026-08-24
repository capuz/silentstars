---
repo: "wilsonglasser/oryxis"
name: "oryxis"
description: "Rust SSH Client & Terminal Emulator with an encrypted vault, SFTP, port forwarding, cloud discovery, and P2P sync. Windows, macOS, Linux."
readmeQualityOk: true
url: "https://github.com/wilsonglasser/oryxis"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["iced", "linux", "macos", "rust", "sftp", "ssh", "ssh-client", "ssh-vault", "terminal", "terminal-emulator"]
stars: 290
forks: 16
openIssues: 14
closedIssues: 114
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-04-04T03:05:23Z"
lastCommitAt: "2026-08-24T04:03:33Z"
lastReleaseAt: "2026-05-10T21:12:17Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 26
maintainers: ["wilsonglasser", "shideqin"]
openGraphImageUrl: "https://opengraph.githubassets.com/221f36a8cef4c4cc7addfba0a63b8300d1217ca531a08348d41931ca17c2ea9c/wilsonglasser/oryxis"
fundingLinks: ["KO_FI:https://ko-fi.com/wilsonglasser", "BUY_ME_A_COFFEE:https://buymeacoffee.com/wilsonglasser"]
discussionCount: 9
---

</p>

<h1 align="center">Oryxis</h1>

  A modern SSH client built entirely in Rust. Fast, encrypted, native.
</p>

  English | <a href="README.zh-CN.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.ja.md">日本語</a> | <a href="README.ko.md">한국어</a> | <a href="README.fa.md">فارسی</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

</p>

</p>

## What is Oryxis?

Oryxis is an open-source alternative to [Termius](https://termius.com/): a
desktop SSH client with a modern UI, an encrypted local vault for
credentials, and no cloud account anywhere in the loop. No Electron, no
webview, no vendor servers. Just a single native binary.

Most SSH clients make you pick two out of three: powerful but dated
(PuTTY), pretty but Electron-heavy (Termius, Tabby), or minimal and
terminal-only (OpenSSH). Oryxis aims at all three: **beautiful, fast, and
native**.

|  | Oryxis | Termius | PuTTY | Tabby |
|--|--------|---------|-------|-------|
| UI stack | Native Rust (iced + wgpu) | Electron | Native | Electron |
| License | AGPL-3.0, open source | Proprietary | MIT | MIT |
| Credential storage | Local encrypted vault | Vendor cloud account | None | Local config files |
| Device…
