---
repo: "islibaodong/dsh-login"
name: "dsh-login"
description: "Multi-user login gateway plugin for the DeepSeek Harness Web GUI: login wall, per-user conversation isolation, in-GUI user management"
readmeQualityOk: true
url: "https://github.com/islibaodong/dsh-login"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["authentication", "cordis-plugin", "deepseek-harness", "dsh", "login", "single-sign-on", "typescript", "dsh-plugin"]
stars: 15
forks: 6
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-17T08:08:53Z"
lastCommitAt: "2026-10-21T08:48:37Z"
lastReleaseAt: "2026-10-06T08:56:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 55
maintainers: ["islibaodong", "Kaslie"]
openGraphImageUrl: "https://opengraph.githubassets.com/6dbdf5e187644efe2e8a2c6aec8887e019a4eb467c41f42ede2954e155cc3bc8/islibaodong/dsh-login"
---

# dsh-login

English | [简体中文](https://github.com/islibaodong/dsh-login/blob/HEAD/README.zh.md)

Adds a **login page, user accounts, and per-user conversation isolation** to the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web GUI: every visit requires sign-in, ordinary users cannot see each other's conversations, and an admin manages all accounts from inside the GUI.

| Login page | User management (设置 → 用户管理) |
|:---:|:---:|
|  |  |

> **Released: `@islibaodong/dsh-login@0.3.6` (git tag `v0.3.6`; published on npm — `latest` = 0.3.6).** Verified against DSH **0.2.1-rc.2** (2026-10-21; full suite 21 files / 267 tests green on the published rc.2 builds). **New in 0.3.6 — issue #4: the ordinary-user method allow-list had drifted off the wire surface.** 0.3.5's `USER_ALLOWED` was written against a pre-0.2 spelling set, so on DSH 0.2.1-rc.2 every entry was a dead name and ordinary users were denied `session.modelCatalog` (model dialog), `directoryPicker.*` (add workspace) and `llm.listProviders`/`llm.discoverModels` (settings→models provider catalog) with `not permitted for this user`. 0.3.6 re-derives the allow-list from the real 146-method registry…
