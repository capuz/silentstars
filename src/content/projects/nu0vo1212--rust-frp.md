---
repo: "Nu0vo1212/Rust-Frp"
name: "Rust-Frp"
description: "Rust-based Frp client/server, compatible with the original Go version of Frp"
originalDescription: "Rust端的Frp客户端/服务端 兼容Go版本的原版Frp"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Nu0vo1212/Rust-Frp"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-14T14:32:23Z"
lastCommitAt: "2026-10-29T12:25:18Z"
lastReleaseAt: "2026-10-04T14:48:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["Nu0vo1212"]
openGraphImageUrl: "https://opengraph.githubassets.com/d009f30b14b85d1c2096641cbefde8566e448b6d2f73bcfa7fa25fd53a471e96/Nu0vo1212/Rust-Frp"
---

---

NFrp is a Rust reimplementation of [fatedier/frp](https://github.com/fatedier/frp), **fully compatible with the official wire protocol v1 and v2**, and can interoperate directly with the official `frps` / `frpc` (tested against v0.71.0). Configurations issued by third-party frp platforms also work directly.

By default it uses **v1**, matching the default of official frp, so official clients / servers **do not need any configuration changes** to connect.

Resource usage is very small: the server's resident memory is about 3.5 MB (under the same load, the Go version frps uses 28.8~31.8 MB), single-file deployment, no runtime dependencies.

> **Full documentation**: <https://nu0vo1212.github.io/Rust-Frp/>
> Covers installation, all configuration options, the eight proxy types, detailed wire protocol (v1 / v2), ACL / RBAC, audit logs, HTTP API, and security fix history.
> Source files are in [`docs/`](https://github.com/Nu0vo1212/Rust-Frp/blob/HEAD/docs/); local preview: `python -m http.server -d docs 8899`

## Installation

### Option 1: crates.io (recommended for Rust users)

All three crates are published, and you can also depend directly on the protocol library **without…
