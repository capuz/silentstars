---
repo: "pigeonbox/pigeonbox"
name: "pigeonbox"
description: "FilesCodeBox (File Courier Cabinet) — an open-source, self-hosted platform (Go + Vue3) for anonymous, passcode-based sharing of text and files. Ecosystem assembly repository: make setup pulls in all modules in one step. Self-hosted anonymous passcode file sharing."
originalDescription: "FilesCodeBox 文件快递柜 — 匿名口令分享文本与文件的开源自托管平台(Go + Vue3)。生态装配仓:make setup 一键拉齐全部模块。Self-hosted anonymous passcode file sharing."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/pigeonbox/pigeonbox"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [55, 26]
topics: ["filecodebox", "fileshare", "anonymous", "docker", "file-sharing", "file-transfer", "golang", "monorepo", "self-hosted", "vue3"]
stars: 11
forks: 4
openIssues: 4
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-08-30T04:21:49Z"
lastCommitAt: "2026-10-21T23:35:27Z"
lastReleaseAt: "2026-10-07T07:23:23Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 76
maintainers: ["zy84338719"]
openGraphImageUrl: "https://opengraph.githubassets.com/cffb66a90a1a0291fa0d4ba7e449b8f8c3cc5a1061946cb6027591f193080e33/pigeonbox/pigeonbox"
---

# PigeonBox (umbrella) · File Courier Cabinet

The **assembly repository** for PigeonBox · File Courier Cabinet, a high-performance anonymous file and text sharing platform: this repo contains no business code. It only pulls the module repositories together into a complete workspace that can be developed, built, and deployed.

> 🗂️ [Organization homepage](https://github.com/orgs/pigeonbox) has the ecosystem overview and quick-start guides for each form factor (Docker / Kubernetes / desktop / NAS).
> The full single-repo version from before the split is preserved on the [legacy branch](https://github.com/pigeonbox/PigeonBox/tree/legacy) (full history).
> English overview: [README.en-US.md](https://github.com/pigeonbox/pigeonbox/blob/HEAD/README.en-US.md)

## Module repositories

| Repository | Role | Version |
|------|------|------|
| [contracts](https://github.com/pigeonbox/contracts) | Contract layer: error codes + Thrift-generated types + IDL source of truth (pure types, zero business dependencies) | v0.14.0 |
| [core](https://github.com/pigeonbox/core) | Business core library: 18 domain services (including the config system configuration center and the p2px device…
