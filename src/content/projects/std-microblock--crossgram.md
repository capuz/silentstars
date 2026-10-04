---
repo: "std-microblock/crossgram"
name: "crossgram"
description: "Chat on any platform using Telegram clients | Bring any chat platform to Telegram clients."
originalDescription: "使用 Telegram 客户端在任何平台上聊天 | Bring any chat platform to Telegram clients."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/std-microblock/crossgram"
homepage: "https://crossgram.microblock.cc/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["mtproto", "qq", "telegram"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2026-07-16T07:09:17Z"
lastCommitAt: "2026-10-04T10:02:04Z"
lastReleaseAt: "2026-07-16T07:09:32Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 47
maintainers: ["std-microblock", "undefined-moe", "XxLittleCxX"]
openGraphImageUrl: "https://opengraph.githubassets.com/8184e287e27057e116963ac6a9c074bc1aacc76da43f9838c4bbb3b2f5c4d164/std-microblock/crossgram"
---

CrossGram is a Telegram server-side implementation based on [cordis](https://github.com/cordiverse/cordis) and [mtcute](https://github.com/mtcute/mtcute). It bridges Telegram to other platforms, allowing you to get a far superior chat experience on Telegram clients compared to native clients.

---

## Support Status

### Platform Implementations

| Platform | Package Name | Status |
|---|---|---|
| **QQ (QQNT)** | `@mtproto-relay/platform-qqnt` | ✅ |
| **Discord (userbot)** | `@mtproto-relay/platform-discord` | ✅ |
| **Satori adaptor** | `@mtproto-relay/platform-satori` | ⚠️ Generic Core Features |
| **Matrix** | `@mtproto-relay/platform-matrix` | ✅ (Unencrypted Rooms) |
| **Reference Implementation (static)** | `@mtproto-relay/platform-static` | ✅ |
| **Satori exporter** | `@mtproto-relay/satori-exporter` | ✅ Standalone Plugin |
| WeChat / Others | — | 🚧 |

> [!CAUTION]
> The Discord adapter automates regular user accounts (userbot/selfbot), which violates Discord Terms of Service and may result in account restrictions or bans. It is recommended to only use dedicated accounts you can afford to lose.

> ✅ Supported · ⚠️ Partially Supported · ❌ Not Supported · 🗓️ Planned

|…
