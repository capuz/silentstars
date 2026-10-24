---
repo: "MaplePrivacyLabs/Maple"
name: "Maple"
description: "Maple - Private AI Chat"
readmeQualityOk: true
url: "https://github.com/MaplePrivacyLabs/Maple"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [69, 20]
stars: 107
forks: 14
openIssues: 70
closedIssues: 178
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2025-01-27T17:51:44Z"
lastCommitAt: "2026-10-24T00:15:53Z"
lastReleaseAt: "2025-04-12T16:43:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 44
maintainers: ["AnthonyRonning", "doowta", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ed3df853a1a1ba7dd55022d96d254a4def4e959f1305e198b55c656996b996b/MaplePrivacyLabs/Maple"
---

# Maple

Maple is a monorepo for the Maple applications, Maple SDKs, local proxy,
OpenSecret backend, and updater service. The existing web, desktop, and mobile client lives under
[`apps/maple-research/`](https://github.com/MaplePrivacyLabs/Maple/blob/HEAD/apps/maple-research/README.md), including Research chat
and desktop Agent Mode. Its directory name does not change the shipped Maple
application identity.

## Components

| Path | Responsibility |
| --- | --- |
| [`apps/maple-research/`](https://github.com/MaplePrivacyLabs/Maple/blob/HEAD/apps/maple-research/README.md) | React/Vite frontend and Tauri desktop/mobile application, app documentation, and distribution configuration |
| [`apps/maple-auth/`](https://github.com/MaplePrivacyLabs/Maple/blob/HEAD/apps/maple-auth/README.md) | Independent hosted V2 native sign-in, with its own package, configuration, and Pages publisher |
| [`apps/maple-agent/`](https://github.com/MaplePrivacyLabs/Maple/blob/HEAD/apps/maple-agent/README.md) | GPUI desktop-v2 prototype, ACP agent, and CLI proxy; independent from the shipped Research app |
| [`sdk/`](https://github.com/MaplePrivacyLabs/Maple/blob/HEAD/sdk/README.md) | Independently published…
