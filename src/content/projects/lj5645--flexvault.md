---
repo: "lj5645/FlexVault"
name: "FlexVault"
description: "Bitwarden-compatible password management server, supporting Cloudflare Workers and Node.js self-hosting"
originalDescription: "Bitwarden 兼容密码管理服务器 - 支持 Cloudflare Workers 和 Node.js 自托管"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lj5645/FlexVault"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 14
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2026-04-01T22:57:34Z"
lastCommitAt: "2026-10-09T10:49:36Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 46
maintainers: ["shuaiplus", "lj5645", "rootphantomer"]
openGraphImageUrl: "https://opengraph.githubassets.com/e29220ed474d844ffbd078c4b8516e57300c5053c11f86a2139c23081affda3e/lj5645/FlexVault"
fundingLinks: ["CUSTOM:https://nodewarden.app/sponsor"]
---

# FlexVault

Bitwarden-compatible self-hosted password manager. Fork of [NodeWarden](https://github.com/shuaiplus/nodewarden) with added Node.js / Docker self-hosted deployment support, while keeping full Cloudflare Workers compatibility.

[Chinese documentation](https://github.com/lj5645/FlexVault/blob/HEAD/README_ZH.md)

> **Disclaimer**
> This project is for learning and discussion purposes only. Please back up your vault regularly.
> This project is not affiliated with Bitwarden. Please do not report FlexVault issues to the official Bitwarden team.

---

## Features

- **Bitwarden-compatible API** — works with official Bitwarden clients (desktop, mobile, browser extension)
- **Web Vault** — original web UI included
- **Dual deployment modes** — Cloudflare Workers (original) or Node.js / Docker (self-hosted)
- **SQLite storage** — local file-based database via `@libsql/client`, no external DB required
- **File system storage** — attachments stored on local disk (R2-compatible adapter)
- **WebSocket notifications** — real-time sync across devices (Durable Object replacement)
- **TOTP / Passkey / WebAuthn** — full 2FA and passwordless auth support
- **Backup center** — WebDAV /…
