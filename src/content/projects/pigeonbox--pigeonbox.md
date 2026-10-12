---
repo: "pigeonbox/pigeonbox"
name: "pigeonbox"
description: "FilesCodeBox 文件快递柜 (File Parcel Locker) — an open-source, self-hosted platform for anonymous passcode-based sharing of text and files (Go + Vue3). Assembly repo for the ecosystem: `make setup` pulls in all modules in one step. Self-hosted anonymous passcode file sharing."
originalDescription: "FilesCodeBox 文件快递柜 — 匿名口令分享文本与文件的开源自托管平台(Go + Vue3)。生态装配仓:make setup 一键拉齐全部模块。Self-hosted anonymous passcode file sharing."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/pigeonbox/pigeonbox"
language: "Shell"
languages: ["Shell"]
languagePcts: [82]
topics: ["filecodebox", "fileshare", "anonymous", "docker", "file-sharing", "file-transfer", "golang", "monorepo", "self-hosted", "vue3"]
stars: 11
forks: 4
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-08-30T04:21:49Z"
lastCommitAt: "2026-10-12T11:15:27Z"
lastReleaseAt: "2026-10-07T07:23:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 78
maintainers: ["zy84338719", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d55cd0c4c721648e104ec868f357f9ab0d8da9aaf4fc687237e7a9e02f88114f/pigeonbox/pigeonbox"
---

# PigeonBox (umbrella) · 文件快递柜 (File Parcel Locker)

The **assembly repository** for the high-performance anonymous file/text sharing platform (**PigeonBox · 文件快递柜**). This repo contains no business code. It only pulls the module repositories together into one complete workspace that can be developed, built, and deployed.

> 🗂️ The [organization homepage](https://github.com/orgs/pigeonbox) has an ecosystem overview and quick-start guides for each form factor (Docker / Kubernetes / desktop / NAS).
> The complete single-repo version from before the split is kept on the [legacy branch](https://github.com/pigeonbox/PigeonBox/tree/legacy) (full history).
> English overview: [README.en-US.md](https://github.com/pigeonbox/pigeonbox/blob/HEAD/README.en-US.md)

## Module Repositories

| Repository | Role | Version |
|------|------|------|
| [contracts](https://github.com/pigeonbox/contracts) | Contract layer: error codes + Thrift-generated types + IDL source of truth (pure types, zero business dependencies) | v0.10.1 |
| [core](https://github.com/pigeonbox/core) | Business core library: 17 domain services (including config, the system configuration center) + repo/storage +…
