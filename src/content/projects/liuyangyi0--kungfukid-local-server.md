---
repo: "liuyangyi0/kungfukid-local-server"
name: "kungfukid-local-server"
description: "Experimental Python/SQLite loopback server and Windows client compatibility source. No game binaries, assets, databases or credentials."
originalDescription: "Experimental Python/SQLite loopback server and Windows client compatibility source. No game binaries, assets, databases or credentials."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/liuyangyi0/kungfukid-local-server"
language: "Python"
languages: ["Python"]
languagePcts: [87]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-17T05:11:51Z"
lastCommitAt: "2026-09-23T08:47:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 48
maintainers: ["liuyangyi0"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb405a031b64fa1270ca22c8e5c214936f80fd8946953c9796ce1b6ec75b0db4/liuyangyi0/kungfukid-local-server"
---

# KungFuKid Local Server

Self-built Python/SQLite local compatibility service and Windows client adapter source code.

New `--mode public` feature enables invitation-code-based registration for non-ranked public testing: targets 100 accounts, 8 players per room, with server-side authentication, encryption, permissions, and resource limits; no VM, specific DLL, PID, or client firewall dependencies. The default example still listens on loopback; this release has no production-grade security authentication or deployment configuration.
See [Service Specification](https://github.com/liuyangyi0/kungfukid-local-server/blob/HEAD/docs/SERVICE.md) for third-party standard integration, and [server/deploy](https://github.com/liuyangyi0/kungfukid-local-server/blob/HEAD/server/deploy/README.md) for operations templates. Complex battle sub-protocols and permanent battle rewards are disabled by default and cannot guarantee complete anti-cheat or full original client compatibility.

This is an experimental project in development, **not a complete game distribution package or a fully protocol-recovered legacy server**. It does not include the original client, game assets, account databases,…
