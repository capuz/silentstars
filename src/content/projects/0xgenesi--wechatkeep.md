---
repo: "0xGenesi/wechatkeep"
name: "wechatkeep"
description: "macOS WeChat 4.x dual-architecture anti-revoke toolchain — dual-arch anti-revoke with behavioral verification"
originalDescription: "macOS 微信 4.x 双架构防撤回工具链 — dual-arch anti-revoke with behavioral verification"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/0xGenesi/wechatkeep"
language: "Swift"
languages: ["Swift", "Python"]
languagePcts: [57, 27]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-15T14:03:14Z"
lastCommitAt: "2026-11-17T14:35:41Z"
lastReleaseAt: "2026-10-03T09:20:50Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["0xGenesi", "actions-user", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1df5c135cf6befa3bebd9c7c535b9caf5f21b2a14a71b190ce3a9fe75a419b9/0xGenesi/wechatkeep"
---

# WeChatKeep (wxkeep)

macOS WeChat 3.x/4.x anti-revoke toolchain, **Apple Silicon + Intel dual-architecture**, covering 128 builds (the full 4.x line plus 16 builds from the 3.x main-program era).

> Revoked messages stay in the chat · byte-level safe patching · every on-disk write is reversible, auditable, and verifiable

## Feature overview

| Feature | Command | Description |
|---|---|---|
| **Anti-revoke** | `sudo wxkeep patch` | Revoked messages stay in the chat (silent); private chats also keep the revoke notice (keeptip). The x64 group-chat notice is a known limitation |
| **Behavioral verification** | `wxkeep verify` | Extracts the patched function from the process and calls it directly to mechanically prove the patch works — no manual revoke testing needed |
| **Update protection** | Bundled with patch | Binary-level blocking (8 points in XAppUpdateManager) plus a three-switch fallback at the preference layer |
| **Privacy hardening** | `wxkeep privacy-guard` | Minimizes telemetry, diagnostics, and analytics reporting |
| **Multi-instance** | `wxkeep clone create` | A second or Nth WeChat instance with an independent data directory, independent of build number |
|…
