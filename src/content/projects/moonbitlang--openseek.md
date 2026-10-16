---
repo: "moonbitlang/openseek"
name: "openseek"
description: "DeepSeek-backed MoonBit coding agent."
readmeQualityOk: true
url: "https://github.com/moonbitlang/openseek"
homepage: "https://openseek-api.moonbitlang.cn/"
language: "MoonBit"
languages: ["MoonBit"]
languagePcts: [89]
stars: 100
forks: 17
openIssues: 39
closedIssues: 51
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2026-05-19T07:04:13Z"
lastCommitAt: "2026-10-16T08:27:28Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 31
maintainers: ["tonyfettes", "bzy-debug", "kokic"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fddaccdaa7d57ff3a3b17e5dd609b1e638f4d579340e487b281e03806580a3e/moonbitlang/openseek"
---

# moonbitlang/openseek

OpenSeek is a small MoonBit foundation for an OpenAI-compatible coding agent
supporting DeepSeek, Kimi, and Z.AI GLM models. The module is split into pure
data, HTTP transport, agent orchestration, and a CLI entry point so request
encoding can be tested without network access.

For a picture of how the pieces fit together — module architecture, the core
data model, and the life of one agent turn — see
[`docs/architecture.md`](https://github.com/moonbitlang/openseek/blob/HEAD/docs/architecture.md).

## Running without a checkout

Native archives for Linux x64/arm64, macOS arm64 and Windows x64 are
published independently by the **CLI release** workflow to OSS and S3.
Downloads use `https://cli.moonbitlang.com/openseek/cli/releases/v<version>/`;
the version comes from the root `moon.mod`. After publishing version 0.6.2, its files are
[Linux x64](https://cli.moonbitlang.com/openseek/cli/releases/v0.6.2/openseek-linux-x64.tar.gz),
[Linux arm64](https://cli.moonbitlang.com/openseek/cli/releases/v0.6.2/openseek-linux-arm64.tar.gz),
[macOS arm64](https://cli.moonbitlang.com/openseek/cli/releases/v0.6.2/openseek-macos-arm64.tar.gz),
[Windows…
