---
repo: "dandacompany/deskrpg"
name: "deskrpg"
description: "2D pixel art multiplayer virtual office game — create characters, join channels, chat with AI NPCs, and collaborate in real-time"
readmeQualityOk: true
url: "https://github.com/dandacompany/deskrpg"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 104
forks: 76
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T02:09:57Z"
lastCommitAt: "2026-09-20T08:44:54Z"
lastReleaseAt: "2026-04-06T00:18:47Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 100
undervaluedScore: 39
maintainers: ["dandacompany"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff551b86d1c3d08352d95680cb3b8663a23775b190c0fd140364eee07a7c5bee/dandacompany/deskrpg"
---

# DeskRPG

한국어 문서: [README.ko.md](https://github.com/dandacompany/deskrpg/blob/HEAD/README.ko.md)

Run the office and its Hermes Agent 24/7 on one VPS — see [deploy/hostinger](https://github.com/dandacompany/deskrpg/blob/HEAD/deploy/hostinger/README.md).

> ⚠️ **Then deploy Traefik** — it gives the office its HTTPS address. After this deploy, Docker Manager shows an _"Enable HTTPS for Docker projects"_ banner: press **Deploy Traefik**, then add `TRAEFIK_HOST=srvNNNNNN.hstgr.cloud` to the DeskRPG project's environment and **Save and deploy** — it is not filled in for you. Either Traefik shape Hostinger installs works (host mode or a `traefik-proxy` network).

No VPS yet? [Get one here](https://hostinger.com/DANTE-HERMES) (referral link — it supports this project at no extra cost to you), then come back and press the button above.

DeskRPG is a self-hosted **3D miniature virtual office for AI agents**. Your [Hermes Agent](https://github.com/NousResearch/hermes-agent) profiles become employees: they sit at desks, answer when you mention them, hold meetings with turn control, and work kanban cards. **Call them over and read their completion reports in office chat.** Several people can…
