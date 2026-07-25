---
repo: "monas-team/zaloclaw"
name: "zaloclaw"
description: "Plugin kênh Zalo OpenClaw đầy đủ tính năng, xây dựng trên zca-js, hỗ trợ nhắn tin, quản lý nhóm, phân quyền truy cập và tích hợp công cụ cho agent."
readmeQualityOk: true
url: "https://github.com/monas-team/zaloclaw"
homepage: "https://openclaw.monas.us/zalo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-agent", "chat-automation", "messaging", "openclaw", "typescript", "workflow-automation", "zalo", "zalo-bot", "zca-js"]
stars: 22
forks: 9
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-12T15:54:40Z"
lastCommitAt: "2026-07-25T06:01:03Z"
lastReleaseAt: "2026-07-17T11:13:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 58
maintainers: ["monasprox", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2bbf331fee4e7ad28a1f342c4475ef31ff3e0b06cef75b1bc64438fbb682644/monas-team/zaloclaw"
---

# 🦞 zaloclaw

**Unofficial OpenClaw plugin — Zalo Personal Account Channel**

Connect your personal Zalo account to an AI agent with **153 actions**.

[Tham gia Zalo Group hỗ trợ](https://zalo.me/g/7m1vdtigpwvfpbee4rjz) · [Xem đầy đủ 153 actions](https://github.com/monas-team/zaloclaw/blob/HEAD/docs/actions.md) · [Hướng dẫn cài đặt](https://github.com/monas-team/zaloclaw/blob/HEAD/docs/guide.md)

</div>

---

> **⚠️ Disclaimer:** Dự án này **không có liên kết với Zalo / VNG Corporation**. Zalo không cung cấp API cho tài khoản cá nhân và không cho phép tự động hóa ([ToS](https://zalo.vn/dieukhoan)). Plugin dùng thư viện reverse-engineered [`zca-js`](https://zca-js.tdung.com/) — **có thể vi phạm ToS, dẫn đến khóa tài khoản. Dùng có trách nhiệm.**

---

## Yêu cầu

- OpenClaw ≥ 2026.5.7
- Node.js ≥ 22
- Tài khoản Zalo cá nhân (không phải OA)

---

## Cài đặt

### ClawHub _(khuyến nghị)_

```bash
openclaw plugins install clawhub:zaloclaw
openclaw gateway restart
openclaw channels login --channel zaloclaw
```

### npm

```bash
openclaw plugins install zaloclaw
openclaw gateway restart
openclaw channels login --channel zaloclaw
```

### Clone thủ công

```bash
git clone…
