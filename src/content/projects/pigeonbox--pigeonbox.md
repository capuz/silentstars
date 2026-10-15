---
repo: "pigeonbox/pigeonbox"
name: "pigeonbox"
description: "FilesCodeBox File Parcel Locker: an open-source, self-hosted platform for anonymously sharing text and files via passcode (Go + Vue3). Ecosystem assembly repo: make setup pulls in all modules in one step. Self-hosted anonymous passcode file sharing."
originalDescription: "FilesCodeBox 文件快递柜 — 匿名口令分享文本与文件的开源自托管平台(Go + Vue3)。生态装配仓:make setup 一键拉齐全部模块。Self-hosted anonymous passcode file sharing."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/pigeonbox/pigeonbox"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [58, 30]
topics: ["filecodebox", "fileshare", "anonymous", "docker", "file-sharing", "file-transfer", "golang", "monorepo", "self-hosted", "vue3"]
stars: 11
forks: 4
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-08-30T04:21:49Z"
lastCommitAt: "2026-10-15T08:32:56Z"
lastReleaseAt: "2026-10-07T07:23:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 76
maintainers: ["zy84338719"]
openGraphImageUrl: "https://opengraph.githubassets.com/1da8cf6e8686f926d15b96622d934660e56c0b141314fdd14fa8bc9dc826d358/pigeonbox/pigeonbox"
---

# PigeonBox(umbrella) · File Parcel Locker

The **assembly repository** for the high-performance anonymous file/text sharing platform (**PigeonBox · File Parcel Locker**). This repo contains no business code. It only pulls the module repositories together into one complete workspace that can be developed, built, and deployed.

> 🗂️ The [organization homepage](https://github.com/orgs/pigeonbox) has an ecosystem overview and quick-start guides for each form factor (Docker / Kubernetes / desktop / NAS).
> The full single-repository version from before the split is kept on the [legacy branch](https://github.com/pigeonbox/PigeonBox/tree/legacy) (full history).
> English overview: [README.en-US.md](https://github.com/pigeonbox/pigeonbox/blob/HEAD/README.en-US.md)

## Module repositories

| Repository | Role | Version |
|------|------|------|
| [contracts](https://github.com/pigeonbox/contracts) | Contract layer: error codes + Thrift-generated types + IDL source of truth (pure types, zero business dependencies) | v0.14.0 |
| [core](https://github.com/pigeonbox/core) | Core business library: 18 domain services (including the config system configuration center and the p2px device…
