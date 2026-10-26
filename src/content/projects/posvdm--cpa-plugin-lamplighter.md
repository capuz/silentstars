---
repo: "PosvdM/cpa-plugin-lamplighter"
name: "cpa-plugin-lamplighter"
description: "Lamplighter · CLIProxyAPI plugin: quota monitoring, Bark and generic webhook alerts, and 5-hour window ignition for ChatGPT, Claude and Antigravity"
originalDescription: "点灯人 · CLIProxyAPI 插件：监控 ChatGPT、Claude 和 Antigravity 的额度，通过 Bark 或通用 webhook 推送提醒，并在 5 小时窗口重置后自动点火 / CLIProxyAPI plugin: quota monitoring, Bark and generic webhook alerts, and 5-hour window ignition for ChatGPT, Claude and Antigravity"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/PosvdM/cpa-plugin-lamplighter"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [71, 22]
stars: 13
forks: 3
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-03T18:03:02Z"
lastCommitAt: "2026-10-25T08:35:12Z"
lastReleaseAt: "2026-10-04T14:02:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 53
maintainers: ["PosvdM"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8559244af8479a85796ed6132c0c12b7191948437f9f973a42fc7b410a3b467/PosvdM/cpa-plugin-lamplighter"
---

# Lamplighter

[English](https://github.com/PosvdM/cpa-plugin-lamplighter/blob/HEAD/README_EN.md)

> The name comes from the lamplighter in *The Little Prince*: his planet rotates once every minute, so he lights and extinguishes his lamp once every minute and never misses a beat. This plugin also lights on schedule: as soon as each 5-hour quota window resets, it lights the next window.

Lamplighter is a native plugin for [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) (CPA). It monitors quotas for ChatGPT (Codex), Claude, Antigravity, Kimi and Grok accounts, sends alerts via [Bark](https://github.com/Finb/Bark) or a generic webhook, and after a 5-hour quota window resets, sends a very small request so the next window starts counting immediately.

## Features

- **Quota monitoring**: periodically queries quotas actively, while also reading the upstream quota information that CPA receives when handling real requests.
- **Notifications**: pushes via Bark or webhook (Feishu, ntfy, DingTalk, Telegram, etc.). Alerts fire when remaining quota drops to 50%, 20%, 10%, and when it is exhausted, and when the account plan changes (e.g., membership expires). Optional recovery…
